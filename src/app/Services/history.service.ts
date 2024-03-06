import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {

  constructor(private http: HttpClient) {}

  getCryptoHistory(crypto: string, time: string) {
    const headers = new HttpHeaders()
      .set(
        'X-RapidAPI-Key',
        'b857b495b1mshc0678b0f3d55d62p178542jsn75927ebb5c45'
      )
      .set('X-RapidAPI-Host', 'coinranking1.p.rapidapi.com');

      const params = new HttpParams()
      .set('referenceCurrencyUuid', crypto)
      .set('timePeriod', time);

   return this.http.get<any>('https://coinranking1.p.rapidapi.com/coin/Qwsogvtv82FCd/history',{headers,params});
 }
}
