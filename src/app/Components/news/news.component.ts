import { Component, OnInit } from '@angular/core';
import { } from '@fortawesome/free-solid-svg-icons';
import { NewsService } from 'src/app/Services/news.service';


@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit{
  
 ListOfNews: any[] = [];
  constructor(private newsService: NewsService){}

  ngOnInit() {
   
      // this.newsService.getNews('bsc').subscribe((data) => {
      //   console.log(data);
      // })

      this.newsService.getNewsCrypto().subscribe((data) => {
        this.ListOfNews = data.articles;
        console.log(this.ListOfNews);
      })
      

   
  }

  redirectToNewPage(url: string): void {
    window.open(url, '_blank');
  }


}
