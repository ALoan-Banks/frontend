import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AccountComponent } from './components/account/account.component';
import { HomeComponent } from './components/home/home.component';
import { IncomeComponent } from './components/income/income.component';
import { RecentTransactionsComponent } from './components/recent-transactions/recent-transactions.component';
import { UserprofileComponent } from './components/userprofile/userprofile.component';
import { ResetAccountComponent } from './components/reset-account/reset-account.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'account', component: AccountComponent },
  { path: 'home', component: HomeComponent },
  { path: 'income', component: IncomeComponent },
  { path: 'recent/transactions', component: RecentTransactionsComponent },
  { path: 'user/profile', component: UserprofileComponent },
  { path: 'reset/account', component: ResetAccountComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
