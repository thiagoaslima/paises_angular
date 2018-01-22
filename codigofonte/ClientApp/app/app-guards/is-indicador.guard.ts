import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot } from '@angular/router';

@Injectable()
export class isIndicadorGuard implements CanActivate {

    constructor() { }

    canActivate(routeSnapshot: ActivatedRouteSnapshot) {
        console.log('indicador')
        
        switch (routeSnapshot.params.indicador) {
            case 'indicador':
                console.log('indicador', true)
                return true;

            default:
                console.log('indicador', false)
                return false;
        } 
    }
}