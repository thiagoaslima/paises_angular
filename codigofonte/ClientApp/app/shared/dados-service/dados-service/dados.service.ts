import { Injectable } from "@angular/core";

import { Configuration, Consulta } from "../dados.interface";
import { Observable } from "rxjs/Observable";

@Injectable()
export class DadosService {
   
    getDados(configuration: Configuration | Configuration[]) {
        const _configuration = Array.isArray(configuration) ? configuration : [configuration];
        
        let itens = _configuration.reduce( (agg, config) => agg.concat(config.itens), [] as Consulta[])

        return Observable.zip(
            ...itens.map(item => this.callService(item))
        ).pipe
    }

}