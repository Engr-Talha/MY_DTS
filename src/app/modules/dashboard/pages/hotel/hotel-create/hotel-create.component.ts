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
import { SharedService } from 'src/app/core/services/shared.service';
import { HotelService } from 'src/app/core/services/hotel.service';
@Component({
  selector: 'app-hotel-create',
  templateUrl: './hotel-create.component.html',
  styleUrls: ['./hotel-create.component.scss'],
})
export class HotelCreateComponent {
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
  peakseasontypes: any;
  ownershipnaturetypes: any;
  employeecategories: any;
  ownertypes: any;

  constructor(
    private router: Router,
    private HotelService: HotelService,
    private messageService: MessageService,
    private SharedService: SharedService,
  ) {
    this.initStep1Form();
    this.initStep2Form();
  }

  ngOnInit() {
    // this.addAddress();
    this.add_new_Ownwer();
    this.addEmployee();
    this.addFloorDetailsArray();
    this.SharedService.Get_all_Cities().subscribe((res) => {
      this.cities = res;
    });
    this.SharedService.peakseasontypes().subscribe((res) => {
      this.peakseasontypes = res;
    });
    this.SharedService.ownershipnaturetypes().subscribe((res) => {
      this.ownershipnaturetypes = res;
    });
    this.SharedService.employeecategories().subscribe((res) => {
      this.employeecategories = res;
    });
    this.SharedService.ownertypes().subscribe((res) => {
      this.ownertypes = res;
    });
  }

