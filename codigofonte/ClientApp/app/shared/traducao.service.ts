import { Injectable, Optional, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

export type LANGUAGES = 'pt' | 'es' | 'en';

@Injectable()
export class TraducaoService {

    private isBrowser: boolean;

    private _lang: any = 'pt';

    private L10N: any = {
        pt: require("../../locale/paises-pt.properties"),
        en: require("../../locale/paises-en.properties")
    };

    constructor(@Inject(PLATFORM_ID) platformId: any) {
        this.isBrowser = isPlatformBrowser(platformId);
        if (this.isBrowser) {
            let url = location && location.href ? location.href : "";
            if(url.indexOf('lang=') >= 0){
                this.lang = url.substr(url.indexOf('lang=') + 5, 2);
            }else if(sessionStorage.getItem('lang')){
                this.lang = sessionStorage.getItem('lang');
            }
            // As pessoas muitas vezes usam o navegador em inglês pq é a instalação padrão.
            // O próprio IBGE é um exemplo disto.
            // else if(navigator.language){
            //     this.lang = navigator.language.substr(0,2).toLowerCase();
            // }
            else{
                this.lang = 'pt';
            }
        }
    }

    public translate(prop: string){
        //retorna a propriedade traduzida, caso não exista, retorna a propriedade em português
        return this.L10N[this.lang] && this.L10N[this.lang][prop] ? this.L10N[this.lang][prop] : this.L10N.pt[prop];
    }

    public get lang(): any{
        return this._lang;
    }

    public set lang(value: any){
        this._lang = value;
        if(this.isBrowser){
            if(sessionStorage.getItem('lang') != value){
                sessionStorage.setItem('lang', value);
                location.href = location.href.split('?')[0] + '?lang=' + value; //recarrega a página
            }
        }
    }

}