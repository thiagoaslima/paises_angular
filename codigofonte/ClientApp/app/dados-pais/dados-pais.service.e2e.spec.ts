/// <reference types="jasmine" />

import { TestBed, inject } from "@angular/core/testing";
import { HttpClientModule, HttpClient } from "@angular/common/http";
import { ConnectionBackend, HttpModule, Http } from "@angular/http";
import { DadosPaisService } from "./dados-pais.service";
import { SharedModule } from "../shared/shared.module";


describe('PaisesService E2E', () => {
    let dadosPaisService: DadosPaisService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                HttpClientModule,
                SharedModule.forRoot()
            ],
            providers: [
                DadosPaisService
            ]
        })
    });

    beforeEach(inject([DadosPaisService],
        (_service: DadosPaisService) => {
            dadosPaisService = _service;
        })
    );

    it('should be instantiated correctly', () => {
        expect(dadosPaisService).toBeDefined();
    });

});