import { Component, OnInit } from '@angular/core';
import { StocksService } from 'src/app/Services/stocks.service';
import {  faRupeeSign, faIndianRupee, faArrowDown, faArrowUp} from '@fortawesome/free-solid-svg-icons';


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

  Beststock: any[] = [];
  WorstStock: any[] = [];
  Nifty50 : any[] = [];
  WorstNifty50: any[] = [];

  constructor(private stockService: StocksService) {}
  ngOnInit() {
    this.stockService.getStocks().subscribe(async (data) => {
      //console.log(data[0]);
      data.sort((a, b) => a.pChange - b.pChange);
      this.Beststock = data;
      data.reverse();
      this.WorstStock = [...data].reverse();

      console.log(this.Beststock);
      console.log(this.WorstStock);
    });

    this.stockService.getNifty().subscribe(async (data) => {
      console.log(data);
      this.Nifty50 = data;
      this.WorstNifty50 = [...data].reverse();
    } )
  }
}
