import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, ObservedValuesFromArray } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Account } from '../models/account';
import { Transaction } from '../models/transaction';

@Injectable({
  providedIn: 'root',
})
export class AccountService { //import AccountService into user profile component
  userId!: string;
  accountUrl: string = environment.url + 'account';
  accountId: string = '';

  constructor(private http: HttpClient) {
    this.refreshUser();
  }

  getAccount(): Observable<Account> { //use this method to get the account to populate the user profile
    this.refreshUser();
    return this.http.get<Account>(this.accountUrl + `/${this.userId}`, {
      headers: environment.headers,
      withCredentials: environment.withCredentials,
    });
  }

  getTransactions(accountId: string): Observable<Transaction[]> {
    return this.http.get<Transaction[]>(
      this.accountUrl + `/${accountId}/transaction`,
      {
        headers: environment.headers,
        withCredentials: environment.withCredentials,
      }
    );
  }

  getRecentTransactions(
    accountId: string,
    limit: number
  ): Observable<Transaction[]> {
    return this.http.get<Transaction[]>(
      this.accountUrl + `/${accountId}/${limit}/transactionTop`,
      {
        headers: environment.headers,
        withCredentials: environment.withCredentials,
      }
    );
  }

  getIncomes(accountId: string): Observable<Transaction[]> {
    return this.http.get<Transaction[]>(
      this.accountUrl + `/${accountId}/income`,
      {
        headers: environment.headers,
        withCredentials: environment.withCredentials,
      }
    );
  }

  upsertAccount(account: Account): Observable<Account> {
    environment.headers['Current-User'] = this.userId;
    return this.http.post<Account>(this.accountUrl, account, {
      headers: environment.headers,
      withCredentials: environment.withCredentials,
    });
  }

  createTransaction(
    accountId: string,
    txn: Transaction
  ): Observable<Transaction> {
    return this.http.post<Transaction>(
      this.accountUrl + `/${accountId}/transaction`,
      txn,
      {
        headers: environment.headers,
        withCredentials: environment.withCredentials,
      }
    );
  }

  refreshUser = () => {
    this.userId = localStorage.getItem('current-user') || '';
    this.accountId = localStorage.getItem('current-account') || '';
  };
}
