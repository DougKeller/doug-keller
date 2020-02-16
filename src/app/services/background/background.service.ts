import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BackgroundService {
  backgroundClass?: string;

  constructor() {
    this.backgroundClass = undefined;
  }

  setBackground(option: string): void {
    this.clearBackground();
    this.backgroundClass = option;
    document.querySelector('.dynamic-background').classList.add(this.backgroundClass);
  }

  clearBackground(): void {
    if (this.backgroundClass) {
      document.querySelector('.dynamic-background').classList.remove(this.backgroundClass);
    }
    this.backgroundClass = undefined;
  }
}
