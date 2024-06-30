import { Pessoa } from "./pessoa"

export class Conta {
  constructor(
    private numeroDaConta: number,
    private user: Pessoa,
  ){}

  public getNumber(): number {
    return this.numeroDaConta
  }

  public getUser(): Pessoa {
    return this.user
  }

  public tranferir(valor: number, usuario: Pessoa): void {
    if(this.user.podeFazerTranferencia()) {
        usuario.depositar(valor)
        this.user.saque(valor)
    }else {
        console.log("CNPJ: não pode fazer transferencia...")
    }
  }

  public sacar(valor: number): void {
    if(valor < this.user.getSaldo()) {
        this.user.saque(valor)
    }
  }

  public extrato(): string {
    return `Saldo atual: R$${this.user.getSaldo()} Reais.`
  }
}