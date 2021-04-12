import { RecieveDetails } from './../../recieve-details';
import { Component, OnInit } from '@angular/core';
import { SupplierDetailsService } from './../../supplier-details.service';
import { FormBuilder ,FormGroup,Validators} from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-contract',
  templateUrl: './list-contract.component.html',
  styleUrls: ['./list-contract.component.scss']
})
export class ListContractComponent implements OnInit {
  totalRec : number;
  page: number = 1;
  loading = false;
  reciev: any[];
  rec: RecieveDetails[];
  router: any;

  constructor(private formBuilder:FormBuilder,private _supplierdetailservice :SupplierDetailsService) {
    this.reciev = new Array<any>();
   }
   addForm :FormGroup;

  ngOnInit() {
    this.addForm= this.formBuilder.group({
            
      txtProduct_id:['',Validators.required],
      txtSupplier_id: ['',[Validators.required]],
      txtInvoice_number: ['',[Validators.required]],
      txtQuality: ['',Validators.required],
      txtQuantity: ['',[Validators.required]],
    
      
})

    this._supplierdetailservice.getRecieve()
    .subscribe((data:RecieveDetails[])=>{
        this.rec=data;
        console.log("daaaataaaa",this.rec);

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

}
