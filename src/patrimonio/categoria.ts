export class Categoria {
    private _id: string = "";
    private _nome: string = "";

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

    constructor(id: string, nome: string) {
        this.id = id;
        this.nome = nome;
    }
}