import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-hotel-registration',
  templateUrl: './hotel-registration.component.html',
  styleUrls: ['./hotel-registration.component.scss'],
})
export class HotelRegistrationComponent {
  myForm3: FormGroup;
  myForm1: FormGroup;
  myForm2: FormGroup;
  myForm4: FormGroup;
  myForm5: FormGroup;
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
      NameofOwner: new FormControl(''),
      FatherofOwner: new FormControl(''),
      owner_address: new FormControl('', Validators.required),
      owner_telephonic_address: new FormControl(''),
      owner_telephonic_number: new FormControl(''),

      manager_address: new FormControl(''),
      manager_fathername: new FormControl(''),
      manager_name: new FormControl('', Validators.required),
      manager_telephonic_number: new FormControl(''),
    });

    this.myForm4 = new FormGroup({
      RatesChargedbeforethe1stJanuary1997: new FormControl(''),
      RatesChargedpresent: new FormControl(''),
      ManagerTotalnumber: new FormControl(''),
      ManagerProfessionallytrained: new FormControl(''),
      ManagerNotProfessionallytrained: new FormControl(''),
      ManagerApprentices: new FormControl(''),
      ManagerEnglishKnowledge: new FormControl(''),

      FrontOfficeStaffReceptionTotalnumber: new FormControl(''),
      FrontOfficeStaffReceptionProfessionallytrained: new FormControl(''),
      FrontOfficeStaffReceptionNotProfessionallytrained: new FormControl(''),
      FrontOfficeStaffReceptionApprentices: new FormControl(''),
      FrontOfficeStaffReceptionEnglishKnowledge: new FormControl(''),

      BillingdeskstaffTotalnumber: new FormControl(''),
      BillingdeskstaffProfessionallytrained: new FormControl(''),
      BillingdeskstaffNotProfessionallytrained: new FormControl(''),
      BillingdeskstaffApprentices: new FormControl(''),
      BillingdeskstaffEnglishKnowledge: new FormControl(''),

      CookTotalnumber: new FormControl(''),
      CooksProfessionallytrained: new FormControl(''),
      CooksNotProfessionallytrained: new FormControl(''),
      CooksApprentices: new FormControl(''),
      CooksEnglishKnowledge: new FormControl(''),

      othersTotalnumber: new FormControl(''),
      othersProfessionallytrained: new FormControl(''),
      othersNotProfessionallytrained: new FormControl(''),
      othersApprentices: new FormControl(''),
      othersEnglishKnowledge: new FormControl(''),

      BearersTotalnumber: new FormControl(''),
      BearersProfessionallytrained: new FormControl(''),
      BearersNotProfessionallytrained: new FormControl(''),
      BearersApprentices: new FormControl(''),
      BearersEnglishKnowledge: new FormControl(''),
    });
    this.myForm5 = new FormGroup({
      medicalCertificate: new FormControl(null, Validators.required),
      buildingPlan: new FormControl(null, Validators.required),
      roomRates: new FormControl(null, Validators.required),
      nicCopy: new FormControl(null, Validators.required),
      leaseAgreement: new FormControl(null, Validators.required),
      partnershipDocuments: new FormControl(null, Validators.required),
      companyDocuments: new FormControl(null, Validators.required),
    });
    this.myForm3 = new FormGroup({
      hotel_area: new FormControl('', Validators.required),
      hotel__covered_area: new FormControl('', Validators.required),
      hotel__area_ownership: new FormControl('', Validators.required),
      CostofHotelLand: new FormControl('', Validators.required),
      CostofHotelBuilding: new FormControl('', Validators.required),
      CostofHotelFurnitureandFixture: new FormControl('', Validators.required),
      CostofHotelEquipment: new FormControl('', Validators.required),
      AnnualLeaseormortgagemoneyifany: new FormControl('', Validators.required),
      WorkingCapitalofHotel: new FormControl('', Validators.required),
      TotalInsvestment: new FormControl('', Validators.required),
      NumberofFloorsinhotel: new FormControl('', Validators.required),
      Numberofroomsoneachfloorinhotel: new FormControl('', Validators.required),
      PublicRoomsDetails: new FormControl('', Validators.required),
      Abedroomsingledoublesuites: new FormControl('', Validators.required),

      Acommonrooms: new FormControl(''),
      Corridors: new FormControl(''),
      Bathroomattachedwithbedrooms: new FormControl(''),
      CommonBathroomandtoilets: new FormControl(''),
      Facilitiesavailableonthehotelpremises: new FormControl(''),
      Typesofcuisineserve: new FormControl(''),
      Classofmajorityofguests: new FormControl(''),
    });
    const currentYear = new Date().getFullYear();
    for (let i = currentYear; i >= currentYear - 100; i--) {
      this.years.push(i);
    }
    this.Nature_of_Ownership = ['Proprietorship', ' Firm Cooperative', 'Limited Company', 'If Other Please Specify'];
  }
  prevStep() {
    if (this.currentStep > 1) {
      this.currentStep--;
    }
  }
  onSubmit() {}

  markFormGroupTouched(formGroup: FormGroup) {
    Object.values(formGroup.controls).forEach((control) => {
      control.markAsTouched();

      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      }
    });
  }

  nextStep() {
    // Validate the current step's form before proceeding to the next step
    console.log('myForm1', this.myForm1);
    console.log('myForm2', this.myForm2);
    console.log('myForm3', this.myForm3);
    console.log('myForm4', this.myForm4);
    console.log('myForm5', this.myForm5);

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
    }
  }

  onFileChange(event: any, controlName: string) {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      if (this.myForm5.get(controlName)) {
        this.myForm5.get(controlName)?.setValue(URL.createObjectURL(file));
      }
    }
  }

  cancelUpload(controlName: string) {
    if (this.myForm5.get(controlName)) {
      this.myForm5.get(controlName)?.setValue(null);
    }
  }

  reupload(controlName: string) {
    const inputElement = document.getElementById(controlName);
    inputElement?.click();
  }
}
