import { StatusupComponent } from './../../pages/statusup/statusup.component';
import { ListContractComponent } from './../../pages/list-contract/list-contract.component';
import { HousewareComponent } from './../../pages/houseware/houseware.component';
import { RegistrationComponent } from './../../pages/registration/registration.component';


import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { UserComponent } from '../../pages/user/user.component';
import { TableComponent } from '../../pages/table/table.component';
import { TypographyComponent } from '../../pages/typography/typography.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { NotificationsComponent } from '../../pages/notifications/notifications.component';

import { UpgradeComponent } from '../../pages/upgrade/upgrade.component';
import { ContractComponent } from 'app/pages/contract/contract.component';
import { ContractListComponent } from 'app/contract-list/contract-list.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user',           component: UserComponent },
    { path: 'table',          component: TableComponent },
    { path: 'typography',     component: TypographyComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'notifications',  component: NotificationsComponent },
    { path: 'registration',  component: RegistrationComponent },
    { path: 'upgrade',        component: UpgradeComponent },
    { path: 'houseware',        component: HousewareComponent },
    { path: 'contract',        component: ContractComponent },
    { path: 'list-contract',        component: ListContractComponent },
    { path: 'statusup',        component: StatusupComponent },
    { path: 'contract-list',        component: ContractListComponent},
    
];
