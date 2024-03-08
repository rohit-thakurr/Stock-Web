import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { ErrorComponent } from './Components/error/error.component';
import { MainComponent } from './Components/main/main.component';
import { StocksComponent } from './Components/stocks/stocks.component';
import { NewsComponent } from './Components/news/news.component';
import { OverviewComponent } from './Components/overview/overview.component';
import { CryptoComponent } from './Components/crypto/crypto.component';
import { LoginComponent } from './Components/login/login.component';
import { SignupComponent } from './Components/signup/signup.component';
import { HoldingsComponent } from './Components/holdings/holdings.component';

const routes: Routes = [
  { path : 'home', 
    component: HomeComponent,
    children : [
      {path: 'main', component: MainComponent},
      {path: 'stocks', component: StocksComponent},
      {path: 'crypto', component: CryptoComponent},
      {path: 'news', component: NewsComponent},
      {path: 'holdings', component: HoldingsComponent},
      {path: 'overview/:id', component: OverviewComponent},
      {path: '', redirectTo:'main', pathMatch: 'full'}
  ] },

  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: '', redirectTo: 'home',pathMatch:'full'},
  {path : 'error', component: ErrorComponent },
  {path: '**', redirectTo:'error'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
