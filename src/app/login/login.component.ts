import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { UserService } from '../services/service.index';
import { User } from '../models/user.model';

declare function init_plugins();

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  remember: boolean = false;

  constructor( public router: Router, public _userService: UserService) { }

  ngOnInit() {
    init_plugins();
  }

  ingresar( forma:  NgForm ) {

    if (forma.invalid) {
      return ;
    }
    let usuario = new User(null, null, forma.value.email, forma.value.password );

    this._userService.login( usuario, forma.value.remember )
        .subscribe( resp => {
          console.log( resp );
          this.router.navigate(['/dashboard']);
        });

    console.log( forma.valid );
    console.log( forma.value );
    // console.log( "ingresando...." );
    // this.router.navigate([ '/dashboard' ]);
  }

}
