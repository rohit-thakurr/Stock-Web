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
  constructor(private stockService: StocksService ){};

  ngOnInit(): void {
    this.stockService.getHistory().subscribe(async (data) => {
     console.log(data);
     this.stock = data;
     this.img = this.stock.Chart30dPath;
     
    });
  }
  
}
