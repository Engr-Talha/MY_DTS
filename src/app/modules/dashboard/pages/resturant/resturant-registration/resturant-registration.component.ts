import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-resturant-registration',
  templateUrl: './resturant-registration.component.html',
  styleUrls: ['./resturant-registration.component.scss'],
})
export class ResturantRegistrationComponent {
  myForm1: FormGroup;
  myForm2: FormGroup;
  myForm3: FormGroup;
  myForm4: FormGroup;
  myForm5: FormGroup;
  myForm6: FormGroup;
  userImage: any;
  cnicFrontImage: any;
  cnicBackImage: any;
  years: number[] = [];
  currentStep = 1;
  Nature_of_Ownership: string[] = [];
  cnicFrontImagePreview: string | null = null;
  constructor() {
    this.myForm1 = new FormGroup({
      name: new FormControl('', Validators.required),
      year: new FormControl('', Validators.required),
      dateofcommisionbefore1997: new FormControl(''),

      telegraphicAddress: new FormControl('', Validators.required),
      telexNumber: new FormControl('', Validators.required),
      telephoneNumber: new FormControl(''),
      // location: new FormControl('', Validators.required),
      province: new FormControl('', Validators.required),
      town: new FormControl('', Validators.required),
      street: new FormControl('', Validators.required),
    });
    this.myForm2 = new FormGroup({
      natue_of_ownership: new FormControl('', Validators.required),
      anyother_natue_of_ownership: new FormControl(''),
      NameofOwner: new FormControl('', Validators.required),
      FatherofOwner: new FormControl('', Validators.required),
      owner_address: new FormControl('', Validators.required),
      owner_telephonic_address: new FormControl(''),
      owner_telephonic_number: new FormControl(''),

      manager_address: new FormControl(''),
      // manager_fathername: new FormControl(''),
      manager_name: new FormControl('', Validators.required),
      manager_telephonic_number: new FormControl(''),
    });
    this.myForm3 = new FormGroup({
      totalAreaofResturant: new FormControl('', Validators.required),
      Areaofthekitchen: new FormControl('', Validators.required),
      Areaofthepantry: new FormControl('', Validators.required),
      AreaandSeatingCapacityofthedinninghall: new FormControl('', Validators.required),
      Costoffurnitureandfixture: new FormControl('', Validators.required),
      Costofequipment: new FormControl('', Validators.required),
      Annualrent: new FormControl('', Validators.required),
      Workingcapital: new FormControl('', Validators.required),
      Totalinvestment: new FormControl('', Validators.required),
      Furnitureandfixture: new FormControl('', Validators.required),
    });
    this.myForm4 = new FormGroup({
      ReceptionBillcounter: new FormControl('', Validators.required),
      TelephoneNumberofHotel: new FormControl('', Validators.required),
      coolingheating: new FormControl('', Validators.required),
      Cloakroom: new FormControl('', Validators.required),
      Toilet: new FormControl('', Validators.required),
      Carpark: new FormControl('', Validators.required),
      Entertainments: new FormControl('', Validators.required),
      Typesofcusisineoffered: new FormControl('', Validators.required),
      classOfguests: new FormControl('', Validators.required),
    });
    this.myForm5 = new FormGroup({
      ManagerTotalnumber: new FormControl('', Validators.required),
      ManagerProfessionallytrained: new FormControl('', Validators.required),
      ManagerNotProfessionallytrained: new FormControl('', Validators.required),
      ManagerApprentices: new FormControl('', Validators.required),
      ManagerEnglishKnowledge: new FormControl('', Validators.required),

      FrontOfficeStaffReceptionTotalnumber: new FormControl('', Validators.required),
      FrontOfficeStaffReceptionProfessionallytrained: new FormControl('', Validators.required),
      FrontOfficeStaffReceptionNotProfessionallytrained: new FormControl('', Validators.required),
      FrontOfficeStaffReceptionApprentices: new FormControl('', Validators.required),
      FrontOfficeStaffReceptionEnglishKnowledge: new FormControl('', Validators.required),

      BillingdeskstaffTotalnumber: new FormControl('', Validators.required),
      BillingdeskstaffProfessionallytrained: new FormControl('', Validators.required),
      BillingdeskstaffNotProfessionallytrained: new FormControl('', Validators.required),
      BillingdeskstaffApprentices: new FormControl('', Validators.required),
      BillingdeskstaffEnglishKnowledge: new FormControl('', Validators.required),

      CookTotalnumber: new FormControl('', Validators.required),
      CooksProfessionallytrained: new FormControl('', Validators.required),
      CooksNotProfessionallytrained: new FormControl('', Validators.required),
      CooksApprentices: new FormControl('', Validators.required),
      CooksEnglishKnowledge: new FormControl('', Validators.required),

      othersTotalnumber: new FormControl('', Validators.required),
      othersProfessionallytrained: new FormControl('', Validators.required),
      othersNotProfessionallytrained: new FormControl('', Validators.required),
      othersApprentices: new FormControl('', Validators.required),
      othersEnglishKnowledge: new FormControl('', Validators.required),

      BearersTotalnumber: new FormControl('', Validators.required),
      BearersProfessionallytrained: new FormControl('', Validators.required),
      BearersNotProfessionallytrained: new FormControl('', Validators.required),
      BearersApprentices: new FormControl('', Validators.required),
      BearersEnglishKnowledge: new FormControl('', Validators.required),

      RatesChargedbeforethe1stJanuary1997: new FormControl('', Validators.required),
      RatesChargedpresent: new FormControl('', Validators.required),
    });
    this.myForm6 = new FormGroup({
      medicalCertificate: new FormControl(null, Validators.required),
      buildingPlan: new FormControl(null, Validators.required),
      roomRates: new FormControl(null, Validators.required),
      nicCopy: new FormControl(null, Validators.required),
      leaseAgreement: new FormControl(null, Validators.required),
      partnershipDocuments: new FormControl(null, Validators.required),
      companyDocuments: new FormControl(null, Validators.required),
    });
    const currentYear = new Date().getFullYear();
    for (let i = currentYear; i >= currentYear - 100; i--) {
      this.years.push(i);
    }
    this.Nature_of_Ownership = ['Proprietorship', ' Firm Cooperative', 'Limited Company', 'If Other Please Specify'];
  }

