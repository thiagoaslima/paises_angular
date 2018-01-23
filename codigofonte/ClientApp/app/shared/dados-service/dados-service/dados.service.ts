import { Injectable } from "@angular/core";

import { Configuration, ConfigurationItem, Consulta } from "../dados.interface";
import { Observable } from "rxjs/Observable";

@Injectable()
export class DadosService {
    private _id = 0;
    private _registers = {} as { [serviceName: string]: any };

    public getDados(configuration: Configuration | Configuration[]) {
        const _configuration = Array.isArray(configuration) ? configuration : [configuration];
        const consultas = [] as Consulta[];

        _configuration.forEach(config => {
            config.itens.forEach(item => {
                item._id = this._id;
                consultas.push(this.toConsulta(item));
            });
        });


        return Observable.zip(
            ...consultas.map(consulta => this._dispatch(consulta))
        )
    }

    public registerService({serviceName, service}: {serviceName: string, service: any}) {
        if (this._registers[serviceName]) {
            throw new Error(`O serviço ${serviceName} já foi registrado!`);
        }

        if (!service.getDados || typeof service.getDados !== 'function') {
            throw new Error(`O serviço ${serviceName} não apresenta a interface necessária!`);
        }

        this._registers[serviceName] = service;
    }

    public toConsulta(item: ConfigurationItem): Consulta {
        return {
            escopo: item.escopo,
            identificador: item.identificador
        }
    }

    private _dispatch(consulta: ConfigurationItem) {
        let { servico } = consulta.escopo;
        
        if (!this._registers[servico]) {
            throw new Error(`O serviço ${servico} não foi registrado!`);
        }

        return this._registers[servico].getDados(consulta);
    }

}