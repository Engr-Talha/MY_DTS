import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import {
  AbstractControl,
  FormControl,
  FormArray,
  FormGroup,
  Validators,
  ValidationErrors,
  ValidatorFn,
} from '@angular/forms';
import { TravelAgencyService } from 'src/app/core/services/travel-agency.service';
import { SharedService } from 'src/app/core/services/shared.service';
import { log } from 'console';
@Component({
  selector: 'app-travel-agency-register',
  templateUrl: './travel-agency-register.component.html',
  styleUrls: ['./travel-agency-register.component.scss'],
})
export class TravelAgencyRegisterComponent {
  myForm!: FormGroup;
  isLoading: boolean = false;
  years: number[] = [];
  isCheckedAccpet: boolean = false;
  isCheckeddetialsCorrect: boolean = false;

  step1Form!: FormGroup;
  step2Form!: FormGroup;
  currentStep = 1;

  employees!: FormArray; // Declare employees as FormArray
  cities: any;

  constructor(
    private router: Router,
    private TravelAgencyService: TravelAgencyService,
    private messageService: MessageService,
    private SharedService: SharedService,
  ) {
    this.initStep1Form();
    this.initStep2Form();
  }

  ngOnInit() {
    this.addAddress();
    this.addofficeDetails();
    this.addEmployee();
    this.SharedService.Get_all_Cities().subscribe(
      (res) => {
        this.cities = res;
        console.log('====================================');
        console.log(res);
        console.log('====================================');
      },
      (err: any) => {
        console.log(err);
      },
    );
  }

