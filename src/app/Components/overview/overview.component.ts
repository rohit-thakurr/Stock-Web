import { Component, OnInit,ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { HistoryService } from 'src/app/Services/history.service';
import { StocksService } from 'src/app/Services/stocks.service';
import { ActivatedRoute } from '@angular/router';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit{

  @ViewChild('chart') chartElement!: ElementRef;
  stock: any ;
  img : string = "";
  btn: number = 1;

  crypto: string = "razxDUgYGNAdQ";
  time = "3h";
  coinPrice: any[] = [];
  coinTimestamp: any[] = [];
  coinsHistory: any[] = [];


  constructor(private stockService: StocksService , private cryptoHistory : HistoryService,private route: ActivatedRoute){}
 
  ngOnInit(): void {
   
    this.route.queryParams.subscribe(params => {
      this.crypto = params['crypto'];
      console.log(this.crypto); 
    });

    this.cryptoHistory.getCryptoHistory(this.crypto,this.time).subscribe((coinHistory)=> {
      this.coinsHistory = coinHistory.data.history;
      console.log(this.coinsHistory.map(coin => new Date(coin.timestamp).toLocaleDateString()));
      const ctx = this.chartElement.nativeElement;
      new Chart(ctx, {
        type: 'line',
        data: {
          labels: this.coinsHistory.map(row => new Date(row.timestamp).toLocaleDateString()),
          datasets: [{
            label: 'Bitcoin',
            data: this.coinsHistory.map(row => row.price)
          }]
        }
      });

      this.stockService.getCrypto(this.crypto).subscribe( (cryptoData) => {
        console.log(cryptoData);
      })

    })

  }



  timeLine(val : number){
    this.btn = val;
    if(val == 1) this.img = this.stock.ChartTodayPath;
    else if(val == 2) this.img = this.stock.Chart30dPath;
    else if(val == 3) this.img = this.stock.Chart365dPath;
  }
  
}
