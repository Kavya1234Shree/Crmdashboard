import { ProductDetails } from './../../product-details';
import { UserDialogComponent } from './../user-dialog/user-dialog.component';
import { Component, OnInit } from '@angular/core';
import { SupplierDetailsService } from './../../supplier-details.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import{SupplierDetails} from './../../supplier-details';

@Component({
    selector: 'user-cmp',
    moduleId: module.id,
    templateUrl: 'user.component.html'
})

export class UserComponent implements OnInit{
    supplier: SupplierDetails[];
    totalRec : number;
  page: number = 1;
  loading = false;
  term :any;
  supplierss: any;
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
  datee: any;
  userowners: any;

    constructor(private _supplierdetailservice :SupplierDetailsService,public matDialog: MatDialog){

    }
    ngOnInit() {
        this._supplierdetailservice.getimportedProduct()
        .subscribe((data:ProductDetails[])=>{
            this.supplierss=data;
            console.log("daaaataaaa",this.supplierss);

        })

        }
        openModal(ip_id) {
            const dialogConfig = new MatDialogConfig();
            // The user can't close the dialog by clicking outside its body
            console.log("phone is ",ip_id)
            
           
            dialogConfig.disableClose = true;
            dialogConfig.disableClose = true;
            dialogConfig.id = "modal-component";
            dialogConfig.height = "800px";
            dialogConfig.width = "1000px";
            dialogConfig.data =  ip_id
            // https://material.angular.io/components/dialog/overview
            const modalDialog = this.matDialog.open(UserDialogComponent, dialogConfig);
          } 
          refresh() {
            window.location.reload();
          }
          download() {
            let fileName = 'Eloquncproduct.csv';
            let columnNames = ["Invoice Number","Date","Product Name","Supplier Name","Quality","Quantity","Price per unit","Total","Extras","Gross"];
            let header = columnNames.join(',');
        
            let csv = header;
            csv += '\r\n';
        
            this._supplierdetailservice.getimportedProduct()
            .subscribe((data:ProductDetails[])=>{
                this.supplierss=data;
                console.log("daaaataaaa",this.supplierss);
    
      
    
           
              for(let i=0 ;i <this.supplierss.length; ++i){
          
            this.userappid=this.supplierss[i].ip_invoice_number;
            this.datee=this.supplierss[i].ip_created_date;
          this.date=this.supplierss[i].u_employee_id;
          this.usercollect=this.supplierss[i].prod_name;
          this.userbank=this.supplierss[i].sv_name;
          this.userbar=this.supplierss[i].ip_product_quality;
          this.userowner=this.supplierss[i].ip_product_qty;
          this.userowners=this.supplierss[i].ip_product_per_unit_price;
          this.username=this.supplierss[i].ip_net_total_cost;
          this.userphone=this.supplierss[i].ip_extra_cost;
          this.userstatus=this.supplierss[i].ip_gross_total_cost;
          
        
            // console.log("Finalnumber",this.usernumber);
            csv += [[this.userappid] ,,[this.datee],[this.date] ,[this.usercollect],[this.userbank],[this.userbar],[this.userowner] ,[this.userowners] ,[this.username] ].join(',');
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
