import { Employeedetails } from './../../employeedetails';
import { Router } from '@angular/router';
import { SupplierDetailsService } from './../../supplier-details.service';

import { FormBuilder ,FormGroup,Validators} from '@angular/forms';
import { Component } from '@angular/core';
import {SupplierDetails} from './../../supplier-details'
import { HttpErrorResponse } from '@angular/common/http';


@Component({
    selector: 'notifications-cmp',
    moduleId: module.id,
    templateUrl: 'notifications.component.html'
})

export class NotificationsComponent{
  txtfull_name: any;
  
  constructor(private formBuilder:FormBuilder ,private _supplierdetailservice :SupplierDetailsService,private router:Router){

  }
  addForm :FormGroup;

ngOnInit(){
        
        
  this.addForm= this.formBuilder.group({
      
      txtEmplfull_name :['',Validators.required],
      txtEmployee_ID: ['',[Validators.required]],
      txtEmplemail: [''],
      txtEmplDate_of_birth: [''],
      txtEmplcontact_number: ['',[Validators.required,Validators.maxLength(10)]],
      txtEmplAlternate_Number: [''],
      txtEmpladdress: ['',Validators.required],
      txtEmplCity: ['',Validators.required],
      txtEmplState: ['',Validators.required],
      txtEmplCountry: ['',Validators.required],
      txtEmplPostcode: ['',Validators.required],
      txtEmplAdhaar_number: [''],
      txtEmplPAN_number: [''],
      txtEmplBlood_group: [''],
      txtuser_type: ['',Validators.required]
})
}
onSubmit(){
  console.log("Employeeeeeee data",this.addForm.value);
  this._supplierdetailservice.createEmployee(this.addForm.value)
  .subscribe(data=>  {
      console.log('daaaaaataaa:',data)
      alert('successfully Created');

      this.router.navigate(['/dashboard']);
  
     },(error:HttpErrorResponse)=>{
       console.log(error);
  
       alert("unable to Create");
       });
}
}
