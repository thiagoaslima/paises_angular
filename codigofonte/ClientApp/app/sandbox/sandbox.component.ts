import { TraducaoService } from '../services/traducao.service';
import { PaisesService } from '../services/paises.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'selector-name',
    template: `
        <h1>{{ traducaoService.L10N.sandbox__sandbox }}</h1>
        <ibge-tema></ibge-tema>
    `
})

export class SandboxComponent implements OnInit {

    constructor(
        public traducaoService: TraducaoService
    ) { }

    ngOnInit() {
    }
}