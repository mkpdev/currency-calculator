import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import { MainService } from '../../services/main.service';

@Component({
  selector: 'app-calculate-price-dialog',
  templateUrl: './calculate-price-dialog.component.html',
  styleUrls: ['./calculate-price-dialog.component.scss'],
})
export class CalculatePriceDialogComponent implements OnInit {
  currencyList: string[] = ['USD', 'RUB', 'EUR', 'GBP', 'JPY'];
  productTableColumns: string[] = ['title', 'price'];
  dataSource: any;
  exchangeRates: any;
  totalCalculation: number = 0;
  currencyTotal: any[] = [];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<CalculatePriceDialogComponent>,
    private mainService: MainService
  ) {}

  ngOnInit(): void {
    this.dataSource = this.data.dataSource;
    this.mainService.currencyExchangeRate.subscribe((response) => {
      this.exchangeRates = response.rates;
      this.calculateTotal();
    });
  }

  calculateTotal() {
    this.dataSource.map((product: any) => {
      this.totalCalculation += product.price;
    });
    this.currencyList.map((currency: any) => {
      if (this.exchangeRates[currency]) {
        let obj = {
          key: this.exchangeRates[currency],
          value: (this.exchangeRates[currency] * this.totalCalculation).toFixed(
            3
          ),
          name: currency,
        };
        this.currencyTotal.push(obj);
      }
    });
  }
}
