import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MaterialModule } from '../material/material.module';
import { ProductListComponent } from './product-list/product-list.component';
import { CalculatePriceDialogComponent } from './calculate-price-dialog/calculate-price-dialog.component';

@NgModule({
  declarations: [ProductListComponent, CalculatePriceDialogComponent],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild([
      { path: '', redirectTo: '/product-list', pathMatch: 'full' },
      { path: 'product-list', component: ProductListComponent },
    ]),
  ],
})
export class MainModule {}
