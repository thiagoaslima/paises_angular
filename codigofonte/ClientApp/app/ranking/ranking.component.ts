import { Component } from "@angular/core";
import { PaisesService } from "../shared/paises.service";
import { RouterParamsService } from "../shared/router-params.service";
import { RankingService } from "./ranking.service";

@Component({
    selector: 'paises-ranking',
    templateUrl: './ranking.component.html',
    styleUrls: ['./ranking.component.css'],
    providers: [ RankingService ]
})
export class RankingComponent {
    public dados = [ ] as any[];

    constructor(
        private _routeParams: RouterParamsService,
        private _rankingService: RankingService
    ) {}

    ngOnInit() {
        this._routeParams.params$.subscribe(({params}) => {
            if (params.indicador) {
                this._rankingService
                    .getValores(parseInt(params.indicador, 10))
                    .subscribe(res => { this.dados = res })
            }
        })
    }
}