/// <reference types="jest" />

import { PesquisaConsulta } from './pesquisa-consulta';
import { PesquisaConsultaFactory } from './pesquisa-consulta.factory';
import { PesquisaConfiguration } from './pesquisa-configuration.interface';
import { getPesquisaConfiguration } from './pesquisa-consulta.mocks';

describe('A classe PesquisaConsultaFactory', () => {
    let pesquisaConsultaFactory: PesquisaConsultaFactory;

    beforeEach(() => {
        pesquisaConsultaFactory = new PesquisaConsultaFactory();
    });

    it('é instanciada corretamente', () => {
        expect(pesquisaConsultaFactory).toBeDefined();
    });

    describe('recebendo uma PesquisaConfiguration com apenas 1 objeto config', () => {
        let consultas, consulta;

        beforeEach(() => {
            let configuration = getPesquisaConfiguration.mesmaPesquisa.umItem().configuration;
            consultas = pesquisaConsultaFactory.toConsultaModel(configuration);
            consulta = consultas[0];
        })

        it('retorna 1 objeto', () => {
            expect(consultas).toHaveLength(1);
        });

        it('retorna uma PesquisaConsulta', () => {
            expect(consulta).toBeInstanceOf(PesquisaConsulta);
        });

        it('instancia corretamente a PesquisaConsulta', () => {
            let expected = getPesquisaConfiguration.mesmaPesquisa.umItem().consultas;
            expect(consulta.identificador).toEqual(expected);
        });
    });

    describe('recebendo uma PesquisaConfiguration com 4 objetos config de mesma pesquisaId', () => {
        let consultas, consulta;

        beforeEach(() => {
            let configuration = getPesquisaConfiguration.mesmaPesquisa.quatroItens().configuration;
            consultas = pesquisaConsultaFactory.toConsultaModel(configuration);
            consulta = consultas[0];
        });

        it('retorna 1 objeto', () => {
            expect(consultas).toHaveLength(1);
        });

        it('retorna uma PesquisaConsulta', () => {
            expect(consulta).toBeInstanceOf(PesquisaConsulta);
        });

        it('instancia corretamente a PesquisaConsulta', () => {
            let expected = getPesquisaConfiguration.mesmaPesquisa.quatroItens().consultas;
            expect(consulta.identificador).toEqual(expected);
        });
    });

    describe('recebendo uma PesquisaConfiguration com 2 objetos config com pesquisaId diferentes', () => {
        let consultas: PesquisaConsulta[],
            consultaA: PesquisaConsulta,
            consultaB: PesquisaConsulta;

        beforeEach(() => {
            let configuration = getPesquisaConfiguration.pesquisasDiferentes.duasPesquisas.umItemCada().configuration;
            consultas = pesquisaConsultaFactory.toConsultaModel(configuration);
        });

        it('retorna 2 objetos', () => {
            expect(consultas).toHaveLength(2);
        });

        it('retorna duas instâncias de PesquisaConsulta', () => {
            const isInstances = consultas.every(consulta => consulta instanceof PesquisaConsulta);
            expect(isInstances).toBeTruthy()
        });

        it('instancia corretamente a PesquisaConsulta', () => {
            const identificadores = consultas.map(consulta => consulta.identificador);
            const expected = getPesquisaConfiguration.pesquisasDiferentes.duasPesquisas.umItemCada().consultas;
            expect(identificadores).toEqual(expected);
        });
    });
});