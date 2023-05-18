import {AfterViewInit, Component, Input, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from "@angular/material/paginator";
import {MatTableDataSource} from "@angular/material/table";

@Component({
  selector: 'app-products-table',
  templateUrl: './products-table.component.html',
  styleUrls: ['./products-table.component.sass']
})
export class ProductsTableComponent implements OnInit, AfterViewInit{
 @Input() products!: any;
  displayedColumns: string[] =  ['id','category','title','description', 'price', 'rating'];
  dataSource = new MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator: MatPaginator | any;

  ngOnInit(): void {
    this.dataSource.data = this.products
  }

  ngAfterViewInit(): void {
      this.dataSource.paginator = this.paginator;
  }
}
