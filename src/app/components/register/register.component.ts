import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  // In the component class
  form: FormGroup = new FormGroup({});

  noticeMessage: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
      dob: new FormControl('', [
        Validators.required,
        Validators.pattern('MM-DD-YY'),
      ]),
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      phone: new FormControl('', [
        Validators.required,
        Validators.pattern(/^\d{3}-\d{3}-\d{4}$/),
      ]),
      address: new FormControl('', [Validators.required]),
    });
  }

  resetTouched() {
    console.log(`ACTIVE: ${this.form.controls['email'].touched}`);
    this.form.controls['email'].markAsUntouched();
    console.log(`NOT ACTIVE: ${this.form.controls['email'].touched}`);
    console.log(`INVALID: ${this.form.controls['email'].invalid}`);
    this.form.controls['password'].markAsUntouched();
    this.form.controls['dob'].markAsUntouched();
    this.form.controls['firstName'].markAsUntouched();
    this.form.controls['lastName'].markAsUntouched();
    this.form.controls['phone'].markAsUntouched();
    this.form.controls['address'].markAsUntouched();
  }

  attemptRegister() {
    this.authService
      .register(
        this.form.value.email,
        this.form.value.password,
        this.form.value.dob,
        this.form.value.address,
        this.form.value.firstName,
        this.form.value.lastName,
        this.form.value.phone
      )
      .subscribe({
        next: (response) => {
          localStorage.setItem('current-user', '' + response.id);
        },
        error: (err) => {
          if (err.status == 400) {
            this.noticeMessage = 'Please Check Your Registration Info';
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
