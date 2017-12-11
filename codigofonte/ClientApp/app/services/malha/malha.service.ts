import { Injectable } from "@angular/core";
import { topojson as malha } from './paises.topojson';

import * as T from 'topojson';

@Injectable()
export class MalhaService {
    private geojson: any;
    private malha = malha;

    constructor() {
        this.geojson = T.feature(this.malha, this.malha.objects.countries);
    }

    public getMalhaTopoJSON() {
        return this.malha;
    }

    public getMalhaGeoJSON() {
        return this.geojson;
    }

}
