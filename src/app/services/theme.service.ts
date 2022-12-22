import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  public isDarkMode = new BehaviorSubject<string>('dark');

  public toggle(): void {
    if (this.isDarkMode.value === '') {
      this.isDarkMode.next('dark');
    } else {
      this.isDarkMode.next('');
    }
  }

  constructor() {}
}
