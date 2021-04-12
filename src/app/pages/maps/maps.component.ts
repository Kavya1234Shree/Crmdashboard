import { MapDialogComponent } from './../map-dialog/map-dialog.component';
import { SupplierDetailsService } from './../../supplier-details.service';
import { Component,OnInit, TemplateRef } from '@angular/core';
import{SupplierDetails} from './../../supplier-details';
import { MatDialog, MatDialogConfig } from '@angular/material';


@Component({
    moduleId: module.id,
    selector: 'maps-cmp',
    templateUrl: 'maps.component.html'
})

export class MapsComponent implements OnInit {
    supplier: SupplierDetails[];
    totalRec : number;
  page: number = 1;
  loading = false;
  term:any;
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
  suppliers: any[];
 
    constructor(private _supplierdetailservice :SupplierDetailsService,public matDialog: MatDialog){
        this.suppliers = new Array<any>();
    }
    ngOnInit() {
        this._supplierdetailservice.getSupplier()
        .subscribe((data:SupplierDetails[])=>{
            this.supplier=data;
            console.log("daaaataaaa",this.supplier);

        })

        }
        openModal(sv_id) {
            const dialogConfig = new MatDialogConfig();
            // The user can't close the dialog by clicking outside its body
            console.log("phone is ",sv_id)
            
           
            dialogConfig.disableClose = true;
            dialogConfig.disableClose = true;
            dialogConfig.id = "modal-component";
            dialogConfig.height = "800px";
            dialogConfig.width = "1000px";
            dialogConfig.data =  sv_id
            // https://material.angular.io/components/dialog/overview
            const modalDialog = this.matDialog.open(MapDialogComponent, dialogConfig);
          } 
          refresh() {
            window.location.reload();
          }
          download() {
            let fileName = 'Eloquncsupplier.csv';
            let columnNames = ["Supplier Name","Company Name","Email Id","Gst Number","Phone","Fax/Office Number","Address","City","State","Country","Postcode"];
            let header = columnNames.join(',');
        
            let csv = header;
            csv += '\r\n';
        
            this._supplierdetailservice.getSupplier()
            .subscribe((data:SupplierDetails[])=>{
                this.suppliers=data;
                console.log("daaaataaaa",this.suppliers);
    
           
              for(let i=0 ;i < this.supplier.length; ++i){
          
            this.userappid=this.suppliers[i].sv_name;
          this.date=this.suppliers[i].sv_organisation;
          this.usercollect=this.suppliers[i].sv_emailId;
          this.userbank=this.suppliers[i].sv_gst_no;
          this.userbar=this.suppliers[i].sv_phone;
          this.userowner=this.suppliers[i].sv_fax_office;
          this.username=this.suppliers[i].sv_address;
          this.userphone=this.suppliers[i].sv_city;
          this.userstatus=this.suppliers[i].sv_state;
          this.usercomp=this.suppliers[i].sv_country;
          this.userdisloan=this.suppliers[i].sv_postcode;
        
        
            // console.log("Finalnumber",this.usernumber);
            csv += [[this.userappid] ,[this.date] ,[this.usercollect],[this.userbank],[this.userbar],[this.userowner]  ,[this.username] ,[this.userphone] ,[this.userstatus] ,[this.usercomp],[this.userdisloan] ].join(',');
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
