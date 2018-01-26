import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot } from '@angular/router';

@Injectable()
export class isIndicadorGuard implements CanActivate {

    constructor() { }

    canActivate(routeSnapshot: ActivatedRouteSnapshot) {
        
        switch (routeSnapshot.params.indicador) {
            case 'indicador':

                return true;

            default:

                return false;
        } 
    }
}