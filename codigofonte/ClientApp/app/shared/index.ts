export { Localidade, LocalidadeService, Pais, tipo_localidade } from './localidade';
export { MalhaService } from './malha';
export { BuscaService } from './busca.service';
export { PaisesService, ConsultaResultado, TipoServico, MetadataResultado, Resultado, Configuration, Consulta, ConsultaService } from './paises-service';
export { PesquisasService, RetornoPesquisa, PesquisaConfiguration, PesquisaConfigurationConfig } from './pesquisas-service';
export { RouterParamsService, RouterParams } from './router-params.service';
export { TraducaoService } from './traducao.service';

export * from './base-class';

// módulo por último
export { SharedModule } from './shared.module'
