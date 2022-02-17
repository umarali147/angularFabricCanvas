import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  activeMenuItem: string = 'Templates';
  menuList: any = [
    {
      name: 'Templates',
      icon: 'apps',
      isActive: true,
    },
    {
      name: 'Images',
      icon: 'photo_library',
      isActive: false,
    },
    {
      name: 'Shapes',
      icon: 'interests',
      isActive: false,
    },
    {
      name: 'Text',
      icon: 'text_fields',
      isActive: false,
    },
    {
      name: 'Backgrounds',
      icon: 'wallpaper',
      isActive: false,
    },
  ];
  constructor() {}

  ngOnInit(): void {}

  setActiveMenu(index: number): void {
    this.menuList.forEach((menuItem: any) => {
      menuItem.isActive = false;
    });
    this.menuList[index].isActive = true;
    this.activeMenuItem = this.menuList[index].name;
  }
}
