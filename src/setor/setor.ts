import { Empresa } from "../empresa/empresa";

class Setor extends Empresa {
    private _id: string = "";

    public get id(): string {
        return this._id;
    }
    
    public set id(value: string) {
        this._id = value;
    }

    constructor(
        nome: string,
        endereco: string,
        id: string
    ) {
        super(nome, endereco);
        this.id = id;
    }
}
export { Setor }