  nextStep() {
    // Validate the current step's form before proceeding to the next step
    console.log('myForm1', this.myForm1);
    console.log('myForm2', this.myForm2);
    console.log('myForm3', this.myForm3);
    console.log('myForm4', this.myForm4);
    console.log('myForm5', this.myForm5);
    console.log('myForm6', this.myForm6);
    if (this.currentStep === 1) {
      if (this.myForm1.valid) {
        this.currentStep++;
      } else {
        this.markFormGroupTouched(this.myForm1);
      }
    } else if (this.currentStep === 2) {
      if (this.myForm2.valid) {
        this.currentStep++;
      } else {
        this.markFormGroupTouched(this.myForm2);
      }
    } else if (this.currentStep === 3) {
      if (this.myForm3.valid) {
        this.currentStep++;
      } else {
        this.markFormGroupTouched(this.myForm2);
      }
    } else if (this.currentStep === 4) {
      if (this.myForm4.valid) {
        this.currentStep++;
      } else {
        this.markFormGroupTouched(this.myForm2);
      }
    } else if (this.currentStep === 5) {
      if (this.myForm5.valid) {
        this.currentStep++;
      } else {
        this.markFormGroupTouched(this.myForm2);
      }
    } else if (this.currentStep === 6) {
      if (this.myForm6.valid) {
        this.currentStep++;
      } else {
        this.markFormGroupTouched(this.myForm2);
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
    this.markFormGroupTouched(this.myForm4);

    // if (this.myForm.invalid) {
    //   // Handle form validation errors
    //   return;
    // }

    // Handle form submission
    // const formValue = this.myForm.value;
    // Include images (userImage, cnicFrontImage, cnicBackImage) in your submission as needed
    // console.log('Form submitted with values:', this.step1Form, this.step2Form);
  }

  onFileChange(event: any, controlName: string) {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      if (this.myForm6.get(controlName)) {
        this.myForm6.get(controlName)?.setValue(URL.createObjectURL(file));
      }
    }
  }

  cancelUpload(controlName: string) {
    if (this.myForm6.get(controlName)) {
      this.myForm6.get(controlName)?.setValue(null);
    }
  }
  reupload(controlName: string) {
    const inputElement = document.getElementById(controlName);
    inputElement?.click();
  }

  // Method to patch the form with predefined values
  patchForm() {
    this.myForm1.patchValue({
      name: 'John Doe',
      telegraphicAddress: 'Sample Telegraphic Address',
      telexNumber: '12345',
      telephoneNumber: '555-555-5555',
      location: 'Sample Location',
      province: 'Sample Province',
      town: 'Sample Town',
      street: 'Sample Street',
      ownership: 'Sample Ownership',
      owner: 'Sample Owner',
    });

    // If you have predefined images, you can set them here as well
  }
  markFormGroupTouched(formGroup: FormGroup) {
    Object.values(formGroup.controls).forEach((control) => {
      control.markAsTouched();

      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      }
    });
  }
}
