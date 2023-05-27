import { Empresa } from "../empresa/empresa";
import { Setor } from "../setor/setor";

class Departamento extends Empresa {
    private _departamento: string = "";
    private _setores: Setor[] = [];

    public get departamento(): string {
        return this._departamento;
    }

    public set departamento(value: string) {
        this._departamento = value;
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
        departamento: string,
    ) {
        super(nome, endereco);
        this.departamento = departamento;
    }

}
export { Departamento }