  markFormGroupTouched(formGroup: FormGroup) {
    Object.values(formGroup.controls).forEach((control) => {
      control.markAsTouched();

      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      }
    });
  }

  createEmployee() {
    return new FormGroup({
      employee_category_type_id: new FormControl(''),
      total_employee: new FormControl(''),
      is_top_management: new FormControl(true),
      total_employee_professional: new FormControl(''),
      total_employee_nonprofessional: new FormControl(''),
      total_employee_apprentices: new FormControl(''),
      total_employee_english: new FormControl(''),
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

  // ///////////////////////

  createFloorDetails() {
    return new FormGroup({
      floor_number: new FormControl(''),
      single_wbath: new FormControl(''),
      single_wobath: new FormControl(true),
      double_wbath: new FormControl(''),
      double_wobath: new FormControl(''),
      suite_wbath: new FormControl(''),
      suite_wobath: new FormControl(''),
      other_wbath: new FormControl(''),
      other_wobath: new FormControl(''),
      total_rooms_wbath: new FormControl(''),
      total_rooms_wobath: new FormControl(''),
    });
  }
  get FloorDetailsArray(): FormArray {
    return this.step1Form.get('floors_details') as FormArray;
  }
  removeFloorDetailsArray(index: number) {
    this.FloorDetailsArray.removeAt(index);
  }
  addFloorDetailsArray(): void {
    this.FloorDetailsArray.push(this.createFloorDetails());
  }

  // Function to create a new address FormGroup for addresses

  CreateNewOwnerFormGroup(): FormGroup {
    return new FormGroup({
      owner_type_id: new FormControl('', Validators.required),
      owner_name: new FormControl('', Validators.required),
      percentage: new FormControl('', Validators.required),
      telephonic_address: new FormControl('', Validators.required),
      telephone: new FormControl('', Validators.required),
      full_address: new FormControl('', Validators.required),
    });
  }
  get ownersArray(): FormArray {
    return this.step1Form.get('Owner_details') as FormArray;
  }
  add_new_Ownwer(): void {
    this.ownersArray.push(this.CreateNewOwnerFormGroup());
  }
  remove_new_owner(index: number): void {
    this.ownersArray.removeAt(index);
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

  convertdate(inputDate: any) {
    const formattedDate = inputDate.toISOString().split('T')[0];
    return formattedDate;
  }

  initStep2Form() {
    this.step2Form = new FormGroup({
      medical_fitness_of_employee: new FormControl(null, [Validators.required, this.imageValidator]),
      building_plan: new FormControl(null, [Validators.required, this.imageValidator]),
      hotel_rate_details: new FormControl(null, [Validators.required, this.imageValidator]),
      cnic_of_all_employees: new FormControl(null, [Validators.required, this.imageValidator]),
      lease_agreement: new FormControl(null, [Validators.required, this.imageValidator]),
      partmentship_deed_certificate: new FormControl(null, [Validators.required, this.imageValidator]),

      articles_of_association: new FormControl(null, [Validators.required, this.imageValidator]),
      memorandum: new FormControl(null, [Validators.required, this.imageValidator]),
      incorporation_certificate: new FormControl(null, [Validators.required, this.imageValidator]),

      is_abide_rules: new FormControl(true, Validators.required),
      is_detail_correct: new FormControl(true, Validators.required),
    });
  }

  initStep1Form() {
    this.step1Form = new FormGroup({
      registration_certificate: new FormControl(null, [Validators.required, this.imageValidator]),

      person_name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      establishment_year: new FormControl('', Validators.required),
      commission_date: new FormControl('', Validators.required),

      town: new FormControl('', Validators.required),
      complete_address: new FormControl('', Validators.required),
      street: new FormControl('', Validators.required),

      telex_number: new FormControl('', Validators.required),
      telegraphic_address: new FormControl('', Validators.required),
      telephone_no: new FormControl('', Validators.required),
      ownershipnaturetypes: new FormControl('', Validators.required),
      city_id: new FormControl('', Validators.required),

      area: new FormControl('', [Validators.required, this.numberValidator]),
      covered_area: new FormControl('', [Validators.required, this.numberValidator]),
      annual_lease: new FormControl('', [Validators.required, this.numberValidator]),
      land_cost: new FormControl('', [Validators.required, this.numberValidator]),
      bulding_cost: new FormControl('', [Validators.required, this.numberValidator]),
      furniture_cost: new FormControl('', [Validators.required, this.numberValidator]),
      equipment_cost: new FormControl('', [Validators.required, this.numberValidator]),
      working_capital: new FormControl('', [Validators.required, this.numberValidator]),
      total_investment: new FormControl('', [Validators.required, this.numberValidator]),
      furtinure_bed_room: new FormControl('', [Validators.required]),
      furniture_common_room: new FormControl('', [Validators.required]),
      furniture_corridor_galleried: new FormControl(false),
      furniture_bathroom: new FormControl(false),
      furniture_common_bathroon: new FormControl(false),
      is_foreigner_guest: new FormControl(false),
      is_restaurant_attached: new FormControl(false),
      cuisine_type: new FormControl('', [Validators.required]),
      classification_desired: new FormControl('', [Validators.required]),
      before_january_rate: new FormControl('', [Validators.required, this.numberValidator]),
      present_rate: new FormControl('', [Validators.required, this.numberValidator]),
      present_date: new FormControl('', [Validators.required]),
      province_id: new FormControl('', [Validators.required]),
      peakseasontypes: new FormControl('', [Validators.required]),
      ownership_nature_type_id: new FormControl('', Validators.required),

      employees_details: new FormArray([]),

      Owner_details: new FormArray([]),

      no_of_floors: new FormControl('', [Validators.required, this.numberValidator]),
      total_hotel_rooms: new FormControl('', [Validators.required, this.numberValidator]),
      visitor_room: new FormControl('', [Validators.required]),
      reception_hall: new FormControl('', [Validators.required]),
      cloak_room: new FormControl(false, [Validators.required]),
      reading_room: new FormControl(false, [Validators.required]),
      restaurant: new FormControl(false, [Validators.required]),
      common_baths: new FormControl(false, [Validators.required]),
      common_toilets: new FormControl(false, [Validators.required]),
      number_of_stairs: new FormControl('', [Validators.required]),
      number_of_lifts: new FormControl('', [Validators.required]),
      car_park_capacity: new FormControl('', [Validators.required, this.numberValidator]),
      garden_area: new FormControl(false),
      construction_date: new FormControl('', [Validators.required]),
      renovation_date: new FormControl('', [Validators.required]),
      is_tel_room: new FormControl(false),

      is_tel_floor: new FormControl(false),
      is_tel_lobby: new FormControl(false),
      is_bank_counter: new FormControl(false),
      is_reception: new FormControl(false),
      is_postal_counter: new FormControl(false),
      is_hotwater: new FormControl(false),
      is_coldwater: new FormControl(false),
      is_heating: new FormControl(false),
      is_coffeeshop: new FormControl(false),
      is_restaurant: new FormControl(false),
      is_coldstorage: new FormControl(false),
      is_locker: new FormControl(false),
      is_entertainment: new FormControl(false),

      floors_details: new FormArray([]),

      // //////////////////////////////////////////////////////////////////////////////////////
    });
  }

  onSubmit() {
    this.markFormGroupTouched(this.step1Form);

    this.markFormGroupTouched(this.step2Form);

    console.log('this.step2form', this.step2Form);
    console.log('this.step2form', this.step1Form);
    if (this.step2Form.invalid || this.step1Form.invalid) {
      return;
    }
    let Usertype = localStorage.getItem('userDetails');
    this.accountID = JSON.parse(Usertype ? Usertype : '{}').id;

    const formData = new FormData();
    formData.append('application_entity_type_id', '1');
    formData.append('name', this.step1Form?.value['person_name']);
    formData.append('email', this.step1Form?.value['email']);
    formData.append('establishment_year', this.convertdate(this.step1Form?.value['establishment_year']));
    formData.append('commission_date', this.convertdate(this.step1Form?.value['commission_date']));
    formData.append('town', this.step1Form?.value['town']);
    formData.append('street', this.step1Form?.value['street']);
    formData.append('complete_address', this.step1Form?.value['complete_address']);
    formData.append('telegraphic_address', this.step1Form?.value['telegraphic_address']);
    formData.append('telex_number', this.step1Form?.value['telex_number']);
    formData.append('telephone_no', this.step1Form?.value['telephone_no']);

    formData.append('area', this.step1Form?.value['area']);
    formData.append('covered_area', this.step1Form?.value['covered_area']);
    formData.append('annual_lease', this.step1Form?.value['annual_lease']);
    formData.append('land_cost', this.step1Form?.value['land_cost']);
    formData.append('furniture_cost', this.step1Form?.value['furniture_cost']);
    formData.append('equipment_cost', this.step1Form?.value['equipment_cost']);
    formData.append('working_capital', this.step1Form?.value['working_capital']);
    formData.append('ownershipnaturetypes', this.step1Form?.value['ownershipnaturetypes']);
    formData.append('bulding_cost', this.step1Form?.value['bulding_cost']);
    formData.append('city_id', this.step1Form?.value['city_id']);

    formData.append('total_investment', this.step1Form?.value['total_investment']);
    formData.append('furtinure_bed_room', this.step1Form?.value['furtinure_bed_room']);
    formData.append('furniture_common_room', this.step1Form?.value['furniture_common_room']);
    formData.append('furniture_corridor_galleried', this.step1Form?.value['furniture_corridor_galleried'] ? '1' : '0');
    formData.append('furniture_bathroom', this.step1Form?.value['furniture_bathroom'] ? '1' : '0');
    formData.append('furniture_common_bathroon', this.step1Form?.value['furniture_common_bathroon'] ? '1' : '0');
    formData.append('is_foreigner_guest', this.step1Form?.value['is_foreigner_guest'] ? '1' : '0');
    formData.append('is_restaurant_attached', this.step1Form?.value['is_restaurant_attached'] ? '1' : '0');

    formData.append('cuisine_type', this.step1Form?.value['cuisine_type']);
    formData.append('classification_desired', this.step1Form?.value['classification_desired']);
    formData.append('before_january_rate', this.step1Form?.value['before_january_rate']);
    formData.append('present_rate', this.step1Form?.value['present_rate']);
    formData.append('present_date', this.convertdate(this.step1Form?.value['present_date']));
    formData.append('province_id', this.step1Form?.value['province_id']);
    formData.append('peak_season_type_id', this.step1Form?.value['peakseasontypes']);
    formData.append('ownership_nature_type_id', this.step1Form?.value['ownership_nature_type_id']);

    formData.append('no_of_floors', this.step1Form?.value['no_of_floors']);
    formData.append('total_hotel_rooms', this.step1Form?.value['total_hotel_rooms']);
    formData.append('visitor_room', this.step1Form?.value['visitor_room']);
    formData.append('reception_hall', this.step1Form?.value['reception_hall']);
    formData.append('reading_room', this.step1Form?.value['reading_room']);
    formData.append('restaurant', this.step1Form?.value['restaurant']);
    // formData.append('common_baths', this.step1Form?.value['common_baths'] ? '1' : '0');
    formData.append('common_toilets', this.step1Form?.value['common_toilets'] ? '1' : '0');

    formData.append('number_of_stairs', this.step1Form?.value['number_of_stairs']);
    formData.append('number_of_lifts', this.step1Form?.value['number_of_lifts']);
    formData.append('car_park_capacity', this.step1Form?.value['car_park_capacity']);
    formData.append('garden_area', this.step1Form?.value['garden_area'] ? '1' : '0');
    formData.append('construction_date', this.convertdate(this.step1Form?.value['construction_date']));
    formData.append('renovation_date', this.convertdate(this.step1Form?.value['renovation_date']));
    formData.append('common_baths', this.step1Form?.value['common_baths']);

    formData.append('is_tel_room', this.step1Form?.value['is_tel_room'] ? '1' : '0');
    formData.append('is_tel_lobby', this.step1Form?.value['is_tel_lobby'] ? '1' : '0');
    formData.append('is_tel_floor', this.step1Form?.value['is_tel_floor'] ? '1' : '0');
    formData.append('is_bank_counter', this.step1Form?.value['is_bank_counter'] ? '1' : '0');
    formData.append('is_postal_counter', this.step1Form?.value['is_postal_counter'] ? '1' : '0');
    formData.append('is_hotwater', this.step1Form?.value['is_hotwater'] ? '1' : '0');
    formData.append('is_coldwater', this.step1Form?.value['is_coldwater'] ? '1' : '0');
    formData.append('is_coffeeshop', this.step1Form?.value['is_coffeeshop'] ? '1' : '0');
    formData.append('is_restaurant', this.step1Form?.value['is_restaurant'] ? '1' : '0');
    formData.append('is_coldstorage', this.step1Form?.value['is_coldstorage'] ? '1' : '0');
    formData.append('is_locker', this.step1Form?.value['is_locker'] ? '1' : '0');
    formData.append('is_entertainment', this.step1Form?.value['is_entertainment'] ? '1' : '0');
    formData.append('is_detail_correct', this.step1Form?.value['is_detail_correct'] ? '1' : '0');
    formData.append('is_abide_rules', this.step1Form?.value['is_abide_rules'] ? '1' : '0');

    this.employeeArray.controls.forEach((control, index) => {
      const officeGroup = control as FormGroup; // Cast control to FormGroup
      formData.append(`employee_category_type_id[${index}]`, officeGroup.value['employee_category_type_id']);
      formData.append(`is_top_management[${index}]`, officeGroup.value['is_top_management'] ? '1' : '0');
      formData.append(`total_employee[${index}]`, officeGroup.value['total_employee']);
      formData.append(`total_employee_professional[${index}]`, officeGroup.value['total_employee_professional']);
      formData.append(
        `total_employee_nonprofessional[${index}]`,
        officeGroup.value['total_employee_nonprofessional'] ? '1' : '0',
      );
      formData.append(`total_employee_apprentices[${index}]`, officeGroup.value['total_employee_apprentices']);
      formData.append(`total_employee_english[${index}]`, officeGroup.value['total_employee_english']);
    });

    this.FloorDetailsArray.controls.forEach((control, index) => {
      const officeGroup = control as FormGroup; // Cast control to FormGroup
      formData.append(`floor_number[${index}]`, officeGroup.value['floor_number']);
      formData.append(`single_wbath[${index}]`, officeGroup.value['single_wbath']);
      formData.append(`single_wobath[${index}]`, officeGroup.value['single_wobath']);
      formData.append(`double_wbath[${index}]`, officeGroup.value['double_wbath']);
      formData.append(`double_wobath[${index}]`, officeGroup.value['double_wobath']);
      formData.append(`suite_wbath[${index}]`, officeGroup.value['suite_wbath']);
      formData.append(`suite_wobath[${index}]`, officeGroup.value['suite_wobath']);
      formData.append(`other_wbath[${index}]`, officeGroup.value['other_wbath']);
      formData.append(`other_wobath[${index}]`, officeGroup.value['other_wobath']);
      formData.append(`total_rooms_wbath[${index}]`, officeGroup.value['total_rooms_wbath']);
      formData.append(`total_rooms_wobath[${index}]`, officeGroup.value['total_rooms_wobath']);
    });

    //  owner_type_id: new FormControl('', Validators.required),
    // owner_name: new FormControl('', Validators.required),
    // percentage: new FormControl('', Validators.required),
    // telephonic_address: new FormControl('', Validators.required),
    // telephone: new FormControl('', Validators.required),
    // full_address: new FormControl('', Validators.required),

    this.ownersArray.controls.forEach((control, index) => {
      const officeGroup = control as FormGroup; // Cast control to FormGroup
      formData.append(`owner_type_id[${index}]`, officeGroup.value['owner_type_id']);
      formData.append(`owner_name[${index}]`, officeGroup.value['owner_name']);
      formData.append(`percentage[${index}]`, officeGroup.value['percentage']);
      formData.append(`telephonic_address[${index}]`, officeGroup.value['telephonic_address']);
      formData.append(`telephone[${index}]`, officeGroup.value['telephonic_address']);
      formData.append(`full_address[${index}]`, officeGroup.value['full_address']);
    });

    formData.append('medical_fitness_of_employee', this.medical_fitness_of_employee);
    formData.append('hotel_rate_details', this.hotel_rate_details);
    formData.append('building_plan', this.building_plan);
    formData.append('cnic_of_all_employees', this.cnic_of_all_employees);
    formData.append('registration_certificate', this.registration_certificate);
    formData.append('partmentship_deed_certificate', this.partmentship_deed_certificate);
    formData.append('lease_agreement', this.lease_agreement);
    formData.append('incorporation_certificate', this.incorporation_certificate);

    formData.append('memorandum', this.memorandum);
    formData.append('articles_of_association', this.articles_of_association);

    // /////////////////////////////////////////////////////////////////////////////////////////////////////

    ////////////////////////////////////////////////////

    console.log(formData);

    this.isLoading = true;
    this.HotelService.registerHotel(formData).subscribe(
      (res: any) => {
        this.isLoading = false;
        this.showSuccess('Congratulations!', 'You Application has been submitted, you will be updated shortly.');
        this.router.navigate(['/layout/my-registrations']);
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
  numberValidator(control: AbstractControl) {
    const input = control.value;
    if (isNaN(parseFloat(input)) || !isFinite(input)) {
      return { required: true, validNumber: false }; // Fix the typo here
    }
    return null;
  }

  imageValidator(control: AbstractControl) {
    const image = control.value;

    if (!image) {
      return { required: true, validImage: false };
    }

    if (image instanceof File) {
      const allowedExtensions = ['jpg', 'jpeg', 'png', 'pdf'];
      const fileExtension = (image.name.split('.').pop() || '').toLowerCase();

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

  registration_certificate: any;
  building_plan: any;
  cv: any;
  hotel_rate_details: any;
  medical_fitness_of_employee: any;
  statement_of_foreign_exchange: any;
  travel_agent_agreement: any;
  cnic_of_all_employees: any;
  articles_of_association: any;
  national_tax_registration: any;
  lease_agreement: any;
  partmentship_deed_certificate: any;
  memorandum: any;
  staff_list: any;
  incorporation_certificate: any;
  counters_sketch: any;

  onImageChange(event: any, imageType: any) {
    const file = event.target.files[0];

    if (imageType == 'banker_image') this.bankerImage = event.target.files[0];
    else if (imageType == 'metricAttachment') this.metricAttachment = event.target.files[0];
    else if (imageType == 'fscAttachment') this.fscAttachment = event.target.files[0];
    else if (imageType == 'ExperienceImage') this.ExperienceImage = event.target.files[0];
    else if (imageType == 'cnicFrontAttachment') this.cnicFrontAttachment = event.target.files[0];
    else if (imageType == 'cnicBackAttachment') this.cnicBackAttachment = event.target.files[0];
    else if (imageType == 'registration_certificate') this.registration_certificate = event.target.files[0];
    else if (imageType == 'building_plan') this.building_plan = event.target.files[0];
    else if (imageType == 'cv') this.cv = event.target.files[0];
    else if (imageType == 'hotel_rate_details') this.hotel_rate_details = event.target.files[0];
    else if (imageType == 'medical_fitness_of_employee') this.medical_fitness_of_employee = event.target.files[0];
    else if (imageType == 'statement_of_foreign_exchange') this.statement_of_foreign_exchange = event.target.files[0];
    else if (imageType == 'travel_agent_agreement') this.travel_agent_agreement = event.target.files[0];
    else if (imageType == 'articles_of_association') this.articles_of_association = event.target.files[0];
    else if (imageType == 'lease_agreement') this.lease_agreement = event.target.files[0];
    else if (imageType == 'partmentship_deed_certificate') this.partmentship_deed_certificate = event.target.files[0];
    else if (imageType == 'memorandum') this.memorandum = event.target.files[0];
    else if (imageType == 'cnic_of_all_employees') this.cnic_of_all_employees = event.target.files[0];
    else if (imageType == 'staff_list') this.staff_list = event.target.files[0];
    else if (imageType == 'incorporation_certificate') this.incorporation_certificate = event.target.files[0];
    else if (imageType == 'counters_sketch') this.counters_sketch = event.target.files[0];
    else if (imageType == 'national_tax_registration') this.national_tax_registration = event.target.files[0];

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
  Boolean_types = [
    { id: true, name: 'Yes' },
    { id: false, name: 'No' },
  ];
  Province_types = [
    { id: 1, name: 'Islamabad' },
    { id: 1, name: 'Punjab' },
    { id: 2, name: 'KPK' },
    { id: 3, name: 'Sindh' },
    { id: 4, name: 'Balochistan' },
  ];
}
