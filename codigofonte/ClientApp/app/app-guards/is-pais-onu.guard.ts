import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';

import { LocalidadeService, Pais } from '../shared';

@Injectable()
export class isPaisOnuGuard implements CanActivate {
    constructor(
        private localidadeService: LocalidadeService,
        private router: Router
    ) {}

    canActivate(routeSnapshot: ActivatedRouteSnapshot) {
        let pais = null;

        if (routeSnapshot.params.pais) {
            pais = this.localidadeService.getPaisBySlug(
                routeSnapshot.params.pais
            );
        }

        if (Boolean(pais) && (<Pais>pais).onu) {
            return true;
        }

        if (pais) {
            this.router.navigate(['/mapa', pais.slug]);
        }

        return false;
    }
}
