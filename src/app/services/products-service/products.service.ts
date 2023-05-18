import {Injectable} from '@angular/core';
import {ToastrService} from "../toastService/toastr-service.service";


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private toasterService: ToastrService)  { }
products: any;
  getProducts(): any{
    // const currentUser = JSON.parse(<string>localStorage.getItem('currentUser'))
   return fetch('https://fakestoreapi.com/products')
      .then(res=>res.json())
      .then(json=>this.products = json)
  }
  addProduct(product: any):any{
   return  fetch('https://fakestoreapi.com/products',{
      method:"POST",
      body:JSON.stringify(
        product
      )
    })
      .then(res=> {
        res.json();
        if (res) {
          this.toasterService.addAlert('added successfully', 'Add Product', 'start')
        }})
      .then(json=>console.log(json))
  };
  deleteProduct(id: number):any{
    return fetch(`https://fakestoreapi.com/products/${id}`,{
      method:"DELETE"
    })
      .then(res=>{
        res.json();
        if (res) {
          this.toasterService.addAlert('added successfully', 'Add Product', 'start')
        }})
      .then(json=>console.log(json))
  }
}
