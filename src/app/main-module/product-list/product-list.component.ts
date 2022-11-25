import { Component, OnInit } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import { MatDialog } from '@angular/material/dialog';

import { Product } from 'src/app/models/product.model';
import { MainService } from '../../services/main.service';
import { CalculatePriceDialogComponent } from '../calculate-price-dialog/calculate-price-dialog.component';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  dataSource: any;
  selection = new SelectionModel<Product>(true, []);
  selectedProduct: Product[] = [];
  displayedColumns: string[] = ['select', 'id', 'title', 'price'];

  constructor(private mainService: MainService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.mainService.productsList.subscribe((list) => {
      this.dataSource = list.products;
    });
  }

  calculateTotalPrice() {
    this.dialog.open(CalculatePriceDialogComponent, {
      height: '600px',
      width: '800px',
      data: {
        dataSource: this.selectedProduct,
      },
    });
  }

  isAllSelected() {
    const selectedItems = this.selection.selected.length;
    const selectedRows = this.dataSource.length;
    this.selectedProduct = [];
    this.selectedProduct = this.selection?.selected
      ? this.selection?.selected
      : [];
    return selectedItems === selectedRows;
  }

  toggleAllRows() {
    this.isAllSelected()
      ? this.selection.clear()
      : this.selection.select(...this.dataSource);
    this.selectedProduct = [];
  }
}
