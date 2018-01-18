import { Injectable } from "@angular/core";

import { Configuration } from "../dados.interface";
import { getDadosConfiguration } from "./dados.service.mock";

@Injectable()
export class DadosService {
    
    getDados(configuration: Configuration) {
        return getDadosConfiguration.umServico.umaPesquisa.semLocalidade().resposta;
    }

}