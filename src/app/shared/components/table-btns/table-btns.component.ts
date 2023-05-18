import {Component, EventEmitter, Output} from '@angular/core';
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {AddProductComponent} from "../add-product/add-product.component";
import {ProductsService} from "../../../services/products-service/products.service";
import {RemoveProductComponent} from "../remove-product/remove-product.component";

@Component({
  selector: 'app-table-btns',
  templateUrl: './table-btns.component.html',
  styleUrls: ['./table-btns.component.sass']
})
export class TableBtnsComponent {
  @Output() addProduct: EventEmitter<any> = new EventEmitter();
  @Output() deleteProduct: EventEmitter<any> = new EventEmitter();
  dataToDisplay!: Boolean;
constructor(private dialog: MatDialog) {
}
  addData() {
    const dialogRef = this.dialog.open(AddProductComponent, {
      data: {},
      minWidth: '25vw',
      maxHeight: '70vh',
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.addProduct.emit(result);
      }
    });
  }

  removeData() {
    const dialogRef = this.dialog.open(RemoveProductComponent, {
      data: {},
      minWidth: '30vw',
      maxHeight: '30vh',
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.deleteProduct.emit(result);
      }
    });
  }
}
