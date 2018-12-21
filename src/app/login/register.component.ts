import { Component, OnInit, Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import swal from 'sweetalert';
import { UserService } from '../services/service.index';
import { User } from '../models/user.model';
import { Router } from '@angular/router';

import { Observable } from 'rxjs';


declare function init_plugins();

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./login.component.css']
})
export class RegisterComponent implements OnInit {

  forma: FormGroup;

  constructor(
    public _userService: UserService,
    public router: Router
  ) { }

  vPass( c1: string, c2: string ) {

    return ( group: FormGroup ) => {

      let pass1 = group.controls[c1].value;
      let pass2 = group.controls[c2].value;

      if (pass1 === pass2) {
        return null;
      }
      return {
        vPass: true,
      };
    };
  }

  ngOnInit() {

    init_plugins();

    this.forma = new FormGroup({
      name: new FormControl(null, Validators.required ),
      last_name: new FormControl( null, Validators.required ),
      email: new FormControl(null, [Validators.required, Validators.email] ),
      password: new FormControl(null, Validators.required),
      passwordConfirm: new FormControl(null, Validators.required),
      cond: new FormControl( false ),
    }, { validators: this.vPass( 'password', 'passwordConfirm')  } );

  }

      registerUser() {

        if ( this.forma.invalid ) {
          return;
        }

        if ( !this.forma.value.cond ) {
          swal("Alert!", "You accept the conditions!", "warning");
          return;
        }

        // console.log( 'form valid', this.forma.valid );

      // console.log( this.forma.value );

      let user = new User(
        this.forma.value.name,
        this.forma.value.last_name,
        this.forma.value.email,
        this.forma.value.password,
      );

      console.log(user);

      this._userService.register( user )
        .subscribe( resp => {
              console.log( resp );
              this.router.navigate(['login']);
            });
    }

}
