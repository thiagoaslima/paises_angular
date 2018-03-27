const cases = {
    '99999999999999': 'Ignorado',
    '99999999999998': 'Não disponível',
    '99999999999997': 'Não informado',
    '99999999999996': 'Não existente',
    '99999999999995': '*',
    '99999999999992': '-',
    '99999999999991': '-'
} as { [key: string]: string };

const dictionary = {
    'IGNORADO': 'Ignorado',
    'NAO_DISPONIVEL': 'Não disponível',
    'NAO_INFORMADO': 'Não informado',
    'INEXISTENTE': 'Não existente',
    'DESINDIVIDUALIZADO': '×'
}

const values = {
    'IGNORADO': '99999999999999',
    'NAO_DISPONIVEL': '99999999999998',
    'NAO_INFORMADO': '99999999999997'
}

export {
    cases,
    dictionary,
    values
}