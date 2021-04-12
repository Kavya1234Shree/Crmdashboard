import { Employeedetails } from './../../employeedetails';
import { Router } from '@angular/router';
import { SupplierDetailsService } from './../../supplier-details.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder ,FormGroup,Validators} from '@angular/forms';
import { Component,OnInit,Inject  } from '@angular/core';

@Component({
  selector: 'app-reg-dialog',
  templateUrl: './reg-dialog.component.html',
  styleUrls: ['./reg-dialog.component.scss']
})
export class RegDialogComponent implements OnInit {
  u_id: any;
  employee: Employeedetails[];
  txtEmplfull_name: any;
  txtEmployee_ID: any;
  txtEmplemail: any;
  txtEmplDate_of_birth: any;
  txtEmplcontact_number: any;
  txtEmplAlternate_Number: any;
  txtEmpladdress: any;
  txtEmplCity: any;
  txtEmplState: any;
  txtEmplCountry: any;
  txtEmplPostcode: any;
  txtEmplAdhaar_number: any;
  txtEmplPAN_number: any;
  txtEmplBlood_group: any;
  txtuser_type: any;
 employees:any=[];
  user_id: any;
  constructor(private formBuilder:FormBuilder ,private _supplierdetailservice :SupplierDetailsService,private router:Router,public dialogRef: MatDialogRef<RegDialogComponent>,@Inject(MAT_DIALOG_DATA) public data){
  this.u_id=data;
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
      txtuser_type: ['',Validators.required],
      user_id:['',Validators.required]
})
this._supplierdetailservice.getparticularEmployee(this.u_id)
      .subscribe((data:Employeedetails[])=>{
          this.employees=data;
          console.log("daaaataaaa",this.employees);

          this.txtEmplfull_name=this.employees[0]['u_fullName']
          this.txtEmployee_ID=this.employees[0]['u_employee_id']
          this.txtEmplemail=this.employees[0]['u_email_id']
          this.txtEmplDate_of_birth=this.employees[0]['u_employee_DOB']
          this.txtEmplcontact_number=this.employees[0]['u_contact_number']
          this.txtEmplAlternate_Number=this.employees[0]['u_alternate_number']
          this.txtEmpladdress=this.employees[0]['u_address']
          this.txtEmplCity=this.employees[0]['u_city']
          this.txtEmplState=this.employees[0]['u_state']
          this.txtEmplCountry=this.employees[0]['u_country']
          this.txtEmplPostcode=this.employees[0]['u_postcode']
          this.txtEmplAdhaar_number=this.employees[0]['u_govt_id_number1']
          this.txtEmplPAN_number=this.employees[0]['u_govt_id_number2']
          this.txtEmplBlood_group=this.employees[0]['u_employee_bloodGroup']
          this.txtuser_type=this.employees[0]['u_type']
          this.user_id=this.employees[0]['u_id']
      })
}
onSubmit(){
  console.log("Employeeeeeee data",this.addForm.value);
  this._supplierdetailservice.updateEmployee(this.addForm.value)
  .subscribe(data=>  {
      console.log('daaaaaataaa:',data)
      // this.router.navigate(['maps']);
    
  });
}
closeModal() {
  this.dialogRef.close();
}

}
