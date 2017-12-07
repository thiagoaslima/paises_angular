import { Injectable } from "@angular/core";
import { topojson as malha } from './paises.topojson';

import * as T from 'topojson';

@Injectable()
export class MalhaService {
    private geojson: any;

    constructor() {
        this.geojson = T.feature(malha, malha.objects.countries);
    }

    public getMalhaTopoJSON() {
        return malha;
    }

    public getMalhaGeoJSON() {
        return this.geojson;
    }

}
