import { TipoServico } from "../../shared/paises-service/paises-types";

export const SinteseHomeConfig = [
    {
        titulo: 'Capital',
        config: [
            {
                servico: "pesquisas",
                identificador: {
                    pesquisaId: "10071",
                    indicadorId: "62941",
                    localidadeId: ""
                },
                componente: 'lista'
            }
        ]
    },

    {
        titulo: 'Extensão Territorial',
        config: [
            {
                servico: "pesquisas",
                identificador: {
                    pesquisaId: "10071",
                    indicadorId: "62942",
                    localidadeId: ""
                },
                componente: 'lista'
            }
        ]
    },

    {
        titulo: 'Idioma',
        config: [
            {
                servico: "pesquisas",
                identificador: {
                    pesquisaId: "10071",
                    indicadorId: "62943",
                    localidadeId: ""
                },
                componente: 'lista'
            }
        ]
    },

    {
        titulo: 'Localização',
        config: [
            {
                servico: "pesquisas",
                identificador: {
                    pesquisaId: "10071",
                    indicadorId: "62944",
                    localidadeId: ""
                },
                componente: 'lista'
            }
        ]
    },

    {
        titulo: 'Moeda',
        config: [
            {
                servico: "pesquisas",
                identificador: {
                    pesquisaId: "10071",
                    indicadorId: "62945",
                    localidadeId: ""
                },
                componente: 'lista'
            }
        ]
    }
] as Array<{
    titulo: string,
    config: [
        {
            servico: TipoServico,
            identificador: {
                pesquisaId: string,
                indicadorId: string,
                localidadeId: string
            },
            componente: string
        }
    ]
}>;