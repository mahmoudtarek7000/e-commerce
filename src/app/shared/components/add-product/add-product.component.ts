import {Component, Inject} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {ProductsService} from "../../../services/products-service/products.service";
import {ToastrService} from "../../../services/toastService/toastr-service.service";

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.sass']
})
export class AddProductComponent {
  productForm: FormGroup;
  constructor(private formBuilder: FormBuilder, public dialogRef: MatDialogRef<AddProductComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any, private productsService: ProductsService) {

    this.productForm = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      price: [0, Validators.required],
      image: ['', Validators.required],
      category: ['', Validators.required],
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  addProduct(): void {
    this.productsService.addProduct(this.productForm.value);
  }
}
