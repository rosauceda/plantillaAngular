import { RouterModule, Routes, Router } from '@angular/router';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';

<<<<<<< HEAD
=======
import { LoginGuardGuard } from '../services/guards/login-guard.guard';
import { PromesasComponent } from './promesas/promesas.component';

>>>>>>> origin/master
const pagesRoutes: Routes = [
    {
        path: '',
        component: PagesComponent,
        children: [
            { path: 'dashboard', component: DashboardComponent },
            { path: 'progress', component: ProgressComponent },
            { path: 'graficas1', component: Graficas1Component },
<<<<<<< HEAD
=======
            { path: 'promesas', component: PromesasComponent },
>>>>>>> origin/master
            { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
        ]
     }
];



export const PAGES_ROUTES = RouterModule.forChild( pagesRoutes );
