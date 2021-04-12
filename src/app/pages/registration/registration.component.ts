import { Employeedetails } from './../../employeedetails';
import { SupplierDetailsService } from './../../supplier-details.service';
import { Component,OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { RegDialogComponent } from '../reg-dialog/reg-dialog.component';





@Component({
    selector: 'registration-cmp',
    moduleId: module.id,
    templateUrl: './registration.component.html'
})

export class RegistrationComponent implements OnInit{
  employee:Employeedetails[];
  totalRec : number;
  page: number = 1;
  loading = false;
  term:any;
  employees: any;
  userappid: any;
  date: any;
  usercollect: any;
  userbank: any;
  userbar: any;
  userowner: any;
  username: any;
  userphone: any;
  userstatus: any;
  usercomp: any;
  userdisloan: any;
  userdisloans: any;
  userdisloanss: any;
  userdisloansss: any;
  userdisloanssss: any;

  constructor(private _supplierdetailservice :SupplierDetailsService,public matDialog: MatDialog){

  }
  ngOnInit() {
      this._supplierdetailservice.getEmployee()
      .subscribe((data:Employeedetails[])=>{
          this.employees=data;
          console.log("daaaataaaa",this.employees);

      })

      }
      openModal(u_id) {
        const dialogConfig = new MatDialogConfig();
        // The user can't close the dialog by clicking outside its body
        console.log("phone is ",u_id)
        
       
        dialogConfig.disableClose = true;
        dialogConfig.disableClose = true;
        dialogConfig.id = "modal-component";
        dialogConfig.height = "800px";
        dialogConfig.width = "1000px";
        dialogConfig.data =  u_id
        // https://material.angular.io/components/dialog/overview
        const modalDialog = this.matDialog.open(RegDialogComponent, dialogConfig);
      } 
      refresh() {
        window.location.reload();
      }
      download() {
        let fileName = 'Eloquncemployee.csv';
        let columnNames = ["Employee Name","Employee Id","DOB","Contact Number","Alternate Number","Address","city","State","Country","Postcode","Adhaar Number","Pan Number","Blood Group","User Type"];
        let header = columnNames.join(',');
    
        let csv = header;
        csv += '\r\n';
    
        this._supplierdetailservice.getEmployee()
        .subscribe((data:Employeedetails[])=>{
            this.employees=data;
            console.log("daaaataaaa",this.employees);
  

       
          for(let i=0 ;i <this.employees.length; ++i){
      
        this.userappid=this.employees[i].u_fullName;
      this.date=this.employees[i].u_employee_id;
      this.usercollect=this.employees[i].u_email_id;
      this.userbank=this.employees[i].u_employee_DOB;
      this.userbar=this.employees[i].u_contact_number;
      this.userowner=this.employees[i].u_alternate_number;
      this.username=this.employees[i].u_address;
      this.userphone=this.employees[i].u_city;
      this.userstatus=this.employees[i].u_state;
      this.usercomp=this.employees[i].u_country;
      this.userdisloan=this.employees[i].u_postcode;
      this.userdisloans=this.employees[i].u_govt_id_number1;
      this.userdisloanss=this.employees[i].u_govt_id_number2;
      this.userdisloansss=this.employees[i].u_employee_bloodGroup;
      this.userdisloanssss=this.employees[i].u_type;
    
    
        // console.log("Finalnumber",this.usernumber);
        csv += [[this.userappid] ,[this.date] ,[this.usercollect],[this.userbank],[this.userbar],[this.userowner]  ,[this.username] ,[this.userphone] ,[this.userstatus] ,[this.usercomp],[this.userdisloan] ,[this.userdisloans],[this.userdisloanss],[this.userdisloansss],[this.userdisloanssss]].join(',');
        csv += '\r\n';
        }
          // console.log("DriverData",data);
      
    
        var blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    
        var link = document.createElement("a");
        if (link.download !== undefined) {
          var url = URL.createObjectURL(blob);
          link.setAttribute("href", url);
          link.setAttribute("download", fileName);
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        }
      })
      }
  }



   
  // @Input() form: FormGroup;

  // constructor(public fb: FormBuilder,private http: HttpClient) {
  //    this.form = this.fb.group({
  //     vendor_name: "",
  //      company_email:"",
  //     company_name:"",
  //     phone:Number,
  //     address1: "",
  //       city: "",
  //       state: "",
  //       zip: Number,
  //     type_of_company:"",
  //     GSTN:"",
  //     GST_certificate: [null],
  //      account_no:Number,
  //       IFSC_code:"",
  //       type_of_account:"",
  //       level1_contact:Number,
  //       level2_contact:Number,
  //      level3_contact:Number
  //   })
  // }
  // Company: any = ['Software', 'Hardware', 'sales', 'marketing']

  // Account: any = ['Current', 'Savings', 'marketing']
  // ngOnInit() { }

  // uploadFile(event) {
  //   const file = (event.target as HTMLInputElement).files[0];
  //   this.form.patchValue({
  //     GST_certificate : file
  //   });
  //   this.form.get('GST_certificate').updateValueAndValidity()
  // }

  // changeCompany(event) {
  //   console.log(event.value)
  //   this. type_of_company.setValue(event.target.value, {
  //     onlySelf: true
  //   })
  // }
  // get type_of_company() {
  //   return this.form.get('type_of_company');
  // }

  // changeAccount(event) {
  //   console.log(event.value)
  //   this.type_of_account .setValue(event.target.value, {
  //     onlySelf: true
  //   })
  // }
  // get type_of_account() {
  //   return this.form.get('type_of_account');
  // }


  // submitForm() {
  //   var formData: any = new FormData();
  //    formData.append("vendor_name", this.form.get('vendor_name').value);
  //    formData.append("company_email", this.form.get('company_email').value);
  //    formData.append("company_name", this.form.get('company_name').value);
  //    formData.append("phone", this.form.get('phone').value);
  //   //  formData.append("address", this.form.get('address').value);
  //    formData.append("address[address1]", this.form.get('address1').value);
  //    formData.append("address[city]", this.form.get('city').value);
  //    formData.append("address[state]", this.form.get('state').value);
  //    formData.append("address[zip]", this.form.get('zip').value);
  //    formData.append("type_of_company", this.form.get('type_of_company').value);
  //    formData.append("GSTN", this.form.get('GSTN').value);
  //    formData.append("GST_certificate", this.form.get('GST_certificate').value);
  //   //  formData.append("bank_details", this.form.get('bank_details').value);
  //   formData.append("bank_details[account_no]", this.form.get('account_no').value);
  //     formData.append("bank_details[IFSC_code]", this.form.get('IFSC_code').value);
  //     formData.append("bank_details[type_of_account]", this.form.get('type_of_account').value);
  //   //  formData.append("escalation_matrices", this.form.get('escalation_matrices').value);
  //     formData.append("escalation_matrices[level1_contact]", this.form.get('level1_contact').value);
  //     formData.append("escalation_matrices[level2_contact]", this.form.get('level2_contact').value);
  //    formData.append("escalation_matrices[level3_contact]", this.form.get('level3_contact').value);

  //   this.http.post('http://165.22.219.195:4000/api/vendor-registration', formData).subscribe(
  //     (response) => console.log(response),
  //     (error) => console.log(error)
  //   )
  // }




