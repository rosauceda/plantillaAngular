import { Injectable } from '@angular/core';
import { User } from '../../models/user.model';
import { HttpClient } from '@angular/common/http';
import { SERVER_API } from '../../config/config';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    public http: HttpClient
  ) {
    console.log('Peticion post lista');
  }

  register( usuario: User) {

    let url = SERVER_API + '/register';

    return this.http.post( url, User );


  }
}
