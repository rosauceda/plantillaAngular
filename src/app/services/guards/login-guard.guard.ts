import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UserService } from '../user/user.service';


@Injectable()
export class LoginGuardGuard implements CanActivate {

  constructor(
    public _userService: UserService,
    public router: Router
    ) {}
  canActivate() {

    if ( this._userService.isLogin() ) {
      console.log('Paso por el Login Guard');
      return true;
    } else {
      console.log('Blocked Login Guard');
      this.router.navigate(['/login']);
      return false;
    }
  }
}
