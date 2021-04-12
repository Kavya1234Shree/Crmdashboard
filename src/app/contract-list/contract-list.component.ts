import { ContDetails } from './../cont-details';
import { Component, OnInit } from '@angular/core';
import { SupplierDetailsService } from 'app/supplier-details.service';

@Component({
  selector: 'app-contract-list',
  templateUrl: './contract-list.component.html',
  styleUrls: ['./contract-list.component.scss']
})
export class ContractListComponent implements OnInit {

  totalRec : number;
  page: number = 1;
  loading = false;
  con: ContDetails[];
  C_status:any;
  constructor(private _supplierdetailservice :SupplierDetailsService) { }

  ngOnInit() {
    this._supplierdetailservice.getCont()
    .subscribe((data:ContDetails[])=>{
        this.con=data;
        console.log("daaaataaaa",this.con);

    })
  }

}
