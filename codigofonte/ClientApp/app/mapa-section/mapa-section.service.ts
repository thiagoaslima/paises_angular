import { Injectable } from "@angular/core";
import { RouterParamsService } from "../shared/router-params.service";
import { RankingService } from "./ranking/ranking.service";

@Injectable()
export class MapaSectionService {

    constructor(
        private _routerParams: RouterParamsService,
        private _rankingService: RankingService
    ){
        this._routerParams.params$.subscribe( ({params}) => {

        });
    }

    
}