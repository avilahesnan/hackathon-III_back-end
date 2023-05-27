class Categoria {
    private _codigo: number = 0;
    private _nome: string = "";
    private _descricao: string = "";

    public get codigo(): number {
        return this._codigo;
    }

    public set codigo(value: number) {
        this._codigo = value;
    }

    public get nome(): string {
        return this._nome;
    }

    public set nome(value: string) {
        this._nome = value;
    }

    public get descricao(): string {
        return this._descricao;
    }

    public set descricao(value: string) {
        this._descricao = value;
    }

    constructor(codigo: number, nome: string, descricao: string) {
        this.codigo = codigo;
        this.nome = nome;
        this.descricao = descricao;
    }
}
export { Categoria }