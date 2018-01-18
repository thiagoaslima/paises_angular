import { Configuration } from "../dados.interface";
import { PESQUISAS } from "../enums";

export const getDadosConfiguration = {
    umServico: {
        umaPesquisa: {
            semLocalidade: () => {
                return {
                    configuration: <Configuration>{
                        titulo: 'Mock um Serviço uma Pesquisa',
                        itens: [{
                            escopo: PESQUISAS.frota,
                            identificador: {
                                indicadorId: 62934
                            }
                        }]
                    },
                    resposta: {
                        resultados: [],
                        metadata: [{
                            "id": 62934,
                            "posicao": "1",
                            "indicador": "Síntese",
                            "classe": "T",
                            "children": [],
                            "notas": []
                        }]
                    }
                };
            },
            umaLocalidade: () => {
                return {
                    configuration: <Configuration>{
                        titulo: 'Mock um Serviço uma Pesquisa',
                        itens: [{
                            escopo: PESQUISAS.frota,
                            identificador: {
                                indicadorId: 62941,
                                localidadeId: 'BR'
                            }
                        }]
                    },
                    resposta: {
                        resultados: [
                            {
                                "id": 62941,
                                "res": [
                                    {
                                        "localidade": "BR",
                                        "res": {
                                            "-": "Brasília"
                                        }
                                    }
                                ]
                            }
                        ],
                        metadata: [{
                            "id": 62941,
                            "posicao": "1.1",
                            "indicador": "Capital",
                            "classe": "I",
                            "children": [],
                            "nota": []
                        }]
                    }
                };
            }
        }
    }
}