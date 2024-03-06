import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { StocksService } from 'src/app/Services/stocks.service';
import { faIndianRupee, faArrowDown, faArrowUp,  faAngleDoubleLeft, faAngleDoubleRight, faDollarSign,faUserCircle} from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  items: any[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  faRupeeSign = faIndianRupee;
  faArrowUp = faArrowUp;
  faArrowDown = faArrowDown;
  faAngleDoubleLeft = faAngleDoubleLeft;
  faAngleDoubleRight = faAngleDoubleRight;
  faDollarSign = faDollarSign;
  faUserCircle = faUserCircle;

  Beststock: any[] = [];
  WorstStock: any[] = [];
  Nifty50 : any[] = [];
  WorstNifty50: any[] = [];

  cryptosStats: any ;
  coinsList: any[] = [];
  BestCrypto: any[]=[];
  WorstCrypto: any[]=[];

  constructor(private stockService: StocksService, private router: Router) {}
  ngOnInit() {

    this.stockService.getCryptos().subscribe(async (data) => {
      this.cryptosStats = data;
      this.coinsList = data.data.coins;

      this.coinsList.sort((a, b) => a.change - b.change);
      this.BestCrypto = this.coinsList;
      this.coinsList.reverse();
      this.WorstCrypto = [...this.coinsList].reverse();
     
     })
  }

  scrollLeft(ele : HTMLElement) {
    ele.scrollLeft -= 100;
  }

  scrollRight(ele : HTMLElement){
    ele.scrollLeft += 100;
  }
  
  redirectToCrypto(index: number,cryptoName: string) {
    this.router.navigate(['/home/overview', index], { queryParams: { crypto: cryptoName } });
    console.log(crypto);
}
  
}
