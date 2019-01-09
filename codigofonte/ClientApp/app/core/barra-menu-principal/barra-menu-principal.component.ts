import { Component } from "@angular/core";

import { BuscaService, TraducaoService } from "../../shared";
import { LANGUAGES } from "../../shared/traducao.service";
import { TranslateService } from "../../translate/translate.service";

@Component({
    selector: "barra-menu-principal",
    templateUrl: "./barra-menu-principal.component.html",
    styleUrls: ["./barra-menu-principal.component.css"]
})
export class BarraMenuPrincipalComponent {
    resultados: Array<any> = [];
    idiomas = this.translateService.languages;
    mostraMenu = false;

    constructor(
        private _buscaService: BuscaService,
        private _traducaoService: TraducaoService,
        private translateService: TranslateService
    ) {}

    busca(event: any) {
        this.resultados = this._buscaService.search(
            event.target.value,
            <LANGUAGES>this.lang
        );
    }

    limpaResultados() {
        this.resultados = [];
    }

    navegarPara(event: any) {
        // console.log(event);
    }

    mudarIdioma(idioma: string) {
        debugger;
        this.translateService.updateLanguage(idioma);
        // this._traducaoService.lang = idioma;
    }

    public set lang(value: string) {
        this._traducaoService.lang = value;
    }

    public get lang() {
        return this._traducaoService.lang;
    }
}
