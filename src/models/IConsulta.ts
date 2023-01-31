import { IPaciente } from "./IPaciente"

export interface IConsulta {
    data: string,
    horario: string,
    paciente: IPaciente,
    medico: string,
    valor: number,
    situacao: string

}