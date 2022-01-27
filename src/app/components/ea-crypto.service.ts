import { Injectable } from '@angular/core';
import { EaCryptoModel } from './../components/ea-crypto/ea-crypto.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const api_base_url: string = 'https://api.coingecko.com/api/v3';
const api_url: string = '/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=100&page=1&sparkline=false';

@Injectable({
  providedIn: 'root'
})
export class EaCryptoService {

  constructor(private http: HttpClient) { }

  getMarkets(): Observable<EaCryptoModel[]> {
    return this.http.get<EaCryptoModel[]>(api_base_url + '/coins/markets', {
      params: {
        'per_page': 100,
        'vs_currency': 'eur',
        'page':'1'
      }
    });
  }

}
