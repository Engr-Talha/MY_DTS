import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormArray, FormGroup, Validators } from '@angular/forms';
import { TouristGuideService } from 'src/app/core/services/tourist-guide.service';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { UserApplicationService } from 'src/app/core/services/user-application.service';
@Component({
  selector: 'app-editapplication',
  templateUrl: './editapplication.component.html',
  styleUrls: ['./editapplication.component.scss'],
})
export class EditapplicationComponent {
  myForm!: FormGroup;
  isLoading: boolean = false;
  years: number[] = [];
  isCheckedAccpet: boolean = false;
  isCheckeddetialsCorrect: boolean = false;

  step1Form!: FormGroup;
  step2Form!: FormGroup;
  currentStep = 1;

  employees!: FormArray; // Declare employees as FormArray
  applicationID: any;
  constructor(
    private router: Router,
    private TouristGuideService: TouristGuideService,
    private messageService: MessageService,
    private ActivatedRoute: ActivatedRoute,
    private UserApplicationService: UserApplicationService,
  ) {
    this.initTouristGuideForm();
    this.initStep1Form();
    this.initStep2Form();
  }
  userID: any;
  ngOnInit() {
    let Usertype = localStorage.getItem('userDetails');
    this.userID = JSON.parse(Usertype ? Usertype : '{}').id;
    this.ActivatedRoute.params.subscribe((params: any) => {
      this.applicationID = params.id;
      if (this.applicationID > 0) {
        this.getApplicationbyID(this.applicationID);
        // Call the function here or wherever appropriate
      } else {
        this.applicationID = -1;
      }
    });
  }
  mydata: any;
  patchFormData() {
    // Assuming your data is stored in a variable named 'formData'
    const formData = this.mydata;

    // Patching the form with the provided data
    this.step1Form.patchValue({
      name: formData.name,
      BusinessAddress: formData.business_address,
      ResidentialAddress: formData.residential_address,
      TelephoneNumberLines: formData.telephone_number_lines,
      TelegraphicNumber: formData.telegraphic_number,
      TelephoneNumber: formData.telephone_number,
      EducationalQualifications: formData.educational_qualifications,
      ExpAsTouristGuide: formData.exp_as_tourist_guide,
      ForiegnLanguage: formData.foreign_language,
      Trainings: formData.trainings,
    });

    this.step2Form.patchValue({
      BankerName: formData.banker_name,
      AuditorsAddress: formData.auditors_address,
      AuditorsName: formData.auditors_name,
      NumberofStaff: formData.number_of_staff,
      CapitalInvested: formData.capital_invested,
      OtherActivitiesunderTaken: formData.other_activities_undertaken,
      PartnerDetails: formData.partner_details,
      // PartnerDetails: formData.partner_details,

      isCheckeddetialsCorrect: true, // Set default value if not available in the data
      isCheckedAccpet: true, // Set default value if not available in the data
      // Patching attachments, assuming attachment paths are available in the data
    });

    this.cnicFrontAttachmentPath = formData.cnic_front_attachment;
    this.cnicBackAttachmentPath = formData.cnic_front_attachment;
    this.metricAttachmentPath = formData.cnic_front_attachment;
    this.fscAttachmentPath = formData.cnic_front_attachment;
    this.experienceAttachmentPath = formData.cnic_front_attachment;
    this.BankerImagePath = formData.BankerImage;
  }

  BankerImagePath: string;
  cnicFrontAttachmentPath: string;
  metricAttachmentPath: string;
  cnicBackAttachmentPath: string;
  fscAttachmentPath: string;
  experienceAttachmentPath: string;

