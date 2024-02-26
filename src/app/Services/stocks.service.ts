import { Injectable } from '@angular/core';
import { HttpClient, HttpParams,HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class StocksService {
  subscribe() {
    throw new Error('Method not implemented.');
  }

  constructor(private http: HttpClient) {}

  // getStocks() {
  //    const headers = new HttpHeaders()
  //      .set(
  //        'X-RapidAPI-Key',
  //        'b857b495b1mshc0678b0f3d55d62p178542jsn75927ebb5c45'
  //      )
  //      .set('X-RapidAPI-Host', 'coinranking1.p.rapidapi.com');
  //   return this.http.get('https://coinranking1.p.rapidapi.com/coins',{headers});
  // }

  getNifty() {
    const headers = new HttpHeaders()
      .set(
        'X-RapidAPI-Key',
        'b857b495b1mshc0678b0f3d55d62p178542jsn75927ebb5c45'
      )
      .set('X-RapidAPI-Host', 'latest-stock-price.p.rapidapi.com');

    const params = new HttpParams().set('Indices', 'NIFTY 50');

    return this.http.get<any[]>('https://latest-stock-price.p.rapidapi.com/price', {
      headers,
      params,
    });
  }

  getHistory() {
    const headers = new HttpHeaders()
      .set(
        'X-RapidAPI-Key',
        'b857b495b1mshc0678b0f3d55d62p178542jsn75927ebb5c45'
      )
      .set('X-RapidAPI-Host', 'nse-market.p.rapidapi.com');

    const params = new HttpParams().set('symbol', 'itc');

    return this.http.get<any>('https://nse-market.p.rapidapi.com/stocks', {
      headers,
      params,
    });
  }

  getStocks() {
    const headers = new HttpHeaders()
      .set(
        'X-RapidAPI-Key',
        'b857b495b1mshc0678b0f3d55d62p178542jsn75927ebb5c45'
      )
      .set('X-RapidAPI-Host', 'latest-stock-price.p.rapidapi.com');

    //  const params = new HttpParams()
    //    .set('param1', "NIFTY 50");

    return this.http.get<any[]>(
      'https://latest-stock-price.p.rapidapi.com/any',
      {
        headers,
      }
    );
  }
}
