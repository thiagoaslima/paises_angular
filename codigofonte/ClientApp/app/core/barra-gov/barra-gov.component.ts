import {
    Component,
    OnInit,
    Inject,
    ViewEncapsulation,
    Input,
    HostBinding,
} from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
    selector: 'barra-gov',
    templateUrl: './barra-gov.component.html',
    styleUrls: ['./barra-gov.component.css'],
    encapsulation: ViewEncapsulation.Emulated,
})
export class BarraGovComponent implements OnInit {
    CODIGO_IBGE = 3; // https://siorg.planejamento.gov.br/siorg-cidadao-webapp/pages/listar_orgaos_estruturas/listar_orgaos_estruturas.jsf#bxResultado

    SCRIPTS: {
        [idx: number]: {
            idg: number;
            url: string;
            loading: boolean;
            loaded: boolean;
        };
    } = {
        1: {
            idg: 1,
            url: '//barra.brasil.gov.br/barra.js',
            loading: false,
            loaded: false,
        },
        2: {
            idg: 2,
            url: '//barra.brasil.gov.br/barra_2.0.js',
            loading: false,
            loaded: false,
        },
    };

    @Input('idg') set barra(value: number) {
        this.idg = value;
        this.loadScript(value);
    }

    @HostBinding('class.popup-layer') layer = true;

    idg = 2;

    constructor(@Inject(DOCUMENT) private document: Document) {}

    ngOnInit() {
        if (this.document && this.document.head) {
            const meta = this.document.createElement('meta');
            (<any>meta).property = 'creator.productor';
            meta.content = `http://estruturaorganizacional.dados.gov.br/id/unidade-organizacional/${
                this.CODIGO_IBGE
            }`;
            this.document.head.appendChild(meta);
            this.loadScript(this.idg);
        }
    }

    private loadScript(idg: number): void {
        if (
            !this.SCRIPTS[idg] ||
            this.SCRIPTS[idg].loading ||
            this.SCRIPTS[idg].loaded
        ) {
            return;
        }

        if (this.document && this.document.head) {
            const script = this.document.createElement('script');
            script.src = this.SCRIPTS[idg].url;
            script.defer = true;
            script.onload = () => {
                this.SCRIPTS[idg].loading = false;
                this.SCRIPTS[idg].loaded = true;
            };
            script.onerror = () => {
                this.SCRIPTS[idg].loading = false;
                this.SCRIPTS[idg].loaded = false;
            };
            this.SCRIPTS[idg].loading = true;
            this.document.head.appendChild(script);
        }
    }
}
