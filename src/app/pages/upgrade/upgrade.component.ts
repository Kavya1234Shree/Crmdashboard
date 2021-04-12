import { ProductDetails } from './../../product-details';
import { Router } from '@angular/router';
import { SupplierDetailsService } from './../../supplier-details.service';

import { FormBuilder ,FormGroup,Validators} from '@angular/forms';
import { Component ,OnInit} from '@angular/core';
import {SupplierDetails} from './../../supplier-details';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
    selector: 'upgrade-cmp',
    moduleId: module.id,
    templateUrl: 'upgrade.component.html'
})

export class UpgradeComponent implements OnInit{
    txtfull_name: any;
    supplier: SupplierDetails[];
    suppliers: SupplierDetails[];
  
    constructor(private formBuilder:FormBuilder ,private _supplierdetailservice :SupplierDetailsService,private router:Router){

    }
    addForm :FormGroup;
    ngOnInit(){
        
        
        this.addForm= this.formBuilder.group({
            
            txtProduct_id:['',Validators.required],
            txtSupplier_id: ['',[Validators.required]],
            txtInvoice_number: ['',[Validators.required]],
            txtQuality: ['',Validators.required],
            txtQuantity: ['',[Validators.required]],
            txtPriceper_quantity : ['',Validators.required],
            txtTotalCost: ['',Validators.required],
            txtExtraCharges: ['',Validators.required],
            txtGrossTotal: ['',Validators.required],
            
 })

 this._supplierdetailservice.getSupplier()
        .subscribe((data:SupplierDetails[])=>{
            this.supplier=data;
            console.log("daaaataaaa",this.supplier);

        })

        this._supplierdetailservice.getlistProduct()
        .subscribe((data:ProductDetails[])=>{
            this.suppliers=data;
            console.log("daaaataaaa",this.suppliers);

        })
    }
    onSubmit(){
        console.log("pooooost data",this.addForm.value);
        this._supplierdetailservice.createProduct(this.addForm.value)
        .subscribe(data=>  {
            alert('successfully Created');

            this.router.navigate(['/dashboard']);
        
           },(error:HttpErrorResponse)=>{
             console.log(error);
        
             alert("unable to Create");
             });
}
GrossTotal(event:any){
    console.log(event.target.value);
  }

}
