import { ContDetails } from './cont-details';
import { CompleteDetails } from './complete-details';
import { RecieveDetails } from './recieve-details';
import { ContractorDetails } from './contractor-details';
import { Updatesupl } from './updatesupl';
import { Updateemp } from './updateemp';
import { ProductDetails } from './product-details';
import { Employeedetails } from './employeedetails';
import { SupplierDetails } from './supplier-details';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Updateprod } from './updateprod';


@Injectable({
  providedIn: 'root'
})
export class SupplierDetailsService {
  u_id: string;
  ip_id: string;
  sv_id: any;
  Contr_id: any;

  constructor(private http:HttpClient) { }

  getSupplier(){
    return this.http.get<SupplierDetails[]>('http://nameurdomain.com/stox/restsuppliers.php')
  }

  getparticularSupplier(sv_id){
    return this.http.get<SupplierDetails[]>('http://nameurdomain.com/stox/restSupplierdata.php?sv_id='+sv_id)
    this.sv_id=sv_id
  }


  createSupplier(supplierdetails:SupplierDetails){
    console.log('sssssssss',supplierdetails)
    return this.http.post('http://nameurdomain.com/stox/restcreatesupplier.php', supplierdetails)
  }

  updateSupplier(updatesup:Updatesupl){
    console.log('sssssssss',updatesup)
    return this.http.post('http://nameurdomain.com/stox/restUpdateSupplier.php', updatesup)
  }

  getEmployee(){
    return this.http.get<[Employeedetails]>('http://nameurdomain.com/stox/restgetemployeelist.php')
  }
  getparticularEmployee(u_id){
    return this.http.get<[Employeedetails]>('http://nameurdomain.com/stox/restEmployeedata.php?u_id='+u_id)
    this.u_id=u_id
  }
  updateEmployee(updateempl:Updateemp){
    console.log('sssssssss',updateempl)
    return this.http.post('http://nameurdomain.com/stox/restUpdateEmployee.php', updateempl)
  }

  createEmployee(employedetails:Employeedetails){
    console.log('eeeeeeeeeee',employedetails)
    return this.http.post('http://nameurdomain.com/stox/restcreateemployee.php', employedetails)
  }
  getimportedProduct(){
    return this.http.get<[ProductDetails]>('http://nameurdomain.com/stox/restListimportedproducts.php')
  }

  getparticularProduct(ip_id){
    console.log("iiiiiddddd",ip_id)
    return this.http.get<[ProductDetails]>('http://nameurdomain.com/stox/restParticularImportedData.php?ip_id='+ip_id)
    this.ip_id=ip_id;
  }
  getlistProduct(){
    return this.http.get<[ProductDetails]>('http://nameurdomain.com/stox/restourproductsnames.php')
  }

  createProduct(productdetails:ProductDetails){
    console.log('ppppppppp',productdetails)
    return this.http.post('http://nameurdomain.com/stox/restimportproduct.php', productdetails)
  }
  updateProduct(updatepro:Updateprod){
    console.log('ppppppppp',updatepro)
    return this.http.post('http://nameurdomain.com/stox/restUpdateImportProduct.php', updatepro)
  }

  getContractor(){
    return this.http.get<[ContractorDetails[]]>('http://nameurdomain.com/stox/restgetcontractorslist.php')
  }
  getparticularContractor(Contr_id){
    console.log("iiiiiddddd",Contr_id)
    return this.http.get<[ContractorDetails]>('http://nameurdomain.com/stox/restParticularImportedData.php?ip_id='+Contr_id)
    this.Contr_id=Contr_id;
  }

  createContractor(contractordetails:ContractorDetails){
    console.log('cccccccc',contractordetails)
    return this.http.post('http://nameurdomain.com/stox/restCreateContractor.php', contractordetails)
  }

  updateContractor(updatepro:Updateprod){
    console.log('ppppppppp',updatepro)
    return this.http.post('http://nameurdomain.com/stox/restUpdateImportProduct.php', updatepro)
  }
  createContract(contdetails:ContDetails){
    console.log('cccccccc',contdetails)
    return this.http.post('http://nameurdomain.com/stox/restCreateContractor.php', contdetails)
  }


  getRecieve(){
    return this.http.get<[RecieveDetails[]]>('http://nameurdomain.com/stox/restParticularcontractData.php')
  }

  getCompl(){
    return this.http.get<[CompleteDetails[]]>('http://nameurdomain.com/stox/restgetcontractorslist.php')
  }
  getComplt(){
    return this.http.get<[CompleteDetails[]]>('http://nameurdomain.com/stox/restgetcontractorslist.php')
  }
  getCont(){
    return this.http.get<[ContDetails[]]>('http://nameurdomain.com/stox/restgetcontractslist.php')
  }

  }
  // createCont(){

  // }


