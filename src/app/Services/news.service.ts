import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

 
  constructor(private http: HttpClient) {}

  getNews(paper: string) {
    const headers = new HttpHeaders()
      .set(
        'X-RapidAPI-Key',
        'b857b495b1mshc0678b0f3d55d62p178542jsn75927ebb5c45'
      )
      .set('X-RapidAPI-Host', 'cryptocurrency-news2.p.rapidapi.com');

   return this.http.get<any>(`https://cryptocurrency-news2.p.rapidapi.com/v1/${paper}`,{headers});
 }
}
