import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  SidebarService,
  SharedService,
  UserService,
  LoginGuardGuard
} from './service.index';


@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    SidebarService,
    SharedService,
    UserService,
    LoginGuardGuard
  ],
  declarations: []
})
export class ServiceModule { }