  markFormGroupTouched(formGroup: FormGroup) {
    Object.values(formGroup.controls).forEach((control) => {
      control.markAsTouched();

      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      }
    });
  }

  initStep1Form() {
    const requiredFieldsForAddresses = ['is_pakistan', 'address', 'city_id'];
    const requiredFieldsForOfficeDetails = [
      'branch_name',
      'office_area',
      'space' /* Add more required fields as needed */,
    ];
    const requiredFieldsForEmployeesDetails = [
      'employee_category_type_id',
      'employee_full_name' /* Add more required fields as needed */,
    ];

    this.step1Form = new FormGroup({
      person_name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      establishment_year: new FormControl('', Validators.required),
      addresses: new FormArray([]),
      office_details: new FormArray([]),
      employees_details: new FormArray([]),
      ownership_nature_type_id: new FormControl('', Validators.required),
      TelephoneNumberLines: new FormControl('', Validators.required),
      TelegraphicNumber: new FormControl('', Validators.required),
      TelephoneNumber: new FormControl('', Validators.required),
      capital_invested: new FormControl('', Validators.required),
      BankerName: new FormControl('', Validators.required),
      BankerImage: new FormControl(null, [Validators.required, this.imageValidator]),

      ntn_number: new FormControl('', Validators.required),
      total_offices: new FormControl('', Validators.required),
      nature_business: new FormControl('', Validators.required),
      asset_details: new FormControl('', Validators.required),
      shipping_details: new FormControl('', Validators.required),
      liabilities: new FormControl('', Validators.required),
      is_deal_with_foreign_agency: new FormControl(false, Validators.required),
      is_foreign_license: new FormControl(false, Validators.required),
      license_number: new FormControl('', Validators.required),
      license_date: new FormControl('', Validators.required),
      auditor_address: new FormControl('', Validators.required),
      auditor_name: new FormControl('', Validators.required),

      is_abide_rules: new FormControl(true, Validators.required),
      is_detail_correct: new FormControl(true, Validators.required),

      // //////////////////////////////////////////////////////////////////////////////////////
    });
  }

  createEmployee() {
    return new FormGroup({
      employee_category_type_id: new FormControl(''),
      is_top_management: new FormControl(true),
      employee_full_name: new FormControl(''),
      offense_details: new FormControl(''),
    });
  }
  get employeeArray(): FormArray {
    return this.step1Form.get('employees_details') as FormArray;
  }
  removeEmployee(index: number) {
    this.employeeArray.removeAt(index);
  }
  addEmployee(): void {
    this.employeeArray.push(this.createEmployee());
  }

  // Function to create a new address FormGroup for addresses
  createAddressFormGroup(): FormGroup {
    return new FormGroup({
      is_pakistan: new FormControl(false),
      address: new FormControl(''),
      city_id: new FormControl(''),
    });
  }
  get addressesArray(): FormArray {
    return this.step1Form.get('addresses') as FormArray;
  }
  // Function to add a new address to the addresses FormArray
  addAddress(): void {
    this.addressesArray.push(this.createAddressFormGroup());
  }
  // Function to remove an address from the addresses FormArray
  removeAddress(index: number): void {
    this.addressesArray.removeAt(index);
  }

  CreateOfficeFormGroup(): FormGroup {
    return new FormGroup({
      branch_name: new FormControl(''),
      office_area: new FormControl(''),
      space: new FormControl(''),
      no_counter: new FormControl(''),
      no_window: new FormControl(''),
      branch_details: new FormControl(''),
      branch_city_id: new FormControl(''),
      branch_address: new FormControl(''),
      foreign_agent_name: new FormControl(''),
      is_travel_agent: new FormControl(true),

      foreign_agent_cnic: new FormControl(''),
      foreign_agent_detail: new FormControl(''),
    });
  }

  get OfficeDetailsArray(): FormArray {
    return this.step1Form.get('office_details') as FormArray;
  }

  addofficeDetails(): void {
    this.OfficeDetailsArray.push(this.CreateOfficeFormGroup());
  }

  // Function to remove an address from the addresses FormArray
  removeofficedetails(index: number): void {
    this.OfficeDetailsArray.removeAt(index);
  }

  initStep2Form() {
    this.step2Form = new FormGroup({
      cnicFrontAttachment: new FormControl(null, [Validators.required, this.imageValidator]),
      cnicBackAttachment: new FormControl(null, [Validators.required, this.imageValidator]),
      metricAttachment: new FormControl(null, [Validators.required, this.imageValidator]),
      fscAttachment: new FormControl(null, [Validators.required, this.imageValidator]),
      experienceAttachment: new FormControl(null, [Validators.required, this.imageValidator]),
    });
  }

  nextStep() {
    // Validate the current step's form before proceeding to the next step
    if (this.currentStep === 1) {
      console.log('====================================');
      console.log(this.currentStep);
      console.log('====================================');
      if (this.step1Form.valid) {
        console.log('====================================');
        console.log('valiad');
        console.log('====================================');
        this.currentStep++;
      } else {
        this.markFormGroupTouched(this.step1Form);
        console.log('====================================');
        console.log('Not valiad', this.step1Form);
        console.log('====================================');
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
  accountID: any;
  onSubmit() {
    this.markFormGroupTouched(this.step2Form);

    if (this.step2Form.invalid) {
      // Handle form validation errors
      return;
    }
    let Usertype = localStorage.getItem('userDetails');
    this.accountID = JSON.parse(Usertype ? Usertype : '{}').id;

    // this.step1Form;
    const formData = new FormData();
    // formData.append('user_id', this.accountID);
    formData.append('person_name', this.step1Form?.value['person_name']);
    formData.append('email', this.step1Form?.value['email']);
    formData.append('establishment_year', this.step1Form?.value['establishment_year']);
    this.addressesArray.controls.forEach((control, index) => {
      const addressGroup = control as FormGroup; // Cast control to FormGroup
      formData.append(`address[${index}]`, addressGroup.value['address']);
      formData.append(`is_pakistan[${index}]`, addressGroup.value['is_pakistan'] ? '1' : '0');
      formData.append(`city_id[${index}]`, addressGroup.value['city_id']);
    });

    this.OfficeDetailsArray.controls.forEach((control, index) => {
      const officeGroup = control as FormGroup; // Cast control to FormGroup
      formData.append(`branch_name[${index}]`, officeGroup.value['branch_name']);
      formData.append(`office_area[${index}]`, officeGroup.value['office_area']);
      formData.append(`space[${index}]`, officeGroup.value['space']);

      formData.append(`no_counter[${index}]`, officeGroup.value['no_counter']);
      formData.append(`no_window[${index}]`, officeGroup.value['no_window']);
      formData.append(`branch_details[${index}]`, officeGroup.value['branch_details']);
      formData.append(`branch_city_id[${index}]`, officeGroup.value['branch_city_id']);
      formData.append(`branch_address[${index}]`, officeGroup.value['branch_address']);
      formData.append(`foreign_agent_name[${index}]`, officeGroup.value['foreign_agent_name']);
      formData.append(`foreign_agent_detail[${index}]`, officeGroup.value['foreign_agent_detail']);
    });

    this.employeeArray.controls.forEach((control, index) => {
      const officeGroup = control as FormGroup; // Cast control to FormGroup
      formData.append(`employee_category_type_id[${index}]`, officeGroup.value['employee_category_type_id']);
      formData.append(`is_top_management[${index}]`, officeGroup.value['is_top_management'] ? '1' : '0');
      formData.append(`employee_full_name[${index}]`, officeGroup.value['employee_full_name']);
      formData.append(`offense_details[${index}]`, officeGroup.value['offense_details']);
    });

    formData.append('ownership_nature_type_id', this.step1Form?.value['ownership_nature_type_id']);
    formData.append('telegraphic_number', this.step1Form?.value['TelegraphicNumber']);
    formData.append('telephone_number_lines', this.step1Form?.value['TelephoneNumberLines']);
    formData.append('telephone_number', this.step1Form?.value['TelephoneNumber']);
    formData.append('paidup_capital', this.step1Form?.value['CapitalInvested']);
    formData.append('banker_name', this.step1Form?.value['BankerName']);
    formData.append('banker_image', this.bankerImage);
    formData.append('ntn_number', this.step1Form?.value['ntn_number']);

    formData.append('nature_business', this.step1Form?.value['nature_business']);
    formData.append('asset_details', this.step1Form?.value['asset_details']);
    formData.append('shipping_details', this.step1Form?.value['shipping_details']);
    formData.append('liabilities', this.step1Form?.value['liabilities']);
    formData.append('is_deal_with_foreign_agency', this.step1Form?.value['is_deal_with_foreign_agency'] ? '1' : '0');
    formData.append('is_foreign_license', this.step1Form?.value['is_foreign_license'] ? '1' : '0');
    formData.append('license_number', this.step1Form?.value['license_number']);
    formData.append('license_date', this.step1Form?.value['license_date']);

    formData.append('auditors_name', this.step1Form?.value['auditor_name']);
    formData.append('auditors_address', this.step1Form?.value['auditor_address']);
    formData.append('total_offices', this.step1Form?.value['total_offices']);
    formData.append('is_detail_correct', this.step1Form?.value['is_detail_correct'] ? '1' : '0');
    formData.append('is_abide_rules', this.step1Form?.value['is_abide_rules'] ? '1' : '0');

    // ////////////////////////////////////////////////////

    formData.append('metric_attachment', this.metricAttachment);
    formData.append('fsc_attachment', this.fscAttachment);
    formData.append('experience_attachment', this.ExperienceImage);
    formData.append('cnic_front_attachment', this.cnicFrontAttachment);
    formData.append('cnic_back_attachment', this.cnicBackAttachment);

    console.log(formData);

    this.isLoading = true;
    this.TravelAgencyService.registerTouristguide(formData).subscribe(
      (res: any) => {
        this.isLoading = false;
        this.showSuccess('Congratulations!', 'You Application has been submitted, you will be updated shortly.');
        this.router.navigate(['/my-registrations']);
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

    if (imageType == 'banker_image') this.bankerImage = event.target.files[0];
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
      const bankerImageControl = this.step1Form.get('banker_image');
      if (bankerImageControl) {
        bankerImageControl.setValue(file);
      }
    } else {
      this.imageDataUrl = null; // Clear the image preview if no file is selected
    }
  }

  showError(summary: any, errormessage: any) {
    this.messageService.add({ severity: 'error', summary: summary, detail: errormessage });
  }
  showSuccess(summary: any, success: any) {
    this.messageService.add({ severity: 'success', summary: summary, detail: success });
  }
  ownershipTypes = [
    { id: 1, name: 'Proprietary' },
    { id: 2, name: 'Partnership' },
    { id: 3, name: 'Private Company' },
    { id: 4, name: 'Public Company' },
    { id: 5, name: 'Limited of unlimited' },
  ];

  employee_category_types = [
    { id: 1, name: 'Manager' },
    { id: 2, name: 'Front Office Staff' },
    { id: 3, name: 'Desk Staff' },
    { id: 4, name: 'Steward' },
    { id: 5, name: 'House Keeping Staff' },
    { id: 6, name: 'Cook' },
    { id: 7, name: 'Restaurant Bearers' },
    { id: 8, name: 'Other' },
  ];
}
interface ApiResponse {
  message: string;
  data: { id: number; name: string }[]; // Assuming the data is an array of objects with 'id' and 'name' properties
}
