import { Injectable } from '@angular/core';
import { User } from '../../models/user.model';
import { HttpClient } from '@angular/common/http';
import { SERVER_API } from '../../config/config';
import { Router } from '@angular/router';

// import 'rxjs/add/operator/map';
// import { map } from 'rxjs/operators';
// import { map, filter, switchMap } from 'rxjs/operators';
import 'rxjs/Rx';


@Injectable()
export class UserService {

  data: User;
  token: string;

  constructor(
    public http: HttpClient,
    public router: Router
    ) {
    console.log('Peticion post lista');
    this.loadStorage();
  }

  saveStorage( token: string, data: User ) {
    localStorage.setItem('token', token );
    localStorage.setItem('data', JSON.stringify(data) );

    this.data = data;
    this.token = token;
  }

  loadStorage() {
    if ( localStorage.getItem('token')) {
      this.token = localStorage.getItem('token');
      this.data = JSON.parse( localStorage.getItem('data'));
    } else {
      this.token = '';
      this.data = null;
    }
  }

  isLogin() {
    return ( this.token.length > 10 ) ? true : false;
  }

  logout() {
    this.token = '';
    this.data = null;

    localStorage.removeItem('token');
    localStorage.removeItem('data');

    this.router.navigate(['/login']);
  }

  login( user: User, remember: boolean = false ) {
    if ( remember ) {
      localStorage.setItem('email', user.email );
    } else {
      localStorage.removeItem('email');
    }

    let url = SERVER_API + '/login';
    return this.http.post(url, user)
                .map( (resp: any) => {
                  this.saveStorage( resp.token, resp.data );
                  // localStorage.setItem('token', resp.token );
                  // localStorage.setItem('data', JSON.stringify(resp.data) );
                  return true;
                });

  }

  register( usuario: User) {

    let url = SERVER_API + '/register';

    return this.http.post( url, usuario )
      .map(  (resp: any) => {
            swal('User Create', usuario.email, 'success' );
            return resp.User;
          });

  }


}
