import { Injectable } from "@angular/core";
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthenticationService } from './authentication/authentication.service';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {
    
    constructor(private authenticationService: AuthenticationService,
                private route: Router ) { }

    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        if(localStorage.getItem('username') !== null) {
            return true;
        }else {
            this.route.navigate(['']);
            return false;
        }
    }
    // canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    //         return this.authenticationService.isLogged === route.data.isLogged

    // }
}