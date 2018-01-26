/// <reference types="jest" />
import { TestBed, inject } from "@angular/core/testing";
import { SharedModule } from "./shared.module";
import { PaisesService } from "./paises.service";
import { HttpClientModule } from "@angular/common/http";
import { HttpModule } from "@angular/http";


describe('PaisesService E2E', () => {
  let paisesService: PaisesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpModule,
        HttpClientModule,
        SharedModule.forRoot()
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

  it('run #getHsitorico correctly', (done) => {
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

  it('should get Sintese correctly', (done) => {
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
            "indicador": "Síntese",
            "notas": []
          },
          {
            "id": 62941,
            "indicador": "Capital",
            "notas": [],
            "pai": 62934
          },
          {
            "id": 62942,
            "indicador": "Extensão territorial",
            "unidade": {
              "identificador": "km²",
              "classe": "N",
              "multiplicador": 1
            },
            "notas": [],
            "pai": 62934
          },
          {
            "id": 62943,
            "indicador": "Idioma",
            "notas": [],
            "pai": 62934
          },
          {
            "id": 62944,
            "indicador": "Localização",
            "notas": [],
            "pai": 62934
          },
          {
            "id": 62945,
            "indicador": "Moeda",
            "notas": [],
            "pai": 62934
          },
          {
            "id": 62935,
            "indicador": "Dados olímpicos",
            "notas": []
          },
          {
            "id": 62946,
            "indicador": "Primeira participação",
            "notas": [],
            "pai": 62935
          },
          {
            "id": 62947,
            "indicador": "Última participação",
            "notas": [],
            "pai": 62935
          },
          {
            "id": 62948,
            "indicador": "Atletas",
            "unidade": {
              "identificador": "atletas",
              "classe": "N",
              "multiplicador": 1
            },
            "notas": [
              {
                "periodo": "-",
                "notas": [
                  "Considerando todas as Olimpíadas"
                ]
              }
            ],
            "pai": 62935
          },
          {
            "id": 62949,
            "indicador": "Modalidades disputadas",
            "notas": [],
            "pai": 62935
          },
          {
            "id": 62950,
            "indicador": "Medalhas",
            "notas": [],
            "pai": 62935
          },
          {
            "id": 62951,
            "indicador": "Ouro",
            "notas": [],
            "pai": 62935
          },
          {
            "id": 62952,
            "indicador": "Prata",
            "notas": [],
            "pai": 62935
          },
          {
            "id": 62953,
            "indicador": "Bronze",
            "notas": [],
            "pai": 62935
          },
          {
            "id": 62954,
            "indicador": "Esportes que conquistaram medalhas",
            "notas": [],
            "pai": 62935
          },
          {
            "id": 62955,
            "indicador": "Aquáticos",
            "unidade": {
              "identificador": "",
              "classe": "B",
              "multiplicador": 1
            },
            "notas": [],
            "pai": 62935
          },
          {
            "id": 62993,
            "indicador": "Arco e Flecha",
            "unidade": {
              "identificador": "",
              "classe": "B",
              "multiplicador": 1
            },
            "notas": [],
            "pai": 62935
          },
          {
            "id": 62956,
            "indicador": "Atletismo",
            "unidade": {
              "identificador": "",
              "classe": "B",
              "multiplicador": 1
            },
            "notas": [],
            "pai": 62935
          },
          {
            "id": 62994,
            "indicador": "Badminton",
            "unidade": {
              "identificador": "",
              "classe": "B",
              "multiplicador": 1
            },
            "notas": [],
            "pai": 62935
          },
          {
            "id": 62995,
            "indicador": "Basquetebol",
            "unidade": {
              "identificador": "",
              "classe": "B",
              "multiplicador": 1
            },
            "notas": [],
            "pai": 62935
          },
          {
            "id": 62996,
            "indicador": "Beisebol",
            "unidade": {
              "identificador": "",
              "classe": "B",
              "multiplicador": 1
            },
            "notas": [],
            "pai": 62935
          },
          {
            "id": 62997,
            "indicador": "Boxe",
            "unidade": {
              "identificador": "",
              "classe": "B",
              "multiplicador": 1
            },
            "notas": [],
            "pai": 62935
          },
          {
            "id": 62998,
            "indicador": "Cabo de Guerra",
            "unidade": {
              "identificador": "",
              "classe": "B",
              "multiplicador": 1
            },
            "notas": [],
            "pai": 62935
          },
          {
            "id": 62999,
            "indicador": "Canoagem",
            "unidade": {
              "identificador": "",
              "classe": "B",
              "multiplicador": 1
            },
            "notas": [],
            "pai": 62935
          },
          {
            "id": 63000,
            "indicador": "Canoagem Slalom",
            "unidade": {
              "identificador": "",
              "classe": "B",
              "multiplicador": 1
            },
            "notas": [],
            "pai": 62935
          },
          {
            "id": 63001,
            "indicador": "Canoagem Sprint",
            "unidade": {
              "identificador": "",
              "classe": "B",
              "multiplicador": 1
            },
            "notas": [],
            "pai": 62935
          },
          {
            "id": 63002,
            "indicador": "Ciclismo",
            "unidade": {
              "identificador": "",
              "classe": "B",
              "multiplicador": 1
            },
            "notas": [],
            "pai": 62935
          },
          {
            "id": 63003,
            "indicador": "Ciclismo - BMX",
            "unidade": {
              "identificador": "",
              "classe": "B",
              "multiplicador": 1
            },
            "notas": [],
            "pai": 62935
          },
          {
            "id": 63004,
            "indicador": "Ciclismo - Estrada",
            "unidade": {
              "identificador": "",
              "classe": "B",
              "multiplicador": 1
            },
            "notas": [],
            "pai": 62935
          },
          {
            "id": 63005,
            "indicador": "Ciclismo - Mountain Bike",
            "unidade": {
              "identificador": "",
              "classe": "B",
              "multiplicador": 1
            },
            "notas": [],
            "pai": 62935
          },
          {
            "id": 63006,
            "indicador": "Ciclismo - Trilha",
            "unidade": {
              "identificador": "",
              "classe": "B",
              "multiplicador": 1
            },
            "notas": [],
            "pai": 62935
          },
          {
            "id": 63008,
            "indicador": "Críquete",
            "unidade": {
              "identificador": "",
              "classe": "B",
              "multiplicador": 1
            },
            "notas": [],
            "pai": 62935
          },
          {
            "id": 63007,
            "indicador": "Croquete",
            "unidade": {
              "identificador": "",
              "classe": "B",
              "multiplicador": 1
            },
            "notas": [],
            "pai": 62935
          },
          {
            "id": 63009,
            "indicador": "Esgrima",
            "unidade": {
              "identificador": "",
              "classe": "B",
              "multiplicador": 1
            },
            "notas": [],
            "pai": 62935
          },
          {
            "id": 63010,
            "indicador": "Espanha",
            "unidade": {
              "identificador": "",
              "classe": "B",
              "multiplicador": 1
            },
            "notas": [],
            "pai": 62935
          },
          {
            "id": 63011,
            "indicador": "Futebol",
            "unidade": {
              "identificador": "",
              "classe": "B",
              "multiplicador": 1
            },
            "notas": [],
            "pai": 62935
          },
          {
            "id": 63012,
            "indicador": "Ginástica",
            "unidade": {
              "identificador": "",
              "classe": "B",
              "multiplicador": 1
            },
            "notas": [],
            "pai": 62935
          },
          {
            "id": 63013,
            "indicador": "Ginástica - Rítmica",
            "unidade": {
              "identificador": "",
              "classe": "B",
              "multiplicador": 1
            },
            "notas": [],
            "pai": 62935
          },
          {
            "id": 63014,
            "indicador": "Ginástica - Trampolim",
            "unidade": {
              "identificador": "",
              "classe": "B",
              "multiplicador": 1
            },
            "notas": [],
            "pai": 62935
          },
          {
            "id": 63015,
            "indicador": "Golfe",
            "unidade": {
              "identificador": "",
              "classe": "B",
              "multiplicador": 1
            },
            "notas": [],
            "pai": 62935
          },
          {
            "id": 63016,
            "indicador": "Grã Bretanha & Irlanda do Norte",
            "unidade": {
              "identificador": "",
              "classe": "B",
              "multiplicador": 1
            },
            "notas": [],
            "pai": 62935
          },
          {
            "id": 63017,
            "indicador": "Halterofilismo",
            "unidade": {
              "identificador": "",
              "classe": "B",
              "multiplicador": 1
            },
            "notas": [],
            "pai": 62935
          },
          {
            "id": 63018,
            "indicador": "Handebol",
            "unidade": {
              "identificador": "",
              "classe": "B",
              "multiplicador": 1
            },
            "notas": [],
            "pai": 62935
          },
          {
            "id": 63019,
            "indicador": "Hipismo",
            "unidade": {
              "identificador": "",
              "classe": "B",
              "multiplicador": 1
            },
            "notas": [],
            "pai": 62935
          },
          {
            "id": 63020,
            "indicador": "Hóquei",
            "unidade": {
              "identificador": "",
              "classe": "B",
              "multiplicador": 1
            },
            "notas": [],
            "pai": 62935
          },
          {
            "id": 63021,
            "indicador": "Hóquei no Gelo",
            "unidade": {
              "identificador": "",
              "classe": "B",
              "multiplicador": 1
            },
            "notas": [],
            "pai": 62935
          },
          {
            "id": 63022,
            "indicador": "Jeu de paume",
            "unidade": {
              "identificador": "",
              "classe": "B",
              "multiplicador": 1
            },
            "notas": [],
            "pai": 62935
          },
          {
            "id": 63023,
            "indicador": "Judô",
            "unidade": {
              "identificador": "",
              "classe": "B",
              "multiplicador": 1
            },
            "notas": [],
            "pai": 62935
          },
          {
            "id": 63024,
            "indicador": "Lacrosse",
            "unidade": {
              "identificador": "",
              "classe": "B",
              "multiplicador": 1
            },
            "notas": [],
            "pai": 62935
          },
          {
            "id": 63025,
            "indicador": "Luta Livre",
            "unidade": {
              "identificador": "",
              "classe": "B",
              "multiplicador": 1
            },
            "notas": [],
            "pai": 62935
          },
          {
            "id": 63026,
            "indicador": "Mergulho",
            "unidade": {
              "identificador": "",
              "classe": "B",
              "multiplicador": 1
            },
            "notas": [],
            "pai": 62935
          },
          {
            "id": 63027,
            "indicador": "Motonáutica",
            "unidade": {
              "identificador": "",
              "classe": "B",
              "multiplicador": 1
            },
            "notas": [],
            "pai": 62935
          },
          {
            "id": 63029,
            "indicador": "Nado Sincronizado",
            "unidade": {
              "identificador": "",
              "classe": "B",
              "multiplicador": 1
            },
            "notas": [],
            "pai": 62935
          },
          {
            "id": 63028,
            "indicador": "Natação",
            "unidade": {
              "identificador": "",
              "classe": "B",
              "multiplicador": 1
            },
            "notas": [],
            "pai": 62935
          },
          {
            "id": 63030,
            "indicador": "Patinação",
            "unidade": {
              "identificador": "",
              "classe": "B",
              "multiplicador": 1
            },
            "notas": [],
            "pai": 62935
          },
          {
            "id": 63031,
            "indicador": "Pelota Basca",
            "unidade": {
              "identificador": "",
              "classe": "B",
              "multiplicador": 1
            },
            "notas": [],
            "pai": 62935
          },
          {
            "id": 63032,
            "indicador": "Pentatlo Moderno",
            "unidade": {
              "identificador": "",
              "classe": "B",
              "multiplicador": 1
            },
            "notas": [],
            "pai": 62935
          },
          {
            "id": 63033,
            "indicador": "Polo",
            "unidade": {
              "identificador": "",
              "classe": "B",
              "multiplicador": 1
            },
            "notas": [],
            "pai": 62935
          },
          {
            "id": 63034,
            "indicador": "Polo Aquático",
            "unidade": {
              "identificador": "",
              "classe": "B",
              "multiplicador": 1
            },
            "notas": [],
            "pai": 62935
          },
          {
            "id": 63035,
            "indicador": "Raquetes",
            "unidade": {
              "identificador": "",
              "classe": "B",
              "multiplicador": 1
            },
            "notas": [],
            "pai": 62935
          },
          {
            "id": 63045,
            "indicador": "Remo",
            "unidade": {
              "identificador": "",
              "classe": "B",
              "multiplicador": 1
            },
            "notas": [],
            "pai": 62935
          },
          {
            "id": 63046,
            "indicador": "Roque",
            "unidade": {
              "identificador": "",
              "classe": "B",
              "multiplicador": 1
            },
            "notas": [],
            "pai": 62935
          },
          {
            "id": 63036,
            "indicador": "Rúgbi",
            "unidade": {
              "identificador": "",
              "classe": "B",
              "multiplicador": 1
            },
            "notas": [],
            "pai": 62935
          },
          {
            "id": 63039,
            "indicador": "Softbol",
            "unidade": {
              "identificador": "",
              "classe": "B",
              "multiplicador": 1
            },
            "notas": [],
            "pai": 62935
          },
          {
            "id": 63040,
            "indicador": "Taekwondo",
            "unidade": {
              "identificador": "",
              "classe": "B",
              "multiplicador": 1
            },
            "notas": [],
            "pai": 62935
          },
          {
            "id": 63037,
            "indicador": "Tiro",
            "unidade": {
              "identificador": "",
              "classe": "B",
              "multiplicador": 1
            },
            "notas": [],
            "pai": 62935
          },
          {
            "id": 63038,
            "indicador": "Triatlo",
            "unidade": {
              "identificador": "",
              "classe": "B",
              "multiplicador": 1
            },
            "notas": [],
            "pai": 62935
          },
          {
            "id": 63041,
            "indicador": "Tênis",
            "unidade": {
              "identificador": "",
              "classe": "B",
              "multiplicador": 1
            },
            "notas": [],
            "pai": 62935
          },
          {
            "id": 63042,
            "indicador": "Tênis de Mesa",
            "unidade": {
              "identificador": "",
              "classe": "B",
              "multiplicador": 1
            },
            "notas": [],
            "pai": 62935
          },
          {
            "id": 63047,
            "indicador": "Vela",
            "unidade": {
              "identificador": "",
              "classe": "B",
              "multiplicador": 1
            },
            "notas": [],
            "pai": 62935
          },
          {
            "id": 63043,
            "indicador": "Vôlei de Praia",
            "unidade": {
              "identificador": "",
              "classe": "B",
              "multiplicador": 1
            },
            "notas": [],
            "pai": 62935
          },
          {
            "id": 63044,
            "indicador": "Voleibol",
            "unidade": {
              "identificador": "",
              "classe": "B",
              "multiplicador": 1
            },
            "notas": [],
            "pai": 62935
          },
          {
            "id": 62936,
            "indicador": "Economia",
            "notas": []
          },
          {
            "id": 62957,
            "indicador": "Entrada de turistas",
            "unidade": {
              "identificador": "turistas",
              "classe": "N",
              "multiplicador": 1
            },
            "notas": [],
            "pai": 62936
          },
          {
            "id": 62958,
            "indicador": "Gastos públicos com educação",
            "unidade": {
              "identificador": "% do PIB",
              "classe": "N",
              "multiplicador": 1
            },
            "notas": [],
            "pai": 62936
          },
          {
            "id": 62959,
            "indicador": "Gastos públicos com saúde",
            "unidade": {
              "identificador": "% do PIB",
              "classe": "N",
              "multiplicador": 1
            },
            "notas": [
              {
                "periodo": "2013",
                "notas": [
                  "Esta variável já apresenta os dados de Sudão e Sudão do Sul de forma individualizada."
                ]
              }
            ],
            "pai": 62936
          },
          {
            "id": 62960,
            "indicador": "Investimentos em pesquisa e desenvolvimento",
            "unidade": {
              "identificador": "% do PIB",
              "classe": "N",
              "multiplicador": 1
            },
            "notas": [],
            "pai": 62936
          },
          {
            "id": 62961,
            "indicador": "Mulheres de 15 anos ou mais de idade economicamente ativas",
            "unidade": {
              "identificador": "%",
              "classe": "N",
              "multiplicador": 1
            },
            "notas": [],
            "pai": 62936
          },
          {
            "id": 62962,
            "indicador": "PIB per capita",
            "unidade": {
              "identificador": "US$",
              "classe": "N",
              "multiplicador": 1
            },
            "notas": [
              {
                "periodo": "2015",
                "notas": [
                  "Esta variável já apresenta os dados de Sudão e Sudão do Sul de forma individualizada."
                ]
              }
            ],
            "pai": 62936
          },
          {
            "id": 62963,
            "indicador": "População de 15 anos ou mais de idade economicamente ativa",
            "unidade": {
              "identificador": "%",
              "classe": "N",
              "multiplicador": 1
            },
            "notas": [],
            "pai": 62936
          },
          {
            "id": 62964,
            "indicador": "Total da exportação",
            "unidade": {
              "identificador": "US$",
              "classe": "N",
              "multiplicador": 1000000
            },
            "notas": [],
            "pai": 62936
          },
          {
            "id": 62965,
            "indicador": "Total da importação",
            "unidade": {
              "identificador": "US$",
              "classe": "N",
              "multiplicador": 1000000
            },
            "notas": [],
            "pai": 62936
          },
          {
            "id": 62966,
            "indicador": "Total do PIB",
            "unidade": {
              "identificador": "US$",
              "classe": "N",
              "multiplicador": 1000000
            },
            "notas": [
              {
                "periodo": "2015",
                "notas": [
                  "Esta variável já apresenta os dados de Sudão e Sudão do Sul de forma individualizada."
                ]
              }
            ],
            "pai": 62936
          },
          {
            "id": 62937,
            "indicador": "Indicadores sociais",
            "notas": []
          },
          {
            "id": 62973,
            "indicador": "Calorias consumidas",
            "unidade": {
              "identificador": "kcal/dia",
              "classe": "N",
              "multiplicador": 1
            },
            "notas": [],
            "pai": 62937
          },
          {
            "id": 62967,
            "indicador": "Esperança de vida ao nascer",
            "unidade": {
              "identificador": "anos",
              "classe": "N",
              "multiplicador": 1
            },
            "notas": [
              {
                "periodo": "2014",
                "notas": [
                  "Esta variável já apresenta os dados de Sudão e Sudão do Sul de forma individualizada."
                ]
              }
            ],
            "pai": 62937
          },
          {
            "id": 62968,
            "indicador": "Índice de desenvolvimento humano",
            "notas": [
              {
                "periodo": "2014",
                "notas": [
                  "Esta variável já apresenta os dados de Sudão e Sudão do Sul de forma individualizada."
                ]
              }
            ],
            "pai": 62937
          },
          {
            "id": 62969,
            "indicador": "População com acesso a água potável",
            "unidade": {
              "identificador": "%",
              "classe": "N",
              "multiplicador": 1
            },
            "notas": [],
            "pai": 62937
          },
          {
            "id": 62970,
            "indicador": "População com acesso a rede sanitária",
            "unidade": {
              "identificador": "%",
              "classe": "N",
              "multiplicador": 1
            },
            "notas": [],
            "pai": 62937
          },
          {
            "id": 62971,
            "indicador": "População subnutrida",
            "unidade": {
              "identificador": "%",
              "classe": "G",
              "multiplicador": 1
            },
            "notas": [],
            "pai": 62937
          },
          {
            "id": 62972,
            "indicador": "Taxa bruta de matrículas para todos os níveis de ensino",
            "unidade": {
              "identificador": "%",
              "classe": "N",
              "multiplicador": 1
            },
            "notas": [],
            "pai": 62937
          },
          {
            "id": 62974,
            "indicador": "Taxa de alfabetização das pessoas de 15 anos ou mais de idade",
            "unidade": {
              "identificador": "%",
              "classe": "N",
              "multiplicador": 1
            },
            "notas": [],
            "pai": 62937
          },
          {
            "id": 62938,
            "indicador": "Meio Ambiente",
            "notas": []
          },
          {
            "id": 62975,
            "indicador": "Áreas cultivadas",
            "unidade": {
              "identificador": "% da área total",
              "classe": "N",
              "multiplicador": 1
            },
            "notas": [],
            "pai": 62938
          },
          {
            "id": 62976,
            "indicador": "Áreas de pastagens permanentes",
            "unidade": {
              "identificador": "% da área total",
              "classe": "N",
              "multiplicador": 1
            },
            "notas": [],
            "pai": 62938
          },
          {
            "id": 62977,
            "indicador": "Áreas protegidas no total do território nacional",
            "unidade": {
              "identificador": "%",
              "classe": "N",
              "multiplicador": 1
            },
            "notas": [],
            "pai": 62938
          },
          {
            "id": 62978,
            "indicador": "Produção de gás natural",
            "unidade": {
              "identificador": "m³",
              "classe": "N",
              "multiplicador": 1000000000
            },
            "notas": [],
            "pai": 62938
          },
          {
            "id": 62979,
            "indicador": "Produção de petróleo",
            "unidade": {
              "identificador": "barris/dia",
              "classe": "N",
              "multiplicador": 1000
            },
            "notas": [],
            "pai": 62938
          },
          {
            "id": 62939,
            "indicador": "População",
            "notas": []
          },
          {
            "id": 62980,
            "indicador": "Densidade demográfica",
            "unidade": {
              "identificador": "hab/km²",
              "classe": "N",
              "multiplicador": 1
            },
            "notas": [
              {
                "periodo": "2015",
                "notas": [
                  "Esta variável já apresenta os dados de Sudão e Sudão do Sul de forma individualizada."
                ]
              }
            ],
            "pai": 62939
          },
          {
            "id": 62981,
            "indicador": "Homens",
            "unidade": {
              "identificador": "habitantes",
              "classe": "N",
              "multiplicador": 1
            },
            "notas": [],
            "pai": 62939
          },
          {
            "id": 62982,
            "indicador": "Mulheres",
            "unidade": {
              "identificador": "habitantes",
              "classe": "N",
              "multiplicador": 1
            },
            "notas": [],
            "pai": 62939
          },
          {
            "id": 62983,
            "indicador": "População residente em área rural",
            "unidade": {
              "identificador": "%",
              "classe": "N",
              "multiplicador": 1
            },
            "notas": [
              {
                "periodo": "2014",
                "notas": [
                  "Esta variável já apresenta os dados de Sudão e Sudão do Sul de forma individualizada."
                ]
              }
            ],
            "pai": 62939
          },
          {
            "id": 62984,
            "indicador": "População residente em área urbana",
            "unidade": {
              "identificador": "%",
              "classe": "N",
              "multiplicador": 1
            },
            "notas": [
              {
                "periodo": "2014",
                "notas": [
                  "Esta variável já apresenta os dados de Sudão e Sudão do Sul de forma individualizada."
                ]
              }
            ],
            "pai": 62939
          },
          {
            "id": 62985,
            "indicador": "População total",
            "unidade": {
              "identificador": "habitantes",
              "classe": "N",
              "multiplicador": 1
            },
            "notas": [],
            "pai": 62939
          },
          {
            "id": 62986,
            "indicador": "Taxa bruta de mortalidade",
            "unidade": {
              "identificador": "por mil",
              "classe": "N",
              "multiplicador": 1
            },
            "notas": [
              {
                "periodo": "2012",
                "notas": [
                  "Esta variável já apresenta os dados de Sudão e Sudão do Sul de forma individualizada."
                ]
              }
            ],
            "pai": 62939
          },
          {
            "id": 62987,
            "indicador": "Taxa bruta de natalidade",
            "unidade": {
              "identificador": "por mil",
              "classe": "N",
              "multiplicador": 1
            },
            "notas": [
              {
                "periodo": "2012",
                "notas": [
                  "Esta variável já apresenta os dados de Sudão e Sudão do Sul de forma individualizada."
                ]
              }
            ],
            "pai": 62939
          },
          {
            "id": 62988,
            "indicador": "Taxa média anual do crescimento da população",
            "unidade": {
              "identificador": "%",
              "classe": "N",
              "multiplicador": 1
            },
            "notas": [
              {
                "periodo": "2010-2015",
                "notas": [
                  "Esta variável já apresenta os dados de Sudão e Sudão do Sul de forma individualizada."
                ]
              }
            ],
            "pai": 62939
          },
          {
            "id": 62940,
            "indicador": "Redes",
            "notas": []
          },
          {
            "id": 62989,
            "indicador": "Assinantes de telefonia celular",
            "unidade": {
              "identificador": "a cada 100 habitantes",
              "classe": "N",
              "multiplicador": 1
            },
            "notas": [
              {
                "periodo": "2015",
                "notas": [
                  "Esta variável já apresenta os dados de Sudão e Sudão do Sul de forma individualizada."
                ]
              }
            ],
            "pai": 62940
          },
          {
            "id": 62990,
            "indicador": "Linhas telefônicas",
            "unidade": {
              "identificador": "a cada 100 habitantes",
              "classe": "N",
              "multiplicador": 1
            },
            "notas": [],
            "pai": 62940
          },
          {
            "id": 62991,
            "indicador": "Número de computadores pessoais",
            "unidade": {
              "identificador": "a cada 100 domicílios",
              "classe": "N",
              "multiplicador": 1
            },
            "notas": [],
            "pai": 62940
          },
          {
            "id": 62992,
            "indicador": "Usuários com acesso à internet",
            "unidade": {
              "identificador": "a cada 100 habitantes",
              "classe": "N",
              "multiplicador": 1
            },
            "notas": [],
            "pai": 62940
          },
          {
            "id": 63050,
            "indicador": "Objetivos do Milênio",
            "notas": []
          },
          {
            "id": 63055,
            "indicador": "Erradicar a extrema pobreza e a fome",
            "notas": [],
            "pai": 63050
          },
          {
            "id": 63051,
            "indicador": "Meta 1: reduzir pela metade, entre 1990 e 2015, a proporção da população com renda inferior a um dólar (PPC - Paridade do Poder de Compra, que elimina a diferença de preços entre os países) por dia",
            "notas": [],
            "pai": 63050
          },
          {
            "id": 63052,
            "indicador": "Proporção da população que ganha menos de 1,25 dólar (PPC) por dia",
            "unidade": {
              "identificador": "%",
              "classe": "N",
              "multiplicador": 1
            },
            "notas": [],
            "pai": 63050
          },
          {
            "id": 63053,
            "indicador": "Participação dos 20% mais pobres da população na renda ou no consumo",
            "unidade": {
              "identificador": "%",
              "classe": "N",
              "multiplicador": 1
            },
            "notas": [],
            "pai": 63050
          },
          {
            "id": 63054,
            "indicador": "Meta 2: Reduzir pela metade, entre 1990 e 2015, a proporção da população que sofre de fome",
            "notas": [],
            "pai": 63050
          },
          {
            "id": 63056,
            "indicador": "Prevalência de crianças (com menos de 5 anos) abaixo do peso",
            "unidade": {
              "identificador": "%",
              "classe": "N",
              "multiplicador": 1
            },
            "notas": [],
            "pai": 63050
          },
          {
            "id": 63057,
            "indicador": "Proporção da população abaixo do nível mínimo de calorias consumidas (população subnutrida)",
            "unidade": {
              "identificador": "%",
              "classe": "N",
              "multiplicador": 1
            },
            "notas": [],
            "pai": 63050
          },
          {
            "id": 63058,
            "indicador": "Universalizar a educação primária",
            "notas": [],
            "pai": 63050
          },
          {
            "id": 63059,
            "indicador": "Meta 1: Garantir que, até 2015, todas as crianças, de ambos os sexos, terminem um ciclo completo de ensino básico",
            "notas": [],
            "pai": 63050
          },
          {
            "id": 63060,
            "indicador": "Taxa líquida de matrícula no ensino primário",
            "unidade": {
              "identificador": "%",
              "classe": "N",
              "multiplicador": 1
            },
            "notas": [],
            "pai": 63050
          },
          {
            "id": 63061,
            "indicador": "Proporção dos alunos que iniciam o 1° ano e atingem o 5° ano",
            "unidade": {
              "identificador": "%",
              "classe": "N",
              "multiplicador": 1
            },
            "notas": [],
            "pai": 63050
          },
          {
            "id": 63062,
            "indicador": "Taxa de alfabetização na faixa etária de 15 a 24 anos",
            "unidade": {
              "identificador": "%",
              "classe": "N",
              "multiplicador": 1
            },
            "notas": [],
            "pai": 63050
          },
          {
            "id": 63063,
            "indicador": "Promover a igualdade entre os sexos e a autonomia das mulheres",
            "notas": [],
            "pai": 63050
          },
          {
            "id": 63064,
            "indicador": "Meta 1: Eliminar a disparidade entre os sexos no ensino fundamental e médio, se possível até 2005, e em todos os níveis  do ensino até fins de 2015",
            "notas": [],
            "pai": 63050
          },
          {
            "id": 63065,
            "indicador": "Razão entre mulheres e homens no ensino básico",
            "unidade": {
              "identificador": "%",
              "classe": "N",
              "multiplicador": 1
            },
            "notas": [],
            "pai": 63050
          },
          {
            "id": 63066,
            "indicador": "Razão entre mulheres e homens no ensino médio",
            "unidade": {
              "identificador": "%",
              "classe": "N",
              "multiplicador": 1
            },
            "notas": [],
            "pai": 63050
          },
          {
            "id": 63067,
            "indicador": "Razão entre mulheres e homens no ensino superior",
            "unidade": {
              "identificador": "%",
              "classe": "N",
              "multiplicador": 1
            },
            "notas": [],
            "pai": 63050
          },
          {
            "id": 63068,
            "indicador": "Razão entre mulheres e homens alfabetizados na faixa etária de 15 a 24 anos",
            "unidade": {
              "identificador": "%",
              "classe": "N",
              "multiplicador": 1
            },
            "notas": [],
            "pai": 63050
          },
          {
            "id": 63069,
            "indicador": "Percentagem de mulheres assalariadas no setor não-agrícola",
            "unidade": {
              "identificador": "%",
              "classe": "N",
              "multiplicador": 1
            },
            "notas": [],
            "pai": 63050
          },
          {
            "id": 63070,
            "indicador": "Proporção de mulheres exercendo mandatos no parlamento nacional",
            "unidade": {
              "identificador": "%",
              "classe": "N",
              "multiplicador": 1
            },
            "notas": [],
            "pai": 63050
          },
          {
            "id": 63071,
            "indicador": "Reduzir a mortalidade na infância",
            "notas": [],
            "pai": 63050
          },
          {
            "id": 63072,
            "indicador": "Meta 1: Reduzir em dois terços, entre 1990 e 2015, a mortalidade de crianças menores de 5 anos",
            "notas": [],
            "pai": 63050
          },
          {
            "id": 63073,
            "indicador": "Taxa de mortalidade de crianças menores de 5 anos",
            "unidade": {
              "identificador": "%",
              "classe": "N",
              "multiplicador": 1
            },
            "notas": [],
            "pai": 63050
          },
          {
            "id": 63074,
            "indicador": "Taxa de mortalidade infantil",
            "unidade": {
              "identificador": "%",
              "classe": "N",
              "multiplicador": 1
            },
            "notas": [],
            "pai": 63050
          },
          {
            "id": 63075,
            "indicador": "Proporção de crianças de 1 ano vacinadas contra o sarampo",
            "unidade": {
              "identificador": "%",
              "classe": "N",
              "multiplicador": 1
            },
            "notas": [],
            "pai": 63050
          },
          {
            "id": 63076,
            "indicador": "Melhorar a saúde materna",
            "notas": [],
            "pai": 63050
          },
          {
            "id": 63077,
            "indicador": "Meta 1: Reduzir em 75%, entre 1990 e 2015, as taxas de mortalidade materna",
            "notas": [],
            "pai": 63050
          },
          {
            "id": 63078,
            "indicador": "Taxa de mortalidade materna",
            "unidade": {
              "identificador": "óbitos por 100.000 nascidos vivos",
              "classe": "N",
              "multiplicador": 1
            },
            "notas": [],
            "pai": 63050
          },
          {
            "id": 63079,
            "indicador": "Proporção de partos assistidos por profissional de saúde qualificado",
            "unidade": {
              "identificador": "%",
              "classe": "N",
              "multiplicador": 1
            },
            "notas": [],
            "pai": 63050
          },
          {
            "id": 63080,
            "indicador": "Combater o HIV/AIDS, a malária e outras doenças",
            "notas": [],
            "pai": 63050
          },
          {
            "id": 63081,
            "indicador": "Meta 1: Até 2015 ter detido e começado a reduzir a propagação do HIV/AIDS",
            "notas": [],
            "pai": 63050
          },
          {
            "id": 63082,
            "indicador": "Homens e mulheres de 15 a 49 anos de idade que vivem com HIV/AIDS",
            "unidade": {
              "identificador": "%",
              "classe": "N",
              "multiplicador": 1
            },
            "notas": [],
            "pai": 63050
          },
          {
            "id": 63083,
            "indicador": "Meta 2: Até 2015 ter detido e começado a reduzir a incidência da malária e de outras doenças graves",
            "notas": [],
            "pai": 63050
          },
          {
            "id": 63084,
            "indicador": "Taxa de mortalidade associada à tuberculose",
            "unidade": {
              "identificador": "óbitos por 100.000 habitantes",
              "classe": "N",
              "multiplicador": 1
            },
            "notas": [],
            "pai": 63050
          },
          {
            "id": 63085,
            "indicador": "Casos de tuberculose detectados e curados com tratamento intensivo",
            "unidade": {
              "identificador": "%",
              "classe": "N",
              "multiplicador": 1
            },
            "notas": [],
            "pai": 63050
          },
          {
            "id": 63086,
            "indicador": "Garantir a sustentabilidade ambiental",
            "notas": [],
            "pai": 63050
          },
          {
            "id": 63087,
            "indicador": "Meta 1: Incorporar os princípios de desenvolvimento sustentável nas políticas públicas  e programas nacionais e inverter a perda de recursos ambientais",
            "notas": [],
            "pai": 63050
          },
          {
            "id": 63088,
            "indicador": "Proporção da superfície coberta por matas",
            "unidade": {
              "identificador": "%",
              "classe": "N",
              "multiplicador": 1
            },
            "notas": [],
            "pai": 63050
          },
          {
            "id": 63089,
            "indicador": "Proporção de áreas terrestres e marinhas protegidas",
            "unidade": {
              "identificador": "%",
              "classe": "N",
              "multiplicador": 1
            },
            "notas": [],
            "pai": 63050
          },
          {
            "id": 63090,
            "indicador": "Emissões de dióxido de carbono per capita",
            "notas": [],
            "pai": 63050
          },
          {
            "id": 63097,
            "indicador": "Proporção da população que utiliza combustíveis sólidos",
            "unidade": {
              "identificador": "%",
              "classe": "N",
              "multiplicador": 1
            },
            "notas": [],
            "pai": 63050
          },
          {
            "id": 63098,
            "indicador": "Meta 2: Reduzir à metade, até 2015, a proporção da população sem acesso permanente e sustentável a água potável e a saneamento básico",
            "notas": [],
            "pai": 63050
          },
          {
            "id": 63099,
            "indicador": "Proporção da população urbana com acesso a uma fonte de água tratada",
            "unidade": {
              "identificador": "%",
              "classe": "N",
              "multiplicador": 1
            },
            "notas": [],
            "pai": 63050
          },
          {
            "id": 63100,
            "indicador": "Proporção da população rural com acesso a uma fonte de água tratada",
            "unidade": {
              "identificador": "%",
              "classe": "N",
              "multiplicador": 1
            },
            "notas": [],
            "pai": 63050
          },
          {
            "id": 63101,
            "indicador": "Proporção da população urbana com acesso a melhores condições de saneamento",
            "unidade": {
              "identificador": "%",
              "classe": "N",
              "multiplicador": 1
            },
            "notas": [],
            "pai": 63050
          },
          {
            "id": 63102,
            "indicador": "Proporção da população rural com acesso a melhores condições de saneamento",
            "unidade": {
              "identificador": "%",
              "classe": "N",
              "multiplicador": 1
            },
            "notas": [],
            "pai": 63050
          },
          {
            "id": 63103,
            "indicador": "Meta 3: Até 2020, ter alcançado melhoria significativa na vida de pelo menos 100 milhões de habitantes de bairros degradados",
            "notas": [],
            "pai": 63050
          },
          {
            "id": 63104,
            "indicador": "Proporção da população urbana vivendo em bairros degradados ou assentamentos precários (população sem acesso a posse segura de moradia)",
            "unidade": {
              "identificador": "%",
              "classe": "N",
              "multiplicador": 1
            },
            "notas": [],
            "pai": 63050
          },
          {
            "id": 63105,
            "indicador": "Estabelecer uma parceria mundial para o desenvolvimento",
            "notas": [],
            "pai": 63050
          },
          {
            "id": 63106,
            "indicador": "Tratar globalmente o problema da dívida dos países em desenvolvimento, mediante medidas nacionais e internacionais de modo a tornar a sua dívida sustentável a longo prazo",
            "notas": [],
            "pai": 63050
          },
          {
            "id": 63107,
            "indicador": "Meta 5: Em cooperação com os países em desenvolvimento, formular e executar estratégias que permitam que os jovens obtenham um trabalho digno e produtivo",
            "notas": [],
            "pai": 63050
          },
          {
            "id": 63108,
            "indicador": "Meta 6: Em cooperação com as empresas farmacêuticas, proporcionar o acesso a medicamentos essenciais a preços acessíveis, nos países em vias de desenvolvimento",
            "notas": [],
            "pai": 63050
          },
          {
            "id": 63109,
            "indicador": "Meta 7: Em cooperação com o setor privado, tornar acessíveis os benefícios das novas tecnologias, em especial das tecnologias de informação e de comunicações",
            "notas": [],
            "pai": 63050
          },
          {
            "id": 63110,
            "indicador": "Linhas telefônicas por 100  habitantes",
            "unidade": {
              "identificador": "a cada 100 habitantes",
              "classe": "N",
              "multiplicador": 1
            },
            "notas": [],
            "pai": 63050
          },
          {
            "id": 63111,
            "indicador": "Assinaturas de telefones celulares por 100 habitantes",
            "unidade": {
              "identificador": "a cada 100 habitantes",
              "classe": "N",
              "multiplicador": 1
            },
            "notas": [],
            "pai": 63050
          },
          {
            "id": 63112,
            "indicador": "Usuários de internet por 100 habitantes",
            "unidade": {
              "identificador": "a cada 100 habitantes",
              "classe": "N",
              "multiplicador": 1
            },
            "notas": [],
            "pai": 63050
          },
          {
            "id": 63113,
            "indicador": "Objetivos de Desenvolvimento Sustentável",
            "notas": []
          },
          {
            "id": 63114,
            "indicador": "Erradicação da pobreza",
            "notas": [
              {
                "periodo": "-",
                "notas": [
                  "Acabar com a pobreza em todas as suas formas, em todos os lugares"
                ]
              }
            ],
            "pai": 63113
          },
          {
            "id": 63115,
            "indicador": "Fome zero",
            "notas": [
              {
                "periodo": "-",
                "notas": [
                  "Acabar com a fome, alcançar a segurança alimentar e melhoria da nutrição e promover a agricultura sustentável"
                ]
              }
            ],
            "pai": 63113
          },
          {
            "id": 63116,
            "indicador": "Boa saúde e bem-estar",
            "notas": [
              {
                "periodo": "-",
                "notas": [
                  "Assegurar uma vida saudável e promover o bem-estar para todos, em todas as idades"
                ]
              }
            ],
            "pai": 63113
          },
          {
            "id": 63117,
            "indicador": "Educação de qualidade",
            "notas": [
              {
                "periodo": "-",
                "notas": [
                  "Assegurar a educação inclusiva e equitativa e de qualidade, e promover oportunidades de aprendizagem ao longo da vida para todos"
                ]
              }
            ],
            "pai": 63113
          },
          {
            "id": 63130,
            "indicador": "Igualdade de gênero",
            "notas": [
              {
                "periodo": "-",
                "notas": [
                  "Alcançar a igualdade de gênero e empoderar todas as mulheres e meninas"
                ]
              }
            ],
            "pai": 63113
          },
          {
            "id": 63118,
            "indicador": "Água limpa e saneamento",
            "notas": [
              {
                "periodo": "-",
                "notas": [
                  "Garantir disponibilidade e manejo sustentável da água e saneamento para todos"
                ]
              }
            ],
            "pai": 63113
          },
          {
            "id": 63119,
            "indicador": "Energia acessível e limpa",
            "notas": [
              {
                "periodo": "-",
                "notas": [
                  "Garantir acesso à energia barata, confiável, sustentável e renovável para todos"
                ]
              }
            ],
            "pai": 63113
          },
          {
            "id": 63120,
            "indicador": "Emprego digno e crescimento econômico",
            "notas": [
              {
                "periodo": "-",
                "notas": [
                  "Promover o crescimento econômico sustentado, inclusivo e sustentável, emprego pleno e produtivo, e trabalho decente para todos"
                ]
              }
            ],
            "pai": 63113
          },
          {
            "id": 63121,
            "indicador": "Indústria, inovação e infraestrutura",
            "notas": [
              {
                "periodo": "-",
                "notas": [
                  "Construir infraestrutura resiliente, promover a industrialização inclusiva e sustentável, e fomentar a inovação"
                ]
              }
            ],
            "pai": 63113
          },
          {
            "id": 63122,
            "indicador": "Redução das desigualdades",
            "notas": [
              {
                "periodo": "-",
                "notas": [
                  "Reduzir a desigualdade dentro dos países e entre eles"
                ]
              }
            ],
            "pai": 63113
          },
          {
            "id": 63123,
            "indicador": "Cidades e comunidades sustentáveis",
            "notas": [
              {
                "periodo": "-",
                "notas": [
                  "Tornar as cidades e os assentamentos humanos inclusivos, seguros, resilientes e sustentáveis"
                ]
              }
            ],
            "pai": 63113
          },
          {
            "id": 63124,
            "indicador": "Consumo e produção responsáveis",
            "notas": [
              {
                "periodo": "-",
                "notas": [
                  "Assegurar padrões de produção e de consumo sustentáveis"
                ]
              }
            ],
            "pai": 63113
          },
          {
            "id": 63125,
            "indicador": "Combate às alterações climáticas",
            "notas": [
              {
                "periodo": "-",
                "notas": [
                  "Tomar medidas urgentes para combater a mudança do clima e seus impactos"
                ]
              }
            ],
            "pai": 63113
          },
          {
            "id": 63126,
            "indicador": "Vida debaixo d´água",
            "notas": [
              {
                "periodo": "-",
                "notas": [
                  "Conservação e uso sustentável dos oceanos, dos mares e dos recursos marinhos para o desenvolvimento sustentável"
                ]
              }
            ],
            "pai": 63113
          },
          {
            "id": 63127,
            "indicador": "Vida sobre a Terra",
            "notas": [
              {
                "periodo": "-",
                "notas": [
                  "Proteger, recuperar e promover o uso sustentável dos ecossistemas terrestres, gerir de forma sustentável as florestas, combater a desertificação, deter e reverter a degradação da terra e deter a perda de biodiversidade"
                ]
              }
            ],
            "pai": 63113
          },
          {
            "id": 63128,
            "indicador": "Paz, justiça e instituições fortes",
            "notas": [
              {
                "periodo": "-",
                "notas": [
                  "Promover sociedades pacíficas e inclusivas para o desenvolvimento sustentável, proporcionar o acesso à justiça para todos e construir instituições eficazes, responsáveis e inclusivas em todos os níveis"
                ]
              }
            ],
            "pai": 63113
          },
          {
            "id": 63129,
            "indicador": "Parcerias em prol das metas",
            "notas": [
              {
                "periodo": "-",
                "notas": [
                  "Fortalecer os meios de implementação e revitalizar a parceria global para o desenvolvimento sustentável"
                ]
              }
            ],
            "pai": 63113
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