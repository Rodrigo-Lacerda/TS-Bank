"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pessoa = void 0;
class Pessoa {
    constructor(nome, documento, saldo = 0, podeTranferir) {
        this.nome = nome;
        this.documento = documento;
        this.saldo = saldo;
        this.podeTranferir = podeTranferir;
    }
    podeFazerTranferencia() {
        return this.podeTranferir;
    }
    dadosDoCliente(index) {
        return [this.nome, this.documento, this.saldo];
    }
    getSaldo() {
        return this.saldo;
    }
    depositar(valor) {
        if (valor > 0) {
            this.saldo += valor;
        }
        else {
            console.log("valor invalido...");
        }
    }
    saque(valor) {
        if (valor < this.saldo) {
            this.saldo -= valor;
        }
        else {
            console.log("saldo insuficiente...");
        }
        return this.saldo;
    }
}
exports.Pessoa = Pessoa;
