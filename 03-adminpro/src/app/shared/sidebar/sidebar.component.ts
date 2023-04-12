import { Component } from '@angular/core';
import { MenuItem } from 'src/app/interfaces/MenuItem';
import { SidebarService } from 'src/app/services/sidebar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
  ]
})
export class SidebarComponent {

  menuItems: MenuItem[];
  constructor(private sidebarService: SidebarService){
    this.menuItems = this.sidebarService.menu;
  }
}
