import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Account } from 'src/app/models/account';
import { Transaction } from 'src/app/models/transaction';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-recent-transactions',
  templateUrl: './recent-transactions.component.html',
  styleUrls: ['./recent-transactions.component.css'],
})
export class RecentTransactionsComponent implements OnInit {
  recentTransactions: Transaction[] = [];

  accountName: FormControl = new FormControl(['']);
  balance: FormControl = new FormControl(['']);
  accountDescription: FormControl = new FormControl(['']);

  userAccount: Account = {
    id: 0,
    name: '',
    balance: 0,
    description: '',
    creationDate: undefined,
  };
  accountMessage: string = '';
  balanceStyle: { color: string } = { color: '' };

  constructor(private accountService: AccountService) {}

  ngOnInit(): void {
    this.getAccount();
    this.getRecentTransactions();
  }

  selectedOption: string = '5';

  onOptionChanged() {
    this.getRecentTransactions(Number(this.selectedOption));
  }

  getRecentTransactions(limit: number = 5) {
    this.accountService
      .getRecentTransactions(this.accountService.accountId, limit)
      .subscribe({
        next: (response) => {
          this.recentTransactions = response;
        },
        error: () => {
          console.log('Error retrieving recent transactions');
        },
        complete: () => {
          this.recentTransactions.forEach((transaction) => {
            const num = transaction.amount;
            transaction.amount = Number(num.toFixed(2));
          });
        },
      });
  }

  getAccount() {
    this.accountService.getAccount().subscribe({
      next: (response) => {
        this.userAccount = new Account(
          response.id,
          response.name,
          response.balance,
          response.description,
          response.creationDate
        );
      },
      error: () => {
        this.accountMessage = 'No account was found, please create one!';
      },
      complete: () => {
        this.accountMessage =
          'Account was successfully retrieved from the database.';
        const num = this.userAccount.balance;
        this.userAccount.balance = +num.toFixed(2);

        if (num < 0) {
          this.balanceStyle = {
            color: '#ff0000',
          };
        } else {
          this.balanceStyle = {
            color: '#5dff5d',
          };
        }

        this.accountName.setValue(this.userAccount.name);
        this.balance.setValue(this.userAccount.balance);
        this.accountDescription.setValue(this.userAccount.description);
      },
    });
  }
}
