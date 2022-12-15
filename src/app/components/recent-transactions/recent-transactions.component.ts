import { Component, OnInit } from '@angular/core';
import { Transaction } from 'src/app/models/transaction';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-recent-transactions',
  templateUrl: './recent-transactions.component.html',
  styleUrls: ['./recent-transactions.component.css'],
})
export class RecentTransactionsComponent implements OnInit {
  recentTransactions: Transaction[] = [];

  constructor(private accountService: AccountService) {}

  ngOnInit(): void {
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
}
