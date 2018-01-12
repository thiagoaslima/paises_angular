import { Injectable } from "@angular/core";
import { CanActivate, Router, ActivatedRouteSnapshot } from "@angular/router";

import { isPaisGuard } from "./is-pais.guard";
import { isIndicadorGuard } from "./is-indicador.guard";

@Injectable()
export class RouteParametersGuard implements CanActivate {

    constructor(
        private isPais: isPaisGuard,
        private isIndicador: isIndicadorGuard,
        private router: Router
    ) { }

    canActivate(routeSnapshot: ActivatedRouteSnapshot) {

        const newParams = {
            params: {
                indicador: routeSnapshot.params.indicadorORpais,
                pais: routeSnapshot.params.indicadorORpais
            }
        }

        const newSnapshot = Object.assign({}, routeSnapshot, newParams);

        if (this.isPais.canActivate(newSnapshot)) {
            this.router.navigate(['dados', routeSnapshot.params.indicadorORpais]);
            return false;
        }

        if (this.isIndicador.canActivate(newSnapshot)) {
            this.router.navigate(['ranking', routeSnapshot.params.indicadorORpais]);
            return false;
        }

        return this.router.navigate(['404']);
    }
}