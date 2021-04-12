import { ContractListComponent } from 'app/contract-list/contract-list.component';

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { ReactiveFormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { DashboardComponent }       from '../../pages/dashboard/dashboard.component';
import { UserComponent }            from '../../pages/user/user.component';
import { TableComponent }           from '../../pages/table/table.component';
import { TypographyComponent }      from '../../pages/typography/typography.component';
import { IconsComponent }           from '../../pages/icons/icons.component';
import { MapsComponent }            from '../../pages/maps/maps.component';
import { NotificationsComponent }   from '../../pages/notifications/notifications.component';
import { RegistrationComponent } from './../../pages/registration/registration.component';
import { UpgradeComponent }         from '../../pages/upgrade/upgrade.component';
import { HousewareComponent } from '../../pages/houseware/houseware.component';
import { ContractComponent } from '../../pages/contract/contract.component';
import { ListContractComponent } from '../../pages/list-contract/list-contract.component';
import { StatusupComponent } from '../../pages/statusup/statusup.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    NgbModule,
    NgxPaginationModule,
    HttpClientModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule
  ],
  declarations: [
    DashboardComponent,
    UserComponent,
    TableComponent,
    UpgradeComponent,
    TypographyComponent,
    IconsComponent,
    MapsComponent,
    RegistrationComponent,
    NotificationsComponent,
    HousewareComponent,
    ContractComponent,
    ListContractComponent,
    StatusupComponent,
    ContractListComponent
  ]
})

export class AdminLayoutModule {}
