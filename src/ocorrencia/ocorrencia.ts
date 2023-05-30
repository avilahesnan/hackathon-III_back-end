import { Patrimonio } from "../patrimonio/patrimonio";
import { SituacaoPatrimonio } from "../patrimonio/patrimonio";

export class Ocorrencia {
    private _id: string = "";
    private _patrimonio!: Patrimonio;
    private _status: StatusOcorrencia = StatusOcorrencia.ABERTA;
    private _situacao: SituacaoPatrimonio = SituacaoPatrimonio.ATIVO;
    private _descricao: string = "";
    
    public get id(): string {
        return this._id;
    }

    public set id(value: string) {
        this._id = value;
    }

    public get patrimonio(): Patrimonio {
        return this._patrimonio;
    }

    public set patrimonio(value: Patrimonio) {
        this._patrimonio = value;
    }

    public get status(): StatusOcorrencia {
        return this._status;
    }

    public set status(value: StatusOcorrencia) {
        this._status = value;
    }

    public get situacao(): SituacaoPatrimonio {
        return this._situacao;
    }

    public set situacao(value: SituacaoPatrimonio) {
        this._situacao = value;
    }

    public get descricao(): string {
        return this._descricao;
    }
    public set descricao(value: string) {
        this._descricao = value;
    }

    constructor(
        id: string,
        status: StatusOcorrencia,
        situacao: SituacaoPatrimonio,
        descricao: string
        ) {
        this.id = id;
        this.status = status;
        this.situacao = situacao;        
        this.descricao = descricao;
    }
}
export enum StatusOcorrencia {
    ABERTA = "Aberta",
    ATENDIMENTO = "Atendimento",
    ATRASADA = "Atrasada",
    CANCELADA = "Cancelada",
    CONCLUIDA = "Concluída",
}