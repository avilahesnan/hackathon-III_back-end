import { Patrimonio } from "../patrimonio/patrimonio";

class Ocorrencia {
    private _codigo: string = "";
    private _patrimonio!: Patrimonio;
    private _situacao: SituacaoOcorrencia = SituacaoOcorrencia.ABERTA;

    public get codigo(): string {
        return this._codigo;
    }

    public set codigo(value: string) {
        this._codigo = value;
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

    constructor(codigo: string, situacao: SituacaoOcorrencia) {
        this.codigo = codigo;
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