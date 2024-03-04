import { Component, OnInit } from '@angular/core';
import { } from '@fortawesome/free-solid-svg-icons';
import { NewsService } from 'src/app/Services/news.service';


@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit{
  
  ListOfNewsNames: any[] = ["coindesk","cointelegraph","bitcoinist","decrypt","bsc","theguardian"];
  ListOfNews: any[] = [];
  constructor(private newsService: NewsService){}

  ngOnInit() {
   
      this.newsService.getNews('bsc').subscribe((data) => {
        console.log(data);
      })
    

   
  }


}
