import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot } from '@angular/router';

import { LocalidadeService } from '../shared';

@Injectable()
export class isPaisGuard implements CanActivate {
    constructor(private localidadeService: LocalidadeService) {}

    canActivate(routeSnapshot: ActivatedRouteSnapshot) {
        let pais = null;

        if (routeSnapshot.params.pais) {
            pais = this.localidadeService.getPaisBySlug(
                routeSnapshot.params.pais
            );
        }

        return Boolean(pais);
    }
}
