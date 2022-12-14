import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css'],
})
export class UserprofileComponent implements OnInit {
  constructor(private UserService: UserService, private router: Router) {}

  currentAccount: User = {
    //waiting for Sergio to update User model on frontend
    id: 0,
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    dob: '',
    address: '',
    phone: '',
  };

  ngOnInit(): void {
    this.UserService.getUserAccount().subscribe((user) => {
      this.currentAccount = user;
      console.log(user);
    });
  }
}
