import { Funcionario } from "../funcionario/funcionario";
import { Ocorrencia } from "../ocorrencia/ocorrencia";
import { Patrimonio } from "../patrimonio/patrimonio";

export abstract class Empresa {
    private _nome: string = "";
    private _endereco: string = "";
    private _funcionarios: Funcionario[] = [];
    private _ocorrencias: Ocorrencia[] = [];
    private _patrimonios: Patrimonio[] = [];

    public get nome(): string {
        return this._nome;
    }
    
    public set nome(value: string) {
        this._nome = value;
    }

    public get endereco(): string {
        return this._endereco;
    }
    
    public set endereco(value: string) {
        this._endereco = value;
    }

    public get funcionarios(): Funcionario[] {
        return this._funcionarios;
    }
    
    public set funcionarios(value: Funcionario[]) {
        this._funcionarios = value;
    }

    public get ocorrencias(): Ocorrencia[] {
        return this._ocorrencias;
    }
    
    public set ocorrencias(value: Ocorrencia[]) {
        this._ocorrencias = value;
    }

    public get patrimonios(): Patrimonio[] {
        return this._patrimonios;
    }
    
    public set patrimonios(value: Patrimonio[]) {
        this._patrimonios = value;
    }

    constructor(
        nome: string,
        endereco: string,
    ) {
        this.nome = nome;
        this.endereco = endereco;
    }
}