import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { EaCryptoService } from '../ea-crypto.service';
import { EaCryptoModel } from './ea-crypto.model';

@Component({
  selector: 'ea-crypto',
  templateUrl: './ea-crypto.component.html',
  styleUrls: ['./ea-crypto.component.css']
})

export class EaCryptoComponent implements OnInit {
  markets: EaCryptoModel[] = [];

  constructor(private eaCryptoService: EaCryptoService) { }

  ngOnInit(): void {
    this.fetchMarket();
    interval(10000).subscribe(() => (
      this.fetchMarket()
    ));
  }

  private fetchMarket() {
    this.eaCryptoService.getMarkets().subscribe(
      (markets: EaCryptoModel[]) => this.markets = markets
    );
  }
}
