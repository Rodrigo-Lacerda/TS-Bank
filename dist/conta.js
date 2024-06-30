"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Conta = void 0;
class Conta {
    constructor(numeroDaConta, user) {
        this.numeroDaConta = numeroDaConta;
        this.user = user;
    }
    getNumber() {
        return this.numeroDaConta;
    }
    getUser() {
        return this.user;
    }
    tranferir(valor, usuario) {
        if (this.user.podeFazerTranferencia()) {
            usuario.depositar(valor);
            this.user.saque(valor);
        }
        else {
            console.log("CNPJ: não pode fazer transferencia...");
        }
    }
    sacar(valor) {
        if (valor < this.user.getSaldo()) {
            this.user.saque(valor);
        }
    }
    extrato() {
        let saldo = `Saldo atual: R$${this.user.getSaldo()} Reais.`;
        return saldo;
    }
}
exports.Conta = Conta;
