/// <reference types="jasmine" />

import { TestBed, inject } from '@angular/core/testing';
import { SharedModule } from '../shared.module';
import { PaisesService } from './paises.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ConnectionBackend, HttpModule, Http } from '@angular/http';
import { LocalidadeService } from '../localidade/localidade.service';

describe('PaisesService E2E', () => {
    let paisesService: PaisesService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientModule],
            providers: [HttpClient, LocalidadeService, PaisesService],
        });
    });

    beforeEach(inject([PaisesService], (_paisesService: PaisesService) => {
        paisesService = _paisesService;
    }));

    it('should be instantiated correctly', () => {
        expect(paisesService).toBeDefined();
    });

    it('run #getHistorico correctly', done => {
        const expected = {
            pais: 'BR',
            periodo: '',
            indicador: 44,
            valor: {
                pt: ['BRASIL'],
                en: ['BRASIL'],
                es: ['BRASIL'],
            },
        };

        paisesService.getHistorico('BR').subscribe(response => {
            expect(response).toEqual(expected);
            done();
        });
    });

    it('run #getSintese correctly', done => {
        paisesService.getSintese('BR').subscribe(response => {
            const expectedIds = [62941, 62942, 62943, 62944, 62945];

            const metadataIds = response.metadata.map((obj: any) => obj.id);
            const resultadosIds = response.resultados.map((obj: any) => obj.id);

            expect(metadataIds).toEqual(expectedIds);
            expect(resultadosIds).toEqual(expectedIds);
            done();
        });
    });

    xit('run #getTodosDados correctly', done => {
        paisesService.getTodosDados('BR').subscribe(response => {
            const expectedMetadataIds = [
                62934,
                62935,
                62936,
                62937,
                62938,
                62939,
                62940,
                63050,
                63113,
            ];
            const expectedResultadosIds = [
                62941,
                62942,
                62943,
                62944,
                62945,
                62957,
                62958,
                62959,
                62960,
                62961,
                62962,
                62963,
                62964,
                62965,
                62966,
                62973,
                62967,
                62968,
                62969,
                62970,
                62971,
                62972,
                62974,
                62975,
                62976,
                62977,
                62978,
                62979,
                62980,
                62981,
                62982,
                62983,
                62984,
                62985,
                62986,
                62987,
                62988,
                62989,
                62990,
                62991,
                62992,
                63052,
                63053,
                63060,
                63061,
                63062,
                63069,
                63070,
                63078,
                63082,
                63085,
                63088,
                63089,
                63104,
                63110,
                63111,
                63112,
            ];

            const metadataIds = response.metadata.map((obj: any) => obj.id);
            const metadataChildren = response.metadata.every(
                (obj: any) => obj.children.length > 0
            );
            const resultadosIds = response.resultados.map((obj: any) => obj.id);

            expect(metadataIds).toEqual(expectedMetadataIds);
            expect(metadataChildren).toBeTruthy();
            expect(resultadosIds).toEqual(expectedResultadosIds);

            done();
        });
    });
});
