import {
    Component,
    OnInit,
    OnDestroy,
    ChangeDetectionStrategy,
    ChangeDetectorRef
} from "@angular/core";
import { ParamMap, ActivatedRoute } from "@angular/router";

import { Subscription } from "rxjs/Subscription";

import { RouterParamsService, LocalidadeService, Pais } from "../shared";
import { SinteseHomeService } from "../mapa-section/sintese-home/sintese-home.service";
import { DadosPaisService } from "./dados-pais.service";

import { linksCapas } from "../shared/links-capas";

const FileSaver = require("file-saver");

@Component({
    selector: "dados-pais",
    templateUrl: "./dados-pais.component.html",
    styleUrls: ["./dados-pais.component.css"],
    // changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [SinteseHomeService, DadosPaisService]
})
export class DadosPaisComponent {
    public pais: Pais | null = null;
    public imageSrc = "";
    public imageSrcCover = "";
    public imageLink = "";
    public itens = <any[]>[];
    public historico: string[] = [];
    public temas: any = [];

    historico_aberto = false;

    fotoAtual = 0;
    fotosTotal = 0;

    private _subscriptions: {
        [key: string]: Subscription;
    } = Object.create(null);

    constructor(
        private _routerParams: RouterParamsService,
        private _localidadeService: LocalidadeService,
        private _sinteseService: SinteseHomeService,
        private _changeDetector: ChangeDetectorRef,
        private _dadosPaisService: DadosPaisService
    ) {}

    ngOnInit() {
        this._subscriptions.params = this._routerParams.params$.subscribe(
            ({ params, url }) => {
                let pais = this._localidadeService.getPaisBySlug(params.pais);
                this.itens.length = 0;
                if (pais) {
                    this.pais = pais;

                    this.fotosTotal =
                        linksCapas[pais.sigla.toUpperCase()].length;
                    this.setImageSrc();

                    this._sinteseService
                        .getSintese(pais.sigla)
                        .subscribe((resultados: any) => {
                            this.itens.push(...resultados);
                            // this._changeDetector.detectChanges();
                        });

                    this._dadosPaisService
                        .getHistorico(pais.sigla)
                        .subscribe(historico => {
                            this.historico = historico;
                            // this._changeDetector.detectChanges();
                        });

                    this._dadosPaisService
                        .getDados(pais.sigla)
                        .subscribe(resultados => {
                            debugger;
                            this.temas = resultados;
                            // this._changeDetector.detectChanges();

                            //organiza os dados em orde alfabética pelo título
                            for (let i = 0; i < this.temas.length; i++) {
                                this.temas[i].valores.sort(function(
                                    a: any,
                                    b: any
                                ) {
                                    return a["titulo"].localeCompare(
                                        b["titulo"]
                                    );
                                });
                            }
                            //console.log(this.temas);
                        });
                } else {
                    this.pais = null;
                }
            }
        );
    }

    ngOnDestroy() {
        // this._changeDetector.detach();
        Object.keys(this._subscriptions).forEach(key =>
            this._subscriptions[key].unsubscribe()
        );
    }

    setImageSrc() {
        if (this.pais) {
            let sigla = this.pais.sigla.toUpperCase();

            //bandeira
            this.imageSrc = "img/bandeiras/" + sigla + ".gif";

            //capa e info da capa
            this.imageSrcCover =
                "img/capas/" + sigla + (this.fotoAtual + 1) + ".jpg"; //fotos começam com 1 e não zero
            this.imageLink = linksCapas[sigla][this.fotoAtual];

            //decide qual capa usar para o país (randomicamente)
            //os links das capas começam com 1(não zero)
            //let rand = Math.round((linksCapas[sigla].length - 1) * Math.random()) + 1;
            //this.imageSrcCover = 'img/capas/' + sigla + rand.toString() + '.jpg';
            //this.imageLink = linksCapas[sigla][rand - 1];
        } else {
            this.imageSrc = "";
            this.imageSrcCover = "";
            this.imageLink = "";
        }
    }

    fotoAnterior() {
        if (this.fotoAtual - 1 >= 0) {
            this.fotoAtual -= 1;
            this.setImageSrc();
        }
    }

    fotoProxima() {
        if (this.fotoAtual + 1 < this.fotosTotal) {
            this.fotoAtual += 1;
            this.setImageSrc();
        }
    }

    download() {
        //dados da síntese
        let csv = "Síntese\nTitulo,Valor\n";
        for (let i = 0; i < this.itens.length; i++)
            csv +=
                this.itens[i]["titulo"] +
                "," +
                this.itens[i]["valor"] +
                " " +
                this.itens[i]["unidade"] +
                "\n";
        csv += 'historico,"';
        for (let i = 0; i < this.historico.length; i++) {
            if (i > 0) csv += "\n";
            csv += this.historico[i];
        }
        csv += '"';

        //dados dos gráficos
        csv += "\n\nDados\n";
        for (let i = 0; i < this.temas.length; i++) {
            let tema = this.temas[i];
            csv += "tema," + tema.tema + "\n";
            for (let j = 0; j < tema.valores.length; j++) {
                let valor = tema.valores[j];
                csv += "titulo," + valor.titulo + "\n";
            }
        }

        //download
        //let blob = new Blob([csv], { type: "text/csv" });
        //FileSaver.saveAs(blob, "dados_pais.csv");

        console.log(csv);
        console.log(this.temas);
    }
}
