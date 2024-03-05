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
  searchTerm: string = "CryptoCurrency";
  search: string = "";
  constructor(private newsService: NewsService){}

  ngOnInit() {
   
      // this.newsService.getNews('bsc').subscribe((data) => {
      //   console.log(data);
      // })

      this.newsService.getNewsCrypto(this.searchTerm).subscribe((data) => {
        this.ListOfNews = data.articles;
        console.log(this.ListOfNews);
      })
      

   
  }

  redirectToNewPage(url: string): void {
    window.open(url, '_blank');
  }

  searchNews() : void {
    this.searchTerm = this.search;
    console.log(this.searchTerm);

    this.newsService.getNewsCrypto(this.searchTerm).subscribe((data) => {
      this.ListOfNews = data.articles;
      console.log(this.ListOfNews);
    })
  }

}
