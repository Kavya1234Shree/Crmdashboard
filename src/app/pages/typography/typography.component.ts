import { ContractorDetails } from './../../contractor-details';
import { SupplierDetailsService } from './../../supplier-details.service';
import { Component,OnInit } from '@angular/core';
import{SupplierDetails} from './../../supplier-details';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { TypoDialogComponent } from '../typo-dialog/typo-dialog.component';



@Component({
    selector: 'typography-cmp',
    moduleId: module.id,
    templateUrl: 'typography.component.html'
})

export class TypographyComponent{
    supplier: SupplierDetails[];
    contractordetails:ContractorDetails[];
    totalRec : number;
  page: number = 1;
  loading = false;
 term:any;
  contr: any[];
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
  status: any;
  recieve: any;
 
    constructor(private _supplierdetailservice :SupplierDetailsService,public matDialog: MatDialog){

    }
    ngOnInit() {
        this._supplierdetailservice.getContractor()
        .subscribe((data:[ContractorDetails[]])=>{
            this.contr=data;
            console.log("daaaataaaa",this.contr);

        })

        }
        
        openModal(Contr_id) {
            const dialogConfig = new MatDialogConfig();
            // The user can't close the dialog by clicking outside its body
            console.log("phone is ",Contr_id)
            
           
            dialogConfig.disableClose = true;
            dialogConfig.disableClose = true;
            dialogConfig.id = "modal-component";
            dialogConfig.height = "800px";
            dialogConfig.width = "1000px";
            dialogConfig.data =  Contr_id
            // https://material.angular.io/components/dialog/overview
            const modalDialog = this.matDialog.open(TypoDialogComponent, dialogConfig);
          } 
          refresh() {
            window.location.reload();
          }
          download() {
            let fileName = 'Eloqunccontractor.csv';
            let columnNames = ["Contractor Name","Company Name","Contact Number","Email","GST","Address","city","State","Country","Postcode"];
            let header = columnNames.join(',');
        
            let csv = header;
            csv += '\r\n';
        
            this._supplierdetailservice.getContractor()
        .subscribe((data:[ContractorDetails[]])=>{
            this.contr=data;
            console.log("daaaataaaa",this.contr);
      
    
           
              for(let i=0 ;i <this.contr.length; ++i){
          
            this.userappid=this.contr[i].Contr_fname;
          this.date=this.contr[i].Contr_org;
          this.usercollect=this.contr[i].Contr_phone;
          this.userbank=this.contr[i].Contr_email;
          this.userbar=this.contr[i].Contr_gst;
          this.userowner=this.contr[i].Contr_addr;
          this.username=this.contr[i].Contr_city;
          this.userphone=this.contr[i].Contr_state;
          this.userstatus=this.contr[i].Contr_country;
          this.usercomp=this.contr[i].Contr_pincode;
          
        
        
            // console.log("Finalnumber",this.usernumber);
            csv += [[this.userappid] ,[this.date] ,[this.usercollect],[this.userbank],[this.userbar],[this.userowner]  ,[this.username] ,[this.userphone] ,[this.userstatus] ,[this.usercomp]].join(',');
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
    
       

