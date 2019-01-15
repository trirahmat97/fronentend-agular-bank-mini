import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ServiceLoginService } from '../service/service-login.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private auth: ServiceLoginService, private _router: Router){

  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    // return true;

    console.log('isloggdIn');
    console.log(this.auth.isLoggedIn);
    if(this.auth.isLoggedIn){
      return true;
    }

    this._router.navigate(['login'], {queryParams : {returnUrl: state.url}});
    return false;
  }
}
