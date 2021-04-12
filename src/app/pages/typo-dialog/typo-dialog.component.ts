import { ContractorDetails } from './../../contractor-details';
import { Router } from '@angular/router';
import { SupplierDetailsService } from './../../supplier-details.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder ,FormGroup,Validators} from '@angular/forms';
import { Component,OnInit,Inject  } from '@angular/core';
@Component({
  selector: 'app-typo-dialog',
  templateUrl: './typo-dialog.component.html',
  styleUrls: ['./typo-dialog.component.scss']
})
export class TypoDialogComponent implements OnInit {
  txtfull_name_contr: any;
  contracs: any[];
  txtCompany_name_contr: any;
  txtcontact_number_contr: any;
  txtemail_contr: any;
  txtGST_contr: any;
  txtaddress_contr: any;
  txtCity_contr: any;
  txtState_contr: any;
  txtCountry_contr: any;
  txtPostcode_contr: any;
  Contr_id: any;

  constructor(private formBuilder:FormBuilder ,private _supplierdetailservice :SupplierDetailsService,private router:Router,public dialogRef: MatDialogRef<TypoDialogComponent>,@Inject(MAT_DIALOG_DATA) public data) { }
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
  this._supplierdetailservice.getparticularContractor(this.Contr_id)
        .subscribe((data:ContractorDetails[])=>{
            this.contracs=data;
            console.log("daaaataaaa",this.contracs);
  
            this.txtfull_name_contr=this.contracs[0]['Contr_fname']
            this.txtCompany_name_contr=this.contracs[0]['Contr_org']
            this.txtcontact_number_contr=this.contracs[0]['Contr_phone']
            this.txtemail_contr=this.contracs[0]['Contr_email']
            this.txtGST_contr=this.contracs[0]['Contr_gst']
            this.txtaddress_contr=this.contracs[0]['Contr_addr']
            this.txtCity_contr=this.contracs[0]['Contr_city']
            this.txtState_contr=this.contracs[0]['Contr_state']
            this.txtCountry_contr=this.contracs[0]['Contr_country']
            this.txtPostcode_contr=this.contracs[0]['Contr_pincode']
           
        })
  }
  onSubmit(){
    console.log("Employeeeeeee data",this.addForm.value);
    this._supplierdetailservice.updateContractor(this.addForm.value)
    .subscribe(data=>  {
        console.log('daaaaaataaa:',data)
        // this.router.navigate(['maps']);
      
    });
  }
  closeModal() {
    this.dialogRef.close();
  }
  

  }

