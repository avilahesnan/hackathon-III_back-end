import { Categoria } from "../patrimonio/categoria";

class Patrimonio {
    private _id: string = "";
    private _categoria!: Categoria;
    private _situacao: SituacaoPatrimonio = SituacaoPatrimonio.NORMAL;

    public get id(): string {
        return this._id;
    }

    public set id(value: string) {
        this._id = value;
    }

    public get categoria(): Categoria {
        return this._categoria;
    }

    public set categoria(value: Categoria) {
        this._categoria = value;
    }

    public get situacao(): SituacaoPatrimonio {
        return this._situacao;
    }

    public set situacao(value: SituacaoPatrimonio) {
        this._situacao = value;
    }

    constructor(id: string, situacao: SituacaoPatrimonio) {
        this.id = id;
        this.situacao = situacao;
    }
}

enum SituacaoPatrimonio {
    NORMAL = "Normal",
    PERDIDO = "Perdido",
    ROUBADO = "Roubado",
    QUEBRADO = "Quebrado",
    DEFEITO = "Defeito"
}

export { Patrimonio, SituacaoPatrimonio }