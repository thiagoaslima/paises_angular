/// <reference types="jasmine" />

import { TestBed, inject, async } from "@angular/core/testing";
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

    it('should #getHistorico correctly', (done) => {
        const expected = 'BRASIL - Maior país da América do Sul, com vasta área de litoral banhada pelo Atlântico. Tem fronteiras com Venezuela, Guiana, Suriname, Guiana Francesa, Colômbia, Peru, Bolívia, Paraguai, Argentina e Uruguai. O topônimo Brasil tem sua origem muito discutida, embora boa parte das explicações se refiram ao pau-brasil daqui extraído. Para alguns filólogos, vem do tupi ibira-ciri, \"pau eriçado\". Os europeus, ao ouvirem este nome dado pelos indígenas à madeira de coloração avermelhada, chamaram-na de \"Brasil\".,As extensas porções de terras, que hoje constituem o país, foram habitadas por tribos que pertenciam ao tronco tupi-guarani, caribe e arawak. Para todos os efeitos, a frota chefiada pelo fidalgo português Pedro Álvares de Gouveia (ele só adquiriria o sobrenome Cabral com o falecimento de seu irmão primogênito, João Fernandes, em 1515) foi oficialmente a primeira a chegar às terras que hoje fazem parte do Brasil. Sabe-se, no entanto, que outros europeus aqui aportaram antes de Pedro Álvares, mas não puderam tomar posse, nem sequer anunciar a descoberta por conta do Tratado de Tordesilhas.,A colonização do país se inicia com Martim Afonso de Souza em 1532. Antes disso, as novas terras só serviam à Coroa como entreposto na linha comercial Lisboa-Índia e para extração de pau-brasil.,Em 1540, Portugal resolve terceirizar a colonização do Brasil, repartindo as terras em capitanias hereditárias a serem entregues a fidalgos que deveriam explorá-las e fazê-las se desenvolver. O modelo não alcança os resultados necessários, mesmo com a presença de representantes da Coroa, os governadores-gerais. Das capitanias, somente São Vicente e Pernambuco conseguem bons resultados econômicos, especialmente a segunda, que desenvolve latifúndios de cana-de-açúcar produtivos. ,A França e, posteriormente, a Holanda resolvem tirar um quinhão das novas terras descobertas ao sul do Equador. Franceses tentam estabelecer colonização no Rio de Janeiro e no Maranhão. Holandeses tentam incursões na Bahia e em Pernambuco, onde conseguem se assentar por algum tempo. Os portugueses conseguem expulsar os estrangeiros invasores, retomando as possessões que estavam sob o seu domínio.,Ao longo dos Séculos XVII e XVIII, expedições chamadas Entradas e Bandeiras vão expandindo para oeste as terras da Colônia, conquistando espaços que estavam na parte espanhola do Tratado de Tordesilhas. ,Foi estabelecido um fluxo de mão-de-obra escrava inicialmente índigena e, como não deu certo, posteriormente negra africana para as plantações brasileiras e para a procura e extração de metais preciosos.,No Século XVIII, já havia um razoável núcleo urbano em várias regiões do Brasil, a ponto de fazer germinar idéias separatistas, como ocorreu em Vila Rica, com a Conjuração Mineira, prontamente rechaçada pelo governo português.,No início do Século XIX, um fato seria determinante para o futuro da colônia. Napoleão invade Portugal, no seu esforço de estrangular comercialmente a Inglaterra e isso acarreta na fuga da Família Real portuguesa, incluindo a Rainha Maria I, e seu filho, o Príncipe Regente D. João, que governava Portugal desde 1792, por conta dos problemas mentais de sua mãe.,Eles chegam a Salvador, em 1807, e de lá seguem para a capital da colônia, o Rio de Janeiro, onde se estabelecem a partir de 1808. Aqui, D. João abre os portos brasileiros às nações amigas, eleva o Brasil à condição de Reino Unido e cria uma infra-estrutura básica na colônia. Com isso, o porto do Rio de Janeiro, que era o mais importante do país, se expande, dinamizando a economia, atraindo mais pessoas para a Corte.,Aqui, a rainha D. Maria I, dita, a Louca, morre em 1816, e D. João é aclamado como novo rei de Portugal e Brasil, embora tendo que retornar à Lisboa em 1821. As cortes portuguesas querem fazer o Brasil voltar à condição de colônia, com monopólio comercial, o que não interessava mais aos brasileiros. Em 1822, Portugal pressiona o príncipe regente D. Pedro e ele, insuflado por José Bonifácio, pela princesa Leopoldina e por outras pessoas de influência na Corte, resolve declarar o Brasil independente de Portugal. Isso se deu em 7 de setembro de 1822, na província de São Paulo, às margens do riacho Ipiranga.,O Brasil independente se transforma em um império, com D. Pedro I assumindo a chefia do governo. A primeira constituição foi outorgada em 1824, e a fase do Primeiro Reinado transcorre em meio a muitas crises políticas. Em 1831, o imperador Pedro I abdica em prol de seu filho e segue para Portugal. A década de 30 foi das mais agitadas na vida política brasileira. O país passa a ser governado por regentes provisórios, até que o infante D. Pedro adquira idade para assumir o trono. Em 1840, antecipam a maioridade do príncipe e ele assume como imperador Pedro II.,Por quase 50 anos ele governaria o país, consolidaria a unidade nacional brasileira - um grande feito, por sinal - e, mesmo enfrentando crises políticas e revoltas civis nas províncias, manteria o país coeso e com um produto agrícola de forte penetração internacional: o café. A lavoura cafeeira, ao tempo do Império, era totalmente assentada na mão-de-obra escrava negra. Enormes latifúndios cafeeiros davam sustentação econômica ao país.,Em 1865, o Brasil, unido à Argentina e ao Uruguai, declara guerra ao Paraguai e é vencedor do conflito em 1870. A partir dessa década, começam a surgir as primeiras leis que levariam à abolição do cativeiro: .em 1871, com a chamada primeira Lei Áurea, conhecida como Lei do Ventre Livre, que libertava todos os filhos de escravos; em 1885, com a Lei Saraiva-Cotegipe, ou dos Sexagenários, que libertava escravos com mais de 60 anos; finalmente, com a definitiva Lei áurea, de 13 de maio de 1888, que extinguia a escravidão no país.,No ano seguinte, a monarquia chegava ao fim, com o golpe militar que proclamou a República. Começou o ciclo de presidentes, a partir do proclamador Deodoro da Fonseca. Esse período, que passaria à História como a Velha República, se caracterizou por várias crises políticas. Somente um presidente, Campos Sales, não decretou estado de sítio em seu governo. Em 1930, uma revolta chefiada por Getúlio Vargas toma o poder e mantém o seu líder por 15 anos na chefia do governo. Após a II Guerra, ventos liberalizantes chegam ao Brasil e destituem Vargas. Dutra é eleito, mas Getúlio retorna pelas urnas à presidência e de lá só sai morto, após suicidar-se em meio a uma grave crise política, em agosto de 1954. Dez anos depois, ocorre uma nova crise, culminando com o golpe militar em 1o de abril de 1964, que mergulhou o Brasil em um período de ditadura até 1985. Com a redemocratização, uma nova Constituição foi votada pelo Congresso em 1988. A atual presidente do Brasil, Dilma Vana Rousseff está em meio a um processo de impedimento, e o país está sendo governado interinamente pelo vice-presidente, Michel Temer.'
        dadosPaisService.getHistorico('BR').subscribe(resposta => {
            expect(resposta.toString()).toBe(expected);
            done();
        });
    });

});