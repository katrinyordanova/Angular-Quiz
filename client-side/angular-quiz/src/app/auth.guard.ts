import { Injectable } from "@angular/core";
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { UserService } from './user/user.service';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {
    
    constructor(private userService: UserService,
                private route: Router ) { }

    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        if(localStorage.getItem('current-user') !== null) {
            return true;
        }else {
            this.route.navigate(['']);
            return false;
        }
    }
    // canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    //         return this.userService.isLogged === route.data.isLogged

    // }
}