import { Patrimonio } from "../patrimonio/patrimonio";

class Ocorrencia {
    private _id: string = "";
    private _patrimonio!: Patrimonio;
    private _situacao: SituacaoOcorrencia = SituacaoOcorrencia.ABERTA;

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

    public get situacao(): SituacaoOcorrencia {
        return this._situacao;
    }

    public set situacao(value: SituacaoOcorrencia) {
        this._situacao = value;
    }

    constructor(id: string, situacao: SituacaoOcorrencia) {
        this.id = id;
        this.situacao = situacao;
    }
}
enum SituacaoOcorrencia {
    ABERTA = "Aberta",
    ATENDIMENTO = "Atendimento",
    ATRASADA = "Atrasada",
    CANCELADA = "Cancelada",
    CONCLUIDA = "Concluída",
}
export { Ocorrencia, SituacaoOcorrencia }