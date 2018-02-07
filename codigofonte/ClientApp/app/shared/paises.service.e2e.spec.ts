/// <reference types="jasmine" />

import { TestBed, inject } from "@angular/core/testing";
import { SharedModule } from "./shared.module";
import { PaisesService } from "./paises.service";
import { HttpClientModule, HttpClient } from "@angular/common/http";
import { ConnectionBackend, HttpModule, Http } from "@angular/http";
import { LocalidadeService } from "./localidade/localidade.service";


describe('PaisesService E2E', () => {
  let paisesService: PaisesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
      ],
      providers: [
        HttpClient,
        LocalidadeService,
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
    expect(paisesService).toBeDefined();
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
      const expectedIds = [62941, 62942, 62943, 62944, 62945];
      
      const metadataIds = response.metadata.map((obj: any) => obj.id);
      const resultadosIds = response.resultados.map((obj: any) => obj.id);

      expect(metadataIds).toEqual(expectedIds);
      expect(resultadosIds).toEqual(expectedIds);
      done();
    });
  })

  xit('run #getTodosDados correctly', (done) => {
    paisesService.getTodosDados('BR').subscribe(response => {
      const expectedMetadataIds = [62934, 62935, 62936, 62937, 62938, 62939, 62940, 63050, 63113]
      const expectedResultadosIds = [62941, 62942, 62943, 62944, 62945, 62957, 62958, 62959, 62960, 62961, 62962, 62963, 62964, 62965, 62966, 62973, 62967, 62968, 62969, 62970, 62971, 62972, 62974, 62975, 62976, 62977, 62978, 62979, 62980, 62981, 62982, 62983, 62984, 62985, 62986, 62987, 62988, 62989, 62990, 62991, 62992, 63052, 63053, 63060, 63061, 63062, 63069, 63070, 63078, 63082, 63085, 63088, 63089, 63104, 63110, 63111, 63112];
      
      const metadataIds = response.metadata.map((obj: any) => obj.id);
      const metadataChildren = response.metadata.every((obj:any) => obj.children.length > 0);
      const resultadosIds = response.resultados.map((obj: any) => obj.id);

      expect(metadataIds).toEqual(expectedMetadataIds);
      expect(metadataChildren).toBeTruthy();
      expect(resultadosIds).toEqual(expectedResultadosIds);

      done();
    });
  })
});