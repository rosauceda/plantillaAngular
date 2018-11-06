import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

declare function init_plugins();

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  remember: boolean = false;

  constructor( public router: Router) { }

  ngOnInit() {
    init_plugins();
  }

  ingresar( forma:  NgForm ) {

    console.log( forma.valid );
    console.log( forma.value );
    // console.log( "ingresando...." );
    // this.router.navigate([ '/dashboard' ]);
  }

}
