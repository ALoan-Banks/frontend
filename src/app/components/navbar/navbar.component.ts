import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  loggedIn: boolean = false;
  darkMode = false;
  isDarkMode: string = 'dark';

  constructor(private router: Router, private themeService: ThemeService) {}

  public ngOnInit(): void {
    this.themeService.isDarkMode.subscribe((isDarkMode) => {
      this.isDarkMode = isDarkMode;
    });
  }

  logout() {
    localStorage.removeItem('current-user');
    localStorage.removeItem('current-account');
    this.router.navigateByUrl('/login');
  }

  income() {
    this.router.navigateByUrl('/income');
  }

  profile() {
    localStorage.getItem('current-user');
    this.router.navigateByUrl('/user/profile');
  }

  toggleDarkMode() {
    this.isDarkMode = this.isDarkMode === 'dark' ? '' : 'dark';
    this.themeService.toggle();
  }
}
