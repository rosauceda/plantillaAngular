import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';
import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';


const appRoutes: Routes = [
     { path: 'login', component: LoginComponent },
     { path: 'register', component: RegisterComponent },
<<<<<<< HEAD
    { path: '**', component: NopagefoundComponent }
=======
     { path: '**', component: NopagefoundComponent },
     { path: '', redirectTo: '/login', pathMatch: 'full' }
>>>>>>> origin/master
];


export const APP_ROUTES = RouterModule.forRoot( appRoutes, { useHash: true } );

