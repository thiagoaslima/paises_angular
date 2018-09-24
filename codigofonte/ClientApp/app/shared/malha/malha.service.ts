import { Injectable, Inject } from "@angular/core";
import { topojson } from './paises3.topojson';

import * as T from 'topojson';
import { Pais } from "../localidade";
import { Feature, GeometryCollection, FeatureCollection } from "geojson";

@Injectable()
export class MalhaService {
    private geojson: FeatureCollection<any, any>;
    private topojson = topojson;

    constructor() {
        // @ts-ignore
        this.geojson = T.feature(this.topojson, this.topojson.objects.countries);
    }

    public getMalhaTopoJSON() {
        return this.topojson;
    }

    public getMalhaGeoJSON(): FeatureCollection<any, any> {
        return this.geojson;
    }
    
}
