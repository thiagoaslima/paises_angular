/// <reference types='jest' />

import { TestBed, inject } from "@angular/core/testing";
import { HttpModule } from '@angular/http';
import { PaisesFacadeService } from "./paises.service";
import { Configuration } from "./paises.interface";
import { SharedModule } from "../shared.module";


describe('PaisesServiceE2E', () => {
    let paisesService: PaisesFacadeService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                SharedModule.forRoot(),
                HttpModule
            ]
        });

    });

    beforeEach(inject([PaisesFacadeService], (_paisesService: PaisesFacadeService) => {
        paisesService = _paisesService;
    }));

    it('is instatiated', () => {
        expect(paisesService).toBeInstanceOf(PaisesFacadeService);
    })

    it('getDados', (done) => {
        let configuration: Configuration = {
            queries: [
                {
                    scope: {
                        service: 'pesquisas',
                        id: 10071
                    },
                    details: {
                        indicadorId: 62941,
                        localidadeId: 'BR'
                    }
                },
                // {
                //     scope: {
                //         service: 'pesquisas',
                //         id: 10071
                //     },
                //     details: {
                //         indicadorId: 62942,
                //         localidadeId: 'BR'
                //     }
                // },
                // {
                //     scope: {
                //         service: 'pesquisas',
                //         id: 10071
                //     },
                //     details: {
                //         indicadorId: 62943
                //     }
                // }
            ]
        };

        paisesService.getDados(configuration).subscribe(response => {
            console.log(JSON.stringify(response, null, 2));
            expect(2).toBe(2);
            done();
        });

    });
});