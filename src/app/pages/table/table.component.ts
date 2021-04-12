import { Router } from '@angular/router';
import { SupplierDetailsService } from './../../supplier-details.service';

import { FormBuilder ,FormGroup,Validators} from '@angular/forms';
import { Component,OnInit } from '@angular/core';
import {SupplierDetails} from './../../supplier-details'
import { HttpErrorResponse } from '@angular/common/http';


@Component({
    selector: 'table-cmp',
    moduleId: module.id,
    templateUrl: 'table.component.html'
})

export class TableComponent implements OnInit{
    txtfull_name: any;
  
    constructor(private formBuilder:FormBuilder ,private _supplierdetailservice :SupplierDetailsService,private router:Router){

    }
    addForm :FormGroup;
    ngOnInit(){
        
        
        this.addForm= this.formBuilder.group({
            
            txtfull_name_contr:['',Validators.required],
            txtCompany_name_contr: ['',Validators.required],
            txtcontact_number_contr: ['',Validators.required],
            txtemail_contr: ['',Validators.required],
            txtGST_contr: ['',Validators.required],
            txtaddress_contr: ['',Validators.required],
            txtCity_contr: ['',Validators.required],
            txtState_contr: ['',Validators.required],
            txtCountry_contr: ['',Validators.required],
            txtPostcode_contr: ['',Validators.required]
 })
    }
    onSubmit(){
        console.log("pooooost data",this.addForm.value);
        this._supplierdetailservice.createContractor(this.addForm.value)
        .subscribe(data=>  {
            console.log('daaaaaataaa:',data)
            // this.router.navigate(['maps']);
            alert('successfully Created');

            // this.router.navigate(['/dashboard']);
        
           },(error:HttpErrorResponse)=>{
             console.log(error);
        
             alert("unable to Create");
             });
}
}
