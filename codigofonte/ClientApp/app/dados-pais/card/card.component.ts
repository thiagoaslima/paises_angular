import { Component, Input } from "@angular/core";

@Component({
    selector: "card",
    templateUrl: "./card.component.html",
    styleUrls: ["./card.component.css"]
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

    getUnidade(unidade: any) {
        let valor = "";
        if (unidade) {
            if (unidade.identificador) {
                valor = unidade.identificador;
            }
            if (
                unidade.multiplicador &&
                unidade.multiplicador != "" &&
                unidade.multiplicador != "1"
            ) {
                valor += " × " + unidade.multiplicador;
            }
        }
        return valor;
    }

    getTextoFonte(fonte: any) {
        return fonte || "";
    }

    getLinkFonte(fonte: any) {
        if (fonte) {
            // Encontra qualquer conjunto de caracteres começando por < (inclusive) até encontrar um > (exclusive)
            const regex = /<.+?(?=>)/gm;
            const link = fonte.match(regex);
            return link[0] ? link[0].replace("<", "") : "";
        }
        return "";
    }
}
