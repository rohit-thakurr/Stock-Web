import { Component, OnInit } from '@angular/core';
import {
  faIndianRupee,
  faArrowDown,
  faArrowUp,
  faDollarSign
} from '@fortawesome/free-solid-svg-icons';
import { StocksService } from 'src/app/Services/stocks.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-crypto',
  templateUrl: './crypto.component.html',
  styleUrls: ['./crypto.component.scss']
})
export class CryptoComponent {
  items: any[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  faRupeeSign = faIndianRupee;
  faArrowUp = faArrowUp;
  faArrowDown = faArrowDown;
  faDollarSign = faDollarSign;

  filterType: string = 'Filter By';
  currType: string = 'All';
  sortList: any[] = ['All', 'Profit', 'Loss'];

  sortType: string = '';
  numberOfTimesSort : number = 0;

  

  
  AllCryptos: any[] = [];
  ProfitCryptos: any[] = [];
  LossCryptos: any[] = [];
  CryptosList: any[] = [];


  constructor(private stockService: StocksService, private route: ActivatedRoute) {}
  ngOnInit() {

     this.route.queryParams.subscribe((params) => {
       const value = params['key'];
       if(value){
         this.filterFunction(value);
       }
     });

     this.stockService.getCryptos().subscribe(async (data) => {
      this.AllCryptos = data.data.coins;
      this.CryptosList = this.AllCryptos;
      console.log(this.AllCryptos);
     })
  }

  filterFunction(val: any) {
    console.log(this.filterType);
    this.currType = val;

    if (val == 'All') {
      this.CryptosList = this.AllCryptos;
    } else if (val == 'Profit') {
      if (this.ProfitCryptos.length == 0) {
        this.ProfitCryptos = this.AllCryptos.filter((crypto) => {
          return crypto.change > 0;
        });
      }
      this.CryptosList = this.ProfitCryptos;
      console.log(this.CryptosList);
    } else if (val == 'Loss') {
      if (this.LossCryptos.length == 0) {
        this.LossCryptos = this.AllCryptos.filter((crypto) => {
          return crypto.change < 0;
        });
      }
      this.CryptosList = this.LossCryptos;
    }
  }

  sortFunction(type: string) {
    this.sortType = type;
    if(this.sortType == 'ascending' ){
      //this.CryptosList = [...this.CryptosList].reverse();
      this.CryptosList.sort((a, b) => a.change - b.change);
    }else if((this.sortType == 'descending' ) ){
      this.CryptosList.sort((a, b) => b.change - a.change);
    }
  }
}
