import { ProductDetails } from './../../product-details';
import { Component, OnInit ,Inject} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { SupplierDetailsService } from './../../supplier-details.service';
import {SupplierDetails} from './../../supplier-details'
import { FormBuilder ,FormGroup,Validators} from '@angular/forms';



@Component({
  selector: 'app-user-dialog',
  templateUrl: './user-dialog.component.html',
  styleUrls: ['./user-dialog.component.scss']
})
export class UserDialogComponent implements OnInit {
  supplier: SupplierDetails[];
  productdetails:ProductDetails[];
  ip_id: any;
  txtProduct_id: any;
  txtSupplier_id: any;
  txtQuality: any;
  txtInvoice_number: any;
  txtQuantity: any;
  txtPriceper_quantity: any;
  txtTotalCost: any;
  txtExtraCharges: any;
  txtGrossTotal: any;
  suppliers: SupplierDetails[];
    txtproduct_name: any;
    txtSupplier_name: any;
    product: ProductDetails[];
    allproduct: any = [];
  supplierss: SupplierDetails[];
  
  constructor(private formBuilder:FormBuilder ,private _supplierdetailservice :SupplierDetailsService,private router:Router,public dialogRef: MatDialogRef<UserDialogComponent>,@Inject(MAT_DIALOG_DATA) public data){
    this.ip_id =data;
  }
  addForm :FormGroup;
  ngOnInit(){
      
      
      this.addForm= this.formBuilder.group({
          
          txtProduct_id:['',Validators.required],
          txtSupplier_id: ['',[Validators.required]],
          txtInvoice_number: ['',[Validators.required]],
          txtQuality: ['',Validators.required],
          txtQuantity: ['',[Validators.required]],
          txtPriceper_quantity: ['',Validators.required],
          txtTotalCost: ['',Validators.required],
          txtExtraCharges: ['',Validators.required],
          txtGrossTotal: ['',Validators.required],
          ip_id:['',Validators.required]
})
this._supplierdetailservice.getSupplier()
        .subscribe((data:SupplierDetails[])=>{
            this.supplier=data;
            console.log("daaaataaaa",this.supplier);

        })
        this._supplierdetailservice.getlistProduct()
        .subscribe((data:SupplierDetails[])=>{
            this.supplierss=data;
            console.log("daaaataaaa",this.supplierss);

        })
        

this._supplierdetailservice.getparticularProduct(this.ip_id)
      .subscribe((data:ProductDetails[])=>{
          
          this.allproduct=data;
          console.log("particular dialog product data",this.allproduct);


          this.txtProduct_id=this.allproduct[0]['ip_prod_id']
          this.txtproduct_name=this.allproduct[0]['prod_name']
          console.log('kavyaaa',this.txtProduct_id)          
          this.txtSupplier_id=this.allproduct[0]['ip_sv_id']
          this.txtSupplier_name=this.allproduct[0]['sv_organisation']
          this.txtInvoice_number=this.allproduct[0]['ip_invoice_number']
          this.txtQuality=this.allproduct[0]['ip_product_quality']
          this.txtQuantity=this.allproduct[0]['ip_product_qty']
          this.txtPriceper_quantity=this.allproduct[0]['ip_product_per_unit_price']
          this.txtTotalCost=this.allproduct[0]['ip_net_total_cost']
          this.txtExtraCharges=this.allproduct[0]['ip_extra_cost']
          this.txtGrossTotal=this.allproduct[0]['ip_gross_total_cost']
          this.ip_id=this.allproduct[0]['ip_id']

      })
  }
  onSubmit(){
      console.log("pooooost data",this.addForm.value);
      this._supplierdetailservice.updateProduct(this.addForm.value)
      .subscribe(data=>  {
          console.log('daaaaaataaa:',data)
          // this.router.navigate(['maps']);
        
      });
}
closeModal() {
  this.dialogRef.close();
}

}


