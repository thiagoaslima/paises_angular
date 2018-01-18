import { Configuration } from "./index";

export const getConfiguration = {
    servicoInvalido: () => {
        return <Configuration>{
            titulo: 'Serviço inválido/desconhecido',
            config: [
                {
                    servico: 'invalido',
                    indicador: {}
                }
            ]
        }
    }
}