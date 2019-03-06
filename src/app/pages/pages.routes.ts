import { RouterModule, Routes } from '@angular/router';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { FilesComponent } from './files/files.component';

import { LoginGuardGuard } from '../services/service.index';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';

const pagesRoutes: Routes = [
    {
        path: '',
        component: PagesComponent,
        canActivate: [ LoginGuardGuard ],
        children: [
            { path: 'dashboard', component: DashboardComponent },
            { path: 'progress', component: ProgressComponent },
            { path: 'graficas1', component: Graficas1Component },
            { path: 'promesas', component: PromesasComponent },
            { path: 'files', component: FilesComponent },
            { path: 'rxjs', component: RxjsComponent },
            { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
        ]
     }
];



export const PAGES_ROUTES = RouterModule.forChild( pagesRoutes );
