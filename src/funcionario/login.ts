export class Login {
    private _nome: string = "";
    private _senha: string = "";

    public get nome(): string {
        return this._nome;
    }

    public set nome(value: string) {
        this._nome = value;
    }

    public get senha(): string {
        return this._senha;
    }

    public set senha(value: string) {
        this._senha = value;
    }

    constructor(nome: string, senha: string) {
        this.nome = nome;
        this.senha = senha;
    }
}