/// <reference types="jest" />

import { ConsultaService } from "./consulta.service";
import { getPesquisaConfiguration } from "../pesquisas-service/pesquisa-consulta.mocks";
import { Consulta } from "./paises-types";


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
        
    });

});