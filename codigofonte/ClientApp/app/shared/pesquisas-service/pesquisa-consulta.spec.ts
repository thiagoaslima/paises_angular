/// <reference types="jest" />

import { PesquisaConsulta } from './pesquisa-consulta';
import { PesquisaConfiguration } from './pesquisa-configuration.interface';
import { getPesquisaConfiguration } from './pesquisa-consulta.mocks';

describe('classe PesquisaConsulta', () => {

    describe('instância sem paramêtros', () => {
        let pesquisaConsulta: PesquisaConsulta;

        beforeEach(() => {
            pesquisaConsulta = new PesquisaConsulta();
        });

        it('é instanciada corretamente', () => {
            expect(pesquisaConsulta).toBeInstanceOf(PesquisaConsulta);
        });

        it('possui propriedade #servico com valor "pesquisas"', () => {
            expect(pesquisaConsulta.servico).toBe('pesquisas');
        });

        it('possui getter #identificador com valores vazios', () => {
            const expected = getPesquisaConfiguration.emptyValues().consultas;
            expect(pesquisaConsulta.identificador).toEqual(expected);
        });
    });

    describe('instância recebendo pesquisaConfiguration como parâmetro', () => {
        let pesquisaConsulta: PesquisaConsulta;
        const pesquisaConfiguration = getPesquisaConfiguration.mesmaPesquisa.umItem().configuration;
        const [config] = pesquisaConfiguration.config;

        beforeEach(() => {
            pesquisaConsulta = new PesquisaConsulta(config);
        });

        it('é instanciada corretamente', () => {
            expect(pesquisaConsulta).toBeInstanceOf(PesquisaConsulta);
        });

        it('possui propriedade #servico com valor pesquisas', () => {
            expect(pesquisaConsulta.servico).toBe('pesquisas');
        });

        it('possui getter #identificador com valores corretos', () => {
            const expected = getPesquisaConfiguration.mesmaPesquisa.umItem().consultas;
            expect(pesquisaConsulta.identificador).toEqual(expected);
        });
        
    });

    describe('instância adicionando identificadores', () => {
        let pesquisaConsulta: PesquisaConsulta;
        let consultas;
        const pesquisaConfiguration = getPesquisaConfiguration.mesmaPesquisa.quatroItens().configuration;
        const [configA, configB, configC, configD] = pesquisaConfiguration.config

        beforeEach(() => {
            pesquisaConsulta = new PesquisaConsulta(configA);
            pesquisaConsulta.addIdentificador(configB);
            pesquisaConsulta.addIdentificador(configC);
            pesquisaConsulta.addIdentificador(configD);
        });

        it('agrupa os valores distintos', () => {
            const expected = getPesquisaConfiguration.mesmaPesquisa.quatroItens().consultas.indicadorId;
            expect(pesquisaConsulta.identificador.indicadorId).toBe(expected);
        });

        it('não duplica valores iguais', () => {
            const expected = getPesquisaConfiguration.mesmaPesquisa.quatroItens().consultas.localidadeId;
            expect(pesquisaConsulta.identificador.localidadeId).toBe(expected);
        });
    });

});