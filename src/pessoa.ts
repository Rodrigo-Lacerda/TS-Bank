export class Pessoa {
    constructor(
        private nome: string,
        private documento: number,
        private saldo: number = 0,
        private podeTranferir: boolean,
    ){}

    public podeFazerTranferencia(): boolean {
        return this.podeTranferir
    }

    public dadosDoCliente(index: number): any[] {
        return [this.nome, this.documento, this.saldo]
    }

    public getSaldo(): number {
        return this.saldo
    }

    public depositar(valor: number): void {
        if(valor > 0) {
            this.saldo += valor
        } else {
            console.log("valor invalido...")
        }
    }

    public saque(valor: number): number {
        if(valor < this.saldo) {
            this.saldo -= valor
        }else {
            console.log("saldo insuficiente...")
        }
        return this.saldo
    }


}