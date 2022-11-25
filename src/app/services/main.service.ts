import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root',
})
export class MainService {
  private productUrl =
    'https://dummyjson.com/products?limit=10&&select=title,price';
  private currencyUrl = 'https://api.exchangerate-api.com/v4/latest/USD';

  constructor(private httpClient: HttpClient) { }
  
  get productsList(): Observable<any> {
    return this.httpClient.get(this.productUrl);
  }

  get currencyExchangeRate(): Observable<any> {
    return this.httpClient.get(this.currencyUrl);
  }
}
