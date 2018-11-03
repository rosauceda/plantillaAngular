import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  SidebarService,
  SharedService,
  UserService
} from './service.index';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    SidebarService,
    SharedService,
    UserService
  ],
  declarations: []
})
export class ServiceModule { }