  onImageChange1(event: any, imageType: any) {
    const file = event.target.files?.[0];
    if (file) {
      // Handle updating the form control value and display preview if needed
      switch (imageType) {
        case 'cnicFrontAttachment':
          this.step2Form.get('cnicFrontAttachment')?.setValue(file);
          this.displayPreview(file, 'cnicFrontAttachment');
          break;
        case 'cnicBackAttachment':
          this.step2Form.get('cnicBackAttachment')?.setValue(file);
          this.displayPreview(file, 'cnicBackAttachment');
          break;
        case 'BankerImage':
          this.step2Form.get('BankerImage')?.setValue(file);
          this.displayPreview(file, 'BankerImage');
          break;
        case 'metricAttachment':
          this.step2Form.get('metricAttachment')?.setValue(file);
          this.displayPreview(file, 'metricAttachment');
          break;
        case 'fscAttachment':
          this.step2Form.get('fscAttachment')?.setValue(file);
          this.displayPreview(file, 'fscAttachment');

          break;
        case 'experienceAttachment':
          this.displayPreview(file, 'experienceAttachment');
          this.step2Form.get('experienceAttachment')?.setValue(file);
          break;
      }
    }
  }
  displayPreview(file: File, controlName: string) {
    const reader = new FileReader();
    reader.onload = () => {
      switch (controlName) {
        case 'cnicFrontAttachment':
          this.cnicFrontAttachmentPath = reader.result as string;
          break;
        case 'BankerImage':
          this.BankerImagePath = reader.result as string;
          break;
        case 'cnicBackAttachment':
          this.cnicBackAttachmentPath = reader.result as string;
          break;
        case 'metricAttachment':
          this.metricAttachmentPath = reader.result as string;
          break;
        case 'fscAttachment':
          this.fscAttachmentPath = reader.result as string;
          break;
        case 'experienceAttachment':
          this.experienceAttachmentPath = reader.result as string;
          this.ExperienceImage = file;
          break;
      }
    };
    reader.readAsDataURL(file);
  }

  getApplicationbyID(id: any) {
    this.UserApplicationService.getUserApplicationsByID(id).subscribe(
      (res: any) => {
        this.mydata = res.data;

        console.log('====================================');
        console.log(res);
        console.log('====================================');
        this.patchFormData();
      },
      (err: any) => {
        console.log('====================================');
        console.log(err);
        console.log('====================================');
      },
    );
  }

