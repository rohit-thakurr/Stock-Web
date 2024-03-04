import { Component, OnInit } from '@angular/core';
import {
  faIndianRupee,
  faArrowDown,
  faArrowUp,
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

  filterType: string = 'Filter By';
  currType: string = 'All';
  sortList: any[] = ['All', 'Profit', 'Loss'];

  sortType: string = '';
  numberOfTimesSort : number = 0;

  AllStocks: any[] = [];
  ProfitStocks: any[] = [];
  LossStocks: any[] = [];
  StocksList: any[] = [];

  cryptos: any[] = [];

  constructor(private stockService: StocksService, private route: ActivatedRoute) {}
  ngOnInit() {
    this.stockService.getStocks().subscribe(async (data) => {
      this.AllStocks = data;
      this.StocksList = data;
      console.log(this.AllStocks);
    });

     this.route.queryParams.subscribe((params) => {
       const value = params['key'];
       if(value){
         this.filterFunction(value);
       }
     });

     this.stockService.getCryptos().subscribe(async (data) => {
      this.cryptos = data;
      console.log(this.cryptos);
     })
  }

  filterFunction(val: any) {
    console.log(this.filterType);
    this.currType = val;

    if (val == 'All') {
      this.StocksList = this.AllStocks;
    } else if (val == 'Profit') {
      if (this.ProfitStocks.length == 0) {
        this.ProfitStocks = this.AllStocks.filter((stock) => {
          return stock.pChange > 0;
        });
      }
      this.StocksList = this.ProfitStocks;
      console.log(this.StocksList);
    } else if (val == 'Loss') {
      if (this.LossStocks.length == 0) {
        this.LossStocks = this.AllStocks.filter((stock) => {
          return stock.pChange < 0;
        });
      }
      this.StocksList = this.LossStocks;
    }
  }

  sortFunction(type: string) {
    this.sortType = type;
    if(this.sortType == 'ascending' && this.numberOfTimesSort != 0){
      this.StocksList = [...this.StocksList].reverse();
    }else{
      this.StocksList = [...this.StocksList].reverse();
    }
  }
}
