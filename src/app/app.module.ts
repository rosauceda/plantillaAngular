import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Rutas
import { APP_ROUTES } from './app.routes'; 

// Modulos
import { PagesModule } from './pages/pages.module';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';
<<<<<<< HEAD
import { IncrementComponent } from './components/increment/increment.component';
=======

// temporal
import { FormsModule } from '@angular/forms';
>>>>>>> origin/master

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
<<<<<<< HEAD
    RegisterComponent,
    IncrementComponent
=======
    RegisterComponent
>>>>>>> origin/master
  ],
  imports: [
    BrowserModule,
    APP_ROUTES,
    PagesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
