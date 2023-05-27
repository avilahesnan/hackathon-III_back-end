import { Ocorrencia } from "../ocorrencia/ocorrencia";

class Funcionario {
    private _id: string = "";
    private _nome: string = "";
    private _CPF: string = "";
    private _enderecos: string[] = [];
    private _chefe: boolean = false;
    private _telefones: string[] = [];
    private _salario: number = 0;
    private _ocorrencias: Ocorrencia[] = [];

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

    public get CPF(): string {
        return this._CPF;
    }

    public set CPF(value: string) {
        let padraCPF: RegExp = /^[0-9]{3}\.[0-9]{3}\.[0-9]{3}\-[0-9]{2}$/;
		if (padraCPF.test(value)) {
			this._CPF = value;
		}
		else{
			throw Error("CPF Inválido");
		}
    }

    public get enderecos(): string[] {
        return this._enderecos;
    }

    public set enderecos(value: string[]) {
        this._enderecos = value;
    }

    public get chefe(): boolean {
        return this._chefe;
    }

    public set chefe(value: boolean) {
        this._chefe = value;
    }

    public get telefones(): string[] {
        return this._telefones;
    }

    public set telefones(value: string[]) {
        this._telefones = value;
    }

    public get salario(): number {
        return this._salario;
    }

    public set salario(value: number) {
        this._salario = value;
    }

    public get ocorrencias(): Ocorrencia[] {
        return this._ocorrencias;
    }

    public set ocorrencias(value: Ocorrencia[]) {
        this._ocorrencias = value;
    }
    
    constructor(
        id: string,
        nome: string,
        CPF: string,
        enderecos: string[],
        chefe: boolean,
        telefones: string[],
        salario: number,
    ) {
        this.id = id;
        this.nome = nome;
        this.CPF = CPF;
        this.enderecos = enderecos;
        this.chefe = chefe;
        this.telefones = telefones;
        this.salario = salario;
    }
}
export { Funcionario }