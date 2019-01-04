import { PaisesEnum } from "../../shared/index";

export const SinteseHomeConfig = [
  {
    titulo: "Capital",
    config: [
      {
        servico: "pesquisas",
        identificador: {
          pesquisaId: PaisesEnum.pesquisaId,
          indicadorId: PaisesEnum.sintese.capital,
          localidadeId: ""
        },
        componente: "lista"
      }
    ]
  },

  {
    titulo: "Extensão Territorial",
    config: [
      {
        servico: "pesquisas",
        identificador: {
          pesquisaId: PaisesEnum.pesquisaId,
          indicadorId: PaisesEnum.sintese.extensao,
          localidadeId: ""
        },
        componente: "lista"
      }
    ]
  },

  {
    titulo: "Idioma",
    config: [
      {
        servico: "pesquisas",
        identificador: {
          pesquisaId: PaisesEnum.pesquisaId,
          indicadorId: PaisesEnum.sintese.idioma,
          localidadeId: ""
        },
        componente: "lista"
      }
    ]
  },

  {
    titulo: "Localização",
    config: [
      {
        servico: "pesquisas",
        identificador: {
          pesquisaId: PaisesEnum.pesquisaId,
          indicadorId: PaisesEnum.sintese.localizacao,
          localidadeId: ""
        },
        componente: "lista"
      }
    ]
  },

  {
    titulo: "Moeda",
    config: [
      {
        servico: "pesquisas",
        identificador: {
          pesquisaId: PaisesEnum.pesquisaId,
          indicadorId: PaisesEnum.sintese.moeda,
          localidadeId: ""
        },
        componente: "lista"
      }
    ]
  }
];