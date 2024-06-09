
export interface Experiencia {

    cargo: string,
    nomeEmpresa: string,
    dataInicio: Date,
    dataFim?: Date,
    funcoes: string[],
    tecnologias?: string[]
}