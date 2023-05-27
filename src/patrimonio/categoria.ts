class Categoria {
    private _id: string = "";
    private _nome: string = "";
    private _descricao: string = "";

    public get id(): string {
        return this._id;
    }

    public set id(value: string) {
        this._id = value;
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

    constructor(id: string, nome: string, descricao: string) {
        this.id = id;
        this.nome = nome;
        this.descricao = descricao;
    }
}
export { Categoria }