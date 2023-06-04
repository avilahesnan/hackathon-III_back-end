import { Empresa } from "../empresa/empresa";

export class Setor extends Empresa {
    private _id: string = "";
    private _direcao: boolean = false;
    
    public get id(): string {
        return this._id;
    }
    
    public set id(value: string) {
        this._id = value;
    }

    public get direcao(): boolean {
        return this._direcao;
    }

    public set direcao(value: boolean) {
        this._direcao = value;
    }

    constructor(
        nome: string,
        endereco: string,
        id: string,
        direcao: boolean
    ) {
        super(nome, endereco);
        this.id = id;
        this.direcao = direcao;
    }   
}