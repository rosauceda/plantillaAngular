import { NgModule, Component } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { PAGES_ROUTES } from './pages.routes';

// ng2-charts
import { ChartsModule } from 'ng2-charts';

import { PagesComponent } from './pages.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { FilesComponent } from './files/files.component';

import { IncrementComponent } from '../components/increment/increment.component';
import { GraficoDonaComponent } from '../components/grafico-dona/grafico-dona.component';

// temporal
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';

// Datatables
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
// import {BrowserModule} from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';


// Upload files
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatDialogModule, MatListModule, MatProgressBarModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
// import { UploadComponent } from './upload.component';
// import { FilesComponent } from '../pages/files/files.component';
import { UploadService } from '../services/files/file.service';
import { DialogComponent } from '../components/dialog/dialog.component';





@NgModule({
    declarations: [
        PagesComponent,
        DashboardComponent,
        ProgressComponent,
        Graficas1Component,
        IncrementComponent,
        GraficoDonaComponent,
        PromesasComponent,
        RxjsComponent,
        FilesComponent,
        DialogComponent

    ],
    exports: [
        PagesComponent,
        DashboardComponent,
        ProgressComponent,
        Graficas1Component,
        FilesComponent
    ],
    imports: [
        SharedModule,
        PAGES_ROUTES,
        FormsModule,
        ReactiveFormsModule,
        ChartsModule,
        NgbModule,
        BrowserModule,

        CommonModule,
        MatButtonModule,
        MatDialogModule,
        MatListModule,
        FlexLayoutModule,
        HttpClientModule,
        BrowserAnimationsModule,
        MatProgressBarModule
      ],

      entryComponents: [FilesComponent, DialogComponent], // Add the DialogComponent as entry component
      providers: [UploadService]
})

export class PagesModule { }
