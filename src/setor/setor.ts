import { Empresa } from "../empresa/empresa";

class Setor extends Empresa {
    private _setor: string = "";

    public get setor(): string {
        return this._setor;
    }
    
    public set setor(value: string) {
        this._setor = value;
    }

    constructor(
        nome: string,
        endereco: string,
        setor: string
    ) {
        super(nome, endereco);
        this.setor = setor;
    }
}
export { Setor }