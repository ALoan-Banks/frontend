import { Component } from '@angular/core';
import { ThemeService } from './services/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'banking-frontend-angular';
  isDarkMode: string = 'dark';

  constructor(private themeService: ThemeService) {}

  public ngOnInit(): void {
    this.themeService.isDarkMode.subscribe((isDarkMode) => {
      this.isDarkMode = isDarkMode;
    });
  }
}
