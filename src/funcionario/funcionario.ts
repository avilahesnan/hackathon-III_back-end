import { Ocorrencia } from "../ocorrencia/ocorrencia";

export class Funcionario {
    private _id: string = "";
    private _nome: string = "";
    private _CPF: string = "";
    private _salario: number = 0;
    private _chefe: boolean = false;
    private _email: string = "";
    private _senha: string = "";
    private _endereco: string = "";
    private _telefone: string = "";
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

    public get salario(): number {
        return this._salario;
    }

    public set salario(value: number) {
        this._salario = value;
    }

    public get chefe(): boolean {
        return this._chefe;
    }

    public set chefe(value: boolean) {
        this._chefe = value;
    }

    public get email(): string {
        return this._email;
    }

    public set email(value: string) {
        this._email = value;
    }

    public get senha(): string {
        return this._senha;
    }

    public set senha(value: string) {
        this._senha = value;
    }

    public get endereco(): string {
        return this._endereco;
    }

    public set endereco(value: string) {
        this._endereco = value;
    }

    public get telefone(): string {
        return this._telefone;
    }

    public set telefone(value: string) {
        this._telefone = value;
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
        salario: number,
        chefe: boolean,
        email: string,
        senha: string,
        endereco: string,
        telefone: string
    ) {
        this.id = id;
        this.nome = nome;
        this.CPF = CPF;
        this.salario = salario;
        this.chefe = chefe;
        this.email = email;
        this.senha = senha;
        this.endereco = endereco;
        this.telefone = telefone;  
    }
}