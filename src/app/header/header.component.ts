import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent{
  isDarkMode = false;
  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
    if (this.isDarkMode) {
      this.enableDarkMode();
    } else {
      this.disableDarkMode();
    }
  }

  enableDarkMode() {
    document.body.classList.add('dark-mode');
    localStorage.setItem('dark-mode', 'true');
  }

  disableDarkMode() {
    document.body.classList.remove('dark-mode');
    localStorage.setItem('dark-mode', 'false');
  }
}
