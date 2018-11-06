import { Injectable } from '@angular/core';
import { User } from '../../models/user.model';
import { HttpClient } from '@angular/common/http';
import { SERVER_API } from '../../config/config';

// import 'rxjs/add/operator/map';
// import { map } from 'rxjs/operators';
import { map, filter, switchMap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    public http: HttpClient
  ) {
    console.log('Peticion post lista');
  }

  // login( user: User) {

  // }

  register( usuario: User) {

    let url = SERVER_API + '/register';

    return this.http.post( url, usuario ),
          map(  (resp: any) => {

                swal('User Create', usuario.email, 'success' );
                return resp.User;
              });


  }


}
