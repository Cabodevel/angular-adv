import { Injectable } from '@angular/core';
import { MenuItem } from '../interfaces/MenuItem';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  public menu: MenuItem[] = [
    {
      title: "test1",
      icon: "mdi mdi-gauge",
      submenu: [
        {
          title: "s1",
          url: "progress"
        }
      ]
    }
  ];

  loadMenu() {
    this.menu = JSON.parse(localStorage.getItem('menu') ?? "") || [];
  }
}
