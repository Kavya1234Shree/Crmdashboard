import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder ,FormGroup,Validators,FormControl, FormArray,} from '@angular/forms';
import { SupplierDetailsService } from './../../supplier-details.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-contract',
  templateUrl: './contract.component.html',
  styleUrls: ['./contract.component.scss']
})
export class ContractComponent implements OnInit {

  

  
  constructor(private formBuilder:FormBuilder ,private _supplierdetailservice :SupplierDetailsService,private router:Router) {

  }
  addForm :FormGroup;

  ngOnInit() {

  
  this.addForm= this.formBuilder.group({
            
    txtProduct_id:['',Validators.required],
    txtInvoice_number: ['',[Validators.required,Validators.maxLength(30)]],
    txtQuality: ['',[Validators.required,Validators.maxLength(30)]],
    addresses: this.formBuilder.array([]) ,
    
})
console.log("adressss",this.addresses)

}
addresses() : FormArray {
  return this.addForm.get("addresses") as FormArray
}
newAddress(): FormGroup {
  return this.formBuilder.group({
    id: 1,
    qty: '',
    prod: '',
  })
  
}
suppliers=[
      {prod_id:"1",prod_name:'aaa'}
]



onSubmit(){
console.log("pooooost data",this.addForm.value);
this._supplierdetailservice.createContract(this.addForm.value)
.subscribe(data=>  {
    console.log('daaaaaataaa:',data)
    // this.router.navigate(['maps']);
    alert('successfully Created');

    this.router.navigate(['/dashboard']);

   },(error:HttpErrorResponse)=>{
     console.log(error);

     alert("unable to Create");
     });

}

addAddress() {
  this.addresses().push(this.newAddress());
}
 
removeAddress(i:number) {
  this.addresses().removeAt(i);
}

}
