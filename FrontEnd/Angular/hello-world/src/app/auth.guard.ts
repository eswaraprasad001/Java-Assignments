import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserServiceService } from './user-service.service';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {
  
  constructor(private authorization:UserServiceService, public router:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      // public router= Router
    //return false;
    if(this.authorization.isLoggedIn())
    {
      alert("Welcome");
      return true;
    }
    else
    {
      alert("You have to login First")
      this.router.navigate(['about']);
      return false
    }
  }


}
