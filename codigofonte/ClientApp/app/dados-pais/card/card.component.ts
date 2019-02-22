import { Component, Input } from '@angular/core';
import { Pais, PaisesEnum } from '../../shared';

@Component({
    selector: 'card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.css'],
})
export class CardComponent {
    @Input() tema: any;
    @Input() pais: any;

    graficoAtual = 0;
    cardAberto = false;
    mostrarTabela = false;

    setGrafico(event: any) {
        this.graficoAtual = event.target.selectedIndex;
    }

    getUrl(tema: any, pais: Pais) {
        const posicoes: { [key: string]: number } = {
            economia: 2,
            'indicadores-sociais': 3,
            'meio-ambiente': 4,
            população: 5,
            redes: 6,
            saúde: 7,
        };
        const nomeTema: string = tema.tema;
        const posicao = posicoes[nomeTema.toLowerCase().replace(/\s/g, '-')];

        return `https://servicodados.ibge.gov.br/api/v1/pesquisas/10090/indicadores/${posicao}/csv/${
            pais.sigla
        }?nocache`;
    }

    getTitle(nomeTema: any) {
        return {
            pt: `Fazer download dos dados de ${nomeTema}`,
            en: `Download ${nomeTema} data`,
            es: `Descargar los datos de ${nomeTema}`,
        };
    }

    getUnidade(unidade: any) {
        let valor = '';
        if (unidade) {
            if (unidade.identificador) {
                valor = unidade.identificador;
            }
            if (
                unidade.multiplicador &&
                unidade.multiplicador != '' &&
                unidade.multiplicador != '1'
            ) {
                valor += ' × ' + unidade.multiplicador;
            }
        }
        return valor;
    }

    getTextoFonte(fonte: any) {
        return fonte || '';
    }

    getLinkFonte(fonte: any) {
        if (fonte) {
            // Encontra qualquer conjunto de caracteres começando por < (inclusive) até encontrar um > (exclusive)
            const regex = /<.+?(?=>)/gm;
            const link = fonte.match(regex);
            return link[0] ? link[0].replace('<', '') : '';
        }
        return '';
    }
}
