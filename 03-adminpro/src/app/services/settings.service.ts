import { Injectable, Input } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  private themeLink = document.querySelector('#theme');
  private links: NodeListOf<Element>;
  public setLinks(links: NodeListOf<Element>) {
    this.links = links;
  }

  constructor() {
    const localTheme = localStorage['theme'] ?? './assets/css/colors/blue-dark.css';
    this.themeLink?.setAttribute('href', localTheme);  
  }

  changeTheme(theme: string) {
    const url = `./assets/css/colors/${theme}.css`;
    this.themeLink?.setAttribute('href', url);
    localStorage.setItem('theme', url);
    this.setSelectedTheme();
  }

  setSelectedTheme() {
    const currentTheme = this.themeLink?.getAttribute('href');

    this.links.forEach(element => {
      element.classList.remove('working');
      const btnTheme = element.getAttribute('data-theme');
      const btnThemeUrl = `./assets/css/colors/${btnTheme}.css`;

      if (btnThemeUrl === currentTheme) {
        element.classList.add('working');
        return;
      }
    });
  }
}
