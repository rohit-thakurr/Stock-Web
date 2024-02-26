import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './Components/main/main.component';
import { NavComponent } from './Components/nav/nav.component';
import { HomeComponent } from './Components/home/home.component';
import { ErrorComponent } from './Components/error/error.component';
import { StocksComponent } from './Components/stocks/stocks.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NewsComponent } from './Components/news/news.component';
import { HttpClientModule } from '@angular/common/http';
import { ToBillionPipe } from './Pipes/to-billion.pipe';
import { FormsModule } from '@angular/forms';
import { NiftyComponent } from './Components/nifty/nifty.component';
import { OverviewComponent } from './Components/overview/overview.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    NavComponent,
    HomeComponent,
    ErrorComponent,
    StocksComponent,
    NewsComponent,
    ToBillionPipe,
    NiftyComponent,
    OverviewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
