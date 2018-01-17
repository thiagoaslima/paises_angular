import { PesquisaConfiguration } from "./pesquisa-configuration.interface";

export const getPesquisaConfiguration = {
    emptyValues: () => {
        return {
            configuration: <PesquisaConfiguration>{
                titulo: 'pesquisa configuration empty',
                config: [
                    {
                        servico: 'pesquisas',
                        identificador: {
                            pesquisaId: '',
                            indicadorId: '',
                            localidadeId: ''
                        },
                        componente: 'componente'
                    }
                ]
            },
            consultas: {
                pesquisaId: '',
                indicadorId: '',
                localidadeId: ''
            }
        };
    },

    mesmaPesquisa: {
        umItem: () => {
            return {
                configuration: <PesquisaConfiguration>{
                    titulo: 'pesquisa configuration 1',
                    config: [
                        {
                            servico: 'pesquisas',
                            identificador: {
                                pesquisaId: '1',
                                indicadorId: '11',
                                localidadeId: 'BR'
                            },
                            componente: 'componente'
                        }
                    ]
                },
                consultas: {
                    pesquisaId: '1',
                    indicadorId: '11',
                    localidadeId: 'BR'
                }
            };
        },

        quatroItens: () => {
            return {
                configuration: <PesquisaConfiguration>{
                    titulo: 'pesquisa configuration 2',
                    config: [
                        {
                            servico: 'pesquisas',
                            identificador: {
                                pesquisaId: '2',
                                indicadorId: '21',
                                localidadeId: 'BR'
                            },
                            componente: 'componente'
                        },
                        {
                            servico: 'pesquisas',
                            identificador: {
                                pesquisaId: '2',
                                indicadorId: '22',
                                localidadeId: 'BR'
                            },
                            componente: 'componente'
                        },
                        {
                            servico: 'pesquisas',
                            identificador: {
                                pesquisaId: '2',
                                indicadorId: '22',
                                localidadeId: 'AR'
                            },
                            componente: 'componente'
                        },
                        {
                            servico: 'pesquisas',
                            identificador: {
                                pesquisaId: '2',
                                indicadorId: '23',
                                localidadeId: 'BR'
                            },
                            componente: 'componente'
                        }
                    ]
                },
                consultas: {
                    pesquisaId: '2',
                    indicadorId: '21|22|23',
                    localidadeId: 'BR|AR'
                }
            };
        }
    },

    pesquisasDiferentes: {
        duasPesquisas: {
            umItemCada: () => {
                return {
                    configuration: <PesquisaConfiguration>{
                        titulo: 'pesquisa configuration 3',
                        config: [
                            {
                                servico: 'pesquisas',
                                identificador: {
                                    pesquisaId: '3',
                                    indicadorId: '31',
                                    localidadeId: 'BR'
                                },
                                componente: 'componente'
                            },
                            {
                                servico: 'pesquisas',
                                identificador: {
                                    pesquisaId: '4',
                                    indicadorId: '42',
                                    localidadeId: 'AR'
                                },
                                componente: 'componente'
                            }
                        ]
                    },
                    consultas: [
                        {
                            pesquisaId: '3',
                            indicadorId: '31',
                            localidadeId: 'BR'
                        }, {
                            pesquisaId: '4',
                            indicadorId: '42',
                            localidadeId: 'AR'
                        }
                    ]
                };
            }
        }
    }
};
