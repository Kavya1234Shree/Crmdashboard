import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from '@angular/core';
import { RouterModule ,Routes} from '@angular/router';
import { ToastrModule } from "ngx-toastr";
import { MatFormFieldModule,MatInputModule, } from '@angular/material';
import {  MatDialogModule, MAT_DIALOG_DATA } from  '@angular/material';
import { SidebarModule } from './sidebar/sidebar.module';
import { FooterModule } from './shared/footer/footer.module';
import { NavbarModule} from './shared/navbar/navbar.module';
import { FixedPluginModule} from './shared/fixedplugin/fixedplugin.module';

import { AppComponent } from './app.component';
import { AppRoutes } from './app.routing';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { MapDialogComponent } from './pages/map-dialog/map-dialog.component';
import { RegDialogComponent } from './pages/reg-dialog/reg-dialog.component';
import { TypoDialogComponent } from './pages/typo-dialog/typo-dialog.component';
import { UserDialogComponent } from './pages/user-dialog/user-dialog.component';
import { ContractListComponent } from './contract-list/contract-list.component';
import { ContractorDialogComponent } from './contractor-dialog/contractor-dialog.component';


// import { HousewareComponent } from './pages/icons/houseware/houseware.component';


@NgModule({
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    MapDialogComponent,
    RegDialogComponent,
    TypoDialogComponent,
    UserDialogComponent,
    // ContractListComponent,
    ContractorDialogComponent,
    
    // HousewareComponent,
    // HousewareComponent
  ],
  imports: [
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
   
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule, 
RouterModule.forRoot(AppRoutes,{
      useHash: false
    }),
    SidebarModule,
    NavbarModule,
    ToastrModule.forRoot(),
    FooterModule,
    FixedPluginModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [MapDialogComponent,RegDialogComponent,TypoDialogComponent,UserDialogComponent,ContractorDialogComponent]
})
export class AppModule { }
