import { Categoria } from "../patrimonio/categoria";

export class Patrimonio {
    private _id: string = "";
    private _categoria!: Categoria;
    private _situacao: SituacaoPatrimonio = SituacaoPatrimonio.ATIVO;
    private _descricao: string = "";
    
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

    public get descricao(): string {
        return this._descricao;
    }

    public set descricao(value: string) {
        this._descricao = value;
    }

    constructor(id: string, situacao: SituacaoPatrimonio, descricao: string) {
        this.id = id;
        this.situacao = situacao;
        this.descricao = descricao;
    }
}

export enum SituacaoPatrimonio {
    ATIVO = "Ativo",
    PERDIDO = "Perdido",
    ROUBADO = "Roubado",
    QUEBRADO = "Quebrado",
    DEFEITO = "Defeito",
    OUTRO = "Outro"
}