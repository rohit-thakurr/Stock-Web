import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { ErrorComponent } from './Components/error/error.component';
import { MainComponent } from './Components/main/main.component';
import { StocksComponent } from './Components/stocks/stocks.component';
import { NewsComponent } from './Components/news/news.component';

const routes: Routes = [
  { path : 'home', 
    component: HomeComponent,
    children : [
      {path: 'main', component: MainComponent},
      {path: 'stocks', component: StocksComponent},
      {path: 'news', component: NewsComponent},
       {path: '', redirectTo:'main', pathMatch: 'full'}
  ] },

  {path: '', redirectTo: 'home',pathMatch:'full'},
  {path : 'error', component: ErrorComponent },
  {path: '**', redirectTo:'error'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
