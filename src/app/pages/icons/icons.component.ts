import { Router } from '@angular/router';
import { SupplierDetailsService } from './../../supplier-details.service';

import { FormBuilder ,FormGroup,Validators} from '@angular/forms';
import { Component } from '@angular/core';
import {SupplierDetails} from './../../supplier-details'
import { HttpErrorResponse } from '@angular/common/http';

@Component({
    selector: 'icons-cmp',
    moduleId: module.id,
    templateUrl: 'icons.component.html'
})

export class IconsComponent{
    txtfull_name: any;
  
    constructor(private formBuilder:FormBuilder ,private _supplierdetailservice :SupplierDetailsService,private router:Router){

    }
    addForm :FormGroup;
    ngOnInit(){
        
        
        this.addForm= this.formBuilder.group({
            
            txtfull_name:['',Validators.required],
            txtCompany_name: ['',[Validators.required,Validators.maxLength(30)]],
            txtemail: ['',[Validators.required,Validators.maxLength(30)]],
            txtGST: ['',Validators.required],
            txtcontact_number: ['',[Validators.required,Validators.maxLength(10)]],
            txtFaxOffice_number: ['',Validators.required],
            txtaddress: ['',Validators.required],
            txtCity: ['',Validators.required],
            txtState: ['',Validators.required],
            txtCountry: ['',Validators.required],
            txtPostcode: ['',Validators.required]
 })
    }
    onSubmit(){
        console.log("pooooost data",this.addForm.value);
        this._supplierdetailservice.createSupplier(this.addForm.value)
        .subscribe(data=>  {
            console.log('daaaaaataaa:',data)
            // this.router.navigate(['maps']);
            alert('successfully Created');

            this.router.navigate(['/dashboard']);
        
           },(error:HttpErrorResponse)=>{
             console.log(error);
        
             alert("unable to Create");
             });

    }

}
