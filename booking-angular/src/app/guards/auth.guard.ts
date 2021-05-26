import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import { Observable } from 'rxjs';
import {AuthService} from "../services/auth.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  private url: string;

  constructor(private authService: AuthService,
              private router: Router) {
  }
  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): Observable<boolean | UrlTree> |
                                          Promise<boolean | UrlTree> |
                                          boolean | UrlTree {
    this.url = state.url;
    return this.authService.isAuthenticated ?
      this.handleAuthState() : this.handleNotAuthState();

  }

  private handleAuthState(): boolean {
    if(this.isAuthPage) {
      this.router.navigate(['/rentals']).then();
      return false;
    }
    return true;
  }

  private handleNotAuthState(): boolean {
    if(this.isAuthPage) {
      return true;
    }
    this.router.navigate(['/login']).then();
    return false;
  }


  private get isAuthPage(): boolean {
    if(this.url.includes('login') || this.url.includes('register')) {
      return true;
    }
    return false;
  }


}
