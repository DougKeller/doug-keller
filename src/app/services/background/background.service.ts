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
    document.body.classList.add(this.backgroundClass);
  }

  clearBackground(): void {
    if (this.backgroundClass) {
      document.body.classList.remove(this.backgroundClass);
    }
    this.backgroundClass = undefined;
  }
}
