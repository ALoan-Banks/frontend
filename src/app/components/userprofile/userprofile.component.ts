import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { AccountService } from 'src/app/services/account.service';


@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {

  constructor(private AccountService: AccountService, private router: Router) { }

  currentAccount: User = { //waiting for Sergio to update User model on frontend
    id: 0,
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    address: '',
    phoneNumber: '',
  };

  ngOnInit(): void {
    this.AccountService.getAccount().subscribe();
  }

}
