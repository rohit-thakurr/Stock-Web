import { Component, OnInit } from '@angular/core';
import { StocksService } from 'src/app/Services/stocks.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit{

  stock: any ;
  img : string = "";
  btn: number = 1;
  constructor(private stockService: StocksService ){};

  ngOnInit(): void {
    this.stockService.getHistory().subscribe(async (data) => {
     console.log(data);
     this.stock = data;
     this.img = this.stock.ChartTodayPath;
     console.log(this.stock.ChartTodayPath);
    });
  }

  timeLine(val : number){
    this.btn = val;
    if(val == 1) this.img = this.stock.ChartTodayPath;
    else if(val == 2) this.img = this.stock.Chart30dPath;
    else if(val == 3) this.img = this.stock.Chart365dPath;
  }
  
}
