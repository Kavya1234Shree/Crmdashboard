import { Component, OnInit,Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { SupplierDetailsService } from './../../supplier-details.service';
import {SupplierDetails} from './../../supplier-details'
import { FormBuilder ,FormGroup,Validators} from '@angular/forms';

@Component({
  selector: 'app-map-dialog',
  templateUrl: './map-dialog.component.html',
  styleUrls: ['./map-dialog.component.scss']
})
export class MapDialogComponent implements OnInit {
  sv_id: any;
  supplier: SupplierDetails[];
  txtfull_name: any;
  txtCompany_name: any;
  txtemail: any;
  txtGST: any;
  txtcontact_number: any;
  txtFaxOffice_number: any;
  txtaddress: any;
  txtCity: any;
  txtState: any;
  txtCountry: any;
  txtPostcode: any;
  supplierdata:any=[];
  supplier_id: any;
  constructor(private formBuilder:FormBuilder ,private _supplierdetailservice :SupplierDetailsService,private router:Router,public dialogRef: MatDialogRef<MapDialogComponent>,@Inject(MAT_DIALOG_DATA) public data) { 
this.sv_id=data;
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
          txtPostcode: ['',Validators.required],
          supplier_id:['',Validators.required]
})
this._supplierdetailservice.getparticularSupplier(this.sv_id)
        .subscribe((data:SupplierDetails[])=>{
            this.supplierdata=data;
            console.log("daaaataaaa",this.supplierdata);

            this.txtfull_name=this.supplierdata[0]['sv_name']
            this.txtCompany_name=this.supplierdata[0]['sv_organisation']
            this.txtemail=this.supplierdata[0]['sv_emailId']
            this.txtGST=this.supplierdata[0]['sv_gst_no']
            this.txtcontact_number=this.supplierdata[0]['sv_phone']
            this.txtFaxOffice_number=this.supplierdata[0]['sv_fax_office']
            this.txtaddress=this.supplierdata[0]['sv_address']
            this.txtCity=this.supplierdata[0]['sv_city']
            this.txtState=this.supplierdata[0]['sv_state']
            this.txtCountry=this.supplierdata[0]['sv_country']
            this.txtPostcode=this.supplierdata[0]['sv_postcode']
            this.supplier_id=this.supplierdata[0]['sv_id']

        })
  }
  onSubmit(){
      console.log("pooooost data",this.addForm.value);
      this._supplierdetailservice.updateSupplier(this.addForm.value)
      .subscribe(data=>  {
          console.log('daaaaaataaa:',data)
          // this.router.navigate(['maps']);
        
      });


  }
  closeModal() {
    this.dialogRef.close();
  }

}
