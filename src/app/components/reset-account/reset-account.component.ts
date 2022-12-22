import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-reset-account',
  templateUrl: './reset-account.component.html',
  styleUrls: ['./reset-account.component.css'],
})
export class ResetAccountComponent implements OnInit {
  email: FormControl = new FormControl(['']);
  newPassword: FormControl = new FormControl(['']);
  dob: FormControl = new FormControl(['']);

  noticeMessage: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  resetPassword(_email: string, _newPassword: string, _dob: string) {
    console.log(`email: ${_email}, password: ${_newPassword}, dob: ${_dob}`);
    this.authService.resetAccount(_email, _newPassword, _dob).subscribe({
      next: (response) => {
        this.noticeMessage = 'Password Reset Successful';
      },
      error: (err) => {
        if (err.status == 400) {
          this.noticeMessage = 'Please Check Your Credentials';
        } else {
          this.noticeMessage = 'Server Error';
        }
      },
      complete: () => {
        this.router.navigateByUrl('/login');
      },
    });
  }
}
