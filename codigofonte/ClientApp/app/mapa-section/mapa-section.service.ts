import { Injectable, Inject } from "@angular/core";
import { RouterParamsService } from "../shared/router-params.service";
import { PaisesService } from "../shared/paises-service/paises.service";
import { LocalidadeService } from "../shared/localidade/localidade.service";
import { MalhaService } from "../shared/malha/malha.service";
import { Ranking } from "../shared/paises-service/interfaces/Ranking";

import { Observable } from "rxjs/Observable";
import { map } from "rxjs/operators/map";
import { Pais } from "../shared/index";
import { MAP_STYLES } from "./mapa.configurations";

import { GeoJsonObject, Feature, GeometryCollection, FeatureCollection } from "geojson";

@Injectable()
export class MapaSectionService {
    private _malha: {
        original: boolean,
        modified: boolean,
        geojson: FeatureCollection<any, any>
    } | null = null;

    constructor(
        private _localidadeService: LocalidadeService,
        private _malhaService: MalhaService,
        private _paisesService: PaisesService,
        @Inject('SPECIAL_VALUES') private _specialValues: { values: { [key: string]: string } }
    ) { }

    getIndicador(indicadorId: number) {
        return this._paisesService.getMetadataIndicador(indicadorId, 'one');
    }

    getMapa() {
        if (!this._malha || !this._malha.original) {
            const malha = this._malhaService.getMalhaGeoJSON();

            this._malha = {
                original: true,
                modified: false,
                geojson: {
                    type: malha.type,
                    features: malha.features.map((feature: Feature<any>) => {
                        const _feature = {
                            type: feature.type,
                            properties: Object.assign({}, feature.properties, {style: MAP_STYLES.polygons.default}),
                            geometry: {
                                type: feature.geometry.type,
                                coordinates: [...feature.geometry.coordinates]
                            }
                        };

                        return _feature;
                    })
                }
            };
        }

        return this._malha.geojson;
    }

}


