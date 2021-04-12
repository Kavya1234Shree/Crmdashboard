import { Component, OnInit } from '@angular/core';


export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [
    { path: '/dashboard',     title: 'Dashboard',         icon:'nc-bank',       class: '' },
    { path: '/icons',         title: 'Create Suppliers',             icon:'nc-single-02',    class: '' },
    { path: '/maps',          title: 'Suppliers List',              icon:'nc-tile-56',      class: '' },
    { path: '/notifications', title: 'Create Employees',     icon:'nc-single-02',    class: '' },
    { path: '/registration',  title: 'Employees List',icon:'nc-tile-56', class: '' },
   
    //  { path: '/table',         title: 'Create Contractor',        icon:'nc-single-02',    class: '' },
     { path: '/typography',    title: 'Contractor List',        icon:'nc-tile-56', class: '' },
     { path: '/contract-list',    title: 'Contract List',        icon:'nc-tile-56', class: '' },
      { path: '/upgrade',       title: 'Import Product',    icon:'nc-single-02',  class: '' },
      { path: '/user',          title: 'Product List',      icon:'nc-tile-56',  class: '' },
      { path: '/houseware',          title: 'Houseware report',      icon:'nc-tile-56',  class: '' },
   
    
];

@Component({
    moduleId: module.id,
    selector: 'sidebar-cmp',
    templateUrl: 'sidebar.component.html',
})

export class SidebarComponent implements OnInit {
    public menuItems: any[];
    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
    }
}
