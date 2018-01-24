import { EscopoConsulta } from "./paises.interface";

export const PESQUISAS = {
    "munic": {
        "servico": "pesquisas",
        "id": 1,
        "nome": "MUNIC"
    },
    "snig_pesquisa_nacional_de_informacao_de_genero": {
        "servico": "pesquisas",
        "id": 11,
        "nome": "SNIG - Pesquisa Nacional de Informação de Gênero"
    },
    "ensino_matriculas_docentes_e_rede_escolar": {
        "servico": "pesquisas",
        "id": 13,
        "nome": "Ensino - matrículas, docentes e rede escolar"
    },
    "producao_agricola_lavoura_temporaria": {
        "servico": "pesquisas",
        "id": 14,
        "nome": "Produção Agrícola - Lavoura Temporária"
    },
    "producao_agricola_lavoura_permanente": {
        "servico": "pesquisas",
        "id": 15,
        "nome": "Produção Agrícola - Lavoura Permanente"
    },
    "extracao_vegetal_e_silvicultura": {
        "servico": "pesquisas",
        "id": 16,
        "nome": "Extração vegetal e Silvicultura"
    },
    "morbidade_hospitalar": {
        "servico": "pesquisas",
        "id": 17,
        "nome": "Morbidade hospitalar"
    },
    "pecuaria": {
        "servico": "pesquisas",
        "id": 18,
        "nome": "Pecuária"
    },
    "cadastro_central_de_empresas": {
        "servico": "pesquisas",
        "id": 19,
        "nome": "Cadastro Central de Empresas"
    },
    "registro_civil": {
        "servico": "pesquisas",
        "id": 20,
        "nome": "Registro civil"
    },
    "financas_publicas": {
        "servico": "pesquisas",
        "id": 21,
        "nome": "Finanças públicas"
    },
    "frota": {
        "servico": "pesquisas",
        "id": 22,
        "nome": "Frota"
    },
    "censo": {
        "servico": "pesquisas",
        "id": 23,
        "nome": "Censo"
    },
    "censo_agropecuario": {
        "servico": "pesquisas",
        "id": 24,
        "nome": "Censo agropecuário"
    },
    "instituicoes_financeiras": {
        "servico": "pesquisas",
        "id": 29,
        "nome": "Instituições financeiras"
    },
    "pesquisa_nacional_de_saneamento_basico": {
        "servico": "pesquisas",
        "id": 30,
        "nome": "Pesquisa nacional de saneamento básico"
    },
    "producao_agricola_cereais_leguminosas_e_oleaginosas": {
        "servico": "pesquisas",
        "id": 31,
        "nome": "Produção agrícola - Cereais, leguminosas e oleaginosas"
    },
    "servicos_de_saude": {
        "servico": "pesquisas",
        "id": 32,
        "nome": "Serviços de saúde"
    },
    "sinopse_municipal": {
        "servico": "pesquisas",
        "id": 33,
        "nome": "Sinopse municipal"
    },
    "pesquisa_de_servicos_de_hospedagem": {
        "servico": "pesquisas",
        "id": 34,
        "nome": "Pesquisa de serviços de hospedagem"
    },
    "fundacoes_privadas_e_associacoes_sem_fins_lucrativos": {
        "servico": "pesquisas",
        "id": 35,
        "nome": "Fundações privadas e associações sem fins lucrativos"
    },
    "mapa_de_pobreza_e_desigualdade": {
        "servico": "pesquisas",
        "id": 36,
        "nome": "Mapa de pobreza e desigualdade"
    },
    "indice_de_desenvolvimento_humano": {
        "servico": "pesquisas",
        "id": 37,
        "nome": "Índice de Desenvolvimento Humano"
    },
    "produto_interno_bruto_dos_municipios": {
        "servico": "pesquisas",
        "id": 38,
        "nome": "Produto Interno Bruto dos Municípios"
    },
    "taxa_de_mortalidade_infantil": {
        "servico": "pesquisas",
        "id": 39,
        "nome": "Taxa de mortalidade infantil"
    },
    "indice_de_desenvolvimento_da_educacao_basica": {
        "servico": "pesquisas",
        "id": 40,
        "nome": "Índice de Desenvolvimento da Educação Básica"
    },
    "notificacoes_de_dengue_registradas": {
        "servico": "pesquisas",
        "id": 42,
        "nome": "Notificações de dengue registradas"
    },
    "censo_series_historicas": {
        "servico": "pesquisas",
        "id": 43,
        "nome": "Censo - Séries históricas"
    },
    "pnad_pesquisa_nacional_por_amostra_de_domicilios": {
        "servico": "pesquisas",
        "id": 44,
        "nome": "PNAD - Pesquisa Nacional por Amostra de Domicílios"
    },
    "sintese_de_indicadores_sociais": {
        "servico": "pesquisas",
        "id": 45,
        "nome": "Síntese de Indicadores Sociais"
    },
    "pof_pesquisa_de_orcamentos_familiares": {
        "servico": "pesquisas",
        "id": 46,
        "nome": "POF - Pesquisa de Orçamentos Familiares"
    },
    "pesquisa_nacional_de_saude": {
        "servico": "pesquisas",
        "id": 47,
        "nome": "Pesquisa Nacional de Saúde"
    },
    "sinopse_estadual": {
        "servico": "pesquisas",
        "id": 48,
        "nome": "Sinopse estadual"
    },
    "pesquisa_anual_da_industria_da_construcao": {
        "servico": "pesquisas",
        "id": 49,
        "nome": "Pesquisa Anual da Indústria da Construção"
    },
    "pesquisa_anual_de_comercio": {
        "servico": "pesquisas",
        "id": 50,
        "nome": "Pesquisa Anual de Comércio"
    },
    "pesquisa_industrial_anual_empresa": {
        "servico": "pesquisas",
        "id": 51,
        "nome": "Pesquisa Industrial Anual - Empresa"
    },
    "pesquisa_anual_de_servicos": {
        "servico": "pesquisas",
        "id": 52,
        "nome": "Pesquisa Anual de Serviços"
    },
    "projecao_da_populacao": {
        "servico": "pesquisas",
        "id": 53,
        "nome": "Projeção da população"
    },
    "migracoes": {
        "servico": "pesquisas",
        "id": 10053,
        "nome": "Migrações"
    },
    "tabuas_abreviadas_de_mortalidade_por_sexo_e_idade": {
        "servico": "pesquisas",
        "id": 10054,
        "nome": "Tábuas abreviadas de mortalidade por sexo e idade"
    },
    "indicadores_sociodemograficos_e_de_saude_no_brasil": {
        "servico": "pesquisas",
        "id": 10055,
        "nome": "Indicadores sociodemográficos e de saúde no Brasil"
    },
    "pesquisa_nacional_de_saude_do_escolar": {
        "servico": "pesquisas",
        "id": 10056,
        "nome": "Pesquisa Nacional de Saúde do Escolar"
    },
    "relacoes_entre_as_alteracoes_historicas_na_dinamica_demografica_brasileira_e_impactos_decorrentes_do_processo_de_envelhecimento_da_populacao": {
        "servico": "pesquisas",
        "id": 10057,
        "nome": "Relações entre as alterações históricas na dinâmica demográfica brasileira e impactos decorrentes do processo de envelhecimento da população"
    },
    "panorama_municipal": {
        "servico": "pesquisas",
        "id": 10058,
        "nome": "Panorama municipal"
    },
    "sinopse_brasil": {
        "servico": "pesquisas",
        "id": 10059,
        "nome": "Sinopse Brasil"
    },
    "contas_regionais_do_brasil": {
        "servico": "pesquisas",
        "id": 10060,
        "nome": "Contas regionais do Brasil"
    },
    "pesquisa_industrial_anual_produto": {
        "servico": "pesquisas",
        "id": 10061,
        "nome": "Pesquisa Industrial Anual - Produto"
    },
    "serie_estudos_e_pesquisas_estatisticas_de_empreendedorismo": {
        "servico": "pesquisas",
        "id": 10062,
        "nome": "Série estudos e pesquisas: estatísticas de empreendedorismo"
    },
    "serie_estudos_e_pesquisas_demografia_das_empresas": {
        "servico": "pesquisas",
        "id": 10063,
        "nome": "Série estudos e pesquisas: demografia das empresas"
    },
    "pesquisa_de_inovacao": {
        "servico": "pesquisas",
        "id": 10064,
        "nome": "Pesquisa de inovação"
    },
    "panorama_brasil": {
        "servico": "pesquisas",
        "id": 10065,
        "nome": "Panorama Brasil"
    },
    "entidades_de_assistencia_social_privadas_sem_fins_lucrativos": {
        "servico": "pesquisas",
        "id": 10066,
        "nome": "Entidades de assistência social privadas sem fins lucrativos"
    },
    "pnadc_pesquisa_nacional_por_amostra_de_domicilios_continua": {
        "servico": "pesquisas",
        "id": 10070,
        "nome": "PNADC - Pesquisa Nacional por Amostra de Domicílios Contínua"
    },
    "paises": {
        "servico": "pesquisas",
        "id": 10071,
        "nome": "Países"
    },
    "estadic": {
        "servico": "pesquisas",
        "id": 10072,
        "nome": "ESTADIC"
    }
} as { [key: string]: EscopoConsulta };