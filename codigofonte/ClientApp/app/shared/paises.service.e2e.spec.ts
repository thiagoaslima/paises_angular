/// <reference types="jest" />
import { TestBed, inject } from "@angular/core/testing";
import { SharedModule } from "./shared.module";
import { PaisesService } from "./paises.service";
import { HttpClientModule, HttpClient } from "@angular/common/http";
import { ConnectionBackend, HttpModule, Http } from "@angular/http";


describe('PaisesService E2E', () => {
  let paisesService: PaisesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
      ],
      providers: [
        HttpClient,
        PaisesService
      ]
    })
  });

  beforeEach(inject([PaisesService],
    (_paisesService: PaisesService) => {
      paisesService = _paisesService;
    })
  );

  it('should be instantiated correctly', () => {
    expect(paisesService).toBeInstanceOf(PaisesService);
  });

  it('run #getHistorico correctly', (done) => {
    const expected = {
      "pais": "BR",
      "periodo": "",
      "indicador": 44,
      "valor": "<p>BRASIL - Maior país da América do Sul, com vasta área de litoral banhada pelo Atlântico. Tem fronteiras com Venezuela, Guiana, Suriname, Guiana Francesa, Colômbia, Peru, Bolívia, Paraguai, Argentina e Uruguai. O topônimo Brasil tem sua origem muito discutida, embora boa parte das explicações se refiram ao pau-brasil daqui extraído. Para alguns filólogos, vem do tupi ibira-ciri, \"pau eriçado\". Os europeus, ao ouvirem este nome dado pelos indígenas à madeira de coloração avermelhada, chamaram-na de \"Brasil\".</p><p>As extensas porções de terras, que hoje constituem o país, foram habitadas por tribos que pertenciam ao tronco tupi-guarani, caribe e arawak. Para todos os efeitos, a frota chefiada pelo fidalgo português Pedro Álvares de Gouveia (ele só adquiriria o sobrenome Cabral com o falecimento de seu irmão primogênito, João Fernandes, em 1515) foi oficialmente a primeira a chegar às terras que hoje fazem parte do Brasil. Sabe-se, no entanto, que outros europeus aqui aportaram antes de Pedro Álvares, mas não puderam tomar posse, nem sequer anunciar a descoberta por conta do Tratado de Tordesilhas.</p><p>A colonização do país se inicia com Martim Afonso de Souza em 1532. Antes disso, as novas terras só serviam à Coroa como entreposto na linha comercial Lisboa-Índia e para extração de pau-brasil.</p><p>Em 1540, Portugal resolve terceirizar a colonização do Brasil, repartindo as terras em capitanias hereditárias a serem entregues a fidalgos que deveriam explorá-las e fazê-las se desenvolver. O modelo não alcança os resultados necessários, mesmo com a presença de representantes da Coroa, os governadores-gerais. Das capitanias, somente São Vicente e Pernambuco conseguem bons resultados econômicos, especialmente a segunda, que desenvolve latifúndios de cana-de-açúcar produtivos. </p><p>A França e, posteriormente, a Holanda resolvem tirar um quinhão das novas terras descobertas ao sul do Equador. Franceses tentam estabelecer colonização no Rio de Janeiro e no Maranhão. Holandeses tentam incursões na Bahia e em Pernambuco, onde conseguem se assentar por algum tempo. Os portugueses conseguem expulsar os estrangeiros invasores, retomando as possessões que estavam sob o seu domínio.</p><p>Ao longo dos Séculos XVII e XVIII, expedições chamadas Entradas e Bandeiras vão expandindo para oeste as terras da Colônia, conquistando espaços que estavam na parte espanhola do Tratado de Tordesilhas. </p><p>Foi estabelecido um fluxo de mão-de-obra escrava inicialmente índigena e, como não deu certo, posteriormente negra africana para as plantações brasileiras e para a procura e extração de metais preciosos.</p><p>No Século XVIII, já havia um razoável núcleo urbano em várias regiões do Brasil, a ponto de fazer germinar idéias separatistas, como ocorreu em Vila Rica, com a Conjuração Mineira, prontamente rechaçada pelo governo português.</p><p>No início do Século XIX, um fato seria determinante para o futuro da colônia. Napoleão invade Portugal, no seu esforço de estrangular comercialmente a Inglaterra e isso acarreta na fuga da Família Real portuguesa, incluindo a Rainha Maria I, e seu filho, o Príncipe Regente D. João, que governava Portugal desde 1792, por conta dos problemas mentais de sua mãe.</p><p>Eles chegam a Salvador, em 1807, e de lá seguem para a capital da colônia, o Rio de Janeiro, onde se estabelecem a partir de 1808. Aqui, D. João abre os portos brasileiros às nações amigas, eleva o Brasil à condição de Reino Unido e cria uma infra-estrutura básica na colônia. Com isso, o porto do Rio de Janeiro, que era o mais importante do país, se expande, dinamizando a economia, atraindo mais pessoas para a Corte.</p><p>Aqui, a rainha D. Maria I, dita, a Louca, morre em 1816, e D. João é aclamado como novo rei de Portugal e Brasil, embora tendo que retornar à Lisboa em 1821. As cortes portuguesas querem fazer o Brasil voltar à condição de colônia, com monopólio comercial, o que não interessava mais aos brasileiros. Em 1822, Portugal pressiona o príncipe regente D. Pedro e ele, insuflado por José Bonifácio, pela princesa Leopoldina e por outras pessoas de influência na Corte, resolve declarar o Brasil independente de Portugal. Isso se deu em 7 de setembro de 1822, na província de São Paulo, às margens do riacho Ipiranga.</p><p>O Brasil independente se transforma em um império, com D. Pedro I assumindo a chefia do governo. A primeira constituição foi outorgada em 1824, e a fase do Primeiro Reinado transcorre em meio a muitas crises políticas. Em 1831, o imperador Pedro I abdica em prol de seu filho e segue para Portugal. A década de 30 foi das mais agitadas na vida política brasileira. O país passa a ser governado por regentes provisórios, até que o infante D. Pedro adquira idade para assumir o trono. Em 1840, antecipam a maioridade do príncipe e ele assume como imperador Pedro II.</p><p>Por quase 50 anos ele governaria o país, consolidaria a unidade nacional brasileira - um grande feito, por sinal - e, mesmo enfrentando crises políticas e revoltas civis nas províncias, manteria o país coeso e com um produto agrícola de forte penetração internacional: o café. A lavoura cafeeira, ao tempo do Império, era totalmente assentada na mão-de-obra escrava negra. Enormes latifúndios cafeeiros davam sustentação econômica ao país.</p><p>Em 1865, o Brasil, unido à Argentina e ao Uruguai, declara guerra ao Paraguai e é vencedor do conflito em 1870. A partir dessa década, começam a surgir as primeiras leis que levariam à abolição do cativeiro: .em 1871, com a chamada primeira Lei Áurea, conhecida como Lei do Ventre Livre, que libertava todos os filhos de escravos; em 1885, com a Lei Saraiva-Cotegipe, ou dos Sexagenários, que libertava escravos com mais de 60 anos; finalmente, com a definitiva Lei áurea, de 13 de maio de 1888, que extinguia a escravidão no país.</p><p>No ano seguinte, a monarquia chegava ao fim, com o golpe militar que proclamou a República. Começou o ciclo de presidentes, a partir do proclamador Deodoro da Fonseca. Esse período, que passaria à História como a Velha República, se caracterizou por várias crises políticas. Somente um presidente, Campos Sales, não decretou estado de sítio em seu governo. Em 1930, uma revolta chefiada por Getúlio Vargas toma o poder e mantém o seu líder por 15 anos na chefia do governo. Após a II Guerra, ventos liberalizantes chegam ao Brasil e destituem Vargas. Dutra é eleito, mas Getúlio retorna pelas urnas à presidência e de lá só sai morto, após suicidar-se em meio a uma grave crise política, em agosto de 1954. Dez anos depois, ocorre uma nova crise, culminando com o golpe militar em 1o de abril de 1964, que mergulhou o Brasil em um período de ditadura até 1985. Com a redemocratização, uma nova Constituição foi votada pelo Congresso em 1988. A atual presidente do Brasil, Dilma Vana Rousseff está em meio a um processo de impedimento, e o país está sendo governado interinamente pelo vice-presidente, Michel Temer.</p>",
      "valor_en": "<p>BRAZIL - It is the largest South America country, with a vast seashore area and bordered by the Atlantic Ocean. Its neighboring countries are Venezuela, Guyana, Suriname, French Guyana, Colombia, Peru, Bolivia, Paraguay, Argentina and Uruguay. The toponym Brazil has a very controversial origin, although most explanations refer to the brazilwood extracted here. For some philologists, it derives from the Tupi word ibira-ciri,  “prickly wood”. When the European heard this name given by the Natives to the red-colored wood, they called it “Brazil” </p><p>The wide areas, which constitute the country today, were inhabited by groups belonging to the Tupi-Guarani, Carib and Arawak tribes. For all means, the fleet led by the Portuguese nobleman Pedro Álvares de Gouveia (he only acquired the surname Cabral after his older brother's, João Fernandes, death in 1515) was officially the first to get to Brazil. It is said that other European had been here before Pedro Álvares, but they could not take possession of it, or even announce the discovery due to the Treaty of Tordesillas.</p><p>The colonization of the country began with Martim Afonso de Souza in 1532. Before that, the new land only served to the Crown as a trade zone in the commercial line Lisbon-India and for the extraction of brazilwood.</p><p>In 1540, Portugal decided to outsource the colonization of Brazil, dividing the land into hereditary captaincies to be ruled by noblemen who should explore them and make them develop. This administrative model did not reach the necessary results, even with the presence of representatives of the Crown, the governor-generals. Among the captaincies, only São Vicente and Pernambuco reached good economical results, especially the latter, which had sugarcane-producing latifundios.</p><p>France and, later, the Netherlands decided to have a part of the newly-discovered land. The French tried to establish the colonization in Rio de Janeiro and Maranhão. The Dutch attempted to make incursions in Bahia and in Pernambuco, where they could settle for some time. The Portuguese managed to expel the foreign invaders, recovering their possessions.</p><p>Throughout the 17th and 18th centuries, expeditions called Bandeiras expanded to the west of the territory, conquering land which was in the Spanish area of the Treaty of Tordesillas.</p><p>A flow of slave labor force initially composed by Natives was established and, as it did not succeed,  African black slaves were employed to work in the Brazilian plantations and in the extraction of precious metals.</p><p>In the 18th century, there were reasonably developed urban centers in several regions of Brazil. Separatist ideas emerged, as in Vila Rica, with the Minas Conspiracy, immediately combated by the Portuguese government.</p><p>In the beginning of the 19th century, a fact would be determining to the future of the colony. Napoleon invaded Portugal, in an effort to commercially restrain England range. This caused the flight of the Portuguese Royal Family, including Queen Maria I and her son, Prince Regent D. João, who had been ruling Portugal since 1792, due to his mother's mental problems.</p><p>They arrived in Salvador in 1807, and, from there, went to the capital, Rio de Janeiro, where they settled in 1808. Here, D.João opened the commercial ports to friendly nations, turning Brazil into a United Kingdom and creating a basic substructure in the colony. This way, the harbor of Rio de Janeiro, which was one of the most important harbors in the country, grew, turning the economy dynamic and attracting more people to Court.</p><p>Here, Queen D. Maria I died in 1816 and D. João was acclaimed as the new king of Portugal and Brazil, although he had to return to Lisbon in 1821.The Portuguese Courts wanted to make Brazil return to the condition of colony, with commercial monopoly, what was not interesting  for Brazilians anymore. In 1822, Portugal pressed Prince Regent D.Pedro, who, influenced by José Bonifácio and by Princess Leopoldina and other important people in the Court, decided to declare Brazil independent from Portugal. This happened on September 7, 1822, in the province of São Paulo, at the shore of the Ipiranga River.</p><p>Independent Brazil became an Empire, and D. Pedro I took the leadership of the government. The first Constitution was promulgated in 1824, and the phase of the First Reign went on involved in many political crises. In 1831, Emperor Pedro I resigned in favor of his son and returned to Portugal. The 1830’s was one of the most agitated decades in the Brazilian political scenario. The country went under the ruling of temporary regents, until the moment Infante D. Pedro became old enough to take over the throne. In 1840, the Prince's adult age was anticipated and he reached the throne as Emperor Pedro II.</p><p>For almost 50 years he governed the country, consolidating Brazilian national unity - a great deed, in fact - and, even facing political crises and civil revolts in the provinces, he was able to keep the country united and producing a widely accepted crop: coffee. Coffee cultivation, at the time of the Empire, was totally based on black slavery. Great coffee latifundios provided economical support to the country.</p><p>In 1865, Brazil, associated with Argentina and Uruguay, declared war against Paraguay and was the winner of the conflict in 1870. From this decade on, the first laws leading to the slavery abolition started to appear: in 1871, the so called first Golden Law, known as Rio Branco Law, ensured freedom to all newly born slave children; in 1885, the Saraiva-Cotegipe Law provided freedom to all slaves over 60 years old; finally, with the definitive Golden Law, on May 13, 1888, slavery was finally abolished in the country.</p><p>In the following year, the Monarchy got to an end, with the military coup that proclaimed the Republic. The cycle of presidents, starting with Deodoro da Fonseca, started. This period, known in History as the Old Republic, was characterized by several political crises. Only one president, Campos Sales, did not establish a state of siege in his government. In 1930, a revolt led by Getúlio Vargas took over and he remained as head of the government for 15 years. After World War II, liberal ideas reached Brazil and resulted in Vargas' overthrowing. Dutra was elected, but Getúlio returned, through elections, to the Presidency of the country. He only left it after committing suicide for being involved in a great political crisis in August, 1954. Ten years later, a new crisis culminated in a military coup on April 1, 1964. This coup got Brazil into a dictatorial period up to 1985. With the re-democratization, a new Constitution was voted by the Congress in 1988. The president of Brazil, Dilma Vana Rousseff is currently facing an impeachment process, and the country is being ruled, on an interim basis, by vice-president Michel Temer.</p>"
    };

    paisesService.getHistorico('BR').subscribe(response => {
      expect(response).toEqual(expected);
      done();
    });
  });

  it('run #getSintese correctly', (done) => {
    paisesService.getSintese('BR').subscribe(response => {
      const expected = {
        "metadata": [{ "id": 62941, "indicador": "Capital", "notas": [] }, { "id": 62942, "indicador": "Extensão territorial", "unidade": { "identificador": "km²", "classe": "N", "multiplicador": 1 }, "notas": [] }, { "id": 62943, "indicador": "Idioma", "notas": [] }, { "id": 62944, "indicador": "Localização", "notas": [] }, { "id": 62945, "indicador": "Moeda", "notas": [] }], "resultados": [{ "id": 62941, "valorMaisRecente": "Brasília", "periodoMaisRecente": "-", "localidade": "BR", "valores": ["Brasília"], "periodos": ["-"] }, { "id": 62942, "valorMaisRecente": "8515759.090", "periodoMaisRecente": "-", "localidade": "BR", "valores": ["8515759.090"], "periodos": ["-"] }, { "id": 62943, "valorMaisRecente": "Português", "periodoMaisRecente": "-", "localidade": "BR", "valores": ["Português"], "periodos": ["-"] }, { "id": 62944, "valorMaisRecente": "América do Sul", "periodoMaisRecente": "-", "localidade": "BR", "valores": ["América do Sul"], "periodos": ["-"] }, { "id": 62945, "valorMaisRecente": "Real", "periodoMaisRecente": "-", "localidade": "BR", "valores": ["Real"], "periodos": ["-"] }]
      }

      expect(response).toEqual(expected);
      done();
    });
  })

  it('run #getTodosDados correctly', (done) => {
    paisesService.getTodosDados('BR').subscribe(response => {
      const expected = {
        "metadata": [
          {
            "id": 62934,
            "posicao": "1",
            "indicador": "Síntese",
            "classe": "T",
            "children": [
              {
                "id": 62941,
                "posicao": "1.1",
                "indicador": "Capital",
                "classe": "I",
                "children": [],
                "nota": []
              },
              {
                "id": 62942,
                "posicao": "1.2",
                "indicador": "Extensão territorial",
                "classe": "I",
                "unidade": {
                  "id": "km²",
                  "classe": "N",
                  "multiplicador": 1
                },
                "children": [],
                "nota": []
              },
              {
                "id": 62943,
                "posicao": "1.3",
                "indicador": "Idioma",
                "classe": "I",
                "children": [],
                "nota": []
              },
              {
                "id": 62944,
                "posicao": "1.4",
                "indicador": "Localização",
                "classe": "I",
                "children": [],
                "nota": []
              },
              {
                "id": 62945,
                "posicao": "1.5",
                "indicador": "Moeda",
                "classe": "I",
                "children": [],
                "nota": []
              }
            ],
            "nota": []
          },
          {
            "id": 62935,
            "posicao": "2",
            "indicador": "Dados olímpicos",
            "classe": "T",
            "children": [
              {
                "id": 62946,
                "posicao": "2.1",
                "indicador": "Primeira participação",
                "classe": "I",
                "children": [],
                "nota": []
              },
              {
                "id": 62947,
                "posicao": "2.2",
                "indicador": "Última participação",
                "classe": "I",
                "children": [],
                "nota": []
              },
              {
                "id": 62948,
                "posicao": "2.3",
                "indicador": "Atletas",
                "classe": "I",
                "unidade": {
                  "id": "atletas",
                  "classe": "N",
                  "multiplicador": 1
                },
                "children": [],
                "nota": [
                  {
                    "periodo": "-",
                    "notas": [
                      "Considerando todas as Olimpíadas"
                    ]
                  }
                ]
              },
              {
                "id": 62949,
                "posicao": "2.4",
                "indicador": "Modalidades disputadas",
                "classe": "I",
                "children": [],
                "nota": []
              },
              {
                "id": 62950,
                "posicao": "2.5",
                "indicador": "Medalhas",
                "classe": "I",
                "children": [
                  {
                    "id": 62951,
                    "posicao": "2.5.1",
                    "indicador": "Ouro",
                    "classe": "I",
                    "children": [],
                    "nota": []
                  },
                  {
                    "id": 62952,
                    "posicao": "2.5.2",
                    "indicador": "Prata",
                    "classe": "I",
                    "children": [],
                    "nota": []
                  },
                  {
                    "id": 62953,
                    "posicao": "2.5.3",
                    "indicador": "Bronze",
                    "classe": "I",
                    "children": [],
                    "nota": []
                  }
                ],
                "nota": []
              },
              {
                "id": 62954,
                "posicao": "2.6",
                "indicador": "Esportes que conquistaram medalhas",
                "classe": null,
                "children": [
                  {
                    "id": 62955,
                    "posicao": "2.6.1",
                    "indicador": "Aquáticos",
                    "classe": "I",
                    "unidade": {
                      "id": "",
                      "classe": "B",
                      "multiplicador": 1
                    },
                    "children": [],
                    "nota": []
                  },
                  {
                    "id": 62993,
                    "posicao": "2.6.2",
                    "indicador": "Arco e Flecha",
                    "classe": "I",
                    "unidade": {
                      "id": "",
                      "classe": "B",
                      "multiplicador": 1
                    },
                    "children": [],
                    "nota": []
                  },
                  {
                    "id": 62956,
                    "posicao": "2.6.3",
                    "indicador": "Atletismo",
                    "classe": "I",
                    "unidade": {
                      "id": "",
                      "classe": "B",
                      "multiplicador": 1
                    },
                    "children": [],
                    "nota": []
                  },
                  {
                    "id": 62994,
                    "posicao": "2.6.4",
                    "indicador": "Badminton",
                    "classe": "I",
                    "unidade": {
                      "id": "",
                      "classe": "B",
                      "multiplicador": 1
                    },
                    "children": [],
                    "nota": []
                  },
                  {
                    "id": 62995,
                    "posicao": "2.6.5",
                    "indicador": "Basquetebol",
                    "classe": "I",
                    "unidade": {
                      "id": "",
                      "classe": "B",
                      "multiplicador": 1
                    },
                    "children": [],
                    "nota": []
                  },
                  {
                    "id": 62996,
                    "posicao": "2.6.6",
                    "indicador": "Beisebol",
                    "classe": "I",
                    "unidade": {
                      "id": "",
                      "classe": "B",
                      "multiplicador": 1
                    },
                    "children": [],
                    "nota": []
                  },
                  {
                    "id": 62997,
                    "posicao": "2.6.7",
                    "indicador": "Boxe",
                    "classe": "I",
                    "unidade": {
                      "id": "",
                      "classe": "B",
                      "multiplicador": 1
                    },
                    "children": [],
                    "nota": []
                  },
                  {
                    "id": 62998,
                    "posicao": "2.6.8",
                    "indicador": "Cabo de Guerra",
                    "classe": "I",
                    "unidade": {
                      "id": "",
                      "classe": "B",
                      "multiplicador": 1
                    },
                    "children": [],
                    "nota": []
                  },
                  {
                    "id": 62999,
                    "posicao": "2.6.9",
                    "indicador": "Canoagem",
                    "classe": "I",
                    "unidade": {
                      "id": "",
                      "classe": "B",
                      "multiplicador": 1
                    },
                    "children": [],
                    "nota": []
                  },
                  {
                    "id": 63000,
                    "posicao": "2.6.10",
                    "indicador": "Canoagem Slalom",
                    "classe": "I",
                    "unidade": {
                      "id": "",
                      "classe": "B",
                      "multiplicador": 1
                    },
                    "children": [],
                    "nota": []
                  },
                  {
                    "id": 63001,
                    "posicao": "2.6.11",
                    "indicador": "Canoagem Sprint",
                    "classe": "I",
                    "unidade": {
                      "id": "",
                      "classe": "B",
                      "multiplicador": 1
                    },
                    "children": [],
                    "nota": []
                  },
                  {
                    "id": 63002,
                    "posicao": "2.6.12",
                    "indicador": "Ciclismo",
                    "classe": "I",
                    "unidade": {
                      "id": "",
                      "classe": "B",
                      "multiplicador": 1
                    },
                    "children": [],
                    "nota": []
                  },
                  {
                    "id": 63003,
                    "posicao": "2.6.13",
                    "indicador": "Ciclismo - BMX",
                    "classe": "I",
                    "unidade": {
                      "id": "",
                      "classe": "B",
                      "multiplicador": 1
                    },
                    "children": [],
                    "nota": []
                  },
                  {
                    "id": 63004,
                    "posicao": "2.6.14",
                    "indicador": "Ciclismo - Estrada",
                    "classe": "I",
                    "unidade": {
                      "id": "",
                      "classe": "B",
                      "multiplicador": 1
                    },
                    "children": [],
                    "nota": []
                  },
                  {
                    "id": 63005,
                    "posicao": "2.6.15",
                    "indicador": "Ciclismo - Mountain Bike",
                    "classe": "I",
                    "unidade": {
                      "id": "",
                      "classe": "B",
                      "multiplicador": 1
                    },
                    "children": [],
                    "nota": []
                  },
                  {
                    "id": 63006,
                    "posicao": "2.6.16",
                    "indicador": "Ciclismo - Trilha",
                    "classe": "I",
                    "unidade": {
                      "id": "",
                      "classe": "B",
                      "multiplicador": 1
                    },
                    "children": [],
                    "nota": []
                  },
                  {
                    "id": 63008,
                    "posicao": "2.6.17",
                    "indicador": "Críquete",
                    "classe": "I",
                    "unidade": {
                      "id": "",
                      "classe": "B",
                      "multiplicador": 1
                    },
                    "children": [],
                    "nota": []
                  },
                  {
                    "id": 63007,
                    "posicao": "2.6.18",
                    "indicador": "Croquete",
                    "classe": "I",
                    "unidade": {
                      "id": "",
                      "classe": "B",
                      "multiplicador": 1
                    },
                    "children": [],
                    "nota": []
                  },
                  {
                    "id": 63009,
                    "posicao": "2.6.19",
                    "indicador": "Esgrima",
                    "classe": "I",
                    "unidade": {
                      "id": "",
                      "classe": "B",
                      "multiplicador": 1
                    },
                    "children": [],
                    "nota": []
                  },
                  {
                    "id": 63010,
                    "posicao": "2.6.20",
                    "indicador": "Espanha",
                    "classe": "I",
                    "unidade": {
                      "id": "",
                      "classe": "B",
                      "multiplicador": 1
                    },
                    "children": [],
                    "nota": []
                  },
                  {
                    "id": 63011,
                    "posicao": "2.6.21",
                    "indicador": "Futebol",
                    "classe": "I",
                    "unidade": {
                      "id": "",
                      "classe": "B",
                      "multiplicador": 1
                    },
                    "children": [],
                    "nota": []
                  },
                  {
                    "id": 63012,
                    "posicao": "2.6.22",
                    "indicador": "Ginástica",
                    "classe": "I",
                    "unidade": {
                      "id": "",
                      "classe": "B",
                      "multiplicador": 1
                    },
                    "children": [],
                    "nota": []
                  },
                  {
                    "id": 63013,
                    "posicao": "2.6.23",
                    "indicador": "Ginástica - Rítmica",
                    "classe": "I",
                    "unidade": {
                      "id": "",
                      "classe": "B",
                      "multiplicador": 1
                    },
                    "children": [],
                    "nota": []
                  },
                  {
                    "id": 63014,
                    "posicao": "2.6.24",
                    "indicador": "Ginástica - Trampolim",
                    "classe": "I",
                    "unidade": {
                      "id": "",
                      "classe": "B",
                      "multiplicador": 1
                    },
                    "children": [],
                    "nota": []
                  },
                  {
                    "id": 63015,
                    "posicao": "2.6.25",
                    "indicador": "Golfe",
                    "classe": "I",
                    "unidade": {
                      "id": "",
                      "classe": "B",
                      "multiplicador": 1
                    },
                    "children": [],
                    "nota": []
                  },
                  {
                    "id": 63016,
                    "posicao": "2.6.26",
                    "indicador": "Grã Bretanha & Irlanda do Norte",
                    "classe": "I",
                    "unidade": {
                      "id": "",
                      "classe": "B",
                      "multiplicador": 1
                    },
                    "children": [],
                    "nota": []
                  },
                  {
                    "id": 63017,
                    "posicao": "2.6.27",
                    "indicador": "Halterofilismo",
                    "classe": "I",
                    "unidade": {
                      "id": "",
                      "classe": "B",
                      "multiplicador": 1
                    },
                    "children": [],
                    "nota": []
                  },
                  {
                    "id": 63018,
                    "posicao": "2.6.28",
                    "indicador": "Handebol",
                    "classe": "I",
                    "unidade": {
                      "id": "",
                      "classe": "B",
                      "multiplicador": 1
                    },
                    "children": [],
                    "nota": []
                  },
                  {
                    "id": 63019,
                    "posicao": "2.6.29",
                    "indicador": "Hipismo",
                    "classe": "I",
                    "unidade": {
                      "id": "",
                      "classe": "B",
                      "multiplicador": 1
                    },
                    "children": [],
                    "nota": []
                  },
                  {
                    "id": 63020,
                    "posicao": "2.6.30",
                    "indicador": "Hóquei",
                    "classe": "I",
                    "unidade": {
                      "id": "",
                      "classe": "B",
                      "multiplicador": 1
                    },
                    "children": [],
                    "nota": []
                  },
                  {
                    "id": 63021,
                    "posicao": "2.6.31",
                    "indicador": "Hóquei no Gelo",
                    "classe": "I",
                    "unidade": {
                      "id": "",
                      "classe": "B",
                      "multiplicador": 1
                    },
                    "children": [],
                    "nota": []
                  },
                  {
                    "id": 63022,
                    "posicao": "2.6.32",
                    "indicador": "Jeu de paume",
                    "classe": "I",
                    "unidade": {
                      "id": "",
                      "classe": "B",
                      "multiplicador": 1
                    },
                    "children": [],
                    "nota": []
                  },
                  {
                    "id": 63023,
                    "posicao": "2.6.33",
                    "indicador": "Judô",
                    "classe": "I",
                    "unidade": {
                      "id": "",
                      "classe": "B",
                      "multiplicador": 1
                    },
                    "children": [],
                    "nota": []
                  },
                  {
                    "id": 63024,
                    "posicao": "2.6.34",
                    "indicador": "Lacrosse",
                    "classe": "I",
                    "unidade": {
                      "id": "",
                      "classe": "B",
                      "multiplicador": 1
                    },
                    "children": [],
                    "nota": []
                  },
                  {
                    "id": 63025,
                    "posicao": "2.6.35",
                    "indicador": "Luta Livre",
                    "classe": "I",
                    "unidade": {
                      "id": "",
                      "classe": "B",
                      "multiplicador": 1
                    },
                    "children": [],
                    "nota": []
                  },
                  {
                    "id": 63026,
                    "posicao": "2.6.36",
                    "indicador": "Mergulho",
                    "classe": "I",
                    "unidade": {
                      "id": "",
                      "classe": "B",
                      "multiplicador": 1
                    },
                    "children": [],
                    "nota": []
                  },
                  {
                    "id": 63027,
                    "posicao": "2.6.37",
                    "indicador": "Motonáutica",
                    "classe": "I",
                    "unidade": {
                      "id": "",
                      "classe": "B",
                      "multiplicador": 1
                    },
                    "children": [],
                    "nota": []
                  },
                  {
                    "id": 63029,
                    "posicao": "2.6.38",
                    "indicador": "Nado Sincronizado",
                    "classe": "I",
                    "unidade": {
                      "id": "",
                      "classe": "B",
                      "multiplicador": 1
                    },
                    "children": [],
                    "nota": []
                  },
                  {
                    "id": 63028,
                    "posicao": "2.6.39",
                    "indicador": "Natação",
                    "classe": "I",
                    "unidade": {
                      "id": "",
                      "classe": "B",
                      "multiplicador": 1
                    },
                    "children": [],
                    "nota": []
                  },
                  {
                    "id": 63030,
                    "posicao": "2.6.40",
                    "indicador": "Patinação",
                    "classe": "I",
                    "unidade": {
                      "id": "",
                      "classe": "B",
                      "multiplicador": 1
                    },
                    "children": [],
                    "nota": []
                  },
                  {
                    "id": 63031,
                    "posicao": "2.6.41",
                    "indicador": "Pelota Basca",
                    "classe": "I",
                    "unidade": {
                      "id": "",
                      "classe": "B",
                      "multiplicador": 1
                    },
                    "children": [],
                    "nota": []
                  },
                  {
                    "id": 63032,
                    "posicao": "2.6.42",
                    "indicador": "Pentatlo Moderno",
                    "classe": "I",
                    "unidade": {
                      "id": "",
                      "classe": "B",
                      "multiplicador": 1
                    },
                    "children": [],
                    "nota": []
                  },
                  {
                    "id": 63033,
                    "posicao": "2.6.43",
                    "indicador": "Polo",
                    "classe": "I",
                    "unidade": {
                      "id": "",
                      "classe": "B",
                      "multiplicador": 1
                    },
                    "children": [],
                    "nota": []
                  },
                  {
                    "id": 63034,
                    "posicao": "2.6.44",
                    "indicador": "Polo Aquático",
                    "classe": "I",
                    "unidade": {
                      "id": "",
                      "classe": "B",
                      "multiplicador": 1
                    },
                    "children": [],
                    "nota": []
                  },
                  {
                    "id": 63035,
                    "posicao": "2.6.45",
                    "indicador": "Raquetes",
                    "classe": "I",
                    "unidade": {
                      "id": "",
                      "classe": "B",
                      "multiplicador": 1
                    },
                    "children": [],
                    "nota": []
                  },
                  {
                    "id": 63045,
                    "posicao": "2.6.46",
                    "indicador": "Remo",
                    "classe": "I",
                    "unidade": {
                      "id": "",
                      "classe": "B",
                      "multiplicador": 1
                    },
                    "children": [],
                    "nota": []
                  },
                  {
                    "id": 63046,
                    "posicao": "2.6.47",
                    "indicador": "Roque",
                    "classe": "I",
                    "unidade": {
                      "id": "",
                      "classe": "B",
                      "multiplicador": 1
                    },
                    "children": [],
                    "nota": []
                  },
                  {
                    "id": 63036,
                    "posicao": "2.6.48",
                    "indicador": "Rúgbi",
                    "classe": "I",
                    "unidade": {
                      "id": "",
                      "classe": "B",
                      "multiplicador": 1
                    },
                    "children": [],
                    "nota": []
                  },
                  {
                    "id": 63039,
                    "posicao": "2.6.49",
                    "indicador": "Softbol",
                    "classe": "I",
                    "unidade": {
                      "id": "",
                      "classe": "B",
                      "multiplicador": 1
                    },
                    "children": [],
                    "nota": []
                  },
                  {
                    "id": 63040,
                    "posicao": "2.6.50",
                    "indicador": "Taekwondo",
                    "classe": "I",
                    "unidade": {
                      "id": "",
                      "classe": "B",
                      "multiplicador": 1
                    },
                    "children": [],
                    "nota": []
                  },
                  {
                    "id": 63037,
                    "posicao": "2.6.51",
                    "indicador": "Tiro",
                    "classe": "I",
                    "unidade": {
                      "id": "",
                      "classe": "B",
                      "multiplicador": 1
                    },
                    "children": [],
                    "nota": []
                  },
                  {
                    "id": 63038,
                    "posicao": "2.6.52",
                    "indicador": "Triatlo",
                    "classe": "I",
                    "unidade": {
                      "id": "",
                      "classe": "B",
                      "multiplicador": 1
                    },
                    "children": [],
                    "nota": []
                  },
                  {
                    "id": 63041,
                    "posicao": "2.6.53",
                    "indicador": "Tênis",
                    "classe": "I",
                    "unidade": {
                      "id": "",
                      "classe": "B",
                      "multiplicador": 1
                    },
                    "children": [],
                    "nota": []
                  },
                  {
                    "id": 63042,
                    "posicao": "2.6.54",
                    "indicador": "Tênis de Mesa",
                    "classe": "I",
                    "unidade": {
                      "id": "",
                      "classe": "B",
                      "multiplicador": 1
                    },
                    "children": [],
                    "nota": []
                  },
                  {
                    "id": 63047,
                    "posicao": "2.6.55",
                    "indicador": "Vela",
                    "classe": "I",
                    "unidade": {
                      "id": "",
                      "classe": "B",
                      "multiplicador": 1
                    },
                    "children": [],
                    "nota": []
                  },
                  {
                    "id": 63043,
                    "posicao": "2.6.56",
                    "indicador": "Vôlei de Praia",
                    "classe": "I",
                    "unidade": {
                      "id": "",
                      "classe": "B",
                      "multiplicador": 1
                    },
                    "children": [],
                    "nota": []
                  },
                  {
                    "id": 63044,
                    "posicao": "2.6.57",
                    "indicador": "Voleibol",
                    "classe": "I",
                    "unidade": {
                      "id": "",
                      "classe": "B",
                      "multiplicador": 1
                    },
                    "children": [],
                    "nota": []
                  }
                ],
                "nota": []
              }
            ],
            "nota": []
          },
          {
            "id": 62936,
            "posicao": "3",
            "indicador": "Economia",
            "classe": "T",
            "children": [
              {
                "id": 62957,
                "posicao": "3.1",
                "indicador": "Entrada de turistas",
                "classe": "I",
                "unidade": {
                  "id": "turistas",
                  "classe": "N",
                  "multiplicador": 1
                },
                "children": [],
                "nota": [],
                "fonte": [
                  {
                    "periodo": "2013",
                    "fontes": [
                      "World development Indicators 2017, The World Bank. Acesso em: dez. 2017."
                    ]
                  },
                  {
                    "periodo": "2012",
                    "fontes": [
                      "World development Indicators 2017, The World Bank. Acesso em: dez. 2017."
                    ]
                  },
                  {
                    "periodo": "2011",
                    "fontes": [
                      "World development Indicators 2017, The World Bank. Acesso em: dez. 2017."
                    ]
                  },
                  {
                    "periodo": "2009",
                    "fontes": [
                      "World development Indicators 2017, The World Bank. Acesso em: dez. 2017."
                    ]
                  },
                  {
                    "periodo": "2008",
                    "fontes": [
                      "World development Indicators 2017, The World Bank. Acesso em: dez. 2017."
                    ]
                  },
                  {
                    "periodo": "2006",
                    "fontes": [
                      "World development Indicators 2017, The World Bank. Acesso em: dez. 2017."
                    ]
                  },
                  {
                    "periodo": "2005",
                    "fontes": [
                      "World development Indicators 2017, The World Bank. Acesso em: dez. 2017."
                    ]
                  },
                  {
                    "periodo": "2004",
                    "fontes": [
                      "World development Indicators 2017, The World Bank. Acesso em: dez. 2017."
                    ]
                  },
                  {
                    "periodo": "2002",
                    "fontes": [
                      "World development Indicators 2017, The World Bank. Acesso em: dez. 2017."
                    ]
                  },
                  {
                    "periodo": "2001",
                    "fontes": [
                      "World development Indicators 2017, The World Bank. Acesso em: dez. 2017."
                    ]
                  },
                  {
                    "periodo": "2010",
                    "fontes": [
                      "World development Indicators 2017, The World Bank. Acesso em: dez. 2017."
                    ]
                  },
                  {
                    "periodo": "2000",
                    "fontes": [
                      "World development Indicators 2017, The World Bank. Acesso em: dez. 2017."
                    ]
                  },
                  {
                    "periodo": "2014",
                    "fontes": [
                      "World development Indicators 2017, The World Bank. Acesso em: dez. 2017."
                    ]
                  },
                  {
                    "periodo": "2007",
                    "fontes": [
                      "World development Indicators 2017, The World Bank. Acesso em: dez. 2017."
                    ]
                  },
                  {
                    "periodo": "2015",
                    "fontes": [
                      "World development Indicators 2017, The World Bank. Acesso em: dez. 2017."
                    ]
                  },
                  {
                    "periodo": "2016",
                    "fontes": [
                      "World development Indicators 2017, The World Bank. Acesso em: dez. 2017."
                    ]
                  },
                  {
                    "periodo": "2003",
                    "fontes": [
                      "World development Indicators 2017, The World Bank. Acesso em: dez. 2017."
                    ]
                  }
                ]
              },
              {
                "id": 62958,
                "posicao": "3.2",
                "indicador": "Gastos públicos com educação",
                "classe": "I",
                "unidade": {
                  "id": "% do PIB",
                  "classe": "N",
                  "multiplicador": 1
                },
                "children": [],
                "nota": [],
                "fonte": [
                  {
                    "periodo": "2013",
                    "fontes": [
                      "World Development Indicators - 2016. Washington, D.C.: World Bank, 2016. Acesso em: dez.2017."
                    ]
                  },
                  {
                    "periodo": "2012",
                    "fontes": [
                      "World Development Indicators - 2016. Washington, D.C.: World Bank, 2016. Acesso em: dez.2017."
                    ]
                  },
                  {
                    "periodo": "2011",
                    "fontes": [
                      "World Development Indicators - 2016. Washington, D.C.: World Bank, 2016. Acesso em: dez.2017."
                    ]
                  },
                  {
                    "periodo": "2005",
                    "fontes": [
                      "World Development Indicators - 2016. Washington, D.C.: World Bank, 2016. Acesso em: dez.2017."
                    ]
                  },
                  {
                    "periodo": "2010",
                    "fontes": [
                      "World Development Indicators - 2016. Washington, D.C.: World Bank, 2016. Acesso em: dez.2017."
                    ]
                  },
                  {
                    "periodo": "2000",
                    "fontes": [
                      "World Development Indicators - 2016. Washington, D.C.: World Bank, 2016. Acesso em: dez.2017."
                    ]
                  },
                  {
                    "periodo": "2014",
                    "fontes": [
                      "World Development Indicators - 2016. Washington, D.C.: World Bank, 2016. Acesso em: dez.2017."
                    ]
                  },
                  {
                    "periodo": "1990",
                    "fontes": [
                      "World Development Indicators - 2016. Washington, D.C.: World Bank, 2016. Acesso em: dez.2017."
                    ]
                  }
                ]
              },
              {
                "id": 62959,
                "posicao": "3.3",
                "indicador": "Gastos públicos com saúde",
                "classe": "I",
                "unidade": {
                  "id": "% do PIB",
                  "classe": "N",
                  "multiplicador": 1
                },
                "children": [],
                "nota": [
                  {
                    "periodo": "2013",
                    "notas": [
                      "Esta variável já apresenta os dados de Sudão e Sudão do Sul de forma individualizada."
                    ]
                  }
                ],
                "fonte": [
                  {
                    "periodo": "2013",
                    "fontes": [
                      "Human Development Report 2016: Human Development for Everyone. New York: United Nations Development Programme, 2016. Acesso em: dez. 2017."
                    ]
                  },
                  {
                    "periodo": "2012",
                    "fontes": [
                      "Human Development Report 2016: Human Development for Everyone. New York: United Nations Development Programme, 2016. Acesso em: dez. 2017."
                    ]
                  },
                  {
                    "periodo": "2011",
                    "fontes": [
                      "Human Development Report 2016: Human Development for Everyone. New York: United Nations Development Programme, 2016. Acesso em: dez. 2017."
                    ]
                  },
                  {
                    "periodo": "2005",
                    "fontes": [
                      "Human Development Report 2016: Human Development for Everyone. New York: United Nations Development Programme, 2016. Acesso em: dez. 2017."
                    ]
                  },
                  {
                    "periodo": "2010",
                    "fontes": [
                      "Human Development Report 2016: Human Development for Everyone. New York: United Nations Development Programme, 2016. Acesso em: dez. 2017."
                    ]
                  },
                  {
                    "periodo": "2000",
                    "fontes": [
                      "Human Development Report 2016: Human Development for Everyone. New York: United Nations Development Programme, 2016. Acesso em: dez. 2017."
                    ]
                  },
                  {
                    "periodo": "2014",
                    "fontes": [
                      "Human Development Report 2016: Human Development for Everyone. New York: United Nations Development Programme, 2016. Acesso em: dez. 2017."
                    ]
                  }
                ]
              },
              {
                "id": 62960,
                "posicao": "3.4",
                "indicador": "Investimentos em pesquisa e desenvolvimento",
                "classe": "I",
                "unidade": {
                  "id": "% do PIB",
                  "classe": "N",
                  "multiplicador": 1
                },
                "children": [],
                "nota": [],
                "fonte": [
                  {
                    "periodo": "2013",
                    "fontes": [
                      "World development Indicators 2017, The World Bank. Acesso em: dez. 2017."
                    ]
                  },
                  {
                    "periodo": "2012",
                    "fontes": [
                      "World development Indicators 2017, The World Bank. Acesso em: dez. 2017."
                    ]
                  },
                  {
                    "periodo": "2011",
                    "fontes": [
                      "World development Indicators 2017, The World Bank. Acesso em: dez. 2017."
                    ]
                  },
                  {
                    "periodo": "2009",
                    "fontes": [
                      "World development Indicators 2017, The World Bank. Acesso em: dez. 2017."
                    ]
                  },
                  {
                    "periodo": "2008",
                    "fontes": [
                      "World development Indicators 2017, The World Bank. Acesso em: dez. 2017."
                    ]
                  },
                  {
                    "periodo": "2006",
                    "fontes": [
                      "World development Indicators 2017, The World Bank. Acesso em: dez. 2017."
                    ]
                  },
                  {
                    "periodo": "2005",
                    "fontes": [
                      "World development Indicators 2017, The World Bank. Acesso em: dez. 2017."
                    ]
                  },
                  {
                    "periodo": "2004",
                    "fontes": [
                      "World development Indicators 2017, The World Bank. Acesso em: dez. 2017."
                    ]
                  },
                  {
                    "periodo": "2002",
                    "fontes": [
                      "World development Indicators 2017, The World Bank. Acesso em: dez. 2017."
                    ]
                  },
                  {
                    "periodo": "2001",
                    "fontes": [
                      "World development Indicators 2017, The World Bank. Acesso em: dez. 2017."
                    ]
                  },
                  {
                    "periodo": "2010",
                    "fontes": [
                      "World development Indicators 2017, The World Bank. Acesso em: dez. 2017."
                    ]
                  },
                  {
                    "periodo": "2000",
                    "fontes": [
                      "World development Indicators 2017, The World Bank. Acesso em: dez. 2017."
                    ]
                  },
                  {
                    "periodo": "2014",
                    "fontes": [
                      "World development Indicators 2017, The World Bank. Acesso em: dez. 2017."
                    ]
                  },
                  {
                    "periodo": "2007",
                    "fontes": [
                      "World development Indicators 2017, The World Bank. Acesso em: dez. 2017."
                    ]
                  },
                  {
                    "periodo": "2015",
                    "fontes": [
                      "World development Indicators 2017, The World Bank. Acesso em: dez. 2017."
                    ]
                  },
                  {
                    "periodo": "2003",
                    "fontes": [
                      "World development Indicators 2017, The World Bank. Acesso em: dez. 2017."
                    ]
                  }
                ]
              },
              {
                "id": 62961,
                "posicao": "3.5",
                "indicador": "Mulheres de 15 anos ou mais de idade economicamente ativas",
                "classe": "I",
                "unidade": {
                  "id": "%",
                  "classe": "N",
                  "multiplicador": 1
                },
                "children": [],
                "nota": [],
                "fonte": [
                  {
                    "periodo": "2013",
                    "fontes": [
                      "Labour Force Estimates and Projections: 1990-2050. In: International Labour Organization. LFEP data (2015 edition). Genebra, 2015. Acesso em: dez. 2017."
                    ]
                  },
                  {
                    "periodo": "2012",
                    "fontes": [
                      "Labour Force Estimates and Projections: 1990-2050. In: International Labour Organization. LFEP data (2015 edition). Genebra, 2015. Acesso em: dez. 2017."
                    ]
                  },
                  {
                    "periodo": "2011",
                    "fontes": [
                      "Labour Force Estimates and Projections: 1990-2050. In: International Labour Organization. LFEP data (2015 edition). Genebra, 2015. Acesso em: dez. 2017."
                    ]
                  },
                  {
                    "periodo": "2009",
                    "fontes": [
                      "Labour Force Estimates and Projections: 1990-2050. In: International Labour Organization. LFEP data (2015 edition). Genebra, 2015. Acesso em: dez. 2017."
                    ]
                  },
                  {
                    "periodo": "2008",
                    "fontes": [
                      "Labour Force Estimates and Projections: 1990-2050. In: International Labour Organization. LFEP data (2015 edition). Genebra, 2015. Acesso em: dez. 2017."
                    ]
                  },
                  {
                    "periodo": "2006",
                    "fontes": [
                      "Labour Force Estimates and Projections: 1990-2050. In: International Labour Organization. LFEP data (2015 edition). Genebra, 2015. Acesso em: dez. 2017."
                    ]
                  },
                  {
                    "periodo": "2005",
                    "fontes": [
                      "Labour Force Estimates and Projections: 1990-2050. In: International Labour Organization. LFEP data (2015 edition). Genebra, 2015. Acesso em: dez. 2017."
                    ]
                  },
                  {
                    "periodo": "2004",
                    "fontes": [
                      "Labour Force Estimates and Projections: 1990-2050. In: International Labour Organization. LFEP data (2015 edition). Genebra, 2015. Acesso em: dez. 2017."
                    ]
                  },
                  {
                    "periodo": "2002",
                    "fontes": [
                      "Labour Force Estimates and Projections: 1990-2050. In: International Labour Organization. LFEP data (2015 edition). Genebra, 2015. Acesso em: dez. 2017."
                    ]
                  },
                  {
                    "periodo": "2001",
                    "fontes": [
                      "Labour Force Estimates and Projections: 1990-2050. In: International Labour Organization. LFEP data (2015 edition). Genebra, 2015. Acesso em: dez. 2017."
                    ]
                  },
                  {
                    "periodo": "2010",
                    "fontes": [
                      "Labour Force Estimates and Projections: 1990-2050. In: International Labour Organization. LFEP data (2015 edition). Genebra, 2015. Acesso em: dez. 2017."
                    ]
                  },
                  {
                    "periodo": "2000",
                    "fontes": [
                      "Labour Force Estimates and Projections: 1990-2050. In: International Labour Organization. LFEP data (2015 edition). Genebra, 2015. Acesso em: dez. 2017."
                    ]
                  },
                  {
                    "periodo": "2014",
                    "fontes": [
                      "Labour Force Estimates and Projections: 1990-2050. In: International Labour Organization. LFEP data (2015 edition). Genebra, 2015. Acesso em: dez. 2017."
                    ]
                  },
                  {
                    "periodo": "2007",
                    "fontes": [
                      "Labour Force Estimates and Projections: 1990-2050. In: International Labour Organization. LFEP data (2015 edition). Genebra, 2015. Acesso em: dez. 2017."
                    ]
                  },
                  {
                    "periodo": "2015",
                    "fontes": [
                      "Labour Force Estimates and Projections: 1990-2050. In: International Labour Organization. LFEP data (2015 edition). Genebra, 2015. Acesso em: dez. 2017."
                    ]
                  },
                  {
                    "periodo": "2016",
                    "fontes": [
                      "Labour Force Estimates and Projections: 1990-2050. In: International Labour Organization. LFEP data (2015 edition). Genebra, 2015. Acesso em: dez. 2017."
                    ]
                  },
                  {
                    "periodo": "2003",
                    "fontes": [
                      "Labour Force Estimates and Projections: 1990-2050. In: International Labour Organization. LFEP data (2015 edition). Genebra, 2015. Acesso em: dez. 2017."
                    ]
                  },
                  {
                    "periodo": "2017",
                    "fontes": [
                      "Labour Force Estimates and Projections: 1990-2050. In: International Labour Organization. LFEP data (2015 edition). Genebra, 2015. Acesso em: dez. 2017."
                    ]
                  },
                  {
                    "periodo": "2018",
                    "fontes": [
                      "Labour Force Estimates and Projections: 1990-2050. In: International Labour Organization. LFEP data (2015 edition). Genebra, 2015. Acesso em: dez. 2017."
                    ]
                  }
                ]
              },
              {
                "id": 62962,
                "posicao": "3.6",
                "indicador": "PIB per capita",
                "classe": "I",
                "unidade": {
                  "id": "US$",
                  "classe": "N",
                  "multiplicador": 1
                },
                "children": [],
                "nota": [
                  {
                    "periodo": "2015",
                    "notas": [
                      "Esta variável já apresenta os dados de Sudão e Sudão do Sul de forma individualizada."
                    ]
                  }
                ],
                "fonte": [
                  {
                    "periodo": "2011",
                    "fontes": [
                      "United Nations,United Nations Statistics Division, National Accounts Main Aggregates Database,Basic Data Selection, New York, 2012. Acesso em: nov.2017."
                    ]
                  },
                  {
                    "periodo": "2009",
                    "fontes": [
                      "United Nations,United Nations Statistics Division, National Accounts Main Aggregates Database,Basic Data Selection, New York, 2010. Acesso em: nov.2017."
                    ]
                  },
                  {
                    "periodo": "2008",
                    "fontes": [
                      "United Nations,United Nations Statistics Division, National Accounts Main Aggregates Database,Basic Data Selection, New York, 2009. Acesso em: nov.2017."
                    ]
                  },
                  {
                    "periodo": "2006",
                    "fontes": [
                      "United Nations,United Nations Statistics Division, National Accounts Main Aggregates Database,Basic Data Selection, New York, 2007. Acesso em: nov.2017."
                    ]
                  },
                  {
                    "periodo": "2005",
                    "fontes": [
                      "United Nations,United Nations Statistics Division, National Accounts Main Aggregates Database,Basic Data Selection, New York, 2006. Acesso em: nov.2017."
                    ]
                  },
                  {
                    "periodo": "2004",
                    "fontes": [
                      "United Nations,United Nations Statistics Division, National Accounts Main Aggregates Database,Basic Data Selection, New York, 2005. Acesso em: nov.2017."
                    ]
                  },
                  {
                    "periodo": "2002",
                    "fontes": [
                      "United Nations,United Nations Statistics Division, National Accounts Main Aggregates Database,Basic Data Selection, New York, 2003. Acesso em: nov.2017."
                    ]
                  },
                  {
                    "periodo": "2001",
                    "fontes": [
                      "United Nations,United Nations Statistics Division, National Accounts Main Aggregates Database,Basic Data Selection, New York, 2002. Acesso em: nov.2017."
                    ]
                  },
                  {
                    "periodo": "2010",
                    "fontes": [
                      "United Nations,United Nations Statistics Division, National Accounts Main Aggregates Database,Basic Data Selection, New York, 2011. Acesso em: nov.2017."
                    ]
                  },
                  {
                    "periodo": "2000",
                    "fontes": [
                      "United Nations,United Nations Statistics Division, National Accounts Main Aggregates Database,Basic Data Selection, New York, 2001. Acesso em: nov.2017."
                    ]
                  },
                  {
                    "periodo": "2007",
                    "fontes": [
                      "United Nations,United Nations Statistics Division, National Accounts Main Aggregates Database,Basic Data Selection, New York, 2008. Acesso em: nov.2017."
                    ]
                  },
                  {
                    "periodo": "2015",
                    "fontes": [
                      "United Nations,United Nations Statistics Division, National Accounts Main Aggregates Database,Basic Data Selection, New York, 2016. Acesso em: jan.2017."
                    ]
                  },
                  {
                    "periodo": "2003",
                    "fontes": [
                      "United Nations,United Nations Statistics Division, National Accounts Main Aggregates Database,Basic Data Selection, New York, 2004. Acesso em: nov.2017."
                    ]
                  }
                ]
              },
              {
                "id": 62963,
                "posicao": "3.7",
                "indicador": "População de 15 anos ou mais de idade economicamente ativa",
                "classe": "I",
                "unidade": {
                  "id": "%",
                  "classe": "N",
                  "multiplicador": 1
                },
                "children": [],
                "nota": [],
                "fonte": [
                  {
                    "periodo": "2013",
                    "fontes": [
                      "Labour Force Estimates and Projections: 1990-2050. In: International Labour Organization. LFEP data (2015 edition). Genebra, 2015. Acesso em: dez. 2017."
                    ]
                  },
                  {
                    "periodo": "2012",
                    "fontes": [
                      "Labour Force Estimates and Projections: 1990-2050. In: International Labour Organization. LFEP data (2015 edition). Genebra, 2015. Acesso em: dez. 2017."
                    ]
                  },
                  {
                    "periodo": "2011",
                    "fontes": [
                      "Labour Force Estimates and Projections: 1990-2050. In: International Labour Organization. LFEP data (2015 edition). Genebra, 2015. Acesso em: dez. 2017."
                    ]
                  },
                  {
                    "periodo": "2009",
                    "fontes": [
                      "Labour Force Estimates and Projections: 1990-2050. In: International Labour Organization. LFEP data (2015 edition). Genebra, 2015. Acesso em: dez. 2017."
                    ]
                  },
                  {
                    "periodo": "2008",
                    "fontes": [
                      "Labour Force Estimates and Projections: 1990-2050. In: International Labour Organization. LFEP data (2015 edition). Genebra, 2015. Acesso em: dez. 2017."
                    ]
                  },
                  {
                    "periodo": "2006",
                    "fontes": [
                      "Labour Force Estimates and Projections: 1990-2050. In: International Labour Organization. LFEP data (2015 edition). Genebra, 2015. Acesso em: dez. 2017."
                    ]
                  },
                  {
                    "periodo": "2005",
                    "fontes": [
                      "Labour Force Estimates and Projections: 1990-2050. In: International Labour Organization. LFEP data (2015 edition). Genebra, 2015. Acesso em: dez. 2017."
                    ]
                  },
                  {
                    "periodo": "2004",
                    "fontes": [
                      "Labour Force Estimates and Projections: 1990-2050. In: International Labour Organization. LFEP data (2015 edition). Genebra, 2015. Acesso em: dez. 2017."
                    ]
                  },
                  {
                    "periodo": "2002",
                    "fontes": [
                      "Labour Force Estimates and Projections: 1990-2050. In: International Labour Organization. LFEP data (2015 edition). Genebra, 2015. Acesso em: dez. 2017."
                    ]
                  },
                  {
                    "periodo": "2010",
                    "fontes": [
                      "Labour Force Estimates and Projections: 1990-2050. In: International Labour Organization. LFEP data (2015 edition). Genebra, 2015. Acesso em: dez. 2017."
                    ]
                  },
                  {
                    "periodo": "2000",
                    "fontes": [
                      "Labour Force Estimates and Projections: 1990-2050. In: International Labour Organization. LFEP data (2015 edition). Genebra, 2015. Acesso em: dez. 2017."
                    ]
                  },
                  {
                    "periodo": "2014",
                    "fontes": [
                      "Labour Force Estimates and Projections: 1990-2050. In: International Labour Organization. LFEP data (2015 edition). Genebra, 2015. Acesso em: dez. 2017."
                    ]
                  },
                  {
                    "periodo": "2007",
                    "fontes": [
                      "Labour Force Estimates and Projections: 1990-2050. In: International Labour Organization. LFEP data (2015 edition). Genebra, 2015. Acesso em: dez. 2017."
                    ]
                  },
                  {
                    "periodo": "2015",
                    "fontes": [
                      "Labour Force Estimates and Projections: 1990-2050. In: International Labour Organization. LFEP data (2015 edition). Genebra, 2015. Acesso em: dez. 2017."
                    ]
                  },
                  {
                    "periodo": "2016",
                    "fontes": [
                      "Labour Force Estimates and Projections: 1990-2050. In: International Labour Organization. LFEP data (2015 edition). Genebra, 2015. Acesso em: dez. 2017."
                    ]
                  },
                  {
                    "periodo": "2003",
                    "fontes": [
                      "Labour Force Estimates and Projections: 1990-2050. In: International Labour Organization. LFEP data (2015 edition). Genebra, 2015. Acesso em: dez. 2017."
                    ]
                  },
                  {
                    "periodo": "2017",
                    "fontes": [
                      "Labour Force Estimates and Projections: 1990-2050. In: International Labour Organization. LFEP data (2015 edition). Genebra, 2015. Acesso em: dez. 2017."
                    ]
                  },
                  {
                    "periodo": "2018",
                    "fontes": [
                      "Labour Force Estimates and Projections: 1990-2050. In: International Labour Organization. LFEP data (2015 edition). Genebra, 2015. Acesso em: dez. 2017."
                    ]
                  }
                ]
              },
              {
                "id": 62964,
                "posicao": "3.8",
                "indicador": "Total da exportação",
                "classe": "I",
                "unidade": {
                  "id": "US$",
                  "classe": "N",
                  "multiplicador": 1000000
                },
                "children": [],
                "nota": [],
                "fonte": [
                  {
                    "periodo": "2013",
                    "fontes": [
                      "United Nations Commodity Trade Statistics Database. United Nations Statistics Division. New York, 2013. Acesso em: nov. 2017."
                    ]
                  },
                  {
                    "periodo": "2012",
                    "fontes": [
                      "United Nations Commodity Trade Statistics Database. United Nations Statistics Division. New York, 2012. Acesso em: nov. 2017."
                    ]
                  },
                  {
                    "periodo": "2011",
                    "fontes": [
                      "United Nations Commodity Trade Statistics Database. United Nations Statistics Division. New York, 2011. Acesso em: nov. 2017."
                    ]
                  },
                  {
                    "periodo": "2009",
                    "fontes": [
                      "United Nations Commodity Trade Statistics Database. United Nations Statistics Division. New York, 2009. Acesso em: nov. 2017."
                    ]
                  },
                  {
                    "periodo": "2008",
                    "fontes": [
                      "United Nations Commodity Trade Statistics Database. United Nations Statistics Division. New York, 2008. Acesso em: nov. 2017."
                    ]
                  },
                  {
                    "periodo": "2006",
                    "fontes": [
                      "United Nations Commodity Trade Statistics Database. United Nations Statistics Division. New York, 2006. Acesso em: nov. 2017."
                    ]
                  },
                  {
                    "periodo": "2005",
                    "fontes": [
                      "United Nations Commodity Trade Statistics Database. United Nations Statistics Division. New York, 2005. Acesso em: nov. 2017."
                    ]
                  },
                  {
                    "periodo": "2004",
                    "fontes": [
                      "United Nations Commodity Trade Statistics Database. United Nations Statistics Division. New York, 2004. Acesso em: nov. 2017."
                    ]
                  },
                  {
                    "periodo": "2002",
                    "fontes": [
                      "United Nations Commodity Trade Statistics Database. United Nations Statistics Division. New York, 2002. Acesso em: nov. 2017."
                    ]
                  },
                  {
                    "periodo": "2001",
                    "fontes": [
                      "United Nations Commodity Trade Statistics Database. United Nations Statistics Division. New York, 2001. Acesso em: nov. 2017."
                    ]
                  },
                  {
                    "periodo": "2010",
                    "fontes": [
                      "United Nations Commodity Trade Statistics Database. United Nations Statistics Division. New York, 2010. Acesso em: nov. 2017."
                    ]
                  },
                  {
                    "periodo": "2000",
                    "fontes": [
                      "United Nations Commodity Trade Statistics Database. United Nations Statistics Division. New York, 2000. Acesso em: nov. 2017."
                    ]
                  },
                  {
                    "periodo": "2014",
                    "fontes": [
                      "United Nations Commodity Trade Statistics Database. United Nations Statistics Division. New York, 2014. Acesso em: nov. 2017."
                    ]
                  },
                  {
                    "periodo": "2007",
                    "fontes": [
                      "United Nations Commodity Trade Statistics Database. United Nations Statistics Division. New York, 2007. Acesso em: nov. 2017."
                    ]
                  },
                  {
                    "periodo": "2015",
                    "fontes": [
                      "United Nations Commodity Trade Statistics Database. United Nations Statistics Division. New York, 2015. Acesso em: nov. 2017."
                    ]
                  },
                  {
                    "periodo": "2016",
                    "fontes": [
                      "United Nations Commodity Trade Statistics Database. United Nations Statistics Division. New York, 2016. Acesso em: nov. 2017."
                    ]
                  },
                  {
                    "periodo": "2003",
                    "fontes": [
                      "United Nations Commodity Trade Statistics Database. United Nations Statistics Division. New York, 2003. Acesso em: nov. 2017."
                    ]
                  }
                ]
              },
              {
                "id": 62965,
                "posicao": "3.9",
                "indicador": "Total da importação",
                "classe": "I",
                "unidade": {
                  "id": "US$",
                  "classe": "N",
                  "multiplicador": 1000000
                },
                "children": [],
                "nota": [],
                "fonte": [
                  {
                    "periodo": "2013",
                    "fontes": [
                      "United Nations Commodity Trade Statistics Database. United Nations Statistics Division. New York, 2013. Acesso em: nov. 2017."
                    ]
                  },
                  {
                    "periodo": "2012",
                    "fontes": [
                      "United Nations Commodity Trade Statistics Database. United Nations Statistics Division. New York, 2012. Acesso em: nov. 2017."
                    ]
                  },
                  {
                    "periodo": "2011",
                    "fontes": [
                      "United Nations Commodity Trade Statistics Database. United Nations Statistics Division. New York, 2011. Acesso em: nov. 2017."
                    ]
                  },
                  {
                    "periodo": "2009",
                    "fontes": [
                      "United Nations Commodity Trade Statistics Database. United Nations Statistics Division. New York, 2009. Acesso em: nov. 2017."
                    ]
                  },
                  {
                    "periodo": "2008",
                    "fontes": [
                      "United Nations Commodity Trade Statistics Database. United Nations Statistics Division. New York, 2008. Acesso em: nov. 2017."
                    ]
                  },
                  {
                    "periodo": "2006",
                    "fontes": [
                      "United Nations Commodity Trade Statistics Database. United Nations Statistics Division. New York, 2006. Acesso em: nov. 2017."
                    ]
                  },
                  {
                    "periodo": "2005",
                    "fontes": [
                      "United Nations Commodity Trade Statistics Database. United Nations Statistics Division. New York, 2005. Acesso em: nov. 2017."
                    ]
                  },
                  {
                    "periodo": "2004",
                    "fontes": [
                      "United Nations Commodity Trade Statistics Database. United Nations Statistics Division. New York, 2004. Acesso em: nov. 2017."
                    ]
                  },
                  {
                    "periodo": "2002",
                    "fontes": [
                      "United Nations Commodity Trade Statistics Database. United Nations Statistics Division. New York, 2002. Acesso em: nov. 2017."
                    ]
                  },
                  {
                    "periodo": "2001",
                    "fontes": [
                      "United Nations Commodity Trade Statistics Database. United Nations Statistics Division. New York, 2001. Acesso em: nov. 2017."
                    ]
                  },
                  {
                    "periodo": "2010",
                    "fontes": [
                      "United Nations Commodity Trade Statistics Database. United Nations Statistics Division. New York, 2010. Acesso em: nov. 2017."
                    ]
                  },
                  {
                    "periodo": "2000",
                    "fontes": [
                      "United Nations Commodity Trade Statistics Database. United Nations Statistics Division. New York, 2000. Acesso em: nov. 2017."
                    ]
                  },
                  {
                    "periodo": "2014",
                    "fontes": [
                      "United Nations Commodity Trade Statistics Database. United Nations Statistics Division. New York, 2014. Acesso em: nov. 2017."
                    ]
                  },
                  {
                    "periodo": "2007",
                    "fontes": [
                      "United Nations Commodity Trade Statistics Database. United Nations Statistics Division. New York, 2007. Acesso em: nov. 2017."
                    ]
                  },
                  {
                    "periodo": "2015",
                    "fontes": [
                      "United Nations Commodity Trade Statistics Database. United Nations Statistics Division. New York, 2015. Acesso em: nov. 2017."
                    ]
                  },
                  {
                    "periodo": "2016",
                    "fontes": [
                      "United Nations Commodity Trade Statistics Database. United Nations Statistics Division. New York, 2016. Acesso em: nov. 2017."
                    ]
                  },
                  {
                    "periodo": "2003",
                    "fontes": [
                      "United Nations Commodity Trade Statistics Database. United Nations Statistics Division. New York, 2003. Acesso em: nov. 2017."
                    ]
                  }
                ]
              },
              {
                "id": 62966,
                "posicao": "3.10",
                "indicador": "Total do PIB",
                "classe": "I",
                "unidade": {
                  "id": "US$",
                  "classe": "N",
                  "multiplicador": 1000000
                },
                "children": [],
                "nota": [
                  {
                    "periodo": "2015",
                    "notas": [
                      "Esta variável já apresenta os dados de Sudão e Sudão do Sul de forma individualizada."
                    ]
                  }
                ],
                "fonte": [
                  {
                    "periodo": "2013",
                    "fontes": [
                      "United Nations,United Nations Statistics Division, National Accounts Main Aggregates Database,Basic Data Selection, New York, 2016. Acesso em: dez.2017."
                    ]
                  },
                  {
                    "periodo": "2012",
                    "fontes": [
                      "United Nations,United Nations Statistics Division, National Accounts Main Aggregates Database,Basic Data Selection, New York, 2016. Acesso em: dez.2017."
                    ]
                  },
                  {
                    "periodo": "2011",
                    "fontes": [
                      "United Nations,United Nations Statistics Division, National Accounts Main Aggregates Database,Basic Data Selection, New York, 2016. Acesso em: dez.2017."
                    ]
                  },
                  {
                    "periodo": "2009",
                    "fontes": [
                      "United Nations,United Nations Statistics Division, National Accounts Main Aggregates Database,Basic Data Selection, New York, 2016. Acesso em: dez.2017."
                    ]
                  },
                  {
                    "periodo": "2008",
                    "fontes": [
                      "United Nations,United Nations Statistics Division, National Accounts Main Aggregates Database,Basic Data Selection, New York, 2016. Acesso em: dez.2017."
                    ]
                  },
                  {
                    "periodo": "2006",
                    "fontes": [
                      "United Nations,United Nations Statistics Division, National Accounts Main Aggregates Database,Basic Data Selection, New York, 2016. Acesso em: dez.2017."
                    ]
                  },
                  {
                    "periodo": "2005",
                    "fontes": [
                      "United Nations,United Nations Statistics Division, National Accounts Main Aggregates Database,Basic Data Selection, New York, 2016. Acesso em: dez.2017."
                    ]
                  },
                  {
                    "periodo": "2004",
                    "fontes": [
                      "United Nations,United Nations Statistics Division, National Accounts Main Aggregates Database,Basic Data Selection, New York, 2016. Acesso em: dez.2017."
                    ]
                  },
                  {
                    "periodo": "2002",
                    "fontes": [
                      "United Nations,United Nations Statistics Division, National Accounts Main Aggregates Database,Basic Data Selection, New York, 2016. Acesso em: dez.2017."
                    ]
                  },
                  {
                    "periodo": "2001",
                    "fontes": [
                      "United Nations,United Nations Statistics Division, National Accounts Main Aggregates Database,Basic Data Selection, New York, 2016. Acesso em: dez.2017."
                    ]
                  },
                  {
                    "periodo": "2010",
                    "fontes": [
                      "United Nations,United Nations Statistics Division, National Accounts Main Aggregates Database,Basic Data Selection, New York, 2016. Acesso em: dez.2017."
                    ]
                  },
                  {
                    "periodo": "2000",
                    "fontes": [
                      "United Nations,United Nations Statistics Division, National Accounts Main Aggregates Database,Basic Data Selection, New York, 2016. Acesso em: dez.2017."
                    ]
                  },
                  {
                    "periodo": "2014",
                    "fontes": [
                      "United Nations,United Nations Statistics Division, National Accounts Main Aggregates Database,Basic Data Selection, New York, 2016. Acesso em: dez.2017."
                    ]
                  },
                  {
                    "periodo": "2007",
                    "fontes": [
                      "United Nations,United Nations Statistics Division, National Accounts Main Aggregates Database,Basic Data Selection, New York, 2016. Acesso em: dez.2017."
                    ]
                  },
                  {
                    "periodo": "2015",
                    "fontes": [
                      "United Nations,United Nations Statistics Division, National Accounts Main Aggregates Database,Basic Data Selection, New York, 2016. Acesso em: dez.2017."
                    ]
                  },
                  {
                    "periodo": "2003",
                    "fontes": [
                      "United Nations,United Nations Statistics Division, National Accounts Main Aggregates Database,Basic Data Selection, New York, 2016. Acesso em: dez.2017."
                    ]
                  }
                ]
              }
            ],
            "nota": []
          },
          {
            "id": 62937,
            "posicao": "4",
            "indicador": "Indicadores sociais",
            "classe": "T",
            "children": [
              {
                "id": 62973,
                "posicao": "4.1",
                "indicador": "Calorias consumidas",
                "classe": "I",
                "unidade": {
                  "id": "kcal/dia",
                  "classe": "N",
                  "multiplicador": 1
                },
                "children": [],
                "nota": [],
                "fonte": [
                  {
                    "periodo": "2012-2014",
                    "fontes": [
                      "Food security indicators. In: FAO. FAOSTAT. 2017. FAO Statistical Yearbook 2015. Acesso em: dez. 2017."
                    ]
                  },
                  {
                    "periodo": "2014-2016",
                    "fontes": [
                      "Food security indicators. In: FAO. FAOSTAT. 2017. FAO Statistical Yearbook 2015. Acesso em: dez. 2017."
                    ]
                  },
                  {
                    "periodo": "1999-2001",
                    "fontes": [
                      "Food security indicators. In: FAO. FAOSTAT. 2017. FAO Statistical Yearbook 2015. Acesso em: dez. 2017."
                    ]
                  },
                  {
                    "periodo": "2000-2002",
                    "fontes": [
                      "Food security indicators. In: FAO. FAOSTAT. 2017. FAO Statistical Yearbook 2015. Acesso em: dez. 2017."
                    ]
                  },
                  {
                    "periodo": "2001-2003",
                    "fontes": [
                      "Food security indicators. In: FAO. FAOSTAT. 2017. FAO Statistical Yearbook 2015. Acesso em: dez. 2017."
                    ]
                  },
                  {
                    "periodo": "2002-2004",
                    "fontes": [
                      "Food security indicators. In: FAO. FAOSTAT. 2017. FAO Statistical Yearbook 2015. Acesso em: dez. 2017."
                    ]
                  },
                  {
                    "periodo": "2003-2005",
                    "fontes": [
                      "Food security indicators. In: FAO. FAOSTAT. 2017. FAO Statistical Yearbook 2015. Acesso em: dez. 2017."
                    ]
                  },
                  {
                    "periodo": "2004-2006",
                    "fontes": [
                      "Food security indicators. In: FAO. FAOSTAT. 2017. FAO Statistical Yearbook 2015. Acesso em: dez. 2017."
                    ]
                  },
                  {
                    "periodo": "2005-2007",
                    "fontes": [
                      "Food security indicators. In: FAO. FAOSTAT. 2017. FAO Statistical Yearbook 2015. Acesso em: dez. 2017."
                    ]
                  },
                  {
                    "periodo": "2006-2008",
                    "fontes": [
                      "Food security indicators. In: FAO. FAOSTAT. 2017. FAO Statistical Yearbook 2015. Acesso em: dez. 2017."
                    ]
                  },
                  {
                    "periodo": "2007-2009",
                    "fontes": [
                      "Food security indicators. In: FAO. FAOSTAT. 2017. FAO Statistical Yearbook 2015. Acesso em: dez. 2017."
                    ]
                  },
                  {
                    "periodo": "2008-2010",
                    "fontes": [
                      "Food security indicators. In: FAO. FAOSTAT. 2017. FAO Statistical Yearbook 2015. Acesso em: dez. 2017."
                    ]
                  },
                  {
                    "periodo": "2009-2011",
                    "fontes": [
                      "Food security indicators. In: FAO. FAOSTAT. 2017. FAO Statistical Yearbook 2015. Acesso em: dez. 2017."
                    ]
                  },
                  {
                    "periodo": "2010-2012",
                    "fontes": [
                      "Food security indicators. In: FAO. FAOSTAT. 2017. FAO Statistical Yearbook 2015. Acesso em: dez. 2017."
                    ]
                  },
                  {
                    "periodo": "2011-2013",
                    "fontes": [
                      "Food security indicators. In: FAO. FAOSTAT. 2017. FAO Statistical Yearbook 2015. Acesso em: dez. 2017."
                    ]
                  },
                  {
                    "periodo": "2013-2015",
                    "fontes": [
                      "Food security indicators. In: FAO. FAOSTAT. 2017. FAO Statistical Yearbook 2015. Acesso em: dez. 2017."
                    ]
                  }
                ]
              },
              {
                "id": 62967,
                "posicao": "4.2",
                "indicador": "Esperança de vida ao nascer",
                "classe": "I",
                "unidade": {
                  "id": "anos",
                  "classe": "N",
                  "multiplicador": 1
                },
                "children": [],
                "nota": [
                  {
                    "periodo": "2014",
                    "notas": [
                      "Esta variável já apresenta os dados de Sudão e Sudão do Sul de forma individualizada."
                    ]
                  }
                ],
                "fonte": [
                  {
                    "periodo": "2013",
                    "fontes": [
                      "Fonte: Human Development Report 2016: Human Development for Everyone. New York: United Nations Development Programme, 2016. Acesso em: dez. 2017."
                    ]
                  },
                  {
                    "periodo": "2012",
                    "fontes": [
                      "Fonte: Human Development Report 2016: Human Development for Everyone. New York: United Nations Development Programme, 2016. Acesso em: dez. 2017."
                    ]
                  },
                  {
                    "periodo": "2011",
                    "fontes": [
                      "Fonte: Human Development Report 2016: Human Development for Everyone. New York: United Nations Development Programme, 2016. Acesso em: dez. 2017."
                    ]
                  },
                  {
                    "periodo": "2009",
                    "fontes": [
                      "Fonte: Human Development Report 2016: Human Development for Everyone. New York: United Nations Development Programme, 2016. Acesso em: dez. 2017."
                    ]
                  },
                  {
                    "periodo": "2008",
                    "fontes": [
                      "Fonte: Human Development Report 2016: Human Development for Everyone. New York: United Nations Development Programme, 2016. Acesso em: dez. 2017."
                    ]
                  },
                  {
                    "periodo": "2006",
                    "fontes": [
                      "Fonte: Human Development Report 2016: Human Development for Everyone. New York: United Nations Development Programme, 2016. Acesso em: dez. 2017."
                    ]
                  },
                  {
                    "periodo": "2005",
                    "fontes": [
                      "Fonte: Human Development Report 2016: Human Development for Everyone. New York: United Nations Development Programme, 2016. Acesso em: dez. 2017."
                    ]
                  },
                  {
                    "periodo": "2004",
                    "fontes": [
                      "Fonte: Human Development Report 2016: Human Development for Everyone. New York: United Nations Development Programme, 2016. Acesso em: dez. 2017."
                    ]
                  },
                  {
                    "periodo": "2002",
                    "fontes": [
                      "Fonte: Human Development Report 2016: Human Development for Everyone. New York: United Nations Development Programme, 2016. Acesso em: dez. 2017."
                    ]
                  },
                  {
                    "periodo": "2001",
                    "fontes": [
                      "Fonte: Human Development Report 2016: Human Development for Everyone. New York: United Nations Development Programme, 2016. Acesso em: dez. 2017."
                    ]
                  },
                  {
                    "periodo": "2010",
                    "fontes": [
                      "Fonte: Human Development Report 2016: Human Development for Everyone. New York: United Nations Development Programme, 2016. Acesso em: dez. 2017."
                    ]
                  },
                  {
                    "periodo": "2000",
                    "fontes": [
                      "Fonte: Human Development Report 2016: Human Development for Everyone. New York: United Nations Development Programme, 2016. Acesso em: dez. 2017."
                    ]
                  },
                  {
                    "periodo": "2014",
                    "fontes": [
                      "Fonte: Human Development Report 2016: Human Development for Everyone. New York: United Nations Development Programme, 2016. Acesso em: dez. 2017."
                    ]
                  },
                  {
                    "periodo": "2007",
                    "fontes": [
                      "Fonte: Human Development Report 2016: Human Development for Everyone. New York: United Nations Development Programme, 2016. Acesso em: dez. 2017."
                    ]
                  },
                  {
                    "periodo": "2015",
                    "fontes": [
                      "Fonte: Human Development Report 2016: Human Development for Everyone. New York: United Nations Development Programme, 2016. Acesso em: dez. 2017."
                    ]
                  },
                  {
                    "periodo": "2003",
                    "fontes": [
                      "Fonte: Human Development Report 2016: Human Development for Everyone. New York: United Nations Development Programme, 2016. Acesso em: dez. 2017."
                    ]
                  }
                ]
              },
              {
                "id": 62968,
                "posicao": "4.3",
                "indicador": "Índice de desenvolvimento humano",
                "classe": "I",
                "children": [],
                "nota": [
                  {
                    "periodo": "2014",
                    "notas": [
                      "Esta variável já apresenta os dados de Sudão e Sudão do Sul de forma individualizada."
                    ]
                  }
                ],
                "fonte": [
                  {
                    "periodo": "2013",
                    "fontes": [
                      "Human Development Report 2016: Human Development for Everyone. New York: United Nations Development Programme, 2016. Acesso em: dez. 2017."
                    ]
                  },
                  {
                    "periodo": "2012",
                    "fontes": [
                      "Human Development Report 2016: Human Development for Everyone. New York: United Nations Development Programme, 2016. Acesso em: dez. 2017."
                    ]
                  },
                  {
                    "periodo": "2011",
                    "fontes": [
                      "Human Development Report 2016: Human Development for Everyone. New York: United Nations Development Programme, 2016. Acesso em: dez. 2017."
                    ]
                  },
                  {
                    "periodo": "2009",
                    "fontes": [
                      "Human Development Report 2016: Human Development for Everyone. New York: United Nations Development Programme, 2016. Acesso em: dez. 2017."
                    ]
                  },
                  {
                    "periodo": "2008",
                    "fontes": [
                      "Human Development Report 2016: Human Development for Everyone. New York: United Nations Development Programme, 2016. Acesso em: dez. 2017."
                    ]
                  },
                  {
                    "periodo": "2006",
                    "fontes": [
                      "Human Development Report 2016: Human Development for Everyone. New York: United Nations Development Programme, 2016. Acesso em: dez. 2017."
                    ]
                  },
                  {
                    "periodo": "2005",
                    "fontes": [
                      "Human Development Report 2016: Human Development for Everyone. New York: United Nations Development Programme, 2016. Acesso em: dez. 2017."
                    ]
                  },
                  {
                    "periodo": "2004",
                    "fontes": [
                      "Human Development Report 2016: Human Development for Everyone. New York: United Nations Development Programme, 2016. Acesso em: dez. 2017."
                    ]
                  },
                  {
                    "periodo": "2002",
                    "fontes": [
                      "Human Development Report 2016: Human Development for Everyone. New York: United Nations Development Programme, 2016. Acesso em: dez. 2017."
                    ]
                  },
                  {
                    "periodo": "2001",
                    "fontes": [
                      "Human Development Report 2016: Human Development for Everyone. New York: United Nations Development Programme, 2016. Acesso em: dez. 2017."
                    ]
                  },
                  {
                    "periodo": "2010",
                    "fontes": [
                      "Human Development Report 2016: Human Development for Everyone. New York: United Nations Development Programme, 2016. Acesso em: dez. 2017."
                    ]
                  },
                  {
                    "periodo": "2000",
                    "fontes": [
                      "Human Development Report 2016: Human Development for Everyone. New York: United Nations Development Programme, 2016. Acesso em: dez. 2017."
                    ]
                  },
                  {
                    "periodo": "2014",
                    "fontes": [
                      "Human Development Report 2016: Human Development for Everyone. New York: United Nations Development Programme, 2016. Acesso em: dez. 2017."
                    ]
                  },
                  {
                    "periodo": "2007",
                    "fontes": [
                      "Human Development Report 2016: Human Development for Everyone. New York: United Nations Development Programme, 2016. Acesso em: dez. 2017."
                    ]
                  },
                  {
                    "periodo": "2015",
                    "fontes": [
                      "Human Development Report 2016: Human Development for Everyone. New York: United Nations Development Programme, 2016. Acesso em: dez. 2017."
                    ]
                  },
                  {
                    "periodo": "2003",
                    "fontes": [
                      "Human Development Report 2016: Human Development for Everyone. New York: United Nations Development Programme, 2016. Acesso em: dez. 2017."
                    ]
                  }
                ]
              },
              {
                "id": 62969,
                "posicao": "4.4",
                "indicador": "População com acesso a água potável",
                "classe": "I",
                "unidade": {
                  "id": "%",
                  "classe": "N",
                  "multiplicador": 1
                },
                "children": [],
                "nota": [],
                "fonte": [
                  {
                    "periodo": "2013",
                    "fontes": [
                      "Progress on drinking water, sanitation and hygiene 2017. World Health Organization. Genebra: WHO Press, 2017. Acesso em: dez. 2017."
                    ]
                  },
                  {
                    "periodo": "2012",
                    "fontes": [
                      "Progress on drinking water, sanitation and hygiene 2017. World Health Organization. Genebra: WHO Press, 2017. Acesso em: dez. 2017."
                    ]
                  },
                  {
                    "periodo": "2009",
                    "fontes": [
                      "Progress on drinking water, sanitation and hygiene 2017. World Health Organization. Genebra: WHO Press, 2017. Acesso em: dez. 2017."
                    ]
                  },
                  {
                    "periodo": "2008",
                    "fontes": [
                      "Progress on drinking water, sanitation and hygiene 2017. World Health Organization. Genebra: WHO Press, 2017. Acesso em: dez. 2017."
                    ]
                  },
                  {
                    "periodo": "2006",
                    "fontes": [
                      "Progress on drinking water, sanitation and hygiene 2017. World Health Organization. Genebra: WHO Press, 2017. Acesso em: dez. 2017."
                    ]
                  },
                  {
                    "periodo": "2005",
                    "fontes": [
                      "Progress on drinking water, sanitation and hygiene 2017. World Health Organization. Genebra: WHO Press, 2017. Acesso em: dez. 2017."
                    ]
                  },
                  {
                    "periodo": "2004",
                    "fontes": [
                      "Progress on drinking water, sanitation and hygiene 2017. World Health Organization. Genebra: WHO Press, 2017. Acesso em: dez. 2017."
                    ]
                  },
                  {
                    "periodo": "2002",
                    "fontes": [
                      "Progress on drinking water, sanitation and hygiene 2017. World Health Organization. Genebra: WHO Press, 2017. Acesso em: dez. 2017."
                    ]
                  },
                  {
                    "periodo": "2001",
                    "fontes": [
                      "Progress on drinking water, sanitation and hygiene 2017. World Health Organization. Genebra: WHO Press, 2017. Acesso em: dez. 2017."
                    ]
                  },
                  {
                    "periodo": "2010",
                    "fontes": [
                      "Progress on drinking water, sanitation and hygiene 2017. World Health Organization. Genebra: WHO Press, 2017. Acesso em: dez. 2017."
                    ]
                  },
                  {
                    "periodo": "2000",
                    "fontes": [
                      "Progress on drinking water, sanitation and hygiene 2017. World Health Organization. Genebra: WHO Press, 2017. Acesso em: dez. 2017."
                    ]
                  },
                  {
                    "periodo": "2014",
                    "fontes": [
                      "Progress on drinking water, sanitation and hygiene 2017. World Health Organization. Genebra: WHO Press, 2017. Acesso em: dez. 2017."
                    ]
                  },
                  {
                    "periodo": "2007",
                    "fontes": [
                      "Progress on drinking water, sanitation and hygiene 2017. World Health Organization. Genebra: WHO Press, 2017. Acesso em: dez. 2017."
                    ]
                  },
                  {
                    "periodo": "2015",
                    "fontes": [
                      "Progress on drinking water, sanitation and hygiene 2017. World Health Organization. Genebra: WHO Press, 2017. Acesso em: dez. 2017."
                    ]
                  },
                  {
                    "periodo": "2003",
                    "fontes": [
                      "Progress on drinking water, sanitation and hygiene 2017. World Health Organization. Genebra: WHO Press, 2017. Acesso em: dez. 2017."
                    ]
                  }
                ]
              },
              {
                "id": 62970,
                "posicao": "4.5",
                "indicador": "População com acesso a rede sanitária",
                "classe": "I",
                "unidade": {
                  "id": "%",
                  "classe": "N",
                  "multiplicador": 1
                },
                "children": [],
                "nota": [],
                "fonte": [
                  {
                    "periodo": "2013",
                    "fontes": [
                      "Progress on drinking water, sanitation and hygiene 2017. World Health Organization. Genebra: WHO Press, 2017. Acesso em: dez. 2017."
                    ]
                  },
                  {
                    "periodo": "2012",
                    "fontes": [
                      "Progress on drinking water, sanitation and hygiene 2017. World Health Organization. Genebra: WHO Press, 2017. Acesso em: dez. 2017."
                    ]
                  },
                  {
                    "periodo": "2011",
                    "fontes": [
                      "Progress on drinking water, sanitation and hygiene 2017. World Health Organization. Genebra: WHO Press, 2017. Acesso em: dez. 2017."
                    ]
                  },
                  {
                    "periodo": "2009",
                    "fontes": [
                      "Progress on drinking water, sanitation and hygiene 2017. World Health Organization. Genebra: WHO Press, 2017. Acesso em: dez. 2017."
                    ]
                  },
                  {
                    "periodo": "2008",
                    "fontes": [
                      "Progress on drinking water, sanitation and hygiene 2017. World Health Organization. Genebra: WHO Press, 2017. Acesso em: dez. 2017."
                    ]
                  },
                  {
                    "periodo": "2006",
                    "fontes": [
                      "Progress on drinking water, sanitation and hygiene 2017. World Health Organization. Genebra: WHO Press, 2017. Acesso em: dez. 2017."
                    ]
                  },
                  {
                    "periodo": "2005",
                    "fontes": [
                      "Progress on drinking water, sanitation and hygiene 2017. World Health Organization. Genebra: WHO Press, 2017. Acesso em: dez. 2017."
                    ]
                  },
                  {
                    "periodo": "2004",
                    "fontes": [
                      "Progress on drinking water, sanitation and hygiene 2017. World Health Organization. Genebra: WHO Press, 2017. Acesso em: dez. 2017."
                    ]
                  },
                  {
                    "periodo": "2002",
                    "fontes": [
                      "Progress on drinking water, sanitation and hygiene 2017. World Health Organization. Genebra: WHO Press, 2017. Acesso em: dez. 2017."
                    ]
                  },
                  {
                    "periodo": "2001",
                    "fontes": [
                      "Progress on drinking water, sanitation and hygiene 2017. World Health Organization. Genebra: WHO Press, 2017. Acesso em: dez. 2017."
                    ]
                  },
                  {
                    "periodo": "2010",
                    "fontes": [
                      "Progress on drinking water, sanitation and hygiene 2017. World Health Organization. Genebra: WHO Press, 2017. Acesso em: dez. 2017."
                    ]
                  },
                  {
                    "periodo": "2000",
                    "fontes": [
                      "Progress on drinking water, sanitation and hygiene 2017. World Health Organization. Genebra: WHO Press, 2017. Acesso em: dez. 2017."
                    ]
                  },
                  {
                    "periodo": "2014",
                    "fontes": [
                      "Progress on drinking water, sanitation and hygiene 2017. World Health Organization. Genebra: WHO Press, 2017. Acesso em: dez. 2017."
                    ]
                  },
                  {
                    "periodo": "2007",
                    "fontes": [
                      "Progress on drinking water, sanitation and hygiene 2017. World Health Organization. Genebra: WHO Press, 2017. Acesso em: dez. 2017."
                    ]
                  },
                  {
                    "periodo": "2015",
                    "fontes": [
                      "Progress on drinking water, sanitation and hygiene 2017. World Health Organization. Genebra: WHO Press, 2017. Acesso em: dez. 2017."
                    ]
                  },
                  {
                    "periodo": "2003",
                    "fontes": [
                      "Progress on drinking water, sanitation and hygiene 2017. World Health Organization. Genebra: WHO Press, 2017. Acesso em: dez. 2017."
                    ]
                  }
                ]
              },
              {
                "id": 62971,
                "posicao": "4.6",
                "indicador": "População subnutrida",
                "classe": "I",
                "unidade": {
                  "id": "%",
                  "classe": "G",
                  "multiplicador": 1
                },
                "children": [],
                "nota": [],
                "fonte": [
                  {
                    "periodo": "2012-2014",
                    "fontes": [
                      "Food security indicators. In: FAO. FAOSTAT. 2017. FAO Statistical Yearbook 2015. Acesso em: dez. 2017."
                    ]
                  },
                  {
                    "periodo": "2014-2016",
                    "fontes": [
                      "Food security indicators. In: FAO. FAOSTAT. 2017. FAO Statistical Yearbook 2015. Acesso em: dez. 2017."
                    ]
                  },
                  {
                    "periodo": "1999-2001",
                    "fontes": [
                      "Food security indicators. In: FAO. FAOSTAT. 2017. FAO Statistical Yearbook 2015. Acesso em: dez. 2017."
                    ]
                  },
                  {
                    "periodo": "2000-2002",
                    "fontes": [
                      "Food security indicators. In: FAO. FAOSTAT. 2017. FAO Statistical Yearbook 2015. Acesso em: dez. 2017."
                    ]
                  },
                  {
                    "periodo": "2001-2003",
                    "fontes": [
                      "Food security indicators. In: FAO. FAOSTAT. 2017. FAO Statistical Yearbook 2015. Acesso em: dez. 2017."
                    ]
                  },
                  {
                    "periodo": "2002-2004",
                    "fontes": [
                      "Food security indicators. In: FAO. FAOSTAT. 2017. FAO Statistical Yearbook 2015. Acesso em: dez. 2017."
                    ]
                  },
                  {
                    "periodo": "2003-2005",
                    "fontes": [
                      "Food security indicators. In: FAO. FAOSTAT. 2017. FAO Statistical Yearbook 2015. Acesso em: dez. 2017."
                    ]
                  },
                  {
                    "periodo": "2004-2006",
                    "fontes": [
                      "Food security indicators. In: FAO. FAOSTAT. 2017. FAO Statistical Yearbook 2015. Acesso em: dez. 2017."
                    ]
                  },
                  {
                    "periodo": "2005-2007",
                    "fontes": [
                      "Food security indicators. In: FAO. FAOSTAT. 2017. FAO Statistical Yearbook 2015. Acesso em: dez. 2017."
                    ]
                  },
                  {
                    "periodo": "2006-2008",
                    "fontes": [
                      "Food security indicators. In: FAO. FAOSTAT. 2017. FAO Statistical Yearbook 2015. Acesso em: dez. 2017."
                    ]
                  },
                  {
                    "periodo": "2007-2009",
                    "fontes": [
                      "Food security indicators. In: FAO. FAOSTAT. 2017. FAO Statistical Yearbook 2015. Acesso em: dez. 2017."
                    ]
                  },
                  {
                    "periodo": "2008-2010",
                    "fontes": [
                      "Food security indicators. In: FAO. FAOSTAT. 2017. FAO Statistical Yearbook 2015. Acesso em: dez. 2017."
                    ]
                  },
                  {
                    "periodo": "2009-2011",
                    "fontes": [
                      "Food security indicators. In: FAO. FAOSTAT. 2017. FAO Statistical Yearbook 2015. Acesso em: dez. 2017."
                    ]
                  },
                  {
                    "periodo": "2010-2012",
                    "fontes": [
                      "Food security indicators. In: FAO. FAOSTAT. 2017. FAO Statistical Yearbook 2015. Acesso em: dez. 2017."
                    ]
                  },
                  {
                    "periodo": "2011-2013",
                    "fontes": [
                      "Food security indicators. In: FAO. FAOSTAT. 2017. FAO Statistical Yearbook 2015. Acesso em: dez. 2017."
                    ]
                  },
                  {
                    "periodo": "2013-2015",
                    "fontes": [
                      "Food security indicators. In: FAO. FAOSTAT. 2017. FAO Statistical Yearbook 2015. Acesso em: dez. 2017."
                    ]
                  }
                ]
              },
              {
                "id": 62972,
                "posicao": "4.7",
                "indicador": "Taxa bruta de matrículas para todos os níveis de ensino",
                "classe": "I",
                "unidade": {
                  "id": "%",
                  "classe": "N",
                  "multiplicador": 1
                },
                "children": [],
                "nota": [],
                "fonte": [
                  {
                    "periodo": "2013",
                    "fontes": [
                      "UNESCO Institute for Statistics. United Nations Education, Scientific and Cultural Organization. Montreal, 2016. Acesso em: dez. 2017."
                    ]
                  },
                  {
                    "periodo": "2012",
                    "fontes": [
                      "UNESCO Institute for Statistics. United Nations Education, Scientific and Cultural Organization. Montreal, 2016. Acesso em: dez. 2017."
                    ]
                  },
                  {
                    "periodo": "2011",
                    "fontes": [
                      "UNESCO Institute for Statistics. United Nations Education, Scientific and Cultural Organization. Montreal, 2016. Acesso em: dez. 2017."
                    ]
                  },
                  {
                    "periodo": "2009",
                    "fontes": [
                      "UNESCO Institute for Statistics. United Nations Education, Scientific and Cultural Organization. Montreal, 2016. Acesso em: dez. 2017."
                    ]
                  },
                  {
                    "periodo": "2008",
                    "fontes": [
                      "UNESCO Institute for Statistics. United Nations Education, Scientific and Cultural Organization. Montreal, 2016. Acesso em: dez. 2017."
                    ]
                  },
                  {
                    "periodo": "2006",
                    "fontes": [
                      "UNESCO Institute for Statistics. United Nations Education, Scientific and Cultural Organization. Montreal, 2016. Acesso em: dez. 2017."
                    ]
                  },
                  {
                    "periodo": "2005",
                    "fontes": [
                      "UNESCO Institute for Statistics. United Nations Education, Scientific and Cultural Organization. Montreal, 2016. Acesso em: dez. 2017."
                    ]
                  },
                  {
                    "periodo": "2004",
                    "fontes": [
                      "UNESCO Institute for Statistics. United Nations Education, Scientific and Cultural Organization. Montreal, 2016. Acesso em: dez. 2017."
                    ]
                  },
                  {
                    "periodo": "2002",
                    "fontes": [
                      "UNESCO Institute for Statistics. United Nations Education, Scientific and Cultural Organization. Montreal, 2016. Acesso em: dez. 2017."
                    ]
                  },
                  {
                    "periodo": "2001",
                    "fontes": [
                      "UNESCO Institute for Statistics. United Nations Education, Scientific and Cultural Organization. Montreal, 2016. Acesso em: dez. 2017."
                    ]
                  },
                  {
                    "periodo": "2010",
                    "fontes": [
                      "UNESCO Institute for Statistics. United Nations Education, Scientific and Cultural Organization. Montreal, 2016. Acesso em: dez. 2017."
                    ]
                  },
                  {
                    "periodo": "2000",
                    "fontes": [
                      "UNESCO Institute for Statistics. United Nations Education, Scientific and Cultural Organization. Montreal, 2016. Acesso em: dez. 2017."
                    ]
                  },
                  {
                    "periodo": "2014",
                    "fontes": [
                      "UNESCO Institute for Statistics. United Nations Education, Scientific and Cultural Organization. Montreal, 2016. Acesso em: dez. 2017."
                    ]
                  },
                  {
                    "periodo": "2007",
                    "fontes": [
                      "UNESCO Institute for Statistics. United Nations Education, Scientific and Cultural Organization. Montreal, 2016. Acesso em: dez. 2017."
                    ]
                  },
                  {
                    "periodo": "2015",
                    "fontes": [
                      "UNESCO Institute for Statistics. United Nations Education, Scientific and Cultural Organization. Montreal, 2016. Acesso em: dez. 2017."
                    ]
                  },
                  {
                    "periodo": "2016",
                    "fontes": [
                      "UNESCO Institute for Statistics. United Nations Education, Scientific and Cultural Organization. Montreal, 2016. Acesso em: dez. 2017."
                    ]
                  },
                  {
                    "periodo": "2003",
                    "fontes": [
                      "UNESCO Institute for Statistics. United Nations Education, Scientific and Cultural Organization. Montreal, 2016. Acesso em: dez. 2017."
                    ]
                  }
                ]
              },
              {
                "id": 62974,
                "posicao": "4.8",
                "indicador": "Taxa de alfabetização das pessoas de 15 anos ou mais de idade",
                "classe": "I",
                "unidade": {
                  "id": "%",
                  "classe": "N",
                  "multiplicador": 1
                },
                "children": [],
                "nota": [],
                "fonte": [
                  {
                    "periodo": "2013",
                    "fontes": [
                      "UNESCO Institute for Statistics. United Nations Education, Scientific and Cultural Organization. Montreal, 2016. Acesso em: dez. 2017."
                    ]
                  },
                  {
                    "periodo": "2012",
                    "fontes": [
                      "UNESCO Institute for Statistics. United Nations Education, Scientific and Cultural Organization. Montreal, 2016. Acesso em: dez. 2017."
                    ]
                  },
                  {
                    "periodo": "2011",
                    "fontes": [
                      "UNESCO Institute for Statistics. United Nations Education, Scientific and Cultural Organization. Montreal, 2016. Acesso em: dez. 2017."
                    ]
                  },
                  {
                    "periodo": "2009",
                    "fontes": [
                      "UNESCO Institute for Statistics. United Nations Education, Scientific and Cultural Organization. Montreal, 2016. Acesso em: dez. 2017."
                    ]
                  },
                  {
                    "periodo": "2008",
                    "fontes": [
                      "UNESCO Institute for Statistics. United Nations Education, Scientific and Cultural Organization. Montreal, 2016. Acesso em: dez. 2017."
                    ]
                  },
                  {
                    "periodo": "2006",
                    "fontes": [
                      "UNESCO Institute for Statistics. United Nations Education, Scientific and Cultural Organization. Montreal, 2016. Acesso em: dez. 2017."
                    ]
                  },
                  {
                    "periodo": "2005",
                    "fontes": [
                      "UNESCO Institute for Statistics. United Nations Education, Scientific and Cultural Organization. Montreal, 2016. Acesso em: dez. 2017."
                    ]
                  },
                  {
                    "periodo": "2004",
                    "fontes": [
                      "UNESCO Institute for Statistics. United Nations Education, Scientific and Cultural Organization. Montreal, 2016. Acesso em: dez. 2017."
                    ]
                  },
                  {
                    "periodo": "2002",
                    "fontes": [
                      "UNESCO Institute for Statistics. United Nations Education, Scientific and Cultural Organization. Montreal, 2016. Acesso em: dez. 2017."
                    ]
                  },
                  {
                    "periodo": "2001",
                    "fontes": [
                      "UNESCO Institute for Statistics. United Nations Education, Scientific and Cultural Organization. Montreal, 2016. Acesso em: dez. 2017."
                    ]
                  },
                  {
                    "periodo": "2010",
                    "fontes": [
                      "UNESCO Institute for Statistics. United Nations Education, Scientific and Cultural Organization. Montreal, 2016. Acesso em: dez. 2017."
                    ]
                  },
                  {
                    "periodo": "2000",
                    "fontes": [
                      "UNESCO Institute for Statistics. United Nations Education, Scientific and Cultural Organization. Montreal, 2016. Acesso em: dez. 2017."
                    ]
                  },
                  {
                    "periodo": "2014",
                    "fontes": [
                      "UNESCO Institute for Statistics. United Nations Education, Scientific and Cultural Organization. Montreal, 2016. Acesso em: dez. 2017."
                    ]
                  },
                  {
                    "periodo": "2007",
                    "fontes": [
                      "UNESCO Institute for Statistics. United Nations Education, Scientific and Cultural Organization. Montreal, 2016. Acesso em: dez. 2017."
                    ]
                  },
                  {
                    "periodo": "2015",
                    "fontes": [
                      "UNESCO Institute for Statistics. United Nations Education, Scientific and Cultural Organization. Montreal, 2016. Acesso em: dez. 2017."
                    ]
                  },
                  {
                    "periodo": "2016",
                    "fontes": [
                      "UNESCO Institute for Statistics. United Nations Education, Scientific and Cultural Organization. Montreal, 2016. Acesso em: dez. 2017."
                    ]
                  },
                  {
                    "periodo": "2003",
                    "fontes": [
                      "UNESCO Institute for Statistics. United Nations Education, Scientific and Cultural Organization. Montreal, 2016. Acesso em: dez. 2017."
                    ]
                  }
                ]
              }
            ],
            "nota": []
          },
          {
            "id": 62938,
            "posicao": "5",
            "indicador": "Meio Ambiente",
            "classe": "T",
            "children": [
              {
                "id": 62975,
                "posicao": "5.1",
                "indicador": "Áreas cultivadas",
                "classe": "I",
                "unidade": {
                  "id": "% da área total",
                  "classe": "N",
                  "multiplicador": 1
                },
                "children": [],
                "nota": [],
                "fonte": [
                  {
                    "periodo": "2014",
                    "fontes": [
                      "Food and Agriculture Organization of the United Nations - FAO. FAOSTATS, 2016. Acesso em: jan. 2017."
                    ]
                  }
                ]
              },
              {
                "id": 62976,
                "posicao": "5.2",
                "indicador": "Áreas de pastagens permanentes",
                "classe": "I",
                "unidade": {
                  "id": "% da área total",
                  "classe": "N",
                  "multiplicador": 1
                },
                "children": [],
                "nota": [],
                "fonte": [
                  {
                    "periodo": "2014",
                    "fontes": [
                      "Food and Agriculture Organization of the United Nations - FAO. FAOSTATS, 2016. Acesso em: jan. 2017."
                    ]
                  }
                ]
              },
              {
                "id": 62977,
                "posicao": "5.3",
                "indicador": "Áreas protegidas no total do território nacional",
                "classe": "I",
                "unidade": {
                  "id": "%",
                  "classe": "N",
                  "multiplicador": 1
                },
                "children": [],
                "nota": [],
                "fonte": [
                  {
                    "periodo": "2014",
                    "fontes": [
                      "United Nations Statistics Division, Department of Economic and Social Affairs, Millennium Development Goals Indicators - 2015. Acesso em: jul. 2016."
                    ]
                  }
                ]
              },
              {
                "id": 62978,
                "posicao": "5.4",
                "indicador": "Produção de gás natural",
                "classe": "I",
                "unidade": {
                  "id": "m³",
                  "classe": "N",
                  "multiplicador": 1000000000
                },
                "children": [],
                "nota": [],
                "fonte": [
                  {
                    "periodo": "2013",
                    "fontes": [
                      "Anuário Estatístico Brasileiro do Petróleo, Gás Natural e Biocombustíveis 2017. Rio de Janeiro: Agência Nacional do Petróleo, Gás Natural e Biocombustíveis, 2017. Acesso em: dez. 2017."
                    ]
                  },
                  {
                    "periodo": "2012",
                    "fontes": [
                      "Anuário Estatístico Brasileiro do Petróleo, Gás Natural e Biocombustíveis 2017. Rio de Janeiro: Agência Nacional do Petróleo, Gás Natural e Biocombustíveis, 2017. Acesso em: dez. 2017."
                    ]
                  },
                  {
                    "periodo": "2011",
                    "fontes": [
                      "Anuário Estatístico Brasileiro do Petróleo, Gás Natural e Biocombustíveis 2017. Rio de Janeiro: Agência Nacional do Petróleo, Gás Natural e Biocombustíveis, 2017. Acesso em: dez. 2017."
                    ]
                  },
                  {
                    "periodo": "2009",
                    "fontes": [
                      "Anuário Estatístico Brasileiro do Petróleo, Gás Natural e Biocombustíveis 2017. Rio de Janeiro: Agência Nacional do Petróleo, Gás Natural e Biocombustíveis, 2017. Acesso em: dez. 2017."
                    ]
                  },
                  {
                    "periodo": "2008",
                    "fontes": [
                      "Anuário Estatístico Brasileiro do Petróleo, Gás Natural e Biocombustíveis 2017. Rio de Janeiro: Agência Nacional do Petróleo, Gás Natural e Biocombustíveis, 2017. Acesso em: dez. 2017."
                    ]
                  },
                  {
                    "periodo": "2006",
                    "fontes": [
                      "Anuário Estatístico Brasileiro do Petróleo, Gás Natural e Biocombustíveis 2016. Rio de Janeiro: Agência Nacional do Petróleo, Gás Natural e Biocombustíveis, 2016. Acesso em: dez. 2016."
                    ]
                  },
                  {
                    "periodo": "2010",
                    "fontes": [
                      "Anuário Estatístico Brasileiro do Petróleo, Gás Natural e Biocombustíveis 2017. Rio de Janeiro: Agência Nacional do Petróleo, Gás Natural e Biocombustíveis, 2017. Acesso em: dez. 2017."
                    ]
                  },
                  {
                    "periodo": "2014",
                    "fontes": [
                      "Anuário Estatístico Brasileiro do Petróleo, Gás Natural e Biocombustíveis 2017. Rio de Janeiro: Agência Nacional do Petróleo, Gás Natural e Biocombustíveis, 2017. Acesso em: dez. 2017."
                    ]
                  },
                  {
                    "periodo": "2007",
                    "fontes": [
                      "Anuário Estatístico Brasileiro do Petróleo, Gás Natural e Biocombustíveis 2017. Rio de Janeiro: Agência Nacional do Petróleo, Gás Natural e Biocombustíveis, 2017. Acesso em: dez. 2017."
                    ]
                  },
                  {
                    "periodo": "2015",
                    "fontes": [
                      "Anuário Estatístico Brasileiro do Petróleo, Gás Natural e Biocombustíveis 2017. Rio de Janeiro: Agência Nacional do Petróleo, Gás Natural e Biocombustíveis, 2017. Acesso em: dez. 2017."
                    ]
                  },
                  {
                    "periodo": "2016",
                    "fontes": [
                      "Anuário Estatístico Brasileiro do Petróleo, Gás Natural e Biocombustíveis 2017. Rio de Janeiro: Agência Nacional do Petróleo, Gás Natural e Biocombustíveis, 2017. Acesso em: dez. 2017."
                    ]
                  }
                ]
              },
              {
                "id": 62979,
                "posicao": "5.5",
                "indicador": "Produção de petróleo",
                "classe": "I",
                "unidade": {
                  "id": "barris/dia",
                  "classe": "N",
                  "multiplicador": 1000
                },
                "children": [],
                "nota": [],
                "fonte": [
                  {
                    "periodo": "2013",
                    "fontes": [
                      "Anuário Estatístico Brasileiro do Petróleo, Gás Natural e Biocombustíveis 2017. Rio de Janeiro: Agência Nacional do Petróleo, Gás Natural e Biocombustíveis, 2017. Acesso em: dez. 2017."
                    ]
                  },
                  {
                    "periodo": "2012",
                    "fontes": [
                      "Anuário Estatístico Brasileiro do Petróleo, Gás Natural e Biocombustíveis 2017. Rio de Janeiro: Agência Nacional do Petróleo, Gás Natural e Biocombustíveis, 2017. Acesso em: dez. 2017."
                    ]
                  },
                  {
                    "periodo": "2011",
                    "fontes": [
                      "Anuário Estatístico Brasileiro do Petróleo, Gás Natural e Biocombustíveis 2017. Rio de Janeiro: Agência Nacional do Petróleo, Gás Natural e Biocombustíveis, 2017. Acesso em: dez. 2017."
                    ]
                  },
                  {
                    "periodo": "2009",
                    "fontes": [
                      "Anuário Estatístico Brasileiro do Petróleo, Gás Natural e Biocombustíveis 2017. Rio de Janeiro: Agência Nacional do Petróleo, Gás Natural e Biocombustíveis, 2017. Acesso em: dez. 2017."
                    ]
                  },
                  {
                    "periodo": "2008",
                    "fontes": [
                      "Anuário Estatístico Brasileiro do Petróleo, Gás Natural e Biocombustíveis 2017. Rio de Janeiro: Agência Nacional do Petróleo, Gás Natural e Biocombustíveis, 2017. Acesso em: dez. 2017."
                    ]
                  },
                  {
                    "periodo": "2006",
                    "fontes": [
                      "Anuário Estatístico Brasileiro do Petróleo, Gás Natural e Biocombustíveis 2016. Rio de Janeiro: Agência Nacional do Petróleo, Gás Natural e Biocombustíveis, 2016. Acesso em: dez. 2016."
                    ]
                  },
                  {
                    "periodo": "2010",
                    "fontes": [
                      "Anuário Estatístico Brasileiro do Petróleo, Gás Natural e Biocombustíveis 2017. Rio de Janeiro: Agência Nacional do Petróleo, Gás Natural e Biocombustíveis, 2017. Acesso em: dez. 2017."
                    ]
                  },
                  {
                    "periodo": "2014",
                    "fontes": [
                      "Anuário Estatístico Brasileiro do Petróleo, Gás Natural e Biocombustíveis 2017. Rio de Janeiro: Agência Nacional do Petróleo, Gás Natural e Biocombustíveis, 2017. Acesso em: dez. 2017."
                    ]
                  },
                  {
                    "periodo": "2007",
                    "fontes": [
                      "Anuário Estatístico Brasileiro do Petróleo, Gás Natural e Biocombustíveis 2017. Rio de Janeiro: Agência Nacional do Petróleo, Gás Natural e Biocombustíveis, 2017. Acesso em: dez. 2017."
                    ]
                  },
                  {
                    "periodo": "2015",
                    "fontes": [
                      "Anuário Estatístico Brasileiro do Petróleo, Gás Natural e Biocombustíveis 2017. Rio de Janeiro: Agência Nacional do Petróleo, Gás Natural e Biocombustíveis, 2017. Acesso em: dez. 2017."
                    ]
                  },
                  {
                    "periodo": "2016",
                    "fontes": [
                      "Anuário Estatístico Brasileiro do Petróleo, Gás Natural e Biocombustíveis 2017. Rio de Janeiro: Agência Nacional do Petróleo, Gás Natural e Biocombustíveis, 2017. Acesso em: dez. 2017."
                    ]
                  }
                ]
              }
            ],
            "nota": []
          },
          {
            "id": 62939,
            "posicao": "6",
            "indicador": "População",
            "classe": "T",
            "children": [
              {
                "id": 62980,
                "posicao": "6.1",
                "indicador": "Densidade demográfica",
                "classe": "I",
                "unidade": {
                  "id": "hab/km²",
                  "classe": "N",
                  "multiplicador": 1
                },
                "children": [],
                "nota": [
                  {
                    "periodo": "2015",
                    "notas": [
                      "Esta variável já apresenta os dados de Sudão e Sudão do Sul de forma individualizada."
                    ]
                  }
                ],
                "fonte": [
                  {
                    "periodo": "2013",
                    "fontes": [
                      "World Population Prospects: The 2017 Revision. United Nations, Department of Economic and Social Affairs, Population Division. New York, 2017. Population density at mid-year. Acesso em: nov.2017."
                    ]
                  },
                  {
                    "periodo": "2012",
                    "fontes": [
                      "World Population Prospects: The 2017 Revision. United Nations, Department of Economic and Social Affairs, Population Division. New York, 2017. Population density at mid-year. Acesso em: nov.2017."
                    ]
                  },
                  {
                    "periodo": "2011",
                    "fontes": [
                      "World Population Prospects: The 2017 Revision. United Nations, Department of Economic and Social Affairs, Population Division. New York, 2017. Population density at mid-year. Acesso em: nov.2017."
                    ]
                  },
                  {
                    "periodo": "2009",
                    "fontes": [
                      "World Population Prospects: The 2017 Revision. United Nations, Department of Economic and Social Affairs, Population Division. New York, 2017. Population density at mid-year. Acesso em: nov.2017."
                    ]
                  },
                  {
                    "periodo": "2008",
                    "fontes": [
                      "World Population Prospects: The 2017 Revision. United Nations, Department of Economic and Social Affairs, Population Division. New York, 2017. Population density at mid-year. Acesso em: nov.2017."
                    ]
                  },
                  {
                    "periodo": "2006",
                    "fontes": [
                      "World Population Prospects: The 2017 Revision. United Nations, Department of Economic and Social Affairs, Population Division. New York, 2017. Population density at mid-year. Acesso em: nov.2017."
                    ]
                  },
                  {
                    "periodo": "2005",
                    "fontes": [
                      "World Population Prospects: The 2017 Revision. United Nations, Department of Economic and Social Affairs, Population Division. New York, 2017. Population density at mid-year. Acesso em: nov.2017."
                    ]
                  },
                  {
                    "periodo": "2004",
                    "fontes": [
                      "World Population Prospects: The 2017 Revision. United Nations, Department of Economic and Social Affairs, Population Division. New York, 2017. Population density at mid-year. Acesso em: nov.2017."
                    ]
                  },
                  {
                    "periodo": "2002",
                    "fontes": [
                      "World Population Prospects: The 2017 Revision. United Nations, Department of Economic and Social Affairs, Population Division. New York, 2017. Population density at mid-year. Acesso em: nov.2017."
                    ]
                  },
                  {
                    "periodo": "2001",
                    "fontes": [
                      "World Population Prospects: The 2017 Revision. United Nations, Department of Economic and Social Affairs, Population Division. New York, 2017. Population density at mid-year. Acesso em: nov.2017."
                    ]
                  },
                  {
                    "periodo": "2010",
                    "fontes": [
                      "World Population Prospects: The 2017 Revision. United Nations, Department of Economic and Social Affairs, Population Division. New York, 2017. Population density at mid-year. Acesso em: nov.2017."
                    ]
                  },
                  {
                    "periodo": "2000",
                    "fontes": [
                      "World Population Prospects: The 2017 Revision. United Nations, Department of Economic and Social Affairs, Population Division. New York, 2017. Population density at mid-year. Acesso em: nov.2017."
                    ]
                  },
                  {
                    "periodo": "2014",
                    "fontes": [
                      "World Population Prospects: The 2017 Revision. United Nations, Department of Economic and Social Affairs, Population Division. New York, 2017. Population density at mid-year. Acesso em: nov.2017."
                    ]
                  },
                  {
                    "periodo": "2007",
                    "fontes": [
                      "World Population Prospects: The 2017 Revision. United Nations, Department of Economic and Social Affairs, Population Division. New York, 2017. Population density at mid-year. Acesso em: nov.2017."
                    ]
                  },
                  {
                    "periodo": "2015",
                    "fontes": [
                      "World Population Prospects: The 2017 Revision. United Nations, Department of Economic and Social Affairs, Population Division. New York, 2017. Population density at mid-year. Acesso em: nov.2017."
                    ]
                  },
                  {
                    "periodo": "2003",
                    "fontes": [
                      "World Population Prospects: The 2017 Revision. United Nations, Department of Economic and Social Affairs, Population Division. New York, 2017. Population density at mid-year. Acesso em: nov.2017."
                    ]
                  }
                ]
              },
              {
                "id": 62981,
                "posicao": "6.2",
                "indicador": "Homens",
                "classe": "I",
                "unidade": {
                  "id": "habitantes",
                  "classe": "N",
                  "multiplicador": 1
                },
                "children": [],
                "nota": [],
                "fonte": [
                  {
                    "periodo": "2013",
                    "fontes": [
                      "World Population Prospects: The 2017 Revision. United Nations, Department of Economic and Social Affairs, Population Division. New York, 2017. Population at mid-year. Acesso em: dez.2017. (*) Os dados do Brasil foram obtidos da Projeção da População - período 2000-2060 . 2013."
                    ]
                  },
                  {
                    "periodo": "2012",
                    "fontes": [
                      "World Population Prospects: The 2017 Revision. United Nations, Department of Economic and Social Affairs, Population Division. New York, 2017. Population at mid-year. Acesso em: dez.2017. (*) Os dados do Brasil foram obtidos da Projeção da População - período 2000-2060 . 2013."
                    ]
                  },
                  {
                    "periodo": "2011",
                    "fontes": [
                      "World Population Prospects: The 2017 Revision. United Nations, Department of Economic and Social Affairs, Population Division. New York, 2017. Population at mid-year. Acesso em: dez.2017. (*) Os dados do Brasil foram obtidos da Projeção da População - período 2000-2060 . 2013."
                    ]
                  },
                  {
                    "periodo": "2009",
                    "fontes": [
                      "World Population Prospects: The 2017 Revision. United Nations, Department of Economic and Social Affairs, Population Division. New York, 2017. Population at mid-year. Acesso em: dez.2017. (*) Os dados do Brasil foram obtidos da Projeção da População - período 2000-2060 . 2013."
                    ]
                  },
                  {
                    "periodo": "2008",
                    "fontes": [
                      "World Population Prospects: The 2017 Revision. United Nations, Department of Economic and Social Affairs, Population Division. New York, 2017. Population at mid-year. Acesso em: dez.2017. (*) Os dados do Brasil foram obtidos da Projeção da População - período 2000-2060 . 2013."
                    ]
                  },
                  {
                    "periodo": "2006",
                    "fontes": [
                      "World Population Prospects: The 2017 Revision. United Nations, Department of Economic and Social Affairs, Population Division. New York, 2017. Population at mid-year. Acesso em: dez.2017. (*) Os dados do Brasil foram obtidos da Projeção da População - período 2000-2060 . 2013."
                    ]
                  },
                  {
                    "periodo": "2005",
                    "fontes": [
                      "World Population Prospects: The 2017 Revision. United Nations, Department of Economic and Social Affairs, Population Division. New York, 2017. Population at mid-year. Acesso em: dez.2017. (*) Os dados do Brasil foram obtidos da Projeção da População - período 2000-2060 . 2013."
                    ]
                  },
                  {
                    "periodo": "2004",
                    "fontes": [
                      "World Population Prospects: The 2017 Revision. United Nations, Department of Economic and Social Affairs, Population Division. New York, 2017. Population at mid-year. Acesso em: dez.2017. (*) Os dados do Brasil foram obtidos da Projeção da População - período 2000-2060 . 2013."
                    ]
                  },
                  {
                    "periodo": "2002",
                    "fontes": [
                      "World Population Prospects: The 2017 Revision. United Nations, Department of Economic and Social Affairs, Population Division. New York, 2017. Population at mid-year. Acesso em: dez.2017. (*) Os dados do Brasil foram obtidos da Projeção da População - período 2000-2060 . 2013."
                    ]
                  },
                  {
                    "periodo": "2001",
                    "fontes": [
                      "World Population Prospects: The 2017 Revision. United Nations, Department of Economic and Social Affairs, Population Division. New York, 2017. Population at mid-year. Acesso em: dez.2017. (*) Os dados do Brasil foram obtidos da Projeção da População - período 2000-2060 . 2013."
                    ]
                  },
                  {
                    "periodo": "2010",
                    "fontes": [
                      "World Population Prospects: The 2017 Revision. United Nations, Department of Economic and Social Affairs, Population Division. New York, 2017. Population at mid-year. Acesso em: dez.2017. (*) Os dados do Brasil foram obtidos da Projeção da População - período 2000-2060 . 2013."
                    ]
                  },
                  {
                    "periodo": "2000",
                    "fontes": [
                      "World Population Prospects: The 2017 Revision. United Nations, Department of Economic and Social Affairs, Population Division. New York, 2017. Population at mid-year. Acesso em: dez.2017. (*) Os dados do Brasil foram obtidos da Projeção da População - período 2000-2060 . 2013."
                    ]
                  },
                  {
                    "periodo": "2014",
                    "fontes": [
                      "World Population Prospects: The 2017 Revision. United Nations, Department of Economic and Social Affairs, Population Division. New York, 2017. Population at mid-year. Acesso em: dez.2017. (*) Os dados do Brasil foram obtidos da Projeção da População - período 2000-2060 . 2013."
                    ]
                  },
                  {
                    "periodo": "2007",
                    "fontes": [
                      "World Population Prospects: The 2017 Revision. United Nations, Department of Economic and Social Affairs, Population Division. New York, 2017. Population at mid-year. Acesso em: dez.2017. (*) Os dados do Brasil foram obtidos da Projeção da População - período 2000-2060 . 2013."
                    ]
                  },
                  {
                    "periodo": "2015",
                    "fontes": [
                      "World Population Prospects: The 2017 Revision. United Nations, Department of Economic and Social Affairs, Population Division. New York, 2017. Population at mid-year. Acesso em: dez.2017. (*) Os dados do Brasil foram obtidos da Projeção da População - período 2000-2060 . 2013."
                    ]
                  },
                  {
                    "periodo": "2016",
                    "fontes": [
                      "World Population Prospects: The 2017 Revision. United Nations, Department of Economic and Social Affairs, Population Division. New York, 2017. Population at mid-year. Acesso em: dez.2017. (*) Os dados do Brasil foram obtidos da Projeção da População - período 2000-2060 . 2013."
                    ]
                  },
                  {
                    "periodo": "2003",
                    "fontes": [
                      "World Population Prospects: The 2017 Revision. United Nations, Department of Economic and Social Affairs, Population Division. New York, 2017. Population at mid-year. Acesso em: dez.2017. (*) Os dados do Brasil foram obtidos da Projeção da População - período 2000-2060 . 2013."
                    ]
                  },
                  {
                    "periodo": "2017",
                    "fontes": [
                      "World Population Prospects: The 2017 Revision. United Nations, Department of Economic and Social Affairs, Population Division. New York, 2017. Population at mid-year. Acesso em: dez.2017. (*) Os dados do Brasil foram obtidos da Projeção da População - período 2000-2060 . 2013."
                    ]
                  },
                  {
                    "periodo": "2018",
                    "fontes": [
                      "World Population Prospects: The 2017 Revision. United Nations, Department of Economic and Social Affairs, Population Division. New York, 2017. Population at mid-year. Acesso em: dez.2017. (*) Os dados do Brasil foram obtidos da Projeção da População - período 2000-2060 . 2013."
                    ]
                  }
                ]
              },
              {
                "id": 62982,
                "posicao": "6.3",
                "indicador": "Mulheres",
                "classe": "I",
                "unidade": {
                  "id": "habitantes",
                  "classe": "N",
                  "multiplicador": 1
                },
                "children": [],
                "nota": [],
                "fonte": [
                  {
                    "periodo": "2013",
                    "fontes": [
                      "World Population Prospects: The 2017 Revision. United Nations, Department of Economic and Social Affairs, Population Division. New York, 2017. Population at mid-year. Acesso em: dez.2017. (*) Os dados do Brasil foram obtidos da Projeção da População - período 2000-2060 . 2013."
                    ]
                  },
                  {
                    "periodo": "2012",
                    "fontes": [
                      "World Population Prospects: The 2017 Revision. United Nations, Department of Economic and Social Affairs, Population Division. New York, 2017. Population at mid-year. Acesso em: dez.2017. (*) Os dados do Brasil foram obtidos da Projeção da População - período 2000-2060 . 2013."
                    ]
                  },
                  {
                    "periodo": "2011",
                    "fontes": [
                      "World Population Prospects: The 2017 Revision. United Nations, Department of Economic and Social Affairs, Population Division. New York, 2017. Population at mid-year. Acesso em: dez.2017. (*) Os dados do Brasil foram obtidos da Projeção da População - período 2000-2060 . 2013."
                    ]
                  },
                  {
                    "periodo": "2009",
                    "fontes": [
                      "World Population Prospects: The 2017 Revision. United Nations, Department of Economic and Social Affairs, Population Division. New York, 2017. Population at mid-year. Acesso em: dez.2017. (*) Os dados do Brasil foram obtidos da Projeção da População - período 2000-2060 . 2013."
                    ]
                  },
                  {
                    "periodo": "2008",
                    "fontes": [
                      "World Population Prospects: The 2017 Revision. United Nations, Department of Economic and Social Affairs, Population Division. New York, 2017. Population at mid-year. Acesso em: dez.2017. (*) Os dados do Brasil foram obtidos da Projeção da População - período 2000-2060 . 2013."
                    ]
                  },
                  {
                    "periodo": "2006",
                    "fontes": [
                      "World Population Prospects: The 2017 Revision. United Nations, Department of Economic and Social Affairs, Population Division. New York, 2017. Population at mid-year. Acesso em: dez.2017. (*) Os dados do Brasil foram obtidos da Projeção da População - período 2000-2060 . 2013."
                    ]
                  },
                  {
                    "periodo": "2005",
                    "fontes": [
                      "World Population Prospects: The 2017 Revision. United Nations, Department of Economic and Social Affairs, Population Division. New York, 2017. Population at mid-year. Acesso em: dez.2017. (*) Os dados do Brasil foram obtidos da Projeção da População - período 2000-2060 . 2013."
                    ]
                  },
                  {
                    "periodo": "2004",
                    "fontes": [
                      "World Population Prospects: The 2017 Revision. United Nations, Department of Economic and Social Affairs, Population Division. New York, 2017. Population at mid-year. Acesso em: dez.2017. (*) Os dados do Brasil foram obtidos da Projeção da População - período 2000-2060 . 2013."
                    ]
                  },
                  {
                    "periodo": "2002",
                    "fontes": [
                      "World Population Prospects: The 2017 Revision. United Nations, Department of Economic and Social Affairs, Population Division. New York, 2017. Population at mid-year. Acesso em: dez.2017. (*) Os dados do Brasil foram obtidos da Projeção da População - período 2000-2060 . 2013."
                    ]
                  },
                  {
                    "periodo": "2001",
                    "fontes": [
                      "World Population Prospects: The 2017 Revision. United Nations, Department of Economic and Social Affairs, Population Division. New York, 2017. Population at mid-year. Acesso em: dez.2017. (*) Os dados do Brasil foram obtidos da Projeção da População - período 2000-2060 . 2013."
                    ]
                  },
                  {
                    "periodo": "2010",
                    "fontes": [
                      "World Population Prospects: The 2017 Revision. United Nations, Department of Economic and Social Affairs, Population Division. New York, 2017. Population at mid-year. Acesso em: dez.2017. (*) Os dados do Brasil foram obtidos da Projeção da População - período 2000-2060 . 2013."
                    ]
                  },
                  {
                    "periodo": "2000",
                    "fontes": [
                      "World Population Prospects: The 2017 Revision. United Nations, Department of Economic and Social Affairs, Population Division. New York, 2017. Population at mid-year. Acesso em: dez.2017. (*) Os dados do Brasil foram obtidos da Projeção da População - período 2000-2060 . 2013."
                    ]
                  },
                  {
                    "periodo": "2014",
                    "fontes": [
                      "World Population Prospects: The 2017 Revision. United Nations, Department of Economic and Social Affairs, Population Division. New York, 2017. Population at mid-year. Acesso em: dez.2017. (*) Os dados do Brasil foram obtidos da Projeção da População - período 2000-2060 . 2013."
                    ]
                  },
                  {
                    "periodo": "2007",
                    "fontes": [
                      "World Population Prospects: The 2017 Revision. United Nations, Department of Economic and Social Affairs, Population Division. New York, 2017. Population at mid-year. Acesso em: dez.2017. (*) Os dados do Brasil foram obtidos da Projeção da População - período 2000-2060 . 2013."
                    ]
                  },
                  {
                    "periodo": "2015",
                    "fontes": [
                      "World Population Prospects: The 2017 Revision. United Nations, Department of Economic and Social Affairs, Population Division. New York, 2017. Population at mid-year. Acesso em: dez.2017. (*) Os dados do Brasil foram obtidos da Projeção da População - período 2000-2060 . 2013."
                    ]
                  },
                  {
                    "periodo": "2016",
                    "fontes": [
                      "World Population Prospects: The 2017 Revision. United Nations, Department of Economic and Social Affairs, Population Division. New York, 2017. Population at mid-year. Acesso em: dez.2017. (*) Os dados do Brasil foram obtidos da Projeção da População - período 2000-2060 . 2013."
                    ]
                  },
                  {
                    "periodo": "2003",
                    "fontes": [
                      "World Population Prospects: The 2017 Revision. United Nations, Department of Economic and Social Affairs, Population Division. New York, 2017. Population at mid-year. Acesso em: dez.2017. (*) Os dados do Brasil foram obtidos da Projeção da População - período 2000-2060 . 2013."
                    ]
                  },
                  {
                    "periodo": "2017",
                    "fontes": [
                      "World Population Prospects: The 2017 Revision. United Nations, Department of Economic and Social Affairs, Population Division. New York, 2017. Population at mid-year. Acesso em: dez.2017. (*) Os dados do Brasil foram obtidos da Projeção da População - período 2000-2060 . 2013."
                    ]
                  },
                  {
                    "periodo": "2018",
                    "fontes": [
                      "World Population Prospects: The 2017 Revision. United Nations, Department of Economic and Social Affairs, Population Division. New York, 2017. Population at mid-year. Acesso em: dez.2017. (*) Os dados do Brasil foram obtidos da Projeção da População - período 2000-2060 . 2013."
                    ]
                  }
                ]
              },
              {
                "id": 62983,
                "posicao": "6.4",
                "indicador": "População residente em área rural",
                "classe": "I",
                "unidade": {
                  "id": "%",
                  "classe": "N",
                  "multiplicador": 1
                },
                "children": [],
                "nota": [
                  {
                    "periodo": "2014",
                    "notas": [
                      "Esta variável já apresenta os dados de Sudão e Sudão do Sul de forma individualizada."
                    ]
                  }
                ],
                "fonte": [
                  {
                    "periodo": "2005",
                    "fontes": [
                      "World Urbanization Prospects:The 2014 Revision. United Nations, Department of Economic and Social Affairs, Population Division. New York, 2014. Population at mid-year. Acesso em: jan.2018."
                    ]
                  },
                  {
                    "periodo": "2010",
                    "fontes": [
                      "World Urbanization Prospects:The 2014 Revision. United Nations, Department of Economic and Social Affairs, Population Division. New York, 2014. Population at mid-year. Acesso em: jan.2018."
                    ]
                  },
                  {
                    "periodo": "2000",
                    "fontes": [
                      "World Urbanization Prospects:The 2014 Revision. United Nations, Department of Economic and Social Affairs, Population Division. New York, 2014. Population at mid-year. Acesso em: jan.2018."
                    ]
                  },
                  {
                    "periodo": "2014",
                    "fontes": [
                      "World Urbanization Prospects:The 2014 Revision. United Nations, Department of Economic and Social Affairs, Population Division. New York, 2014.  Population at mid-year. Acesso em: ago.2014."
                    ]
                  },
                  {
                    "periodo": "2015",
                    "fontes": [
                      "World Urbanization Prospects:The 2014 Revision. United Nations, Department of Economic and Social Affairs, Population Division. New York, 2014. Population at mid-year. Acesso em: jan.2018."
                    ]
                  }
                ]
              },
              {
                "id": 62984,
                "posicao": "6.5",
                "indicador": "População residente em área urbana",
                "classe": "I",
                "unidade": {
                  "id": "%",
                  "classe": "N",
                  "multiplicador": 1
                },
                "children": [],
                "nota": [
                  {
                    "periodo": "2014",
                    "notas": [
                      "Esta variável já apresenta os dados de Sudão e Sudão do Sul de forma individualizada."
                    ]
                  }
                ],
                "fonte": [
                  {
                    "periodo": "2005",
                    "fontes": [
                      "World Urbanization Prospects:The 2014 Revision. United Nations, Department of Economic and Social Affairs, Population Division. New York, 2014. Population at mid-year. Acesso em: jan.2018."
                    ]
                  },
                  {
                    "periodo": "2010",
                    "fontes": [
                      "World Urbanization Prospects:The 2014 Revision. United Nations, Department of Economic and Social Affairs, Population Division. New York, 2014. Population at mid-year. Acesso em: jan.2018."
                    ]
                  },
                  {
                    "periodo": "2000",
                    "fontes": [
                      "World Urbanization Prospects:The 2014 Revision. United Nations, Department of Economic and Social Affairs, Population Division. New York, 2014. Population at mid-year. Acesso em: jan.2018."
                    ]
                  },
                  {
                    "periodo": "2014",
                    "fontes": [
                      "World Urbanization Prospects:The 2014 Revision. United Nations, Department of Economic and Social Affairs, Population Division. New York, 2014.  Population at mid-year. Acesso em: ago.2014."
                    ]
                  },
                  {
                    "periodo": "2015",
                    "fontes": [
                      "World Urbanization Prospects:The 2014 Revision. United Nations, Department of Economic and Social Affairs, Population Division. New York, 2014. Population at mid-year. Acesso em: jan.2018."
                    ]
                  }
                ]
              },
              {
                "id": 62985,
                "posicao": "6.6",
                "indicador": "População total",
                "classe": "I",
                "unidade": {
                  "id": "habitantes",
                  "classe": "N",
                  "multiplicador": 1
                },
                "children": [],
                "nota": [],
                "fonte": [
                  {
                    "periodo": "2013",
                    "fontes": [
                      "World Population Prospects: The 2017 Revision. United Nations, Department of Economic and Social Affairs, Population Division. New York, 2017. Population at mid-year. Acesso em: dez.2017. (*) Os dados do Brasil foram obtidos da Projeção da População - período 2000-2060 . 2013."
                    ]
                  },
                  {
                    "periodo": "2012",
                    "fontes": [
                      "World Population Prospects: The 2017 Revision. United Nations, Department of Economic and Social Affairs, Population Division. New York, 2017. Population at mid-year. Acesso em: dez.2017. (*) Os dados do Brasil foram obtidos da Projeção da População - período 2000-2060 . 2013."
                    ]
                  },
                  {
                    "periodo": "2011",
                    "fontes": [
                      "World Population Prospects: The 2017 Revision. United Nations, Department of Economic and Social Affairs, Population Division. New York, 2017. Population at mid-year. Acesso em: dez.2017. (*) Os dados do Brasil foram obtidos da Projeção da População - período 2000-2060 . 2013."
                    ]
                  },
                  {
                    "periodo": "2009",
                    "fontes": [
                      "World Population Prospects: The 2017 Revision. United Nations, Department of Economic and Social Affairs, Population Division. New York, 2017. Population at mid-year. Acesso em: dez.2017. (*) Os dados do Brasil foram obtidos da Projeção da População - período 2000-2060 . 2013."
                    ]
                  },
                  {
                    "periodo": "2008",
                    "fontes": [
                      "World Population Prospects: The 2017 Revision. United Nations, Department of Economic and Social Affairs, Population Division. New York, 2017. Population at mid-year. Acesso em: dez.2017. (*) Os dados do Brasil foram obtidos da Projeção da População - período 2000-2060 . 2013."
                    ]
                  },
                  {
                    "periodo": "2006",
                    "fontes": [
                      "World Population Prospects: The 2017 Revision. United Nations, Department of Economic and Social Affairs, Population Division. New York, 2017. Population at mid-year. Acesso em: dez.2017. (*) Os dados do Brasil foram obtidos da Projeção da População - período 2000-2060 . 2013."
                    ]
                  },
                  {
                    "periodo": "2005",
                    "fontes": [
                      "World Population Prospects: The 2017 Revision. United Nations, Department of Economic and Social Affairs, Population Division. New York, 2017. Population at mid-year. Acesso em: dez.2017. (*) Os dados do Brasil foram obtidos da Projeção da População - período 2000-2060 . 2013."
                    ]
                  },
                  {
                    "periodo": "2004",
                    "fontes": [
                      "World Population Prospects: The 2017 Revision. United Nations, Department of Economic and Social Affairs, Population Division. New York, 2017. Population at mid-year. Acesso em: dez.2017. (*) Os dados do Brasil foram obtidos da Projeção da População - período 2000-2060 . 2013."
                    ]
                  },
                  {
                    "periodo": "2002",
                    "fontes": [
                      "World Population Prospects: The 2017 Revision. United Nations, Department of Economic and Social Affairs, Population Division. New York, 2017. Population at mid-year. Acesso em: dez.2017. (*) Os dados do Brasil foram obtidos da Projeção da População - período 2000-2060 . 2013."
                    ]
                  },
                  {
                    "periodo": "2001",
                    "fontes": [
                      "World Population Prospects: The 2017 Revision. United Nations, Department of Economic and Social Affairs, Population Division. New York, 2017. Population at mid-year. Acesso em: dez.2017. (*) Os dados do Brasil foram obtidos da Projeção da População - período 2000-2060 . 2013."
                    ]
                  },
                  {
                    "periodo": "2010",
                    "fontes": [
                      "World Population Prospects: The 2017 Revision. United Nations, Department of Economic and Social Affairs, Population Division. New York, 2017. Population at mid-year. Acesso em: dez.2017. (*) Os dados do Brasil foram obtidos da Projeção da População - período 2000-2060 . 2013."
                    ]
                  },
                  {
                    "periodo": "2000",
                    "fontes": [
                      "World Population Prospects: The 2017 Revision. United Nations, Department of Economic and Social Affairs, Population Division. New York, 2017. Population at mid-year. Acesso em: dez.2017. (*) Os dados do Brasil foram obtidos da Projeção da População - período 2000-2060 . 2013."
                    ]
                  },
                  {
                    "periodo": "2014",
                    "fontes": [
                      "World Population Prospects: The 2017 Revision. United Nations, Department of Economic and Social Affairs, Population Division. New York, 2017. Population at mid-year. Acesso em: dez.2017. (*) Os dados do Brasil foram obtidos da Projeção da População - período 2000-2060 . 2013."
                    ]
                  },
                  {
                    "periodo": "2007",
                    "fontes": [
                      "World Population Prospects: The 2017 Revision. United Nations, Department of Economic and Social Affairs, Population Division. New York, 2017. Population at mid-year. Acesso em: dez.2017. (*) Os dados do Brasil foram obtidos da Projeção da População - período 2000-2060 . 2013."
                    ]
                  },
                  {
                    "periodo": "2015",
                    "fontes": [
                      "World Population Prospects: The 2017 Revision. United Nations, Department of Economic and Social Affairs, Population Division. New York, 2017. Population at mid-year. Acesso em: dez.2017. (*) Os dados do Brasil foram obtidos da Projeção da População - período 2000-2060 . 2013."
                    ]
                  },
                  {
                    "periodo": "2016",
                    "fontes": [
                      "World Population Prospects: The 2017 Revision. United Nations, Department of Economic and Social Affairs, Population Division. New York, 2017. Population at mid-year. Acesso em: dez.2017. (*) Os dados do Brasil foram obtidos da Projeção da População - período 2000-2060 . 2013."
                    ]
                  },
                  {
                    "periodo": "2003",
                    "fontes": [
                      "World Population Prospects: The 2017 Revision. United Nations, Department of Economic and Social Affairs, Population Division. New York, 2017. Population at mid-year. Acesso em: dez.2017. (*) Os dados do Brasil foram obtidos da Projeção da População - período 2000-2060 . 2013."
                    ]
                  },
                  {
                    "periodo": "2017",
                    "fontes": [
                      "World Population Prospects: The 2017 Revision. United Nations, Department of Economic and Social Affairs, Population Division. New York, 2017. Population at mid-year. Acesso em: dez.2017. (*) Os dados do Brasil foram obtidos da Projeção da População - período 2000-2060 . 2013."
                    ]
                  },
                  {
                    "periodo": "2018",
                    "fontes": [
                      "World Population Prospects: The 2017 Revision. United Nations, Department of Economic and Social Affairs, Population Division. New York, 2017. Population at mid-year. Acesso em: dez.2017. (*) Os dados do Brasil foram obtidos da Projeção da População - período 2000-2060 . 2013."
                    ]
                  }
                ]
              },
              {
                "id": 62986,
                "posicao": "6.7",
                "indicador": "Taxa bruta de mortalidade",
                "classe": "I",
                "unidade": {
                  "id": "por mil",
                  "classe": "N",
                  "multiplicador": 1
                },
                "children": [],
                "nota": [
                  {
                    "periodo": "2012",
                    "notas": [
                      "Esta variável já apresenta os dados de Sudão e Sudão do Sul de forma individualizada."
                    ]
                  }
                ],
                "fonte": [
                  {
                    "periodo": "2012",
                    "fontes": [
                      "Demographic indicators. In: The state of the world's children 2014. New York: Unicef, 2014. Acesso em: mar. 2015."
                    ]
                  },
                  {
                    "periodo": "1970",
                    "fontes": [
                      "Demographic indicators. In: The state of the world's children 2014. New York: Unicef, 2014. Acesso em: nov. 2017."
                    ]
                  },
                  {
                    "periodo": "1990",
                    "fontes": [
                      "Demographic indicators. In: The state of the world's children 2014. New York: Unicef, 2014. Acesso em: nov. 2017."
                    ]
                  }
                ]
              },
              {
                "id": 62987,
                "posicao": "6.8",
                "indicador": "Taxa bruta de natalidade",
                "classe": "I",
                "unidade": {
                  "id": "por mil",
                  "classe": "N",
                  "multiplicador": 1
                },
                "children": [],
                "nota": [
                  {
                    "periodo": "2012",
                    "notas": [
                      "Esta variável já apresenta os dados de Sudão e Sudão do Sul de forma individualizada."
                    ]
                  }
                ],
                "fonte": [
                  {
                    "periodo": "2012",
                    "fontes": [
                      "Demographic indicators. In: The state of the world's children 2014. New York: Unicef, 2014. Acesso em: mar. 2015."
                    ]
                  },
                  {
                    "periodo": "1970",
                    "fontes": [
                      "Demographic indicators. In: The state of the world's children 2014. New York: Unicef, 2014. Acesso em: nov. 2017."
                    ]
                  },
                  {
                    "periodo": "1990",
                    "fontes": [
                      "Demographic indicators. In: The state of the world's children 2014. New York: Unicef, 2014. Acesso em: nov. 2017."
                    ]
                  }
                ]
              },
              {
                "id": 62988,
                "posicao": "6.9",
                "indicador": "Taxa média anual do crescimento da população",
                "classe": "I",
                "unidade": {
                  "id": "%",
                  "classe": "N",
                  "multiplicador": 1
                },
                "children": [],
                "nota": [
                  {
                    "periodo": "2010-2015",
                    "notas": [
                      "Esta variável já apresenta os dados de Sudão e Sudão do Sul de forma individualizada."
                    ]
                  }
                ],
                "fonte": [
                  {
                    "periodo": "2010-2015",
                    "fontes": [
                      "World Population Prospects: The 2017 Revision. United Nations, Department of Economic and Social Affairs, Population Division. New York, 2017. Population density at mid-year. Acesso em: jan.2018."
                    ]
                  },
                  {
                    "periodo": "1995-2000",
                    "fontes": [
                      "World Population Prospects: The 2017 Revision. United Nations, Department of Economic and Social Affairs, Population Division. New York, 2017. Population density at mid-year. Acesso em: jan.2018."
                    ]
                  },
                  {
                    "periodo": "2000-2005",
                    "fontes": [
                      "World Population Prospects: The 2017 Revision. United Nations, Department of Economic and Social Affairs, Population Division. New York, 2017. Population density at mid-year. Acesso em: jan.2018."
                    ]
                  },
                  {
                    "periodo": "2005-2010",
                    "fontes": [
                      "World Population Prospects: The 2017 Revision. United Nations, Department of Economic and Social Affairs, Population Division. New York, 2017. Population density at mid-year. Acesso em: jan.2018."
                    ]
                  }
                ]
              }
            ],
            "nota": []
          },
          {
            "id": 62940,
            "posicao": "7",
            "indicador": "Redes",
            "classe": "T",
            "children": [
              {
                "id": 62989,
                "posicao": "7.1",
                "indicador": "Assinantes de telefonia celular",
                "classe": "I",
                "unidade": {
                  "id": "a cada 100 habitantes",
                  "classe": "N",
                  "multiplicador": 1
                },
                "children": [],
                "nota": [
                  {
                    "periodo": "2015",
                    "notas": [
                      "Esta variável já apresenta os dados de Sudão e Sudão do Sul de forma individualizada."
                    ]
                  }
                ],
                "fonte": [
                  {
                    "periodo": "2013",
                    "fontes": [
                      "ICT Statistics Database. Mobile-cellular subscriptions. Geneva: International Telecommunication Union, 2013. Acesso em: nov. 2017."
                    ]
                  },
                  {
                    "periodo": "2012",
                    "fontes": [
                      "ICT Statistics Database. Mobile-cellular subscriptions. Geneva: International Telecommunication Union, 2012. Acesso em: nov. 2017."
                    ]
                  },
                  {
                    "periodo": "2011",
                    "fontes": [
                      "ICT Statistics Database. Mobile-cellular subscriptions. Geneva: International Telecommunication Union, 2011. Acesso em: nov. 2017."
                    ]
                  },
                  {
                    "periodo": "2009",
                    "fontes": [
                      "ICT Statistics Database. Mobile-cellular subscriptions. Geneva: International Telecommunication Union, 2009. Acesso em: nov. 2017."
                    ]
                  },
                  {
                    "periodo": "2008",
                    "fontes": [
                      "ICT Statistics Database. Mobile-cellular subscriptions. Geneva: International Telecommunication Union, 2008. Acesso em: nov. 2017."
                    ]
                  },
                  {
                    "periodo": "2010",
                    "fontes": [
                      "ICT Statistics Database. Mobile-cellular subscriptions. Geneva: International Telecommunication Union, 2010. Acesso em: nov. 2017."
                    ]
                  },
                  {
                    "periodo": "2014",
                    "fontes": [
                      "ICT Statistics Database. Mobile-cellular subscriptions. Geneva: International Telecommunication Union, 2014. Acesso em: nov. 2017."
                    ]
                  },
                  {
                    "periodo": "2007",
                    "fontes": [
                      "ICT Statistics Database. Mobile-cellular subscriptions. Geneva: International Telecommunication Union, 2007. Acesso em: nov. 2017."
                    ]
                  },
                  {
                    "periodo": "2015",
                    "fontes": [
                      "ICT Statistics Database. Mobile-cellular subscriptions. Geneva: International Telecommunication Union, 2015. Acesso em: jul. 2016."
                    ]
                  },
                  {
                    "periodo": "2016",
                    "fontes": [
                      "ICT Statistics Database. Mobile-cellular subscriptions. Geneva: International Telecommunication Union, 2016. Acesso em: nov. 2017."
                    ]
                  }
                ]
              },
              {
                "id": 62990,
                "posicao": "7.2",
                "indicador": "Linhas telefônicas",
                "classe": "I",
                "unidade": {
                  "id": "a cada 100 habitantes",
                  "classe": "N",
                  "multiplicador": 1
                },
                "children": [],
                "nota": [],
                "fonte": [
                  {
                    "periodo": "2013",
                    "fontes": [
                      "ICT Statistics Database. Fixed-telephone subscriptions. Geneva: International Telecommunication Union, 2013. Acesso em: nov. 2017."
                    ]
                  },
                  {
                    "periodo": "2012",
                    "fontes": [
                      "ICT Statistics Database. Fixed-telephone subscriptions. Geneva: International Telecommunication Union, 2012. Acesso em: nov. 2017."
                    ]
                  },
                  {
                    "periodo": "2011",
                    "fontes": [
                      "ICT Statistics Database. Fixed-telephone subscriptions. Geneva: International Telecommunication Union, 2011. Acesso em: nov. 2017."
                    ]
                  },
                  {
                    "periodo": "2009",
                    "fontes": [
                      "ICT Statistics Database. Fixed-telephone subscriptions. Geneva: International Telecommunication Union, 2009. Acesso em: nov. 2017."
                    ]
                  },
                  {
                    "periodo": "2008",
                    "fontes": [
                      "ICT Statistics Database. Fixed-telephone subscriptions. Geneva: International Telecommunication Union, 2008. Acesso em: nov. 2017."
                    ]
                  },
                  {
                    "periodo": "2010",
                    "fontes": [
                      "ICT Statistics Database. Fixed-telephone subscriptions. Geneva: International Telecommunication Union, 2010. Acesso em: nov. 2017."
                    ]
                  },
                  {
                    "periodo": "2014",
                    "fontes": [
                      "ICT Statistics Database. Fixed-telephone subscriptions. Geneva: International Telecommunication Union, 2014. Acesso em: nov. 2017."
                    ]
                  },
                  {
                    "periodo": "2007",
                    "fontes": [
                      "ICT Statistics Database. Fixed-telephone subscriptions. Geneva: International Telecommunication Union, 2007. Acesso em: nov. 2017."
                    ]
                  },
                  {
                    "periodo": "2015",
                    "fontes": [
                      "ICT Statistics Database. Fixed-telephone subscriptions. Geneva: International Telecommunication Union, 2015. Acesso em: jul. 2016."
                    ]
                  },
                  {
                    "periodo": "2016",
                    "fontes": [
                      "ICT Statistics Database. Fixed-telephone subscriptions. Geneva: International Telecommunication Union, 2016. Acesso em: nov. 2017."
                    ]
                  }
                ]
              },
              {
                "id": 62991,
                "posicao": "7.3",
                "indicador": "Número de computadores pessoais",
                "classe": "I",
                "unidade": {
                  "id": "a cada 100 domicílios",
                  "classe": "N",
                  "multiplicador": 1
                },
                "children": [],
                "nota": [],
                "fonte": [
                  {
                    "periodo": "2013",
                    "fontes": [
                      "ICTEYE Key ICT Data e Statistics. Advanced Data Search. International Telecomunication Union (ITU). Geneva. Acesso em: nov. 2017."
                    ]
                  },
                  {
                    "periodo": "2012",
                    "fontes": [
                      "ICTEYE Key ICT Data e Statistics. Advanced Data Search. International Telecomunication Union (ITU). Geneva. Acesso em: nov. 2017."
                    ]
                  },
                  {
                    "periodo": "2011",
                    "fontes": [
                      "ICTEYE Key ICT Data e Statistics. Advanced Data Search. International Telecomunication Union (ITU). Geneva. Acesso em: nov. 2017."
                    ]
                  },
                  {
                    "periodo": "2009",
                    "fontes": [
                      "ICTEYE Key ICT Data e Statistics. Advanced Data Search. International Telecomunication Union (ITU). Geneva. Acesso em: nov. 2017."
                    ]
                  },
                  {
                    "periodo": "2008",
                    "fontes": [
                      "ICTEYE Key ICT Data e Statistics. Advanced Data Search. International Telecomunication Union (ITU). Geneva. Acesso em: nov. 2017."
                    ]
                  },
                  {
                    "periodo": "2010",
                    "fontes": [
                      "ICTEYE Key ICT Data e Statistics. Advanced Data Search. International Telecomunication Union (ITU). Geneva. Acesso em: nov. 2017."
                    ]
                  },
                  {
                    "periodo": "2014",
                    "fontes": [
                      "ICTEYE Key ICT Data e Statistics. Advanced Data Search. International Telecomunication Union (ITU). Geneva. Acesso em: nov. 2017."
                    ]
                  },
                  {
                    "periodo": "2007",
                    "fontes": [
                      "ICTEYE Key ICT Data e Statistics. Advanced Data Search. International Telecomunication Union (ITU). Geneva. Acesso em: nov. 2017."
                    ]
                  },
                  {
                    "periodo": "2015",
                    "fontes": [
                      "ICTEYE Key ICT Data e Statistics. Advanced Data Search. International Telecomunication Union (ITU). Geneva. Acesso em: jul. 2016."
                    ]
                  }
                ]
              },
              {
                "id": 62992,
                "posicao": "7.4",
                "indicador": "Usuários com acesso à internet",
                "classe": "I",
                "unidade": {
                  "id": "a cada 100 habitantes",
                  "classe": "N",
                  "multiplicador": 1
                },
                "children": [],
                "nota": [],
                "fonte": [
                  {
                    "periodo": "2013",
                    "fontes": [
                      "ICT Statistics Database. Individuals using the Internet. Geneva: International Telecommunication Union, 2013. Acesso em: nov. 2017."
                    ]
                  },
                  {
                    "periodo": "2012",
                    "fontes": [
                      "ICT Statistics Database. Individuals using the Internet. Geneva: International Telecommunication Union, 2012. Acesso em: nov. 2017."
                    ]
                  },
                  {
                    "periodo": "2011",
                    "fontes": [
                      "ICT Statistics Database. Individuals using the Internet. Geneva: International Telecommunication Union, 2011. Acesso em: nov. 2017."
                    ]
                  },
                  {
                    "periodo": "2009",
                    "fontes": [
                      "ICT Statistics Database. Individuals using the Internet. Geneva: International Telecommunication Union, 2009. Acesso em: nov. 2017."
                    ]
                  },
                  {
                    "periodo": "2008",
                    "fontes": [
                      "ICT Statistics Database. Individuals using the Internet. Geneva: International Telecommunication Union, 2008. Acesso em: nov. 2017."
                    ]
                  },
                  {
                    "periodo": "2010",
                    "fontes": [
                      "ICT Statistics Database. Individuals using the Internet. Geneva: International Telecommunication Union, 2010. Acesso em: nov. 2017."
                    ]
                  },
                  {
                    "periodo": "2014",
                    "fontes": [
                      "ICT Statistics Database. Individuals using the Internet. Geneva: International Telecommunication Union, 2014. Acesso em: nov. 2017."
                    ]
                  },
                  {
                    "periodo": "2007",
                    "fontes": [
                      "ICT Statistics Database. Individuals using the Internet. Geneva: International Telecommunication Union, 2007. Acesso em: nov. 2017."
                    ]
                  },
                  {
                    "periodo": "2015",
                    "fontes": [
                      "ICT Statistics Database. Individuals using the Internet. Geneva: International Telecommunication Union, 2015. Acesso em: jul. 2016."
                    ]
                  },
                  {
                    "periodo": "2016",
                    "fontes": [
                      "ICT Statistics Database. Individuals using the Internet. Geneva: International Telecommunication Union, 2016. Acesso em: nov. 2017."
                    ]
                  }
                ]
              }
            ],
            "nota": []
          },
          {
            "id": 63050,
            "posicao": "8",
            "indicador": "Objetivos do Milênio",
            "classe": "T",
            "children": [
              {
                "id": 63055,
                "posicao": "8.1",
                "indicador": "Erradicar a extrema pobreza e a fome",
                "classe": "T",
                "children": [
                  {
                    "id": 63051,
                    "posicao": "8.1.1",
                    "indicador": "Meta 1: reduzir pela metade, entre 1990 e 2015, a proporção da população com renda inferior a um dólar (PPC - Paridade do Poder de Compra, que elimina a diferença de preços entre os países) por dia",
                    "classe": null,
                    "children": [
                      {
                        "id": 63052,
                        "posicao": "8.1.1.1",
                        "indicador": "Proporção da população que ganha menos de 1,25 dólar (PPC) por dia",
                        "classe": "I",
                        "unidade": {
                          "id": "%",
                          "classe": "N",
                          "multiplicador": 1
                        },
                        "children": [],
                        "nota": [],
                        "fonte": [
                          {
                            "periodo": "2012",
                            "fontes": [
                              "United Nations Statistics Division, Department of Economic and Social Affairs, Millennium Development Goals Indicators - 2015. Disponível em <http://mdgs.un.org/unsd/mdg/Data.aspx>. Acesso em: jan. 2018."
                            ]
                          },
                          {
                            "periodo": "2011",
                            "fontes": [
                              "United Nations Statistics Division, Department of Economic and Social Affairs, Millennium Development Goals Indicators - 2015. Disponível em <http://mdgs.un.org/unsd/mdg/Data.aspx>. Acesso em: jan. 2018."
                            ]
                          },
                          {
                            "periodo": "2009",
                            "fontes": [
                              "United Nations Statistics Division, Department of Economic and Social Affairs, Millennium Development Goals Indicators - 2015. Disponível em <http://mdgs.un.org/unsd/mdg/Data.aspx>. Acesso em: jan. 2018."
                            ]
                          },
                          {
                            "periodo": "2008",
                            "fontes": [
                              "United Nations Statistics Division, Department of Economic and Social Affairs, Millennium Development Goals Indicators - 2015. Disponível em <http://mdgs.un.org/unsd/mdg/Data.aspx>. Acesso em: jan. 2018."
                            ]
                          },
                          {
                            "periodo": "2006",
                            "fontes": [
                              "United Nations Statistics Division, Department of Economic and Social Affairs, Millennium Development Goals Indicators - 2015. Disponível em <http://mdgs.un.org/unsd/mdg/Data.aspx>. Acesso em: jan. 2018."
                            ]
                          },
                          {
                            "periodo": "2005",
                            "fontes": [
                              "United Nations Statistics Division, Department of Economic and Social Affairs, Millennium Development Goals Indicators - 2015. Disponível em <http://mdgs.un.org/unsd/mdg/Data.aspx>. Acesso em: jan. 2018."
                            ]
                          },
                          {
                            "periodo": "2004",
                            "fontes": [
                              "United Nations Statistics Division, Department of Economic and Social Affairs, Millennium Development Goals Indicators - 2015. Disponível em <http://mdgs.un.org/unsd/mdg/Data.aspx>. Acesso em: jan. 2018."
                            ]
                          },
                          {
                            "periodo": "2002",
                            "fontes": [
                              "United Nations Statistics Division, Department of Economic and Social Affairs, Millennium Development Goals Indicators - 2015. Disponível em <http://mdgs.un.org/unsd/mdg/Data.aspx>. Acesso em: jan. 2018."
                            ]
                          },
                          {
                            "periodo": "2001",
                            "fontes": [
                              "United Nations Statistics Division, Department of Economic and Social Affairs, Millennium Development Goals Indicators - 2015. Disponível em <http://mdgs.un.org/unsd/mdg/Data.aspx>. Acesso em: jan. 2018."
                            ]
                          },
                          {
                            "periodo": "2010",
                            "fontes": [
                              "United Nations Statistics Division, Department of Economic and Social Affairs, Millennium Development Goals Indicators - 2015. Disponível em <http://mdgs.un.org/unsd/mdg/Data.aspx>. Acesso em: jan. 2018."
                            ]
                          },
                          {
                            "periodo": "2000",
                            "fontes": [
                              "United Nations Statistics Division, Department of Economic and Social Affairs, Millennium Development Goals Indicators - 2015. Disponível em <http://mdgs.un.org/unsd/mdg/Data.aspx>. Acesso em: jan. 2018."
                            ]
                          },
                          {
                            "periodo": "2007",
                            "fontes": [
                              "United Nations Statistics Division, Department of Economic and Social Affairs, Millennium Development Goals Indicators - 2015. Disponível em <http://mdgs.un.org/unsd/mdg/Data.aspx>. Acesso em: jan. 2018."
                            ]
                          },
                          {
                            "periodo": "2003",
                            "fontes": [
                              "United Nations Statistics Division, Department of Economic and Social Affairs, Millennium Development Goals Indicators - 2015. Disponível em <http://mdgs.un.org/unsd/mdg/Data.aspx>. Acesso em: jan. 2018."
                            ]
                          },
                          {
                            "periodo": "1991",
                            "fontes": [
                              "United Nations Statistics Division, Department of Economic and Social Affairs, Millennium Development Goals Indicators - 2015. Disponível em <http://mdgs.un.org/unsd/mdg/Data.aspx>. Acesso em: jan. 2018."
                            ]
                          },
                          {
                            "periodo": "1999",
                            "fontes": [
                              "United Nations Statistics Division, Department of Economic and Social Affairs, Millennium Development Goals Indicators - 2015. Disponível em <http://mdgs.un.org/unsd/mdg/Data.aspx>. Acesso em: jan. 2018."
                            ]
                          },
                          {
                            "periodo": "1996",
                            "fontes": [
                              "United Nations Statistics Division, Department of Economic and Social Affairs, Millennium Development Goals Indicators - 2015. Disponível em <http://mdgs.un.org/unsd/mdg/Data.aspx>. Acesso em: jan. 2018."
                            ]
                          },
                          {
                            "periodo": "1990",
                            "fontes": [
                              "United Nations Statistics Division, Department of Economic and Social Affairs, Millennium Development Goals Indicators - 2015. Disponível em <http://mdgs.un.org/unsd/mdg/Data.aspx>. Acesso em: jan. 2018."
                            ]
                          },
                          {
                            "periodo": "1995",
                            "fontes": [
                              "United Nations Statistics Division, Department of Economic and Social Affairs, Millennium Development Goals Indicators - 2015. Disponível em <http://mdgs.un.org/unsd/mdg/Data.aspx>. Acesso em: jan. 2018."
                            ]
                          },
                          {
                            "periodo": "1992",
                            "fontes": [
                              "United Nations Statistics Division, Department of Economic and Social Affairs, Millennium Development Goals Indicators - 2015. Disponível em <http://mdgs.un.org/unsd/mdg/Data.aspx>. Acesso em: jan. 2018."
                            ]
                          },
                          {
                            "periodo": "1993",
                            "fontes": [
                              "United Nations Statistics Division, Department of Economic and Social Affairs, Millennium Development Goals Indicators - 2015. Disponível em <http://mdgs.un.org/unsd/mdg/Data.aspx>. Acesso em: jan. 2018."
                            ]
                          },
                          {
                            "periodo": "1994",
                            "fontes": [
                              "United Nations Statistics Division, Department of Economic and Social Affairs, Millennium Development Goals Indicators - 2015. Disponível em <http://mdgs.un.org/unsd/mdg/Data.aspx>. Acesso em: jan. 2018."
                            ]
                          },
                          {
                            "periodo": "1997",
                            "fontes": [
                              "United Nations Statistics Division, Department of Economic and Social Affairs, Millennium Development Goals Indicators - 2015. Disponível em <http://mdgs.un.org/unsd/mdg/Data.aspx>. Acesso em: jan. 2018."
                            ]
                          },
                          {
                            "periodo": "1998",
                            "fontes": [
                              "United Nations Statistics Division, Department of Economic and Social Affairs, Millennium Development Goals Indicators - 2015. Disponível em <http://mdgs.un.org/unsd/mdg/Data.aspx>. Acesso em: jan. 2018."
                            ]
                          }
                        ]
                      },
                      {
                        "id": 63053,
                        "posicao": "8.1.1.2",
                        "indicador": "Participação dos 20% mais pobres da população na renda ou no consumo",
                        "classe": "I",
                        "unidade": {
                          "id": "%",
                          "classe": "N",
                          "multiplicador": 1
                        },
                        "children": [],
                        "nota": [],
                        "fonte": [
                          {
                            "periodo": "2012",
                            "fontes": [
                              "United Nations Statistics Division, Department of Economic and Social Affairs, Millennium Development Goals Indicators - 2015. Disponível em <http://mdgs.un.org/unsd/mdg/Data.aspx>. Acesso em: jan. 2018."
                            ]
                          },
                          {
                            "periodo": "2011",
                            "fontes": [
                              "United Nations Statistics Division, Department of Economic and Social Affairs, Millennium Development Goals Indicators - 2015. Disponível em <http://mdgs.un.org/unsd/mdg/Data.aspx>. Acesso em: jan. 2018."
                            ]
                          },
                          {
                            "periodo": "2009",
                            "fontes": [
                              "United Nations Statistics Division, Department of Economic and Social Affairs, Millennium Development Goals Indicators - 2015. Disponível em <http://mdgs.un.org/unsd/mdg/Data.aspx>. Acesso em: jan. 2018."
                            ]
                          },
                          {
                            "periodo": "2008",
                            "fontes": [
                              "United Nations Statistics Division, Department of Economic and Social Affairs, Millennium Development Goals Indicators - 2015. Disponível em <http://mdgs.un.org/unsd/mdg/Data.aspx>. Acesso em: jan. 2018."
                            ]
                          },
                          {
                            "periodo": "2006",
                            "fontes": [
                              "United Nations Statistics Division, Department of Economic and Social Affairs, Millennium Development Goals Indicators - 2015. Disponível em <http://mdgs.un.org/unsd/mdg/Data.aspx>. Acesso em: jan. 2018."
                            ]
                          },
                          {
                            "periodo": "2005",
                            "fontes": [
                              "United Nations Statistics Division, Department of Economic and Social Affairs, Millennium Development Goals Indicators - 2015. Disponível em <http://mdgs.un.org/unsd/mdg/Data.aspx>. Acesso em: jan. 2018."
                            ]
                          },
                          {
                            "periodo": "2004",
                            "fontes": [
                              "United Nations Statistics Division, Department of Economic and Social Affairs, Millennium Development Goals Indicators - 2015. Disponível em <http://mdgs.un.org/unsd/mdg/Data.aspx>. Acesso em: jan. 2018."
                            ]
                          },
                          {
                            "periodo": "2002",
                            "fontes": [
                              "United Nations Statistics Division, Department of Economic and Social Affairs, Millennium Development Goals Indicators - 2015. Disponível em <http://mdgs.un.org/unsd/mdg/Data.aspx>. Acesso em: jan. 2018."
                            ]
                          },
                          {
                            "periodo": "2001",
                            "fontes": [
                              "United Nations Statistics Division, Department of Economic and Social Affairs, Millennium Development Goals Indicators - 2015. Disponível em <http://mdgs.un.org/unsd/mdg/Data.aspx>. Acesso em: jan. 2018."
                            ]
                          },
                          {
                            "periodo": "2010",
                            "fontes": [
                              "United Nations Statistics Division, Department of Economic and Social Affairs, Millennium Development Goals Indicators - 2015. Disponível em <http://mdgs.un.org/unsd/mdg/Data.aspx>. Acesso em: jan. 2018."
                            ]
                          },
                          {
                            "periodo": "2000",
                            "fontes": [
                              "United Nations Statistics Division, Department of Economic and Social Affairs, Millennium Development Goals Indicators - 2015. Disponível em <http://mdgs.un.org/unsd/mdg/Data.aspx>. Acesso em: jan. 2018."
                            ]
                          },
                          {
                            "periodo": "2007",
                            "fontes": [
                              "United Nations Statistics Division, Department of Economic and Social Affairs, Millennium Development Goals Indicators - 2015. Disponível em <http://mdgs.un.org/unsd/mdg/Data.aspx>. Acesso em: jan. 2018."
                            ]
                          },
                          {
                            "periodo": "2003",
                            "fontes": [
                              "United Nations Statistics Division, Department of Economic and Social Affairs, Millennium Development Goals Indicators - 2015. Disponível em <http://mdgs.un.org/unsd/mdg/Data.aspx>. Acesso em: jan. 2018."
                            ]
                          },
                          {
                            "periodo": "1991",
                            "fontes": [
                              "United Nations Statistics Division, Department of Economic and Social Affairs, Millennium Development Goals Indicators - 2015. Disponível em <http://mdgs.un.org/unsd/mdg/Data.aspx>. Acesso em: jan. 2018."
                            ]
                          },
                          {
                            "periodo": "1999",
                            "fontes": [
                              "United Nations Statistics Division, Department of Economic and Social Affairs, Millennium Development Goals Indicators - 2015. Disponível em <http://mdgs.un.org/unsd/mdg/Data.aspx>. Acesso em: jan. 2018."
                            ]
                          },
                          {
                            "periodo": "1996",
                            "fontes": [
                              "United Nations Statistics Division, Department of Economic and Social Affairs, Millennium Development Goals Indicators - 2015. Disponível em <http://mdgs.un.org/unsd/mdg/Data.aspx>. Acesso em: jan. 2018."
                            ]
                          },
                          {
                            "periodo": "1990",
                            "fontes": [
                              "United Nations Statistics Division, Department of Economic and Social Affairs, Millennium Development Goals Indicators - 2015. Disponível em <http://mdgs.un.org/unsd/mdg/Data.aspx>. Acesso em: jan. 2018."
                            ]
                          },
                          {
                            "periodo": "1995",
                            "fontes": [
                              "United Nations Statistics Division, Department of Economic and Social Affairs, Millennium Development Goals Indicators - 2015. Disponível em <http://mdgs.un.org/unsd/mdg/Data.aspx>. Acesso em: jan. 2018."
                            ]
                          },
                          {
                            "periodo": "1992",
                            "fontes": [
                              "United Nations Statistics Division, Department of Economic and Social Affairs, Millennium Development Goals Indicators - 2015. Disponível em <http://mdgs.un.org/unsd/mdg/Data.aspx>. Acesso em: jan. 2018."
                            ]
                          },
                          {
                            "periodo": "1993",
                            "fontes": [
                              "United Nations Statistics Division, Department of Economic and Social Affairs, Millennium Development Goals Indicators - 2015. Disponível em <http://mdgs.un.org/unsd/mdg/Data.aspx>. Acesso em: jan. 2018."
                            ]
                          },
                          {
                            "periodo": "1994",
                            "fontes": [
                              "United Nations Statistics Division, Department of Economic and Social Affairs, Millennium Development Goals Indicators - 2015. Disponível em <http://mdgs.un.org/unsd/mdg/Data.aspx>. Acesso em: jan. 2018."
                            ]
                          },
                          {
                            "periodo": "1997",
                            "fontes": [
                              "United Nations Statistics Division, Department of Economic and Social Affairs, Millennium Development Goals Indicators - 2015. Disponível em <http://mdgs.un.org/unsd/mdg/Data.aspx>. Acesso em: jan. 2018."
                            ]
                          },
                          {
                            "periodo": "1998",
                            "fontes": [
                              "United Nations Statistics Division, Department of Economic and Social Affairs, Millennium Development Goals Indicators - 2015. Disponível em <http://mdgs.un.org/unsd/mdg/Data.aspx>. Acesso em: jan. 2018."
                            ]
                          }
                        ]
                      }
                    ],
                    "nota": []
                  },
                  {
                    "id": 63054,
                    "posicao": "8.1.2",
                    "indicador": "Meta 2: Reduzir pela metade, entre 1990 e 2015, a proporção da população que sofre de fome",
                    "classe": null,
                    "children": [
                      {
                        "id": 63056,
                        "posicao": "8.1.2.1",
                        "indicador": "Prevalência de crianças (com menos de 5 anos) abaixo do peso",
                        "classe": "I",
                        "unidade": {
                          "id": "%",
                          "classe": "N",
                          "multiplicador": 1
                        },
                        "children": [],
                        "nota": []
                      },
                      {
                        "id": 63057,
                        "posicao": "8.1.2.2",
                        "indicador": "Proporção da população abaixo do nível mínimo de calorias consumidas (população subnutrida)",
                        "classe": "I",
                        "unidade": {
                          "id": "%",
                          "classe": "N",
                          "multiplicador": 1
                        },
                        "children": [],
                        "nota": []
                      }
                    ],
                    "nota": []
                  }
                ],
                "nota": []
              },
              {
                "id": 63058,
                "posicao": "8.2",
                "indicador": "Universalizar a educação primária",
                "classe": "T",
                "children": [
                  {
                    "id": 63059,
                    "posicao": "8.2.1",
                    "indicador": "Meta 1: Garantir que, até 2015, todas as crianças, de ambos os sexos, terminem um ciclo completo de ensino básico",
                    "classe": null,
                    "children": [
                      {
                        "id": 63060,
                        "posicao": "8.2.1.1",
                        "indicador": "Taxa líquida de matrícula no ensino primário",
                        "classe": "I",
                        "unidade": {
                          "id": "%",
                          "classe": "N",
                          "multiplicador": 1
                        },
                        "children": [],
                        "nota": []
                      },
                      {
                        "id": 63061,
                        "posicao": "8.2.1.2",
                        "indicador": "Proporção dos alunos que iniciam o 1° ano e atingem o 5° ano",
                        "classe": "I",
                        "unidade": {
                          "id": "%",
                          "classe": "N",
                          "multiplicador": 1
                        },
                        "children": [],
                        "nota": []
                      },
                      {
                        "id": 63062,
                        "posicao": "8.2.1.3",
                        "indicador": "Taxa de alfabetização na faixa etária de 15 a 24 anos",
                        "classe": "I",
                        "unidade": {
                          "id": "%",
                          "classe": "N",
                          "multiplicador": 1
                        },
                        "children": [],
                        "nota": [],
                        "fonte": [
                          {
                            "periodo": "2013",
                            "fontes": [
                              "United Nations Statistics Division, Department of Economic and Social Affairs, Millennium Development Goals Indicators - 2015. Disponível em <http://mdgs.un.org/unsd/mdg/Data.aspx>. Acesso em: jan. 2018."
                            ]
                          },
                          {
                            "periodo": "2012",
                            "fontes": [
                              "United Nations Statistics Division, Department of Economic and Social Affairs, Millennium Development Goals Indicators - 2015. Disponível em <http://mdgs.un.org/unsd/mdg/Data.aspx>. Acesso em: jan. 2018."
                            ]
                          },
                          {
                            "periodo": "2011",
                            "fontes": [
                              "United Nations Statistics Division, Department of Economic and Social Affairs, Millennium Development Goals Indicators - 2015. Disponível em <http://mdgs.un.org/unsd/mdg/Data.aspx>. Acesso em: jan. 2018."
                            ]
                          },
                          {
                            "periodo": "2009",
                            "fontes": [
                              "United Nations Statistics Division, Department of Economic and Social Affairs, Millennium Development Goals Indicators - 2015. Disponível em <http://mdgs.un.org/unsd/mdg/Data.aspx>. Acesso em: jan. 2018."
                            ]
                          },
                          {
                            "periodo": "2008",
                            "fontes": [
                              "United Nations Statistics Division, Department of Economic and Social Affairs, Millennium Development Goals Indicators - 2015. Disponível em <http://mdgs.un.org/unsd/mdg/Data.aspx>. Acesso em: jan. 2018."
                            ]
                          },
                          {
                            "periodo": "2006",
                            "fontes": [
                              "United Nations Statistics Division, Department of Economic and Social Affairs, Millennium Development Goals Indicators - 2015. Disponível em <http://mdgs.un.org/unsd/mdg/Data.aspx>. Acesso em: jan. 2018."
                            ]
                          },
                          {
                            "periodo": "2005",
                            "fontes": [
                              "United Nations Statistics Division, Department of Economic and Social Affairs, Millennium Development Goals Indicators - 2015. Disponível em <http://mdgs.un.org/unsd/mdg/Data.aspx>. Acesso em: jan. 2018."
                            ]
                          },
                          {
                            "periodo": "2004",
                            "fontes": [
                              "United Nations Statistics Division, Department of Economic and Social Affairs, Millennium Development Goals Indicators - 2015. Disponível em <http://mdgs.un.org/unsd/mdg/Data.aspx>. Acesso em: jan. 2018."
                            ]
                          },
                          {
                            "periodo": "2002",
                            "fontes": [
                              "United Nations Statistics Division, Department of Economic and Social Affairs, Millennium Development Goals Indicators - 2015. Disponível em <http://mdgs.un.org/unsd/mdg/Data.aspx>. Acesso em: jan. 2018."
                            ]
                          },
                          {
                            "periodo": "2001",
                            "fontes": [
                              "United Nations Statistics Division, Department of Economic and Social Affairs, Millennium Development Goals Indicators - 2015. Disponível em <http://mdgs.un.org/unsd/mdg/Data.aspx>. Acesso em: jan. 2018."
                            ]
                          },
                          {
                            "periodo": "2010",
                            "fontes": [
                              "United Nations Statistics Division, Department of Economic and Social Affairs, Millennium Development Goals Indicators - 2015. Disponível em <http://mdgs.un.org/unsd/mdg/Data.aspx>. Acesso em: jan. 2018."
                            ]
                          },
                          {
                            "periodo": "2000",
                            "fontes": [
                              "United Nations Statistics Division, Department of Economic and Social Affairs, Millennium Development Goals Indicators - 2015. Disponível em <http://mdgs.un.org/unsd/mdg/Data.aspx>. Acesso em: jan. 2018."
                            ]
                          },
                          {
                            "periodo": "2007",
                            "fontes": [
                              "United Nations Statistics Division, Department of Economic and Social Affairs, Millennium Development Goals Indicators - 2015. Disponível em <http://mdgs.un.org/unsd/mdg/Data.aspx>. Acesso em: jan. 2018."
                            ]
                          },
                          {
                            "periodo": "2003",
                            "fontes": [
                              "United Nations Statistics Division, Department of Economic and Social Affairs, Millennium Development Goals Indicators - 2015. Disponível em <http://mdgs.un.org/unsd/mdg/Data.aspx>. Acesso em: jan. 2018."
                            ]
                          },
                          {
                            "periodo": "1991",
                            "fontes": [
                              "United Nations Statistics Division, Department of Economic and Social Affairs, Millennium Development Goals Indicators - 2015. Disponível em <http://mdgs.un.org/unsd/mdg/Data.aspx>. Acesso em: jan. 2018."
                            ]
                          },
                          {
                            "periodo": "1999",
                            "fontes": [
                              "United Nations Statistics Division, Department of Economic and Social Affairs, Millennium Development Goals Indicators - 2015. Disponível em <http://mdgs.un.org/unsd/mdg/Data.aspx>. Acesso em: jan. 2018."
                            ]
                          },
                          {
                            "periodo": "1996",
                            "fontes": [
                              "United Nations Statistics Division, Department of Economic and Social Affairs, Millennium Development Goals Indicators - 2015. Disponível em <http://mdgs.un.org/unsd/mdg/Data.aspx>. Acesso em: jan. 2018."
                            ]
                          },
                          {
                            "periodo": "1990",
                            "fontes": [
                              "United Nations Statistics Division, Department of Economic and Social Affairs, Millennium Development Goals Indicators - 2015. Disponível em <http://mdgs.un.org/unsd/mdg/Data.aspx>. Acesso em: jan. 2018."
                            ]
                          },
                          {
                            "periodo": "1995",
                            "fontes": [
                              "United Nations Statistics Division, Department of Economic and Social Affairs, Millennium Development Goals Indicators - 2015. Disponível em <http://mdgs.un.org/unsd/mdg/Data.aspx>. Acesso em: jan. 2018."
                            ]
                          },
                          {
                            "periodo": "1992",
                            "fontes": [
                              "United Nations Statistics Division, Department of Economic and Social Affairs, Millennium Development Goals Indicators - 2015. Disponível em <http://mdgs.un.org/unsd/mdg/Data.aspx>. Acesso em: jan. 2018."
                            ]
                          },
                          {
                            "periodo": "1993",
                            "fontes": [
                              "United Nations Statistics Division, Department of Economic and Social Affairs, Millennium Development Goals Indicators - 2015. Disponível em <http://mdgs.un.org/unsd/mdg/Data.aspx>. Acesso em: jan. 2018."
                            ]
                          },
                          {
                            "periodo": "1994",
                            "fontes": [
                              "United Nations Statistics Division, Department of Economic and Social Affairs, Millennium Development Goals Indicators - 2015. Disponível em <http://mdgs.un.org/unsd/mdg/Data.aspx>. Acesso em: jan. 2018."
                            ]
                          },
                          {
                            "periodo": "1997",
                            "fontes": [
                              "United Nations Statistics Division, Department of Economic and Social Affairs, Millennium Development Goals Indicators - 2015. Disponível em <http://mdgs.un.org/unsd/mdg/Data.aspx>. Acesso em: jan. 2018."
                            ]
                          },
                          {
                            "periodo": "1998",
                            "fontes": [
                              "United Nations Statistics Division, Department of Economic and Social Affairs, Millennium Development Goals Indicators - 2015. Disponível em <http://mdgs.un.org/unsd/mdg/Data.aspx>. Acesso em: jan. 2018."
                            ]
                          }
                        ]
                      }
                    ],
                    "nota": []
                  }
                ],
                "nota": []
              },
              {
                "id": 63063,
                "posicao": "8.3",
                "indicador": "Promover a igualdade entre os sexos e a autonomia das mulheres",
                "classe": "T",
                "children": [
                  {
                    "id": 63064,
                    "posicao": "8.3.1",
                    "indicador": "Meta 1: Eliminar a disparidade entre os sexos no ensino fundamental e médio, se possível até 2005, e em todos os níveis  do ensino até fins de 2015",
                    "classe": null,
                    "children": [
                      {
                        "id": 63065,
                        "posicao": "8.3.1.1",
                        "indicador": "Razão entre mulheres e homens no ensino básico",
                        "classe": "I",
                        "unidade": {
                          "id": "%",
                          "classe": "N",
                          "multiplicador": 1
                        },
                        "children": [],
                        "nota": []
                      },
                      {
                        "id": 63066,
                        "posicao": "8.3.1.2",
                        "indicador": "Razão entre mulheres e homens no ensino médio",
                        "classe": "I",
                        "unidade": {
                          "id": "%",
                          "classe": "N",
                          "multiplicador": 1
                        },
                        "children": [],
                        "nota": []
                      },
                      {
                        "id": 63067,
                        "posicao": "8.3.1.3",
                        "indicador": "Razão entre mulheres e homens no ensino superior",
                        "classe": "I",
                        "unidade": {
                          "id": "%",
                          "classe": "N",
                          "multiplicador": 1
                        },
                        "children": [],
                        "nota": []
                      },
                      {
                        "id": 63068,
                        "posicao": "8.3.1.4",
                        "indicador": "Razão entre mulheres e homens alfabetizados na faixa etária de 15 a 24 anos",
                        "classe": "I",
                        "unidade": {
                          "id": "%",
                          "classe": "N",
                          "multiplicador": 1
                        },
                        "children": [],
                        "nota": []
                      },
                      {
                        "id": 63069,
                        "posicao": "8.3.1.5",
                        "indicador": "Percentagem de mulheres assalariadas no setor não-agrícola",
                        "classe": "I",
                        "unidade": {
                          "id": "%",
                          "classe": "N",
                          "multiplicador": 1
                        },
                        "children": [],
                        "nota": []
                      },
                      {
                        "id": 63070,
                        "posicao": "8.3.1.6",
                        "indicador": "Proporção de mulheres exercendo mandatos no parlamento nacional",
                        "classe": "I",
                        "unidade": {
                          "id": "%",
                          "classe": "N",
                          "multiplicador": 1
                        },
                        "children": [],
                        "nota": []
                      }
                    ],
                    "nota": []
                  }
                ],
                "nota": []
              },
              {
                "id": 63071,
                "posicao": "8.4",
                "indicador": "Reduzir a mortalidade na infância",
                "classe": "T",
                "children": [
                  {
                    "id": 63072,
                    "posicao": "8.4.1",
                    "indicador": "Meta 1: Reduzir em dois terços, entre 1990 e 2015, a mortalidade de crianças menores de 5 anos",
                    "classe": null,
                    "children": [
                      {
                        "id": 63073,
                        "posicao": "8.4.1.1",
                        "indicador": "Taxa de mortalidade de crianças menores de 5 anos",
                        "classe": "I",
                        "unidade": {
                          "id": "%",
                          "classe": "N",
                          "multiplicador": 1
                        },
                        "children": [],
                        "nota": []
                      },
                      {
                        "id": 63074,
                        "posicao": "8.4.1.2",
                        "indicador": "Taxa de mortalidade infantil",
                        "classe": "I",
                        "unidade": {
                          "id": "%",
                          "classe": "N",
                          "multiplicador": 1
                        },
                        "children": [],
                        "nota": []
                      },
                      {
                        "id": 63075,
                        "posicao": "8.4.1.3",
                        "indicador": "Proporção de crianças de 1 ano vacinadas contra o sarampo",
                        "classe": "I",
                        "unidade": {
                          "id": "%",
                          "classe": "N",
                          "multiplicador": 1
                        },
                        "children": [],
                        "nota": []
                      }
                    ],
                    "nota": []
                  }
                ],
                "nota": []
              },
              {
                "id": 63076,
                "posicao": "8.5",
                "indicador": "Melhorar a saúde materna",
                "classe": "T",
                "children": [
                  {
                    "id": 63077,
                    "posicao": "8.5.1",
                    "indicador": "Meta 1: Reduzir em 75%, entre 1990 e 2015, as taxas de mortalidade materna",
                    "classe": null,
                    "children": [
                      {
                        "id": 63078,
                        "posicao": "8.5.1.1",
                        "indicador": "Taxa de mortalidade materna",
                        "classe": "I",
                        "unidade": {
                          "id": "óbitos por 100.000 nascidos vivos",
                          "classe": "N",
                          "multiplicador": 1
                        },
                        "children": [],
                        "nota": []
                      },
                      {
                        "id": 63079,
                        "posicao": "8.5.1.2",
                        "indicador": "Proporção de partos assistidos por profissional de saúde qualificado",
                        "classe": "I",
                        "unidade": {
                          "id": "%",
                          "classe": "N",
                          "multiplicador": 1
                        },
                        "children": [],
                        "nota": []
                      }
                    ],
                    "nota": []
                  }
                ],
                "nota": []
              },
              {
                "id": 63080,
                "posicao": "8.6",
                "indicador": "Combater o HIV/AIDS, a malária e outras doenças",
                "classe": "T",
                "children": [
                  {
                    "id": 63081,
                    "posicao": "8.6.1",
                    "indicador": "Meta 1: Até 2015 ter detido e começado a reduzir a propagação do HIV/AIDS",
                    "classe": null,
                    "children": [
                      {
                        "id": 63082,
                        "posicao": "8.6.1.1",
                        "indicador": "Homens e mulheres de 15 a 49 anos de idade que vivem com HIV/AIDS",
                        "classe": "I",
                        "unidade": {
                          "id": "%",
                          "classe": "N",
                          "multiplicador": 1
                        },
                        "children": [],
                        "nota": [],
                        "fonte": [
                          {
                            "periodo": "2013",
                            "fontes": [
                              "United Nations Statistics Division, Department of Economic and Social Affairs, Millennium Development Goals Indicators - 2015. Disponível em <http://mdgs.un.org/unsd/mdg/Data.aspx>. Acesso em: jan. 2018."
                            ]
                          },
                          {
                            "periodo": "2012",
                            "fontes": [
                              "United Nations Statistics Division, Department of Economic and Social Affairs, Millennium Development Goals Indicators - 2015. Disponível em <http://mdgs.un.org/unsd/mdg/Data.aspx>. Acesso em: jan. 2018."
                            ]
                          },
                          {
                            "periodo": "2011",
                            "fontes": [
                              "United Nations Statistics Division, Department of Economic and Social Affairs, Millennium Development Goals Indicators - 2015. Disponível em <http://mdgs.un.org/unsd/mdg/Data.aspx>. Acesso em: jan. 2018."
                            ]
                          },
                          {
                            "periodo": "2009",
                            "fontes": [
                              "United Nations Statistics Division, Department of Economic and Social Affairs, Millennium Development Goals Indicators - 2015. Disponível em <http://mdgs.un.org/unsd/mdg/Data.aspx>. Acesso em: jan. 2018."
                            ]
                          },
                          {
                            "periodo": "2008",
                            "fontes": [
                              "United Nations Statistics Division, Department of Economic and Social Affairs, Millennium Development Goals Indicators - 2015. Disponível em <http://mdgs.un.org/unsd/mdg/Data.aspx>. Acesso em: jan. 2018."
                            ]
                          },
                          {
                            "periodo": "2006",
                            "fontes": [
                              "United Nations Statistics Division, Department of Economic and Social Affairs, Millennium Development Goals Indicators - 2015. Disponível em <http://mdgs.un.org/unsd/mdg/Data.aspx>. Acesso em: jan. 2018."
                            ]
                          },
                          {
                            "periodo": "2005",
                            "fontes": [
                              "United Nations Statistics Division, Department of Economic and Social Affairs, Millennium Development Goals Indicators - 2015. Disponível em <http://mdgs.un.org/unsd/mdg/Data.aspx>. Acesso em: jan. 2018."
                            ]
                          },
                          {
                            "periodo": "2004",
                            "fontes": [
                              "United Nations Statistics Division, Department of Economic and Social Affairs, Millennium Development Goals Indicators - 2015. Disponível em <http://mdgs.un.org/unsd/mdg/Data.aspx>. Acesso em: jan. 2018."
                            ]
                          },
                          {
                            "periodo": "2002",
                            "fontes": [
                              "United Nations Statistics Division, Department of Economic and Social Affairs, Millennium Development Goals Indicators - 2015. Disponível em <http://mdgs.un.org/unsd/mdg/Data.aspx>. Acesso em: jan. 2018."
                            ]
                          },
                          {
                            "periodo": "2001",
                            "fontes": [
                              "United Nations Statistics Division, Department of Economic and Social Affairs, Millennium Development Goals Indicators - 2015. Disponível em <http://mdgs.un.org/unsd/mdg/Data.aspx>. Acesso em: jan. 2018."
                            ]
                          },
                          {
                            "periodo": "2010",
                            "fontes": [
                              "United Nations Statistics Division, Department of Economic and Social Affairs, Millennium Development Goals Indicators - 2015. Disponível em <http://mdgs.un.org/unsd/mdg/Data.aspx>. Acesso em: jan. 2018."
                            ]
                          },
                          {
                            "periodo": "2000",
                            "fontes": [
                              "United Nations Statistics Division, Department of Economic and Social Affairs, Millennium Development Goals Indicators - 2015. Disponível em <http://mdgs.un.org/unsd/mdg/Data.aspx>. Acesso em: jan. 2018."
                            ]
                          },
                          {
                            "periodo": "2007",
                            "fontes": [
                              "United Nations Statistics Division, Department of Economic and Social Affairs, Millennium Development Goals Indicators - 2015. Disponível em <http://mdgs.un.org/unsd/mdg/Data.aspx>. Acesso em: jan. 2018."
                            ]
                          },
                          {
                            "periodo": "2003",
                            "fontes": [
                              "United Nations Statistics Division, Department of Economic and Social Affairs, Millennium Development Goals Indicators - 2015. Disponível em <http://mdgs.un.org/unsd/mdg/Data.aspx>. Acesso em: jan. 2018."
                            ]
                          },
                          {
                            "periodo": "1991",
                            "fontes": [
                              "United Nations Statistics Division, Department of Economic and Social Affairs, Millennium Development Goals Indicators - 2015. Disponível em <http://mdgs.un.org/unsd/mdg/Data.aspx>. Acesso em: jan. 2018."
                            ]
                          },
                          {
                            "periodo": "1999",
                            "fontes": [
                              "United Nations Statistics Division, Department of Economic and Social Affairs, Millennium Development Goals Indicators - 2015. Disponível em <http://mdgs.un.org/unsd/mdg/Data.aspx>. Acesso em: jan. 2018."
                            ]
                          },
                          {
                            "periodo": "1996",
                            "fontes": [
                              "United Nations Statistics Division, Department of Economic and Social Affairs, Millennium Development Goals Indicators - 2015. Disponível em <http://mdgs.un.org/unsd/mdg/Data.aspx>. Acesso em: jan. 2018."
                            ]
                          },
                          {
                            "periodo": "1990",
                            "fontes": [
                              "United Nations Statistics Division, Department of Economic and Social Affairs, Millennium Development Goals Indicators - 2015. Disponível em <http://mdgs.un.org/unsd/mdg/Data.aspx>. Acesso em: jan. 2018."
                            ]
                          },
                          {
                            "periodo": "1995",
                            "fontes": [
                              "United Nations Statistics Division, Department of Economic and Social Affairs, Millennium Development Goals Indicators - 2015. Disponível em <http://mdgs.un.org/unsd/mdg/Data.aspx>. Acesso em: jan. 2018."
                            ]
                          },
                          {
                            "periodo": "1992",
                            "fontes": [
                              "United Nations Statistics Division, Department of Economic and Social Affairs, Millennium Development Goals Indicators - 2015. Disponível em <http://mdgs.un.org/unsd/mdg/Data.aspx>. Acesso em: jan. 2018."
                            ]
                          },
                          {
                            "periodo": "1993",
                            "fontes": [
                              "United Nations Statistics Division, Department of Economic and Social Affairs, Millennium Development Goals Indicators - 2015. Disponível em <http://mdgs.un.org/unsd/mdg/Data.aspx>. Acesso em: jan. 2018."
                            ]
                          },
                          {
                            "periodo": "1994",
                            "fontes": [
                              "United Nations Statistics Division, Department of Economic and Social Affairs, Millennium Development Goals Indicators - 2015. Disponível em <http://mdgs.un.org/unsd/mdg/Data.aspx>. Acesso em: jan. 2018."
                            ]
                          },
                          {
                            "periodo": "1997",
                            "fontes": [
                              "United Nations Statistics Division, Department of Economic and Social Affairs, Millennium Development Goals Indicators - 2015. Disponível em <http://mdgs.un.org/unsd/mdg/Data.aspx>. Acesso em: jan. 2018."
                            ]
                          },
                          {
                            "periodo": "1998",
                            "fontes": [
                              "United Nations Statistics Division, Department of Economic and Social Affairs, Millennium Development Goals Indicators - 2015. Disponível em <http://mdgs.un.org/unsd/mdg/Data.aspx>. Acesso em: jan. 2018."
                            ]
                          }
                        ]
                      }
                    ],
                    "nota": []
                  },
                  {
                    "id": 63083,
                    "posicao": "8.6.2",
                    "indicador": "Meta 2: Até 2015 ter detido e começado a reduzir a incidência da malária e de outras doenças graves",
                    "classe": null,
                    "children": [
                      {
                        "id": 63084,
                        "posicao": "8.6.2.1",
                        "indicador": "Taxa de mortalidade associada à tuberculose",
                        "classe": "I",
                        "unidade": {
                          "id": "óbitos por 100.000 habitantes",
                          "classe": "N",
                          "multiplicador": 1
                        },
                        "children": [],
                        "nota": []
                      },
                      {
                        "id": 63085,
                        "posicao": "8.6.2.2",
                        "indicador": "Casos de tuberculose detectados e curados com tratamento intensivo",
                        "classe": "I",
                        "unidade": {
                          "id": "%",
                          "classe": "N",
                          "multiplicador": 1
                        },
                        "children": [],
                        "nota": [],
                        "fonte": [
                          {
                            "periodo": "2012",
                            "fontes": [
                              "United Nations Statistics Division, Department of Economic and Social Affairs, Millennium Development Goals Indicators - 2015. Disponível em <http://mdgs.un.org/unsd/mdg/Data.aspx>. Acesso em: jan. 2018."
                            ]
                          },
                          {
                            "periodo": "2011",
                            "fontes": [
                              "United Nations Statistics Division, Department of Economic and Social Affairs, Millennium Development Goals Indicators - 2015. Disponível em <http://mdgs.un.org/unsd/mdg/Data.aspx>. Acesso em: jan. 2018."
                            ]
                          },
                          {
                            "periodo": "2009",
                            "fontes": [
                              "United Nations Statistics Division, Department of Economic and Social Affairs, Millennium Development Goals Indicators - 2015. Disponível em <http://mdgs.un.org/unsd/mdg/Data.aspx>. Acesso em: jan. 2018."
                            ]
                          },
                          {
                            "periodo": "2008",
                            "fontes": [
                              "United Nations Statistics Division, Department of Economic and Social Affairs, Millennium Development Goals Indicators - 2015. Disponível em <http://mdgs.un.org/unsd/mdg/Data.aspx>. Acesso em: jan. 2018."
                            ]
                          },
                          {
                            "periodo": "2006",
                            "fontes": [
                              "United Nations Statistics Division, Department of Economic and Social Affairs, Millennium Development Goals Indicators - 2015. Disponível em <http://mdgs.un.org/unsd/mdg/Data.aspx>. Acesso em: jan. 2018."
                            ]
                          },
                          {
                            "periodo": "2005",
                            "fontes": [
                              "United Nations Statistics Division, Department of Economic and Social Affairs, Millennium Development Goals Indicators - 2015. Disponível em <http://mdgs.un.org/unsd/mdg/Data.aspx>. Acesso em: jan. 2018."
                            ]
                          },
                          {
                            "periodo": "2004",
                            "fontes": [
                              "United Nations Statistics Division, Department of Economic and Social Affairs, Millennium Development Goals Indicators - 2015. Disponível em <http://mdgs.un.org/unsd/mdg/Data.aspx>. Acesso em: jan. 2018."
                            ]
                          },
                          {
                            "periodo": "2002",
                            "fontes": [
                              "United Nations Statistics Division, Department of Economic and Social Affairs, Millennium Development Goals Indicators - 2015. Disponível em <http://mdgs.un.org/unsd/mdg/Data.aspx>. Acesso em: jan. 2018."
                            ]
                          },
                          {
                            "periodo": "2001",
                            "fontes": [
                              "United Nations Statistics Division, Department of Economic and Social Affairs, Millennium Development Goals Indicators - 2015. Disponível em <http://mdgs.un.org/unsd/mdg/Data.aspx>. Acesso em: jan. 2018."
                            ]
                          },
                          {
                            "periodo": "2010",
                            "fontes": [
                              "United Nations Statistics Division, Department of Economic and Social Affairs, Millennium Development Goals Indicators - 2015. Disponível em <http://mdgs.un.org/unsd/mdg/Data.aspx>. Acesso em: jan. 2018."
                            ]
                          },
                          {
                            "periodo": "2000",
                            "fontes": [
                              "United Nations Statistics Division, Department of Economic and Social Affairs, Millennium Development Goals Indicators - 2015. Disponível em <http://mdgs.un.org/unsd/mdg/Data.aspx>. Acesso em: jan. 2018."
                            ]
                          },
                          {
                            "periodo": "2007",
                            "fontes": [
                              "United Nations Statistics Division, Department of Economic and Social Affairs, Millennium Development Goals Indicators - 2015. Disponível em <http://mdgs.un.org/unsd/mdg/Data.aspx>. Acesso em: jan. 2018."
                            ]
                          },
                          {
                            "periodo": "2003",
                            "fontes": [
                              "United Nations Statistics Division, Department of Economic and Social Affairs, Millennium Development Goals Indicators - 2015. Disponível em <http://mdgs.un.org/unsd/mdg/Data.aspx>. Acesso em: jan. 2018."
                            ]
                          },
                          {
                            "periodo": "1999",
                            "fontes": [
                              "United Nations Statistics Division, Department of Economic and Social Affairs, Millennium Development Goals Indicators - 2015. Disponível em <http://mdgs.un.org/unsd/mdg/Data.aspx>. Acesso em: jan. 2018."
                            ]
                          },
                          {
                            "periodo": "1996",
                            "fontes": [
                              "United Nations Statistics Division, Department of Economic and Social Affairs, Millennium Development Goals Indicators - 2015. Disponível em <http://mdgs.un.org/unsd/mdg/Data.aspx>. Acesso em: jan. 2018."
                            ]
                          },
                          {
                            "periodo": "1995",
                            "fontes": [
                              "United Nations Statistics Division, Department of Economic and Social Affairs, Millennium Development Goals Indicators - 2015. Disponível em <http://mdgs.un.org/unsd/mdg/Data.aspx>. Acesso em: jan. 2018."
                            ]
                          },
                          {
                            "periodo": "1994",
                            "fontes": [
                              "United Nations Statistics Division, Department of Economic and Social Affairs, Millennium Development Goals Indicators - 2015. Disponível em <http://mdgs.un.org/unsd/mdg/Data.aspx>. Acesso em: jan. 2018."
                            ]
                          },
                          {
                            "periodo": "1997",
                            "fontes": [
                              "United Nations Statistics Division, Department of Economic and Social Affairs, Millennium Development Goals Indicators - 2015. Disponível em <http://mdgs.un.org/unsd/mdg/Data.aspx>. Acesso em: jan. 2018."
                            ]
                          },
                          {
                            "periodo": "1998",
                            "fontes": [
                              "United Nations Statistics Division, Department of Economic and Social Affairs, Millennium Development Goals Indicators - 2015. Disponível em <http://mdgs.un.org/unsd/mdg/Data.aspx>. Acesso em: jan. 2018."
                            ]
                          }
                        ]
                      }
                    ],
                    "nota": []
                  }
                ],
                "nota": []
              },
              {
                "id": 63086,
                "posicao": "8.7",
                "indicador": "Garantir a sustentabilidade ambiental",
                "classe": "T",
                "children": [
                  {
                    "id": 63087,
                    "posicao": "8.7.1",
                    "indicador": "Meta 1: Incorporar os princípios de desenvolvimento sustentável nas políticas públicas  e programas nacionais e inverter a perda de recursos ambientais",
                    "classe": null,
                    "children": [
                      {
                        "id": 63088,
                        "posicao": "8.7.1.1",
                        "indicador": "Proporção da superfície coberta por matas",
                        "classe": "I",
                        "unidade": {
                          "id": "%",
                          "classe": "N",
                          "multiplicador": 1
                        },
                        "children": [],
                        "nota": [],
                        "fonte": [
                          {
                            "periodo": "2005",
                            "fontes": [
                              "United Nations Statistics Division, Department of Economic and Social Affairs, Millennium Development Goals Indicators - 2011. Disponível em <http://mdgs.un.org/unsd/mdg/Data.aspx>. Acesso em: jan. 2018."
                            ]
                          },
                          {
                            "periodo": "2010",
                            "fontes": [
                              "United Nations Statistics Division, Department of Economic and Social Affairs, Millennium Development Goals Indicators - 2011. Disponível em <http://mdgs.un.org/unsd/mdg/Data.aspx>. Acesso em: jan. 2018."
                            ]
                          },
                          {
                            "periodo": "2000",
                            "fontes": [
                              "United Nations Statistics Division, Department of Economic and Social Affairs, Millennium Development Goals Indicators - 2011. Disponível em <http://mdgs.un.org/unsd/mdg/Data.aspx>. Acesso em: jan. 2018."
                            ]
                          },
                          {
                            "periodo": "1990",
                            "fontes": [
                              "United Nations Statistics Division, Department of Economic and Social Affairs, Millennium Development Goals Indicators - 2011. Disponível em <http://mdgs.un.org/unsd/mdg/Data.aspx>. Acesso em: jan. 2018."
                            ]
                          }
                        ]
                      },
                      {
                        "id": 63089,
                        "posicao": "8.7.1.2",
                        "indicador": "Proporção de áreas terrestres e marinhas protegidas",
                        "classe": "I",
                        "unidade": {
                          "id": "%",
                          "classe": "N",
                          "multiplicador": 1
                        },
                        "children": [],
                        "nota": [],
                        "fonte": [
                          {
                            "periodo": "2000",
                            "fontes": [
                              "United Nations Statistics Division, Department of Economic and Social Affairs, Millennium Development Goals Indicators - 2016. Disponível em <http://mdgs.un.org/unsd/mdg/Data.aspx>. Acesso em: jan. 2018."
                            ]
                          },
                          {
                            "periodo": "2014",
                            "fontes": [
                              "United Nations Statistics Division, Department of Economic and Social Affairs, Millennium Development Goals Indicators - 2016. Disponível em <http://mdgs.un.org/unsd/mdg/Data.aspx>. Acesso em: jan. 2018."
                            ]
                          },
                          {
                            "periodo": "1990",
                            "fontes": [
                              "United Nations Statistics Division, Department of Economic and Social Affairs, Millennium Development Goals Indicators - 2016. Disponível em <http://mdgs.un.org/unsd/mdg/Data.aspx>. Acesso em: jan. 2018."
                            ]
                          }
                        ]
                      },
                      {
                        "id": 63090,
                        "posicao": "8.7.1.3",
                        "indicador": "Emissões de dióxido de carbono per capita",
                        "classe": "I",
                        "children": [],
                        "nota": []
                      },
                      {
                        "id": 63097,
                        "posicao": "8.7.1.4",
                        "indicador": "Proporção da população que utiliza combustíveis sólidos",
                        "classe": "I",
                        "unidade": {
                          "id": "%",
                          "classe": "N",
                          "multiplicador": 1
                        },
                        "children": [],
                        "nota": []
                      }
                    ],
                    "nota": []
                  },
                  {
                    "id": 63098,
                    "posicao": "8.7.2",
                    "indicador": "Meta 2: Reduzir à metade, até 2015, a proporção da população sem acesso permanente e sustentável a água potável e a saneamento básico",
                    "classe": null,
                    "children": [
                      {
                        "id": 63099,
                        "posicao": "8.7.2.1",
                        "indicador": "Proporção da população urbana com acesso a uma fonte de água tratada",
                        "classe": "I",
                        "unidade": {
                          "id": "%",
                          "classe": "N",
                          "multiplicador": 1
                        },
                        "children": [],
                        "nota": []
                      },
                      {
                        "id": 63100,
                        "posicao": "8.7.2.2",
                        "indicador": "Proporção da população rural com acesso a uma fonte de água tratada",
                        "classe": "I",
                        "unidade": {
                          "id": "%",
                          "classe": "N",
                          "multiplicador": 1
                        },
                        "children": [],
                        "nota": []
                      },
                      {
                        "id": 63101,
                        "posicao": "8.7.2.3",
                        "indicador": "Proporção da população urbana com acesso a melhores condições de saneamento",
                        "classe": "I",
                        "unidade": {
                          "id": "%",
                          "classe": "N",
                          "multiplicador": 1
                        },
                        "children": [],
                        "nota": []
                      },
                      {
                        "id": 63102,
                        "posicao": "8.7.2.4",
                        "indicador": "Proporção da população rural com acesso a melhores condições de saneamento",
                        "classe": "I",
                        "unidade": {
                          "id": "%",
                          "classe": "N",
                          "multiplicador": 1
                        },
                        "children": [],
                        "nota": []
                      }
                    ],
                    "nota": []
                  },
                  {
                    "id": 63103,
                    "posicao": "8.7.3",
                    "indicador": "Meta 3: Até 2020, ter alcançado melhoria significativa na vida de pelo menos 100 milhões de habitantes de bairros degradados",
                    "classe": null,
                    "children": [
                      {
                        "id": 63104,
                        "posicao": "8.7.3.1",
                        "indicador": "Proporção da população urbana vivendo em bairros degradados ou assentamentos precários (população sem acesso a posse segura de moradia)",
                        "classe": "I",
                        "unidade": {
                          "id": "%",
                          "classe": "N",
                          "multiplicador": 1
                        },
                        "children": [],
                        "nota": [],
                        "fonte": [
                          {
                            "periodo": "2009",
                            "fontes": [
                              "United Nations Statistics Division, Department of Economic and Social Affairs, Millennium Development Goals Indicators - 2015. Disponível em <http://mdgs.un.org/unsd/mdg/Data.aspx>. Acesso em: jan. 2018."
                            ]
                          },
                          {
                            "periodo": "2005",
                            "fontes": [
                              "United Nations Statistics Division, Department of Economic and Social Affairs, Millennium Development Goals Indicators - 2015. Disponível em <http://mdgs.un.org/unsd/mdg/Data.aspx>. Acesso em: jan. 2018."
                            ]
                          },
                          {
                            "periodo": "2000",
                            "fontes": [
                              "United Nations Statistics Division, Department of Economic and Social Affairs, Millennium Development Goals Indicators - 2015. Disponível em <http://mdgs.un.org/unsd/mdg/Data.aspx>. Acesso em: jan. 2018."
                            ]
                          },
                          {
                            "periodo": "2014",
                            "fontes": [
                              "United Nations Statistics Division, Department of Economic and Social Affairs, Millennium Development Goals Indicators - 2015. Disponível em <http://mdgs.un.org/unsd/mdg/Data.aspx>. Acesso em: jan. 2018."
                            ]
                          },
                          {
                            "periodo": "2007",
                            "fontes": [
                              "United Nations Statistics Division, Department of Economic and Social Affairs, Millennium Development Goals Indicators - 2015. Disponível em <http://mdgs.un.org/unsd/mdg/Data.aspx>. Acesso em: jan. 2018."
                            ]
                          },
                          {
                            "periodo": "1990",
                            "fontes": [
                              "United Nations Statistics Division, Department of Economic and Social Affairs, Millennium Development Goals Indicators - 2015. Disponível em <http://mdgs.un.org/unsd/mdg/Data.aspx>. Acesso em: jan. 2018."
                            ]
                          },
                          {
                            "periodo": "1995",
                            "fontes": [
                              "United Nations Statistics Division, Department of Economic and Social Affairs, Millennium Development Goals Indicators - 2015. Disponível em <http://mdgs.un.org/unsd/mdg/Data.aspx>. Acesso em: jan. 2018."
                            ]
                          }
                        ]
                      }
                    ],
                    "nota": []
                  }
                ],
                "nota": []
              },
              {
                "id": 63105,
                "posicao": "8.8",
                "indicador": "Estabelecer uma parceria mundial para o desenvolvimento",
                "classe": "T",
                "children": [
                  {
                    "id": 63106,
                    "posicao": "8.8.1",
                    "indicador": "Tratar globalmente o problema da dívida dos países em desenvolvimento, mediante medidas nacionais e internacionais de modo a tornar a sua dívida sustentável a longo prazo",
                    "classe": null,
                    "children": [],
                    "nota": []
                  },
                  {
                    "id": 63107,
                    "posicao": "8.8.2",
                    "indicador": "Meta 5: Em cooperação com os países em desenvolvimento, formular e executar estratégias que permitam que os jovens obtenham um trabalho digno e produtivo",
                    "classe": null,
                    "children": [],
                    "nota": []
                  },
                  {
                    "id": 63108,
                    "posicao": "8.8.3",
                    "indicador": "Meta 6: Em cooperação com as empresas farmacêuticas, proporcionar o acesso a medicamentos essenciais a preços acessíveis, nos países em vias de desenvolvimento",
                    "classe": null,
                    "children": [],
                    "nota": []
                  },
                  {
                    "id": 63109,
                    "posicao": "8.8.4",
                    "indicador": "Meta 7: Em cooperação com o setor privado, tornar acessíveis os benefícios das novas tecnologias, em especial das tecnologias de informação e de comunicações",
                    "classe": null,
                    "children": [
                      {
                        "id": 63110,
                        "posicao": "8.8.4.1",
                        "indicador": "Linhas telefônicas por 100  habitantes",
                        "classe": "I",
                        "unidade": {
                          "id": "a cada 100 habitantes",
                          "classe": "N",
                          "multiplicador": 1
                        },
                        "children": [],
                        "nota": [],
                        "fonte": [
                          {
                            "periodo": "2013",
                            "fontes": [
                              "United Nations Statistics Division, Department of Economic and Social Affairs, Millennium Development Goals Indicators - 2015. Disponível em <http://mdgs.un.org/unsd/mdg/Data.aspx>. Acesso em: jan. 2018."
                            ]
                          },
                          {
                            "periodo": "2012",
                            "fontes": [
                              "United Nations Statistics Division, Department of Economic and Social Affairs, Millennium Development Goals Indicators - 2015. Disponível em <http://mdgs.un.org/unsd/mdg/Data.aspx>. Acesso em: jan. 2018."
                            ]
                          },
                          {
                            "periodo": "2011",
                            "fontes": [
                              "United Nations Statistics Division, Department of Economic and Social Affairs, Millennium Development Goals Indicators - 2015. Disponível em <http://mdgs.un.org/unsd/mdg/Data.aspx>. Acesso em: jan. 2018."
                            ]
                          },
                          {
                            "periodo": "2009",
                            "fontes": [
                              "United Nations Statistics Division, Department of Economic and Social Affairs, Millennium Development Goals Indicators - 2015. Disponível em <http://mdgs.un.org/unsd/mdg/Data.aspx>. Acesso em: jan. 2018."
                            ]
                          },
                          {
                            "periodo": "2008",
                            "fontes": [
                              "United Nations Statistics Division, Department of Economic and Social Affairs, Millennium Development Goals Indicators - 2015. Disponível em <http://mdgs.un.org/unsd/mdg/Data.aspx>. Acesso em: jan. 2018."
                            ]
                          },
                          {
                            "periodo": "2006",
                            "fontes": [
                              "United Nations Statistics Division, Department of Economic and Social Affairs, Millennium Development Goals Indicators - 2015. Disponível em <http://mdgs.un.org/unsd/mdg/Data.aspx>. Acesso em: jan. 2018."
                            ]
                          },
                          {
                            "periodo": "2005",
                            "fontes": [
                              "United Nations Statistics Division, Department of Economic and Social Affairs, Millennium Development Goals Indicators - 2015. Disponível em <http://mdgs.un.org/unsd/mdg/Data.aspx>. Acesso em: jan. 2018."
                            ]
                          },
                          {
                            "periodo": "2004",
                            "fontes": [
                              "United Nations Statistics Division, Department of Economic and Social Affairs, Millennium Development Goals Indicators - 2015. Disponível em <http://mdgs.un.org/unsd/mdg/Data.aspx>. Acesso em: jan. 2018."
                            ]
                          },
                          {
                            "periodo": "2002",
                            "fontes": [
                              "United Nations Statistics Division, Department of Economic and Social Affairs, Millennium Development Goals Indicators - 2015. Disponível em <http://mdgs.un.org/unsd/mdg/Data.aspx>. Acesso em: jan. 2018."
                            ]
                          },
                          {
                            "periodo": "2001",
                            "fontes": [
                              "United Nations Statistics Division, Department of Economic and Social Affairs, Millennium Development Goals Indicators - 2015. Disponível em <http://mdgs.un.org/unsd/mdg/Data.aspx>. Acesso em: jan. 2018."
                            ]
                          },
                          {
                            "periodo": "2010",
                            "fontes": [
                              "United Nations Statistics Division, Department of Economic and Social Affairs, Millennium Development Goals Indicators - 2015. Disponível em <http://mdgs.un.org/unsd/mdg/Data.aspx>. Acesso em: jan. 2018."
                            ]
                          },
                          {
                            "periodo": "2000",
                            "fontes": [
                              "United Nations Statistics Division, Department of Economic and Social Affairs, Millennium Development Goals Indicators - 2015. Disponível em <http://mdgs.un.org/unsd/mdg/Data.aspx>. Acesso em: jan. 2018."
                            ]
                          },
                          {
                            "periodo": "2014",
                            "fontes": [
                              "United Nations Statistics Division, Department of Economic and Social Affairs, Millennium Development Goals Indicators - 2015. Disponível em <http://mdgs.un.org/unsd/mdg/Data.aspx>. Acesso em: jan. 2018."
                            ]
                          },
                          {
                            "periodo": "2007",
                            "fontes": [
                              "United Nations Statistics Division, Department of Economic and Social Affairs, Millennium Development Goals Indicators - 2015. Disponível em <http://mdgs.un.org/unsd/mdg/Data.aspx>. Acesso em: jan. 2018."
                            ]
                          },
                          {
                            "periodo": "2003",
                            "fontes": [
                              "United Nations Statistics Division, Department of Economic and Social Affairs, Millennium Development Goals Indicators - 2015. Disponível em <http://mdgs.un.org/unsd/mdg/Data.aspx>. Acesso em: jan. 2018."
                            ]
                          },
                          {
                            "periodo": "1991",
                            "fontes": [
                              "United Nations Statistics Division, Department of Economic and Social Affairs, Millennium Development Goals Indicators - 2015. Disponível em <http://mdgs.un.org/unsd/mdg/Data.aspx>. Acesso em: jan. 2018."
                            ]
                          },
                          {
                            "periodo": "1999",
                            "fontes": [
                              "United Nations Statistics Division, Department of Economic and Social Affairs, Millennium Development Goals Indicators - 2015. Disponível em <http://mdgs.un.org/unsd/mdg/Data.aspx>. Acesso em: jan. 2018."
                            ]
                          },
                          {
                            "periodo": "1996",
                            "fontes": [
                              "United Nations Statistics Division, Department of Economic and Social Affairs, Millennium Development Goals Indicators - 2015. Disponível em <http://mdgs.un.org/unsd/mdg/Data.aspx>. Acesso em: jan. 2018."
                            ]
                          },
                          {
                            "periodo": "1990",
                            "fontes": [
                              "United Nations Statistics Division, Department of Economic and Social Affairs, Millennium Development Goals Indicators - 2015. Disponível em <http://mdgs.un.org/unsd/mdg/Data.aspx>. Acesso em: jan. 2018."
                            ]
                          },
                          {
                            "periodo": "1995",
                            "fontes": [
                              "United Nations Statistics Division, Department of Economic and Social Affairs, Millennium Development Goals Indicators - 2015. Disponível em <http://mdgs.un.org/unsd/mdg/Data.aspx>. Acesso em: jan. 2018."
                            ]
                          },
                          {
                            "periodo": "1992",
                            "fontes": [
                              "United Nations Statistics Division, Department of Economic and Social Affairs, Millennium Development Goals Indicators - 2015. Disponível em <http://mdgs.un.org/unsd/mdg/Data.aspx>. Acesso em: jan. 2018."
                            ]
                          },
                          {
                            "periodo": "1993",
                            "fontes": [
                              "United Nations Statistics Division, Department of Economic and Social Affairs, Millennium Development Goals Indicators - 2015. Disponível em <http://mdgs.un.org/unsd/mdg/Data.aspx>. Acesso em: jan. 2018."
                            ]
                          },
                          {
                            "periodo": "1994",
                            "fontes": [
                              "United Nations Statistics Division, Department of Economic and Social Affairs, Millennium Development Goals Indicators - 2015. Disponível em <http://mdgs.un.org/unsd/mdg/Data.aspx>. Acesso em: jan. 2018."
                            ]
                          },
                          {
                            "periodo": "1997",
                            "fontes": [
                              "United Nations Statistics Division, Department of Economic and Social Affairs, Millennium Development Goals Indicators - 2015. Disponível em <http://mdgs.un.org/unsd/mdg/Data.aspx>. Acesso em: jan. 2018."
                            ]
                          },
                          {
                            "periodo": "1998",
                            "fontes": [
                              "United Nations Statistics Division, Department of Economic and Social Affairs, Millennium Development Goals Indicators - 2015. Disponível em <http://mdgs.un.org/unsd/mdg/Data.aspx>. Acesso em: jan. 2018."
                            ]
                          }
                        ]
                      },
                      {
                        "id": 63111,
                        "posicao": "8.8.4.2",
                        "indicador": "Assinaturas de telefones celulares por 100 habitantes",
                        "classe": "I",
                        "unidade": {
                          "id": "a cada 100 habitantes",
                          "classe": "N",
                          "multiplicador": 1
                        },
                        "children": [],
                        "nota": [],
                        "fonte": [
                          {
                            "periodo": "2013",
                            "fontes": [
                              "United Nations Statistics Division, Department of Economic and Social Affairs, Millennium Development Goals Indicators - 2015. Disponível em <http://mdgs.un.org/unsd/mdg/Data.aspx>. Acesso em: jan. 2018."
                            ]
                          },
                          {
                            "periodo": "2012",
                            "fontes": [
                              "United Nations Statistics Division, Department of Economic and Social Affairs, Millennium Development Goals Indicators - 2015. Disponível em <http://mdgs.un.org/unsd/mdg/Data.aspx>. Acesso em: jan. 2018."
                            ]
                          },
                          {
                            "periodo": "2011",
                            "fontes": [
                              "United Nations Statistics Division, Department of Economic and Social Affairs, Millennium Development Goals Indicators - 2015. Disponível em <http://mdgs.un.org/unsd/mdg/Data.aspx>. Acesso em: jan. 2018."
                            ]
                          },
                          {
                            "periodo": "2009",
                            "fontes": [
                              "United Nations Statistics Division, Department of Economic and Social Affairs, Millennium Development Goals Indicators - 2015. Disponível em <http://mdgs.un.org/unsd/mdg/Data.aspx>. Acesso em: jan. 2018."
                            ]
                          },
                          {
                            "periodo": "2008",
                            "fontes": [
                              "United Nations Statistics Division, Department of Economic and Social Affairs, Millennium Development Goals Indicators - 2015. Disponível em <http://mdgs.un.org/unsd/mdg/Data.aspx>. Acesso em: jan. 2018."
                            ]
                          },
                          {
                            "periodo": "2006",
                            "fontes": [
                              "United Nations Statistics Division, Department of Economic and Social Affairs, Millennium Development Goals Indicators - 2015. Disponível em <http://mdgs.un.org/unsd/mdg/Data.aspx>. Acesso em: jan. 2018."
                            ]
                          },
                          {
                            "periodo": "2005",
                            "fontes": [
                              "United Nations Statistics Division, Department of Economic and Social Affairs, Millennium Development Goals Indicators - 2015. Disponível em <http://mdgs.un.org/unsd/mdg/Data.aspx>. Acesso em: jan. 2018."
                            ]
                          },
                          {
                            "periodo": "2004",
                            "fontes": [
                              "United Nations Statistics Division, Department of Economic and Social Affairs, Millennium Development Goals Indicators - 2015. Disponível em <http://mdgs.un.org/unsd/mdg/Data.aspx>. Acesso em: jan. 2018."
                            ]
                          },
                          {
                            "periodo": "2002",
                            "fontes": [
                              "United Nations Statistics Division, Department of Economic and Social Affairs, Millennium Development Goals Indicators - 2015. Disponível em <http://mdgs.un.org/unsd/mdg/Data.aspx>. Acesso em: jan. 2018."
                            ]
                          },
                          {
                            "periodo": "2001",
                            "fontes": [
                              "United Nations Statistics Division, Department of Economic and Social Affairs, Millennium Development Goals Indicators - 2015. Disponível em <http://mdgs.un.org/unsd/mdg/Data.aspx>. Acesso em: jan. 2018."
                            ]
                          },
                          {
                            "periodo": "2010",
                            "fontes": [
                              "United Nations Statistics Division, Department of Economic and Social Affairs, Millennium Development Goals Indicators - 2015. Disponível em <http://mdgs.un.org/unsd/mdg/Data.aspx>. Acesso em: jan. 2018."
                            ]
                          },
                          {
                            "periodo": "2000",
                            "fontes": [
                              "United Nations Statistics Division, Department of Economic and Social Affairs, Millennium Development Goals Indicators - 2015. Disponível em <http://mdgs.un.org/unsd/mdg/Data.aspx>. Acesso em: jan. 2018."
                            ]
                          },
                          {
                            "periodo": "2014",
                            "fontes": [
                              "United Nations Statistics Division, Department of Economic and Social Affairs, Millennium Development Goals Indicators - 2015. Disponível em <http://mdgs.un.org/unsd/mdg/Data.aspx>. Acesso em: jan. 2018."
                            ]
                          },
                          {
                            "periodo": "2007",
                            "fontes": [
                              "United Nations Statistics Division, Department of Economic and Social Affairs, Millennium Development Goals Indicators - 2015. Disponível em <http://mdgs.un.org/unsd/mdg/Data.aspx>. Acesso em: jan. 2018."
                            ]
                          },
                          {
                            "periodo": "2003",
                            "fontes": [
                              "United Nations Statistics Division, Department of Economic and Social Affairs, Millennium Development Goals Indicators - 2015. Disponível em <http://mdgs.un.org/unsd/mdg/Data.aspx>. Acesso em: jan. 2018."
                            ]
                          },
                          {
                            "periodo": "1991",
                            "fontes": [
                              "United Nations Statistics Division, Department of Economic and Social Affairs, Millennium Development Goals Indicators - 2015. Disponível em <http://mdgs.un.org/unsd/mdg/Data.aspx>. Acesso em: jan. 2018."
                            ]
                          },
                          {
                            "periodo": "1999",
                            "fontes": [
                              "United Nations Statistics Division, Department of Economic and Social Affairs, Millennium Development Goals Indicators - 2015. Disponível em <http://mdgs.un.org/unsd/mdg/Data.aspx>. Acesso em: jan. 2018."
                            ]
                          },
                          {
                            "periodo": "1996",
                            "fontes": [
                              "United Nations Statistics Division, Department of Economic and Social Affairs, Millennium Development Goals Indicators - 2015. Disponível em <http://mdgs.un.org/unsd/mdg/Data.aspx>. Acesso em: jan. 2018."
                            ]
                          },
                          {
                            "periodo": "1990",
                            "fontes": [
                              "United Nations Statistics Division, Department of Economic and Social Affairs, Millennium Development Goals Indicators - 2015. Disponível em <http://mdgs.un.org/unsd/mdg/Data.aspx>. Acesso em: jan. 2018."
                            ]
                          },
                          {
                            "periodo": "1995",
                            "fontes": [
                              "United Nations Statistics Division, Department of Economic and Social Affairs, Millennium Development Goals Indicators - 2015. Disponível em <http://mdgs.un.org/unsd/mdg/Data.aspx>. Acesso em: jan. 2018."
                            ]
                          },
                          {
                            "periodo": "1992",
                            "fontes": [
                              "United Nations Statistics Division, Department of Economic and Social Affairs, Millennium Development Goals Indicators - 2015. Disponível em <http://mdgs.un.org/unsd/mdg/Data.aspx>. Acesso em: jan. 2018."
                            ]
                          },
                          {
                            "periodo": "1993",
                            "fontes": [
                              "United Nations Statistics Division, Department of Economic and Social Affairs, Millennium Development Goals Indicators - 2015. Disponível em <http://mdgs.un.org/unsd/mdg/Data.aspx>. Acesso em: jan. 2018."
                            ]
                          },
                          {
                            "periodo": "1994",
                            "fontes": [
                              "United Nations Statistics Division, Department of Economic and Social Affairs, Millennium Development Goals Indicators - 2015. Disponível em <http://mdgs.un.org/unsd/mdg/Data.aspx>. Acesso em: jan. 2018."
                            ]
                          },
                          {
                            "periodo": "1997",
                            "fontes": [
                              "United Nations Statistics Division, Department of Economic and Social Affairs, Millennium Development Goals Indicators - 2015. Disponível em <http://mdgs.un.org/unsd/mdg/Data.aspx>. Acesso em: jan. 2018."
                            ]
                          },
                          {
                            "periodo": "1998",
                            "fontes": [
                              "United Nations Statistics Division, Department of Economic and Social Affairs, Millennium Development Goals Indicators - 2015. Disponível em <http://mdgs.un.org/unsd/mdg/Data.aspx>. Acesso em: jan. 2018."
                            ]
                          }
                        ]
                      },
                      {
                        "id": 63112,
                        "posicao": "8.8.4.3",
                        "indicador": "Usuários de internet por 100 habitantes",
                        "classe": "I",
                        "unidade": {
                          "id": "a cada 100 habitantes",
                          "classe": "N",
                          "multiplicador": 1
                        },
                        "children": [],
                        "nota": [],
                        "fonte": [
                          {
                            "periodo": "2013",
                            "fontes": [
                              "United Nations Statistics Division, Department of Economic and Social Affairs, Millennium Development Goals Indicators - 2015. Disponível em <http://mdgs.un.org/unsd/mdg/Data.aspx>. Acesso em: jan. 2018."
                            ]
                          },
                          {
                            "periodo": "2012",
                            "fontes": [
                              "United Nations Statistics Division, Department of Economic and Social Affairs, Millennium Development Goals Indicators - 2015. Disponível em <http://mdgs.un.org/unsd/mdg/Data.aspx>. Acesso em: jan. 2018."
                            ]
                          },
                          {
                            "periodo": "2011",
                            "fontes": [
                              "United Nations Statistics Division, Department of Economic and Social Affairs, Millennium Development Goals Indicators - 2015. Disponível em <http://mdgs.un.org/unsd/mdg/Data.aspx>. Acesso em: jan. 2018."
                            ]
                          },
                          {
                            "periodo": "2009",
                            "fontes": [
                              "United Nations Statistics Division, Department of Economic and Social Affairs, Millennium Development Goals Indicators - 2015. Disponível em <http://mdgs.un.org/unsd/mdg/Data.aspx>. Acesso em: jan. 2018."
                            ]
                          },
                          {
                            "periodo": "2008",
                            "fontes": [
                              "United Nations Statistics Division, Department of Economic and Social Affairs, Millennium Development Goals Indicators - 2015. Disponível em <http://mdgs.un.org/unsd/mdg/Data.aspx>. Acesso em: jan. 2018."
                            ]
                          },
                          {
                            "periodo": "2006",
                            "fontes": [
                              "United Nations Statistics Division, Department of Economic and Social Affairs, Millennium Development Goals Indicators - 2015. Disponível em <http://mdgs.un.org/unsd/mdg/Data.aspx>. Acesso em: jan. 2018."
                            ]
                          },
                          {
                            "periodo": "2005",
                            "fontes": [
                              "United Nations Statistics Division, Department of Economic and Social Affairs, Millennium Development Goals Indicators - 2015. Disponível em <http://mdgs.un.org/unsd/mdg/Data.aspx>. Acesso em: jan. 2018."
                            ]
                          },
                          {
                            "periodo": "2004",
                            "fontes": [
                              "United Nations Statistics Division, Department of Economic and Social Affairs, Millennium Development Goals Indicators - 2015. Disponível em <http://mdgs.un.org/unsd/mdg/Data.aspx>. Acesso em: jan. 2018."
                            ]
                          },
                          {
                            "periodo": "2002",
                            "fontes": [
                              "United Nations Statistics Division, Department of Economic and Social Affairs, Millennium Development Goals Indicators - 2015. Disponível em <http://mdgs.un.org/unsd/mdg/Data.aspx>. Acesso em: jan. 2018."
                            ]
                          },
                          {
                            "periodo": "2001",
                            "fontes": [
                              "United Nations Statistics Division, Department of Economic and Social Affairs, Millennium Development Goals Indicators - 2015. Disponível em <http://mdgs.un.org/unsd/mdg/Data.aspx>. Acesso em: jan. 2018."
                            ]
                          },
                          {
                            "periodo": "2010",
                            "fontes": [
                              "United Nations Statistics Division, Department of Economic and Social Affairs, Millennium Development Goals Indicators - 2015. Disponível em <http://mdgs.un.org/unsd/mdg/Data.aspx>. Acesso em: jan. 2018."
                            ]
                          },
                          {
                            "periodo": "2000",
                            "fontes": [
                              "United Nations Statistics Division, Department of Economic and Social Affairs, Millennium Development Goals Indicators - 2015. Disponível em <http://mdgs.un.org/unsd/mdg/Data.aspx>. Acesso em: jan. 2018."
                            ]
                          },
                          {
                            "periodo": "2014",
                            "fontes": [
                              "United Nations Statistics Division, Department of Economic and Social Affairs, Millennium Development Goals Indicators - 2015. Disponível em <http://mdgs.un.org/unsd/mdg/Data.aspx>. Acesso em: jan. 2018."
                            ]
                          },
                          {
                            "periodo": "2007",
                            "fontes": [
                              "United Nations Statistics Division, Department of Economic and Social Affairs, Millennium Development Goals Indicators - 2015. Disponível em <http://mdgs.un.org/unsd/mdg/Data.aspx>. Acesso em: jan. 2018."
                            ]
                          },
                          {
                            "periodo": "2003",
                            "fontes": [
                              "United Nations Statistics Division, Department of Economic and Social Affairs, Millennium Development Goals Indicators - 2015. Disponível em <http://mdgs.un.org/unsd/mdg/Data.aspx>. Acesso em: jan. 2018."
                            ]
                          },
                          {
                            "periodo": "1991",
                            "fontes": [
                              "United Nations Statistics Division, Department of Economic and Social Affairs, Millennium Development Goals Indicators - 2015. Disponível em <http://mdgs.un.org/unsd/mdg/Data.aspx>. Acesso em: jan. 2018."
                            ]
                          },
                          {
                            "periodo": "1999",
                            "fontes": [
                              "United Nations Statistics Division, Department of Economic and Social Affairs, Millennium Development Goals Indicators - 2015. Disponível em <http://mdgs.un.org/unsd/mdg/Data.aspx>. Acesso em: jan. 2018."
                            ]
                          },
                          {
                            "periodo": "1996",
                            "fontes": [
                              "United Nations Statistics Division, Department of Economic and Social Affairs, Millennium Development Goals Indicators - 2015. Disponível em <http://mdgs.un.org/unsd/mdg/Data.aspx>. Acesso em: jan. 2018."
                            ]
                          },
                          {
                            "periodo": "1990",
                            "fontes": [
                              "United Nations Statistics Division, Department of Economic and Social Affairs, Millennium Development Goals Indicators - 2015. Disponível em <http://mdgs.un.org/unsd/mdg/Data.aspx>. Acesso em: jan. 2018."
                            ]
                          },
                          {
                            "periodo": "1995",
                            "fontes": [
                              "United Nations Statistics Division, Department of Economic and Social Affairs, Millennium Development Goals Indicators - 2015. Disponível em <http://mdgs.un.org/unsd/mdg/Data.aspx>. Acesso em: jan. 2018."
                            ]
                          },
                          {
                            "periodo": "1992",
                            "fontes": [
                              "United Nations Statistics Division, Department of Economic and Social Affairs, Millennium Development Goals Indicators - 2015. Disponível em <http://mdgs.un.org/unsd/mdg/Data.aspx>. Acesso em: jan. 2018."
                            ]
                          },
                          {
                            "periodo": "1993",
                            "fontes": [
                              "United Nations Statistics Division, Department of Economic and Social Affairs, Millennium Development Goals Indicators - 2015. Disponível em <http://mdgs.un.org/unsd/mdg/Data.aspx>. Acesso em: jan. 2018."
                            ]
                          },
                          {
                            "periodo": "1994",
                            "fontes": [
                              "United Nations Statistics Division, Department of Economic and Social Affairs, Millennium Development Goals Indicators - 2015. Disponível em <http://mdgs.un.org/unsd/mdg/Data.aspx>. Acesso em: jan. 2018."
                            ]
                          },
                          {
                            "periodo": "1997",
                            "fontes": [
                              "United Nations Statistics Division, Department of Economic and Social Affairs, Millennium Development Goals Indicators - 2015. Disponível em <http://mdgs.un.org/unsd/mdg/Data.aspx>. Acesso em: jan. 2018."
                            ]
                          },
                          {
                            "periodo": "1998",
                            "fontes": [
                              "United Nations Statistics Division, Department of Economic and Social Affairs, Millennium Development Goals Indicators - 2015. Disponível em <http://mdgs.un.org/unsd/mdg/Data.aspx>. Acesso em: jan. 2018."
                            ]
                          }
                        ]
                      }
                    ],
                    "nota": []
                  }
                ],
                "nota": []
              }
            ],
            "nota": []
          },
          {
            "id": 63113,
            "posicao": "9",
            "indicador": "Objetivos de Desenvolvimento Sustentável",
            "classe": "T",
            "children": [
              {
                "id": 63114,
                "posicao": "9.1",
                "indicador": "Erradicação da pobreza",
                "classe": "T",
                "children": [],
                "nota": [
                  {
                    "periodo": "-",
                    "notas": [
                      "Acabar com a pobreza em todas as suas formas, em todos os lugares"
                    ]
                  }
                ]
              },
              {
                "id": 63115,
                "posicao": "9.2",
                "indicador": "Fome zero",
                "classe": "T",
                "children": [],
                "nota": [
                  {
                    "periodo": "-",
                    "notas": [
                      "Acabar com a fome, alcançar a segurança alimentar e melhoria da nutrição e promover a agricultura sustentável"
                    ]
                  }
                ]
              },
              {
                "id": 63116,
                "posicao": "9.3",
                "indicador": "Boa saúde e bem-estar",
                "classe": "T",
                "children": [],
                "nota": [
                  {
                    "periodo": "-",
                    "notas": [
                      "Assegurar uma vida saudável e promover o bem-estar para todos, em todas as idades"
                    ]
                  }
                ]
              },
              {
                "id": 63117,
                "posicao": "9.4",
                "indicador": "Educação de qualidade",
                "classe": "T",
                "children": [],
                "nota": [
                  {
                    "periodo": "-",
                    "notas": [
                      "Assegurar a educação inclusiva e equitativa e de qualidade, e promover oportunidades de aprendizagem ao longo da vida para todos"
                    ]
                  }
                ]
              },
              {
                "id": 63130,
                "posicao": "9.5",
                "indicador": "Igualdade de gênero",
                "classe": "T",
                "children": [],
                "nota": [
                  {
                    "periodo": "-",
                    "notas": [
                      "Alcançar a igualdade de gênero e empoderar todas as mulheres e meninas"
                    ]
                  }
                ]
              },
              {
                "id": 63118,
                "posicao": "9.6",
                "indicador": "Água limpa e saneamento",
                "classe": "T",
                "children": [],
                "nota": [
                  {
                    "periodo": "-",
                    "notas": [
                      "Garantir disponibilidade e manejo sustentável da água e saneamento para todos"
                    ]
                  }
                ]
              },
              {
                "id": 63119,
                "posicao": "9.7",
                "indicador": "Energia acessível e limpa",
                "classe": "T",
                "children": [],
                "nota": [
                  {
                    "periodo": "-",
                    "notas": [
                      "Garantir acesso à energia barata, confiável, sustentável e renovável para todos"
                    ]
                  }
                ]
              },
              {
                "id": 63120,
                "posicao": "9.8",
                "indicador": "Emprego digno e crescimento econômico",
                "classe": "T",
                "children": [],
                "nota": [
                  {
                    "periodo": "-",
                    "notas": [
                      "Promover o crescimento econômico sustentado, inclusivo e sustentável, emprego pleno e produtivo, e trabalho decente para todos"
                    ]
                  }
                ]
              },
              {
                "id": 63121,
                "posicao": "9.9",
                "indicador": "Indústria, inovação e infraestrutura",
                "classe": "T",
                "children": [],
                "nota": [
                  {
                    "periodo": "-",
                    "notas": [
                      "Construir infraestrutura resiliente, promover a industrialização inclusiva e sustentável, e fomentar a inovação"
                    ]
                  }
                ]
              },
              {
                "id": 63122,
                "posicao": "9.10",
                "indicador": "Redução das desigualdades",
                "classe": "T",
                "children": [],
                "nota": [
                  {
                    "periodo": "-",
                    "notas": [
                      "Reduzir a desigualdade dentro dos países e entre eles"
                    ]
                  }
                ]
              },
              {
                "id": 63123,
                "posicao": "9.11",
                "indicador": "Cidades e comunidades sustentáveis",
                "classe": "T",
                "children": [],
                "nota": [
                  {
                    "periodo": "-",
                    "notas": [
                      "Tornar as cidades e os assentamentos humanos inclusivos, seguros, resilientes e sustentáveis"
                    ]
                  }
                ]
              },
              {
                "id": 63124,
                "posicao": "9.12",
                "indicador": "Consumo e produção responsáveis",
                "classe": "T",
                "children": [],
                "nota": [
                  {
                    "periodo": "-",
                    "notas": [
                      "Assegurar padrões de produção e de consumo sustentáveis"
                    ]
                  }
                ]
              },
              {
                "id": 63125,
                "posicao": "9.13",
                "indicador": "Combate às alterações climáticas",
                "classe": "T",
                "children": [],
                "nota": [
                  {
                    "periodo": "-",
                    "notas": [
                      "Tomar medidas urgentes para combater a mudança do clima e seus impactos"
                    ]
                  }
                ]
              },
              {
                "id": 63126,
                "posicao": "9.14",
                "indicador": "Vida debaixo d´água",
                "classe": "T",
                "children": [],
                "nota": [
                  {
                    "periodo": "-",
                    "notas": [
                      "Conservação e uso sustentável dos oceanos, dos mares e dos recursos marinhos para o desenvolvimento sustentável"
                    ]
                  }
                ]
              },
              {
                "id": 63127,
                "posicao": "9.15",
                "indicador": "Vida sobre a Terra",
                "classe": "T",
                "children": [],
                "nota": [
                  {
                    "periodo": "-",
                    "notas": [
                      "Proteger, recuperar e promover o uso sustentável dos ecossistemas terrestres, gerir de forma sustentável as florestas, combater a desertificação, deter e reverter a degradação da terra e deter a perda de biodiversidade"
                    ]
                  }
                ]
              },
              {
                "id": 63128,
                "posicao": "9.16",
                "indicador": "Paz, justiça e instituições fortes",
                "classe": "T",
                "children": [],
                "nota": [
                  {
                    "periodo": "-",
                    "notas": [
                      "Promover sociedades pacíficas e inclusivas para o desenvolvimento sustentável, proporcionar o acesso à justiça para todos e construir instituições eficazes, responsáveis e inclusivas em todos os níveis"
                    ]
                  }
                ]
              },
              {
                "id": 63129,
                "posicao": "9.17",
                "indicador": "Parcerias em prol das metas",
                "classe": "T",
                "children": [],
                "nota": [
                  {
                    "periodo": "-",
                    "notas": [
                      "Fortalecer os meios de implementação e revitalizar a parceria global para o desenvolvimento sustentável"
                    ]
                  }
                ]
              }
            ],
            "nota": []
          }
        ],
        "resultados": [
          {
            "id": 62941,
            "valorMaisRecente": "Brasília",
            "periodoMaisRecente": "-",
            "localidade": "BR",
            "valores": [
              "Brasília"
            ],
            "periodos": [
              "-"
            ]
          },
          {
            "id": 62942,
            "valorMaisRecente": "8515759.090",
            "periodoMaisRecente": "-",
            "localidade": "BR",
            "valores": [
              "8515759.090"
            ],
            "periodos": [
              "-"
            ]
          },
          {
            "id": 62943,
            "valorMaisRecente": "Português",
            "periodoMaisRecente": "-",
            "localidade": "BR",
            "valores": [
              "Português"
            ],
            "periodos": [
              "-"
            ]
          },
          {
            "id": 62944,
            "valorMaisRecente": "América do Sul",
            "periodoMaisRecente": "-",
            "localidade": "BR",
            "valores": [
              "América do Sul"
            ],
            "periodos": [
              "-"
            ]
          },
          {
            "id": 62945,
            "valorMaisRecente": "Real",
            "periodoMaisRecente": "-",
            "localidade": "BR",
            "valores": [
              "Real"
            ],
            "periodos": [
              "-"
            ]
          },
          {
            "id": 62957,
            "valorMaisRecente": "99999999999998",
            "periodoMaisRecente": "2016",
            "localidade": "BR",
            "valores": [
              "5313000",
              "4773000",
              "3785000",
              "4133000",
              "4794000",
              "5358000",
              "5017000",
              "5026000",
              "5050000",
              "4802000",
              "5161000",
              "5433000",
              "5677000",
              "5813000",
              "6430000",
              "6306000",
              "99999999999998"
            ],
            "periodos": [
              "2000",
              "2001",
              "2002",
              "2003",
              "2004",
              "2005",
              "2006",
              "2007",
              "2008",
              "2009",
              "2010",
              "2011",
              "2012",
              "2013",
              "2014",
              "2015",
              "2016"
            ]
          },
          {
            "id": 62958,
            "valorMaisRecente": "99999999999998",
            "periodoMaisRecente": "2014",
            "localidade": "BR",
            "valores": [
              "99999999999998",
              "4.5",
              "3.9",
              "4.5",
              "5.6",
              "5.7",
              "5.9",
              "99999999999998",
              "99999999999998"
            ],
            "periodos": [
              "1990",
              "1995",
              "2000",
              "2005",
              "2010",
              "2011",
              "2012",
              "2013",
              "2014"
            ]
          },
          {
            "id": 62959,
            "valorMaisRecente": "3.8",
            "periodoMaisRecente": "2014",
            "localidade": "BR",
            "valores": [
              "2.8",
              "2.8",
              "3.4",
              "3.8",
              "3.7",
              "3.7",
              "3.8",
              "3.8"
            ],
            "periodos": [
              "1995",
              "2000",
              "2005",
              "2010",
              "2011",
              "2012",
              "2013",
              "2014"
            ]
          },
          {
            "id": 62960,
            "valorMaisRecente": "99999999999998",
            "periodoMaisRecente": "2015",
            "localidade": "BR",
            "valores": [
              "1.00",
              "1.03",
              "0.98",
              "1.00",
              "0.96",
              "1.00",
              "0.99",
              "1.08",
              "1.13",
              "1.12",
              "1.16",
              "1.14",
              "1.13",
              "99999999999998",
              "1.17",
              "99999999999998"
            ],
            "periodos": [
              "2000",
              "2001",
              "2002",
              "2003",
              "2004",
              "2005",
              "2006",
              "2007",
              "2008",
              "2009",
              "2010",
              "2011",
              "2012",
              "2013",
              "2014",
              "2015"
            ]
          },
          {
            "id": 62961,
            "valorMaisRecente": "56.0",
            "periodoMaisRecente": "2018",
            "localidade": "BR",
            "valores": [
              "55.0",
              "54.8",
              "56.3",
              "56.7",
              "57.7",
              "59.0",
              "58.8",
              "58.4",
              "58.5",
              "58.9",
              "57.4",
              "56.0",
              "56.0",
              "55.8",
              "56.4",
              "56.3",
              "56.2",
              "56.1",
              "56.0"
            ],
            "periodos": [
              "2000",
              "2001",
              "2002",
              "2003",
              "2004",
              "2005",
              "2006",
              "2007",
              "2008",
              "2009",
              "2010",
              "2011",
              "2012",
              "2013",
              "2014",
              "2015",
              "2016",
              "2017",
              "2018"
            ]
          },
          {
            "id": 62962,
            "valorMaisRecente": "8528",
            "periodoMaisRecente": "2015",
            "localidade": "BR",
            "valores": [
              "3711",
              "3143",
              "2828",
              "3044",
              "3596",
              "4731",
              "5808",
              "7247",
              "8707",
              "8475",
              "11121",
              "13039",
              "12158",
              "12072",
              "11387",
              "8528"
            ],
            "periodos": [
              "2000",
              "2001",
              "2002",
              "2003",
              "2004",
              "2005",
              "2006",
              "2007",
              "2008",
              "2009",
              "2010",
              "2011",
              "2012",
              "2013",
              "2014",
              "2015"
            ]
          },
          {
            "id": 62963,
            "valorMaisRecente": "66.8",
            "periodoMaisRecente": "2018",
            "localidade": "BR",
            "valores": [
              "68.4",
              "68.0",
              "68.8",
              "68.9",
              "69.6",
              "70.4",
              "70.0",
              "69.6",
              "69.8",
              "69.8",
              "68.7",
              "67.5",
              "67.3",
              "67.0",
              "67.2",
              "67.1",
              "67.0",
              "66.9",
              "66.8"
            ],
            "periodos": [
              "2000",
              "2001",
              "2002",
              "2003",
              "2004",
              "2005",
              "2006",
              "2007",
              "2008",
              "2009",
              "2010",
              "2011",
              "2012",
              "2013",
              "2014",
              "2015",
              "2016",
              "2017",
              "2018"
            ]
          },
          {
            "id": 62964,
            "valorMaisRecente": "185235.39",
            "periodoMaisRecente": "2016",
            "localidade": "BR",
            "valores": [
              "551189.13",
              "582865.92",
              "604386.49",
              "732032.21",
              "966772.46",
              "1185286.88",
              "1378061.90",
              "1606488.69",
              "1979424.42",
              "1529947.42",
              "2019151.03",
              "2560387.02",
              "2425780.13",
              "2420329.79",
              "225098.40",
              "191126.88",
              "185235.39"
            ],
            "periodos": [
              "2000",
              "2001",
              "2002",
              "2003",
              "2004",
              "2005",
              "2006",
              "2007",
              "2008",
              "2009",
              "2010",
              "2011",
              "2012",
              "2013",
              "2014",
              "2015",
              "2016"
            ]
          },
          {
            "id": 62965,
            "valorMaisRecente": "137552.00",
            "periodoMaisRecente": "2016",
            "localidade": "BR",
            "valores": [
              "55850.54",
              "55601.75",
              "47242.65",
              "48325.64",
              "62835.61",
              "73600.37",
              "91342.78",
              "120617.43",
              "172984.76",
              "127722.34",
              "181768.42",
              "226246.75",
              "223183.47",
              "239747.51",
              "229154.46",
              "171446.21",
              "137552.00"
            ],
            "periodos": [
              "2000",
              "2001",
              "2002",
              "2003",
              "2004",
              "2005",
              "2006",
              "2007",
              "2008",
              "2009",
              "2010",
              "2011",
              "2012",
              "2013",
              "2014",
              "2015",
              "2016"
            ]
          },
          {
            "id": 62966,
            "valorMaisRecente": "1772591",
            "periodoMaisRecente": "2015",
            "localidade": "BR",
            "valores": [
              "652360",
              "560746",
              "512030",
              "558922",
              "669289",
              "891633",
              "1107626",
              "1397114",
              "1695855",
              "1666996",
              "2208838",
              "2614528",
              "2460698",
              "2465786",
              "2417095",
              "1772591"
            ],
            "periodos": [
              "2000",
              "2001",
              "2002",
              "2003",
              "2004",
              "2005",
              "2006",
              "2007",
              "2008",
              "2009",
              "2010",
              "2011",
              "2012",
              "2013",
              "2014",
              "2015"
            ]
          },
          {
            "id": 62973,
            "valorMaisRecente": "3187",
            "periodoMaisRecente": "2014-2016",
            "localidade": "BR",
            "valores": [
              "2879",
              "2900",
              "2963",
              "3026",
              "3076",
              "3085",
              "3093",
              "3127",
              "3150",
              "3192",
              "3228",
              "3255",
              "3266",
              "3242",
              "3218",
              "3187"
            ],
            "periodos": [
              "1999-2001",
              "2000-2002",
              "2001-2003",
              "2002-2004",
              "2003-2005",
              "2004-2006",
              "2005-2007",
              "2006-2008",
              "2007-2009",
              "2008-2010",
              "2009-2011",
              "2010-2012",
              "2011-2013",
              "2012-2014",
              "2013-2015",
              "2014-2016"
            ]
          },
          {
            "id": 62967,
            "valorMaisRecente": "74.7",
            "periodoMaisRecente": "2015",
            "localidade": "BR",
            "valores": [
              "70.1",
              "70.5",
              "70.9",
              "71.3",
              "71.6",
              "71.9",
              "72.2",
              "72.5",
              "72.8",
              "73.0",
              "73.3",
              "73.6",
              "73.9",
              "74.2",
              "74.5",
              "74.7"
            ],
            "periodos": [
              "2000",
              "2001",
              "2002",
              "2003",
              "2004",
              "2005",
              "2006",
              "2007",
              "2008",
              "2009",
              "2010",
              "2011",
              "2012",
              "2013",
              "2014",
              "2015"
            ]
          },
          {
            "id": 62968,
            "valorMaisRecente": "0.754",
            "periodoMaisRecente": "2015",
            "localidade": "BR",
            "valores": [
              "0.685",
              "0.692",
              "0.699",
              "0.695",
              "0.694",
              "0.698",
              "0.700",
              "0.704",
              "0.714",
              "0.716",
              "0.724",
              "0.730",
              "0.734",
              "0.747",
              "0.754",
              "0.754"
            ],
            "periodos": [
              "2000",
              "2001",
              "2002",
              "2003",
              "2004",
              "2005",
              "2006",
              "2007",
              "2008",
              "2009",
              "2010",
              "2011",
              "2012",
              "2013",
              "2014",
              "2015"
            ]
          },
          {
            "id": 62969,
            "valorMaisRecente": "98",
            "periodoMaisRecente": "2015",
            "localidade": "BR",
            "valores": [
              "94",
              "94",
              "94",
              "95",
              "95",
              "95",
              "96",
              "96",
              "96",
              "97",
              "97",
              "97",
              "98",
              "98",
              "98",
              "98"
            ],
            "periodos": [
              "2000",
              "2001",
              "2002",
              "2003",
              "2004",
              "2005",
              "2006",
              "2007",
              "2008",
              "2009",
              "2010",
              "2011",
              "2012",
              "2013",
              "2014",
              "2015"
            ]
          },
          {
            "id": 62970,
            "valorMaisRecente": "83",
            "periodoMaisRecente": "2015",
            "localidade": "BR",
            "valores": [
              "75",
              "75",
              "76",
              "77",
              "77",
              "78",
              "78",
              "79",
              "79",
              "80",
              "81",
              "81",
              "82",
              "82",
              "83",
              "83"
            ],
            "periodos": [
              "2000",
              "2001",
              "2002",
              "2003",
              "2004",
              "2005",
              "2006",
              "2007",
              "2008",
              "2009",
              "2010",
              "2011",
              "2012",
              "2013",
              "2014",
              "2015"
            ]
          },
          {
            "id": 62971,
            "valorMaisRecente": "<5",
            "periodoMaisRecente": "2014-2016",
            "localidade": "BR",
            "valores": [
              "12",
              "10.6",
              "8.7",
              "6.9",
              "5.5",
              "<5",
              "<5",
              "<5",
              "<5",
              "<5",
              "<5",
              "<5",
              "<5",
              "<5",
              "<5",
              "<5"
            ],
            "periodos": [
              "1999-2001",
              "2000-2002",
              "2001-2003",
              "2002-2004",
              "2003-2005",
              "2004-2006",
              "2005-2007",
              "2006-2008",
              "2007-2009",
              "2008-2010",
              "2009-2011",
              "2010-2012",
              "2011-2013",
              "2012-2014",
              "2013-2015",
              "2014-2016"
            ]
          },
          {
            "id": 62972,
            "valorMaisRecente": "99999999999998",
            "periodoMaisRecente": "2016",
            "localidade": "BR",
            "valores": [
              "99999999999998",
              "99999999999998",
              "90.68",
              "86.68",
              "86.10",
              "85.67",
              "99999999999998",
              "83.71",
              "86.70",
              "86.98",
              "99999999999998",
              "88.41",
              "88.45",
              "89.35",
              "90.67",
              "91.08",
              "99999999999998"
            ],
            "periodos": [
              "2000",
              "2001",
              "2002",
              "2003",
              "2004",
              "2005",
              "2006",
              "2007",
              "2008",
              "2009",
              "2010",
              "2011",
              "2012",
              "2013",
              "2014",
              "2015",
              "2016"
            ]
          },
          {
            "id": 62974,
            "valorMaisRecente": "99999999999998",
            "periodoMaisRecente": "2016",
            "localidade": "BR",
            "valores": [
              "86.4",
              "99999999999998",
              "99999999999998",
              "99999999999998",
              "88.6",
              "99999999999998",
              "89.6",
              "90.0",
              "90.0",
              "90.3",
              "90.4",
              "91.4",
              "91.3",
              "91.5",
              "91.7",
              "92.6",
              "99999999999998"
            ],
            "periodos": [
              "2000",
              "2001",
              "2002",
              "2003",
              "2004",
              "2005",
              "2006",
              "2007",
              "2008",
              "2009",
              "2010",
              "2011",
              "2012",
              "2013",
              "2014",
              "2015",
              "2016"
            ]
          },
          {
            "id": 62975,
            "valorMaisRecente": "10.36",
            "periodoMaisRecente": "2015",
            "localidade": "BR",
            "valores": [
              "7.80",
              "7.95",
              "8.24",
              "8.61",
              "9.05",
              "9.14",
              "9.19",
              "9.05",
              "9.27",
              "9.28",
              "9.27",
              "9.50",
              "9.52",
              "9.91",
              "10.36",
              "10.36"
            ],
            "periodos": [
              "2000",
              "2001",
              "2002",
              "2003",
              "2004",
              "2005",
              "2006",
              "2007",
              "2008",
              "2009",
              "2010",
              "2011",
              "2012",
              "2013",
              "2014",
              "2015"
            ]
          },
          {
            "id": 62976,
            "valorMaisRecente": "23.45",
            "periodoMaisRecente": "2015",
            "localidade": "BR",
            "valores": [
              "23.47",
              "23.57",
              "23.57",
              "23.51",
              "23.51",
              "23.45",
              "23.45",
              "23.45",
              "23.45",
              "23.45",
              "23.45",
              "23.45",
              "23.45",
              "23.45",
              "23.45",
              "23.45"
            ],
            "periodos": [
              "2000",
              "2001",
              "2002",
              "2003",
              "2004",
              "2005",
              "2006",
              "2007",
              "2008",
              "2009",
              "2010",
              "2011",
              "2012",
              "2013",
              "2014",
              "2015"
            ]
          },
          {
            "id": 62977,
            "valorMaisRecente": "28.44",
            "periodoMaisRecente": "2014",
            "localidade": "BR",
            "valores": [
              "6.69",
              "14.15",
              "26.26",
              "28.44"
            ],
            "periodos": [
              "1990",
              "2000",
              "2012",
              "2014"
            ]
          },
          {
            "id": 62978,
            "valorMaisRecente": "25.34",
            "periodoMaisRecente": "2016",
            "localidade": "BR",
            "valores": [
              "11.15",
              "12.71",
              "15.51",
              "13.37",
              "16.15",
              "18.28",
              "20.84",
              "22.99",
              "24.54",
              "24.86",
              "25.34"
            ],
            "periodos": [
              "2006",
              "2007",
              "2008",
              "2009",
              "2010",
              "2011",
              "2012",
              "2013",
              "2014",
              "2015",
              "2016"
            ]
          },
          {
            "id": 62979,
            "valorMaisRecente": "2604.83",
            "periodoMaisRecente": "2016",
            "localidade": "BR",
            "valores": [
              "1809.12",
              "1830.99",
              "1897.12",
              "2028.96",
              "2136.86",
              "2178.80",
              "2144.92",
              "2109.87",
              "2341.30",
              "2524.94",
              "2604.83"
            ],
            "periodos": [
              "2006",
              "2007",
              "2008",
              "2009",
              "2010",
              "2011",
              "2012",
              "2013",
              "2014",
              "2015",
              "2016"
            ]
          },
          {
            "id": 62980,
            "valorMaisRecente": "24.64",
            "periodoMaisRecente": "2015",
            "localidade": "BR",
            "valores": [
              "20.97",
              "21.27",
              "21.55",
              "21.83",
              "22.10",
              "22.36",
              "22.61",
              "22.86",
              "23.09",
              "23.32",
              "23.55",
              "23.77",
              "24.00",
              "24.22",
              "24.43",
              "24.64"
            ],
            "periodos": [
              "2000",
              "2001",
              "2002",
              "2003",
              "2004",
              "2005",
              "2006",
              "2007",
              "2008",
              "2009",
              "2010",
              "2011",
              "2012",
              "2013",
              "2014",
              "2015"
            ]
          },
          {
            "id": 62981,
            "valorMaisRecente": "103189829",
            "periodoMaisRecente": "2018",
            "localidade": "BR",
            "valores": [
              "86169657",
              "87336165",
              "88480530",
              "89601782",
              "90698483",
              "91769282",
              "92813167",
              "93829262",
              "94816963",
              "95776055",
              "96706703",
              "97610297",
              "98487258",
              "99336858",
              "100159507",
              "100955522",
              "101726102",
              "102471274",
              "103189829"
            ],
            "periodos": [
              "2000",
              "2001",
              "2002",
              "2003",
              "2004",
              "2005",
              "2006",
              "2007",
              "2008",
              "2009",
              "2010",
              "2011",
              "2012",
              "2013",
              "2014",
              "2015",
              "2016",
              "2017",
              "2018"
            ]
          },
          {
            "id": 62982,
            "valorMaisRecente": "105996973",
            "periodoMaisRecente": "2018",
            "localidade": "BR",
            "valores": [
              "87278689",
              "88549064",
              "89795598",
              "91017326",
              "92213004",
              "93381524",
              "94521970",
              "95633493",
              "96715476",
              "97767914",
              "98791094",
              "99786721",
              "100755204",
              "101695856",
              "102609055",
              "103495127",
              "104355330",
              "105189655",
              "105996973"
            ],
            "periodos": [
              "2000",
              "2001",
              "2002",
              "2003",
              "2004",
              "2005",
              "2006",
              "2007",
              "2008",
              "2009",
              "2010",
              "2011",
              "2012",
              "2013",
              "2014",
              "2015",
              "2016",
              "2017",
              "2018"
            ]
          },
          {
            "id": 62983,
            "valorMaisRecente": "14.31",
            "periodoMaisRecente": "2015",
            "localidade": "BR",
            "valores": [
              "18.81",
              "17.17",
              "15.66",
              "14.57",
              "14.31"
            ],
            "periodos": [
              "2000",
              "2005",
              "2010",
              "2014",
              "2015"
            ]
          },
          {
            "id": 62984,
            "valorMaisRecente": "85.69",
            "periodoMaisRecente": "2015",
            "localidade": "BR",
            "valores": [
              "81.19",
              "82.83",
              "84.34",
              "85.43",
              "85.69"
            ],
            "periodos": [
              "2000",
              "2005",
              "2010",
              "2014",
              "2015"
            ]
          },
          {
            "id": 62985,
            "valorMaisRecente": "209186802",
            "periodoMaisRecente": "2018",
            "localidade": "BR",
            "valores": [
              "173448346",
              "175885229",
              "178276128",
              "180619108",
              "182911487",
              "185150806",
              "187335137",
              "189462755",
              "191532439",
              "193543969",
              "195497797",
              "197397018",
              "199242462",
              "201032714",
              "202768562",
              "204450649",
              "206081432",
              "207660929",
              "209186802"
            ],
            "periodos": [
              "2000",
              "2001",
              "2002",
              "2003",
              "2004",
              "2005",
              "2006",
              "2007",
              "2008",
              "2009",
              "2010",
              "2011",
              "2012",
              "2013",
              "2014",
              "2015",
              "2016",
              "2017",
              "2018"
            ]
          },
          {
            "id": 62986,
            "valorMaisRecente": "6",
            "periodoMaisRecente": "2012",
            "localidade": "BR",
            "valores": [
              "10",
              "7",
              "6"
            ],
            "periodos": [
              "1970",
              "1990",
              "2012"
            ]
          },
          {
            "id": 62987,
            "valorMaisRecente": "15",
            "periodoMaisRecente": "2012",
            "localidade": "BR",
            "valores": [
              "35",
              "24",
              "15"
            ],
            "periodos": [
              "1970",
              "1990",
              "2012"
            ]
          },
          {
            "id": 62988,
            "valorMaisRecente": "0910",
            "periodoMaisRecente": "2010-2015",
            "localidade": "BR",
            "valores": [
              "1540",
              "1285",
              "1030",
              "0910"
            ],
            "periodos": [
              "1995-2000",
              "2000-2005",
              "2005-2010",
              "2010-2015"
            ]
          },
          {
            "id": 62989,
            "valorMaisRecente": "118.92",
            "periodoMaisRecente": "2016",
            "localidade": "BR",
            "valores": [
              "63.67",
              "78.55",
              "87.54",
              "100.88",
              "119",
              "125",
              "135.31",
              "138.95",
              "126.59",
              "118.92"
            ],
            "periodos": [
              "2007",
              "2008",
              "2009",
              "2010",
              "2011",
              "2012",
              "2013",
              "2014",
              "2015",
              "2016"
            ]
          },
          {
            "id": 62990,
            "valorMaisRecente": "20.39",
            "periodoMaisRecente": "2016",
            "localidade": "BR",
            "valores": [
              "20.74",
              "21.50",
              "21.45",
              "21.59",
              "21.85",
              "22.30",
              "22.48",
              "21.84",
              "21.45",
              "20.39"
            ],
            "periodos": [
              "2007",
              "2008",
              "2009",
              "2010",
              "2011",
              "2012",
              "2013",
              "2014",
              "2015",
              "2016"
            ]
          },
          {
            "id": 62991,
            "valorMaisRecente": "51",
            "periodoMaisRecente": "2016",
            "localidade": "BR",
            "valores": [
              "26.50",
              "31.17",
              "32.29",
              "34.86",
              "42.58",
              "45.77",
              "48.66",
              "50.49",
              "53.51",
              "51"
            ],
            "periodos": [
              "2007",
              "2008",
              "2009",
              "2010",
              "2011",
              "2012",
              "2013",
              "2014",
              "2015",
              "2016"
            ]
          },
          {
            "id": 62992,
            "valorMaisRecente": "59.68",
            "periodoMaisRecente": "2016",
            "localidade": "BR",
            "valores": [
              "30.88",
              "33.83",
              "39.22",
              "40.65",
              "45.69",
              "48.56",
              "51.04",
              "54.55",
              "59.08",
              "59.68"
            ],
            "periodos": [
              "2007",
              "2008",
              "2009",
              "2010",
              "2011",
              "2012",
              "2013",
              "2014",
              "2015",
              "2016"
            ]
          },
          {
            "id": 63052,
            "valorMaisRecente": "3.8",
            "periodoMaisRecente": "2012",
            "localidade": "BR",
            "valores": [
              "16.2",
              "99999999999998",
              "16.7",
              "15.9",
              "99999999999998",
              "9.9",
              "11.2",
              "10.9",
              "9.6",
              "9.9",
              "99999999999998",
              "10.2",
              "8.9",
              "9.6",
              "8.1",
              "7.2",
              "5.9",
              "5.8",
              "4.9",
              "4.7",
              "99999999999998",
              "4.5",
              "3.8"
            ],
            "periodos": [
              "1990",
              "1991",
              "1992",
              "1993",
              "1994",
              "1995",
              "1996",
              "1997",
              "1998",
              "1999",
              "2000",
              "2001",
              "2002",
              "2003",
              "2004",
              "2005",
              "2006",
              "2007",
              "2008",
              "2009",
              "2010",
              "2011",
              "2012"
            ]
          },
          {
            "id": 63053,
            "valorMaisRecente": "3.4",
            "periodoMaisRecente": "2012",
            "localidade": "BR",
            "valores": [
              "2.3",
              "99999999999998",
              "2.8",
              "2.4",
              "99999999999998",
              "2.4",
              "2.3",
              "2.3",
              "2.4",
              "2.5",
              "99999999999998",
              "2.4",
              "2.6",
              "2.6",
              "2.8",
              "2.9",
              "3.0",
              "3.0",
              "3.1",
              "3.2",
              "99999999999998",
              "3.3",
              "3.4"
            ],
            "periodos": [
              "1990",
              "1991",
              "1992",
              "1993",
              "1994",
              "1995",
              "1996",
              "1997",
              "1998",
              "1999",
              "2000",
              "2001",
              "2002",
              "2003",
              "2004",
              "2005",
              "2006",
              "2007",
              "2008",
              "2009",
              "2010",
              "2011",
              "2012"
            ]
          },
          {
            "id": 63062,
            "valorMaisRecente": "97.8",
            "periodoMaisRecente": "2007",
            "localidade": "BR",
            "valores": [
              "99999999999998",
              "99999999999998",
              "99999999999998",
              "99999999999998",
              "99999999999998",
              "99999999999998",
              "99999999999998",
              "99999999999998",
              "99999999999998",
              "99999999999998",
              "94.2",
              "99999999999998",
              "99999999999998",
              "99999999999998",
              "96.8",
              "99999999999998",
              "97.6",
              "97.8"
            ],
            "periodos": [
              "1990",
              "1991",
              "1992",
              "1993",
              "1994",
              "1995",
              "1996",
              "1997",
              "1998",
              "1999",
              "2000",
              "2001",
              "2002",
              "2003",
              "2004",
              "2005",
              "2006",
              "2007"
            ]
          },
          {
            "id": 63082,
            "valorMaisRecente": "0.55",
            "periodoMaisRecente": "2013",
            "localidade": "BR",
            "valores": [
              "99999999999998",
              "99999999999998",
              "99999999999998",
              "99999999999998",
              "99999999999998",
              "99999999999998",
              "99999999999998",
              "99999999999998",
              "99999999999998",
              "99999999999998",
              "99999999999998",
              "99999999999998",
              "99999999999998",
              "99999999999998",
              "99999999999998",
              "99999999999998",
              "99999999999998",
              "99999999999998",
              "99999999999998",
              "99999999999998",
              "99999999999998",
              "99999999999998",
              "99999999999998",
              "0.55"
            ],
            "periodos": [
              "1990",
              "1991",
              "1992",
              "1993",
              "1994",
              "1995",
              "1996",
              "1997",
              "1998",
              "1999",
              "2000",
              "2001",
              "2002",
              "2003",
              "2004",
              "2005",
              "2006",
              "2007",
              "2008",
              "2009",
              "2010",
              "2011",
              "2012",
              "2013"
            ]
          },
          {
            "id": 63085,
            "valorMaisRecente": "72.0",
            "periodoMaisRecente": "2012",
            "localidade": "BR",
            "valores": [
              "70.0",
              "17.0",
              "20.0",
              "27.0",
              "40.0",
              "78.0",
              "71.0",
              "55.0",
              "80.0",
              "77.0",
              "72.0",
              "72.0",
              "69.0",
              "72.0",
              "69.0",
              "70.0",
              "72.0",
              "73.0",
              "72.0"
            ],
            "periodos": [
              "1994",
              "1995",
              "1996",
              "1997",
              "1998",
              "1999",
              "2000",
              "2001",
              "2002",
              "2003",
              "2004",
              "2005",
              "2006",
              "2007",
              "2008",
              "2009",
              "2010",
              "2011",
              "2012"
            ]
          },
          {
            "id": 63088,
            "valorMaisRecente": "62.4",
            "periodoMaisRecente": "2010",
            "localidade": "BR",
            "valores": [
              "69.0",
              "65.6",
              "63.7",
              "62.4"
            ],
            "periodos": [
              "1990",
              "2000",
              "2005",
              "2010"
            ]
          },
          {
            "id": 63089,
            "valorMaisRecente": "20.37",
            "periodoMaisRecente": "2014",
            "localidade": "BR",
            "valores": [
              "4.73",
              "10.22",
              "20.37"
            ],
            "periodos": [
              "1990",
              "2000",
              "2014"
            ]
          },
          {
            "id": 63104,
            "valorMaisRecente": "22.3",
            "periodoMaisRecente": "2014",
            "localidade": "BR",
            "valores": [
              "36.7",
              "34.1",
              "31.5",
              "29.0",
              "28.0",
              "26.9",
              "22.3"
            ],
            "periodos": [
              "1990",
              "1995",
              "2000",
              "2005",
              "2007",
              "2009",
              "2014"
            ]
          },
          {
            "id": 63110,
            "valorMaisRecente": "21.84",
            "periodoMaisRecente": "2014",
            "localidade": "BR",
            "valores": [
              "6.29",
              "6.62",
              "7.01",
              "7.20",
              "7.70",
              "8.19",
              "9.19",
              "11.79",
              "14.53",
              "17.72",
              "21.15",
              "21.63",
              "21.57",
              "21.51",
              "21.41",
              "20.62",
              "20.74",
              "21.50",
              "21.45",
              "21.59",
              "21.85",
              "22.30",
              "22.48",
              "21.84"
            ],
            "periodos": [
              "1990",
              "1991",
              "1992",
              "1993",
              "1994",
              "1995",
              "1996",
              "1998",
              "1999",
              "2000",
              "2001",
              "2002",
              "2003",
              "2004",
              "2005",
              "2006",
              "2007",
              "2008",
              "2009",
              "2010",
              "2011",
              "2012",
              "2013",
              "2014"
            ]
          },
          {
            "id": 63111,
            "valorMaisRecente": "138.95",
            "periodoMaisRecente": "2014",
            "localidade": "BR",
            "valores": [
              "99999999999998",
              "99999999999998",
              "0.02",
              "0.12",
              "0.36",
              "0.79",
              "1.52",
              "4.35",
              "8.74",
              "13.29",
              "16.24",
              "19.44",
              "25.51",
              "35.65",
              "46.31",
              "53.11",
              "63.67",
              "78.55",
              "87.54",
              "100.88",
              "119.00",
              "125.00",
              "135.31",
              "138.95"
            ],
            "periodos": [
              "1990",
              "1991",
              "1992",
              "1993",
              "1994",
              "1995",
              "1996",
              "1998",
              "1999",
              "2000",
              "2001",
              "2002",
              "2003",
              "2004",
              "2005",
              "2006",
              "2007",
              "2008",
              "2009",
              "2010",
              "2011",
              "2012",
              "2013",
              "2014"
            ]
          },
          {
            "id": 63112,
            "valorMaisRecente": "57.60",
            "periodoMaisRecente": "2014",
            "localidade": "BR",
            "valores": [
              "99999999999998",
              "99999999999998",
              "0.01",
              "0.03",
              "0.04",
              "0.11",
              "0.45",
              "1.48",
              "2.04",
              "2.87",
              "4.53",
              "9.15",
              "13.21",
              "19.07",
              "21.02",
              "28.18",
              "30.88",
              "33.83",
              "39.22",
              "40.65",
              "45.69",
              "48.56",
              "51.04",
              "57.60"
            ],
            "periodos": [
              "1990",
              "1991",
              "1992",
              "1993",
              "1994",
              "1995",
              "1996",
              "1998",
              "1999",
              "2000",
              "2001",
              "2002",
              "2003",
              "2004",
              "2005",
              "2006",
              "2007",
              "2008",
              "2009",
              "2010",
              "2011",
              "2012",
              "2013",
              "2014"
            ]
          }
        ]
      };

      expect(response).toEqual(expected);
      done();
    });
  })
});