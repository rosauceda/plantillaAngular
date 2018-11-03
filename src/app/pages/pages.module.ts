import { NgModule, Component } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { PAGES_ROUTES } from './pages.routes';

// ng2-charts
import { ChartsModule } from 'ng2-charts';

import { PagesComponent } from './pages.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';

import { IncrementComponent } from '../components/increment/increment.component';
import { GraficoDonaComponent } from '../components/grafico-dona/grafico-dona.component';

// temporal
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PromesasComponent } from './promesas/promesas.component';

@NgModule({
    declarations: [
        PagesComponent,
        DashboardComponent,
        ProgressComponent,
        Graficas1Component,
        IncrementComponent,
        GraficoDonaComponent,
        PromesasComponent
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
        FormsModule,
        ReactiveFormsModule,
        ChartsModule
      ],
})

export class PagesModule { }
