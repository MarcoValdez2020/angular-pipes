import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';


@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
  styles: [
  ]
})
export class MenuComponent implements OnInit {
  menuItems: MenuItem[] = [];

  constructor() { }

  ngOnInit() {
    this.menuItems = [
      {
        label: 'Pipes de Angular',
        icon: 'pi pi-desktop',
        items: [
          { label: 'Textos y Fechas', icon: 'pi pi-align-left', routerLink: '/' },
          { label: 'Numeros', icon: 'pi pi-dollar', routerLink: 'numbers' },
          { label: 'No comunes', icon: 'pi pi-globe', routerLink: 'uncommon' },
        ]
      },
      {
        label: 'Pipes personalizados',
        icon: 'pi pi-spin pi-cog',
        items: [
          { label: 'Creados por mí', icon: 'pi pi-folder', routerLink: 'custom' },
        ]
      }


    ];
  }


}
