import { Component, OnInit,ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { HistoryService } from 'src/app/Services/history.service';
import { StocksService } from 'src/app/Services/stocks.service';
import Chart from 'chart.js/auto'

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

  crypto: string = "yhjMzLPhuIDl";
  time = "3h";
  coinPrice: any[] = [];
  coinTimestamp: any[] = [];
  coinsHistory: any[] = [];


  constructor(private stockService: StocksService , private cryptoHistory : HistoryService){}
 
  ngOnInit(): void {
   

    this.cryptoHistory.getCryptoHistory(this.crypto,this.time).subscribe((coinHistory)=> {
      this.coinsHistory = coinHistory.data.history;
      
      // // console.log(this.coinsHistory.map(history => history.price));
      // for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
      //   this.coinPrice.push(coinHistory?.data?.history[i].price);
      // }

      // for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
      //   this.coinTimestamp.push(new Date(coinHistory?.data?.history[i].timestamp).toLocaleDateString());
      // }
      console.log(this.coinsHistory.map((row => new Date(row.timestamp).toLocaleDateString()) ));
      const ctx = this.chartElement.nativeElement;
      new Chart(ctx, {
        type: 'line',
        data: {
          labels: this.coinsHistory.map(row => new Date(row.timestamp).toLocaleDateString()),
          datasets: [{
            label: 'Value',
            data: this.coinsHistory.map(row => row.price)
          }]
        }
      });

    })

  }



  timeLine(val : number){
    this.btn = val;
    if(val == 1) this.img = this.stock.ChartTodayPath;
    else if(val == 2) this.img = this.stock.Chart30dPath;
    else if(val == 3) this.img = this.stock.Chart365dPath;
  }
  
}
