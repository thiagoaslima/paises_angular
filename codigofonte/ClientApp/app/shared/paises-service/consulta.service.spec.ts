/// <reference types="jest" />

import { ConsultaService } from "./consulta.service";
import { getPesquisaConfiguration } from "../pesquisas-service/pesquisa-consulta.mocks";
import { Consulta } from "./paises-types";
import { PesquisaConsulta } from "../pesquisas-service/pesquisa-consulta";


describe('class ConsultaService', () => {
    let consultaService: ConsultaService;

    beforeEach(() => {
        consultaService = new ConsultaService();
    });

    describe('recebendo configuração só do tipo PesquisaConfiguration', () => {
        let consultas: Consulta[];

        beforeEach(() => {
            let configuration = getPesquisaConfiguration.pesquisasDiferentes.duasPesquisas.umItemCada().configuration;
            consultas = consultaService.toConsultaModel(configuration);
        });

        it('retorna array com 2 itens', () => {
            expect(consultas).toHaveLength(2);
        });

        it('retorna instâncias de PesquisaConfiguration', () => {
            let tipo = consultas.every(consulta => consulta instanceof PesquisaConsulta);
            expect(tipo).toBeTruthy();
        });

    });

    describe('recebendo configuração com algun serviço desconhecido pelo app', () => {

        it('retorna erro por não reconhecer o serviço', () => {

        });
        
    });

});