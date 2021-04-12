import { CompleteDetails } from './../../complete-details';
import { Component, OnInit } from '@angular/core';
import { SupplierDetailsService } from './../../supplier-details.service';

@Component({
  selector: 'app-statusup',
  templateUrl: './statusup.component.html',
  styleUrls: ['./statusup.component.scss']
})
export class StatusupComponent implements OnInit {
  comp: CompleteDetails[];
  complt: CompleteDetails[];

  constructor(private _supplierdetailservice :SupplierDetailsService) { }

  ngOnInit() {

    this._supplierdetailservice.getCompl()
    .subscribe((data:CompleteDetails[])=>{
        this.comp=data;
        console.log("daaaataaaa",this.comp);

    })

    this._supplierdetailservice.getComplt()
    .subscribe((data:CompleteDetails[])=>{
        this.complt=data;
        console.log("daaaataaaa",this.complt);

    })
  }
  

}
