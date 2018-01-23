import { Injectable } from "@angular/core";

import { Configuration, Consulta } from "../dados.interface";
import { getDadosConfiguration } from "./dados.service.mock";
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
            });
            consultas.push(...config.itens);
        });


        return Observable.zip(
            ...consultas.map(consulta => this._dispatch(consulta))
        )
    }

    public registerService({serviceName, service}: {serviceName: string, service: any}) {
        if (this._registers[serviceName]) {
            throw new Error(`O serviço ${serviceName} já foi registrado!`);
        }
        this._registers[serviceName] = service;
    }

    private _dispatch(consulta: Consulta) {
        let { servico } = consulta.escopo;
        
        if (!this._registers[servico]) {
            throw new Error(`O serviço ${servico} não foi registrado!`);
        }

        return this._registers[servico].getDados(consulta);
    }

}