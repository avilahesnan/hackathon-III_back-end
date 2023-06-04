import { Empresa } from "../empresa/empresa";
import { Setor } from "../setor/setor";

export class Departamento extends Empresa {
    private _id: string = "";
    private _setores: Setor[] = [];

    public get id(): string {
        return this._id;
    }

    public set id(value: string) {
        this._id = value;
    }

    public get setores(): Setor[] {
        return this._setores;
    }

    public set setores(value: Setor[]) {
        this._setores = value;
    }

    constructor(
        nome: string,
        endereco: string,
        id: string,
    ) {
        super(nome, endereco);
        this.id = id;
    }
}