  convertImageUrl(apiImageUrl: string): string {
    // Replace backslashes with forward slashes and escape special characters
    const convertedUrl = apiImageUrl.replace(/\\/g, '/').replace(/\t/g, '');

    // Check if the link starts with 'localhost' and prepend 'http://' if needed
    if (convertedUrl.startsWith('localhost')) {
      return `http://${convertedUrl}`;
    }

    // If the link doesn't start with 'localhost', return the original link
    return apiImageUrl;
  }
  markFormGroupTouched(formGroup: FormGroup) {
    Object.values(formGroup.controls).forEach((control) => {
      control.markAsTouched();

      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      }
    });
  }
  removeImage(imageType: string) {
    switch (imageType) {
      case 'cnicFrontAttachment':
        this.cnicFrontAttachmentPath = '';
        this.step2Form.get('cnicFrontAttachment')?.setValue(null);
        break;
      case 'cnicBackAttachment':
        this.cnicBackAttachmentPath = '';
        this.step2Form.get('cnicBackAttachment')?.setValue(null);
        break;
      case 'metricAttachment':
        this.metricAttachmentPath = '';
        this.step2Form.get('metricAttachment')?.setValue(null);
        break;
      case 'fscAttachment':
        this.fscAttachmentPath = '';
        this.step2Form.get('fscAttachment')?.setValue(null);
        break;
      case 'experienceAttachment':
        this.experienceAttachmentPath = '';
        this.step2Form.get('experienceAttachment')?.setValue(null);
        break;
      case 'BankerImage':
        this.BankerImagePath = '';
        this.step2Form.get('BankerImage')?.setValue(null);
        break;
      // ... Handle other image removals similarly
    }
  }
  initStep1Form() {
    this.step1Form = new FormGroup({
      name: new FormControl('', Validators.required),
      BusinessAddress: new FormControl(''),
      ResidentialAddress: new FormControl('', Validators.required),
      // yearofEstablishment: new FormControl('', Validators.required),
      TelephoneNumberLines: new FormControl('', Validators.required),
      TelegraphicNumber: new FormControl(''),
      TelephoneNumber: new FormControl('', Validators.required),
      EducationalQualifications: new FormControl('', Validators.required),
      ExpAsTouristGuide: new FormControl('', Validators.required),
      ForiegnLanguage: new FormControl('', Validators.required),
      Trainings: new FormControl(''),
    });
  }

  initStep2Form() {
    this.step2Form = new FormGroup({
      BankerName: new FormControl('', Validators.required),
      BankerImage: new FormControl(null, [Validators.required, this.imageValidator]),

      cnicFrontAttachment: new FormControl(null, [Validators.required, this.imageValidator]),
      cnicBackAttachment: new FormControl(null, [Validators.required, this.imageValidator]),
      metricAttachment: new FormControl(null, [Validators.required, this.imageValidator]),
      fscAttachment: new FormControl(null, [Validators.required, this.imageValidator]),
      experienceAttachment: new FormControl(null, [Validators.required, this.imageValidator]),

      AuditorsAddress: new FormControl(''),
      AuditorsName: new FormControl(''),
      NumberofStaff: new FormControl(''),
      employees: new FormArray([]),
      CapitalInvested: new FormControl('', Validators.required),
      OtherActivitiesunderTaken: new FormControl(''),
      PartnerDetails: new FormControl(''),
      isCheckeddetialsCorrect: new FormControl(false, Validators.requiredTrue),
      isCheckedAccpet: new FormControl(false, Validators.requiredTrue),
    });
    this.employees = this.step2Form.get('employees') as FormArray;
  }

  addEmployee() {
    const employeeGroup = new FormGroup({
      name: new FormControl('', Validators.required),
      employmentStatus: new FormControl('', Validators.required),
      qualification: new FormControl('', Validators.required),
      experience: new FormControl('', Validators.required),
    });

    this.employees.push(employeeGroup);
  }

  removeEmployee(index: number) {
    this.employees.removeAt(index);
  }

  nextStep() {
    // Validate the current step's form before proceeding to the next step
    if (this.currentStep === 1) {
      if (this.step1Form.valid) {
        this.currentStep++;
      } else {
        this.markFormGroupTouched(this.step1Form);
      }
    } else if (this.currentStep === 2) {
      if (this.step2Form.valid) {
        this.currentStep++;
      } else {
        this.markFormGroupTouched(this.step2Form);
      }
    }
  }

  prevStep() {
    if (this.currentStep > 1) {
      this.currentStep--;
    }
  }

  onSubmit() {
    console.log('====================================');
    console.log('submit');
    console.log('====================================');
    this.markFormGroupTouched(this.step2Form);

    // if (this.step2Form.invalid) {
    //   // Handle form validation errors
    //   return;
    // }

    // this.step1Form;
    const formData = new FormData();
    formData.append('name', this.step1Form?.value['name']);
    formData.append('bussiness_address', this.step1Form?.value['BusinessAddress']);
    formData.append('residential_address', this.step1Form?.value['ResidentialAddress']);
    formData.append('telegraphic_number', this.step1Form?.value['TelegraphicNumber']);
    formData.append('telephone_number_lines', this.step1Form?.value['TelephoneNumberLines']);
    formData.append('telephone_number', this.step1Form?.value['TelephoneNumber']);
    formData.append('educational_qualifications', this.step1Form?.value['EducationalQualifications']);
    formData.append('exp_as_tourist_guide', this.step1Form?.value['ExpAsTouristGuide']);
    formData.append('foreign_language', this.step1Form?.value['ForiegnLanguage']);
    formData.append('trainings', this.step1Form?.value['Trainings']);
    formData.append('banker_name', this.step2Form?.value['BankerName']);
    formData.append('banker_image', this.bankerImage);
    formData.append('staff_details', JSON.stringify(this.step2Form?.value['employees']));

    formData.append('auditors_name', this.step2Form?.value['AuditorsName']);
    formData.append('auditors_address', this.step2Form?.value['AuditorsAddress']);
    formData.append('number_of_staff', this.step2Form?.value['NumberofStaff']);
    formData.append('capital_invested', this.step2Form?.value['CapitalInvested']);
    formData.append('other_activities_undertaken', this.step2Form?.value['OtherActivitiesunderTaken']);
    formData.append('partner_details', this.step2Form?.value['partner_details']);
    formData.append('is_checked_details_correct', 1 + '');
    formData.append('is_checked_accept', 1 + '');

    formData.append('metric_attachment', this.cnicFrontAttachmentPath);
    formData.append('fsc_attachment', this.fscAttachmentPath);
    formData.append('experience_attachment', this.ExperienceImage);
    formData.append('cnic_front_attachment', this.cnicBackAttachmentPath);
    formData.append('cnic_back_attachment', this.cnicBackAttachmentPath);

    console.log('====================================');
    console.log(formData);
    console.log('====================================');

    this.isLoading = true;
    this.TouristGuideService.UpdateTouristguide(this.applicationID, formData).subscribe(
      (res: any) => {
        this.isLoading = false;
        this.showSuccess('Congratulations!', 'You Application has been submitted, you will be updated shortly.');
        this.router.navigate(['/layout/dashboard']);
      },
      (err: any) => {
        this.isLoading = false;
        this.showError('Error', err);
        console.log('====================================');
        console.log(err);
        console.log('====================================');
      },
    );
  }

  initTouristGuideForm() {
    this.myForm = new FormGroup({
      name: new FormControl('', Validators.required),
      BusinessAddress: new FormControl(''),
      ResidentialAddress: new FormControl('', Validators.required),
      yearofEstablishemnt: new FormControl(''),
      TelephoneNumberLines: new FormControl('', Validators.required),
      TelegraphicNumber: new FormControl('', Validators.required),
      TelephoneNumber: new FormControl('', Validators.required),
      EducationalQualifications: new FormControl('', Validators.required),
      ExpAsTouristGuide: new FormControl('', Validators.required),
      ForiegnLanguage: new FormControl('', Validators.required),
      Trainings: new FormControl(''),
      BankerName: new FormControl('', Validators.required),
      BankerImage: new FormControl(null, [Validators.required, this.imageValidator]),
      AuditorsAddress: new FormControl(''),
      AuditorsName: new FormControl(''),
      NumberofStaff: new FormControl(''),
      CapitalInvested: new FormControl('', Validators.required),
      OtherActivitiesunderTaken: new FormControl(''),
      PartnerDetails: new FormControl(''),
      isCheckeddetialsCorrect: new FormControl(false, Validators.requiredTrue),
      isCheckedAccpet: new FormControl(false, Validators.requiredTrue),
    });
  }

  imageValidator(control: AbstractControl) {
    const image = control.value;

    if (!image) {
      return { required: true, validImage: false };
    }

    if (image instanceof File) {
      const allowedExtensions = ['jpg', 'jpeg', 'png', 'gif']; // Add more extensions as needed
      const fileExtension = (image.name.split('.').pop() || '').toLowerCase(); // Use nullish coalescing operator

      if (allowedExtensions.indexOf(fileExtension) === -1) {
        return { validImage: false };
      }
    }

    return null;
  }

  imagePreview: string | null = null;
  imageDataUrl: string | null = null;

  bankerImage: any;
  metricAttachment: any;
  fscAttachment: any;
  ExperienceImage: any;

  cnicFrontAttachment: any;
  cnicBackAttachment: any;

  onImageChange(event: any, imageType: any) {
    const file = event.target.files[0]; // Get the selected file

    if (imageType == 'BankerImage') this.bankerImage = event.target.files[0];
    else if (imageType == 'metricAttachment') this.metricAttachment = event.target.files[0];
    else if (imageType == 'fscAttachment') this.fscAttachment = event.target.files[0];
    else if (imageType == 'ExperienceImage') this.ExperienceImage = event.target.files[0];
    else if (imageType == 'cnicFrontAttachment') this.cnicFrontAttachment = event.target.files[0];
    else if (imageType == 'cnicBackAttachment') this.cnicBackAttachment = event.target.files[0];

    if (file) {
      // Display the selected image as a preview
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.imageDataUrl = e.target.result;
      };
      reader.readAsDataURL(file);

      // Check if the form control exists before setting its value
      const bankerImageControl = this.myForm.get('BankerImage');
      if (bankerImageControl) {
        bankerImageControl.setValue(file);
      }
    } else {
      this.imageDataUrl = null; // Clear the image preview if no file is selected
    }
  }

  // //  patchValues() {
  //   // Example data to patch
  //   const employeesData = [
  //     {
  //       name: 'John Doe',
  //       employmentStatus: 'Full-time',
  //       qualification: "Bachelor's Degree",
  //       experience: '5 years'
  //     },
  //     {
  //       name: 'Jane Smith',
  //       employmentStatus: 'Part-time',
  //       qualification: "Master's Degree",
  //       experience: '8 years'
  //     }
  //     // Add more data if needed
  //   ];

  //   employeesData.forEach(employee => {
  //     const employeeGroup = new FormGroup({
  //       name: new FormControl(employee.name, Validators.required),
  //       employmentStatus: new FormControl(employee.employmentStatus, Validators.required),
  //       qualification: new FormControl(employee.qualification, Validators.required),
  //       experience: new FormControl(employee.experience, Validators.required)
  //     });

  //     this.employees.push(employeeGroup); // Use 'this.employees'
  //   });
  // }

  showError(summary: any, errormessage: any) {
    this.messageService.add({ severity: 'error', summary: summary, detail: errormessage });
  }
  showSuccess(summary: any, success: any) {
    this.messageService.add({ severity: 'success', summary: summary, detail: success });
  }
}
