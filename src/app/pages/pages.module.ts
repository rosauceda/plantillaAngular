<<<<<<< HEAD
import { NgModule } from '@angular/core';
=======
import { NgModule, Component } from '@angular/core';
>>>>>>> origin/master

import { SharedModule } from '../shared/shared.module';
import { PAGES_ROUTES } from './pages.routes';

<<<<<<< HEAD
import { PagesComponent } from './pages.component';

import { FormsModule } from '@angular/forms';
=======
// ng2-charts
import { ChartsModule } from 'ng2-charts';

import { PagesComponent } from './pages.component';
>>>>>>> origin/master

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
<<<<<<< HEAD
import { from } from 'rxjs';
=======

import { IncrementComponent } from '../components/increment/increment.component';
import { GraficoDonaComponent } from '../components/grafico-dona/grafico-dona.component';

// temporal
import { FormsModule } from '@angular/forms';
import { PromesasComponent } from './promesas/promesas.component';
>>>>>>> origin/master

@NgModule({
    declarations: [
        PagesComponent,
        DashboardComponent,
        ProgressComponent,
<<<<<<< HEAD
        Graficas1Component
=======
        Graficas1Component,
        IncrementComponent,
        GraficoDonaComponent,
        PromesasComponent
>>>>>>> origin/master
    ],
    exports: [
        PagesComponent,
        DashboardComponent,
        ProgressComponent,
        Graficas1Component
    ],
    imports: [
        SharedModule,
        PAGES_ROUTES,
<<<<<<< HEAD
        FormsModule
=======
        FormsModule,
        ChartsModule
>>>>>>> origin/master
      ],
})

export class PagesModule { }
