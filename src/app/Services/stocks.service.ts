import { Injectable } from '@angular/core';
import { HttpClient, HttpParams,HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class StocksService {

  constructor(private http: HttpClient) {}

  getCryptos() {
     const headers = new HttpHeaders()
       .set(
         'X-RapidAPI-Key',
         'b857b495b1mshc0678b0f3d55d62p178542jsn75927ebb5c45'
       )
       .set('X-RapidAPI-Host', 'coinranking1.p.rapidapi.com');

       const params = new HttpParams().set('limit', '100');
    return this.http.get<any>('https://coinranking1.p.rapidapi.com/coins',{headers,params});
  }

  getCrypto(crypto: string) {
    const headers = new HttpHeaders()
    .set(
      'X-RapidAPI-Key',
      'b857b495b1mshc0678b0f3d55d62p178542jsn75927ebb5c45'
    )
    .set('X-RapidAPI-Host', 'coinranking1.p.rapidapi.com');

    const params = new HttpParams().set('referenceCurrencyUuid', crypto);
    return this.http.get<any>(`https://coinranking1.p.rapidapi.com/coin/${crypto}`,{headers,params});
  }


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
