/// <reference types="jest" />

import { DadosService } from './dados.service';
import { getDadosConfiguration } from './dados.service.mock';
import { Configuration, Resposta } from './dados.interface';

describe('classe DadosService', () => {
    let dadosService: DadosService;

    beforeEach(() => {
        dadosService = new DadosService();
    });
    
    it('é instanciada corretamente', () => {
        expect(dadosService).toBeInstanceOf(DadosService);
    });

    describe('método getDados', () => {

        describe('recebendo configuração de 1 item com 1 pesquisa sem localidade', () => {
            let configuration: Configuration, 
                resposta: Resposta;

            beforeEach(() => {
                let mock = getDadosConfiguration.umServico.umaPesquisa.semLocalidade();
                configuration = mock.configuration;
                resposta = mock.resposta;
            })

            it('deve retornar 0 Resultados ', () => {
                let resposta = dadosService.getDados(configuration);
                expect(resposta.resultados).toHaveLength(0);
            });
            
            it('deve retornar 1 MetadataResultado', () => {
                let resposta = dadosService.getDados(configuration);
                expect(resposta.metadata).toHaveLength(1);
            });
            
            it('deve retornar a Resposta completa', () => {
                expect(dadosService.getDados(configuration)).toEqual(resposta);

            });

        });

        describe('recebendo configuração de 1 item com 1 pesquisa com localidade', () => {
            let configuration: Configuration, 
                resposta: Resposta;

            beforeEach(() => {
                let mock = getDadosConfiguration.umServico.umaPesquisa.umaLocalidade();
                configuration = mock.configuration;
                resposta = mock.resposta;
            })

            it('deve retornar 0 Resultados ', () => {
                let resposta = dadosService.getDados(configuration);
                expect(resposta.resultados).toHaveLength(0);
            });
            
            it('deve retornar 1 MetadataResultado', () => {
                let resposta = dadosService.getDados(configuration);
                expect(resposta.metadata).toHaveLength(1);
            });
            
            it('deve retornar a Resposta completa', () => {
                expect(dadosService.getDados(configuration)).toEqual(resposta);

            });

        });

    });

    
});
