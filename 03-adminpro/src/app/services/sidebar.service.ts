import { Injectable } from '@angular/core';
import { MenuItem } from '../interfaces/MenuItem';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  public menu: MenuItem[] = [
    {
      title: "Dashboard",
      icon: "mdi mdi-gauge",
      submenu: [
        {
          title: "Progressbar",
          url: "progress"
        },
        {
          title: "Promises",
          url: "promises"
        },
        {
          title: "Rxjs",
          url: "rxjs"
        },
      ]
    }
  ];

  loadMenu() {
    this.menu = JSON.parse(localStorage.getItem('menu') ?? "") || [];
  }
}
