import { Injectable } from '@angular/core';

@Injectable()
export class TraducaoService {

    public _L10N: any = {
        pt: require("../../locale/paises-pt.properties"),
        en: require("../../locale/paises-en.properties")
    };

    public get L10N(): any {
        return this._L10N.pt;
    }

    constructor() {
        
    }


}