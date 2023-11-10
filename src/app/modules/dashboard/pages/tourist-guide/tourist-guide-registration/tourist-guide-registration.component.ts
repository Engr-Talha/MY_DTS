import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-tourist-guide-registration',
  templateUrl: './tourist-guide-registration.component.html',
  styleUrls: ['./tourist-guide-registration.component.scss'],
})
export class TouristGuideRegistrationComponent {
  myForm!: FormGroup;

  years: number[] = [];
  isCheckedAccpet: boolean = false;
  isCheckeddetialsCorrect: boolean = false;

  step1Form!: FormGroup;
  step2Form!: FormGroup;
  currentStep = 1;

  constructor() {
    this.initTouristGuideForm();
    this.initStep1Form();
    this.initStep2Form();
  }

  ngOnInit() {}

  markFormGroupTouched(formGroup: FormGroup) {
    Object.values(formGroup.controls).forEach((control) => {
      control.markAsTouched();

      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      }
    });
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

    if (this.myForm.invalid) {
      // Handle form validation errors
      return;
    }

    // Handle form submission
    // const formValue = this.myForm.value;
    // Include images (userImage, cnicFrontImage, cnicBackImage) in your submission as needed
    console.log('Form submitted with values:', this.step1Form, this.step2Form);
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
  onImageChange(event: any) {
    const file = event.target.files[0]; // Get the selected file

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
}
