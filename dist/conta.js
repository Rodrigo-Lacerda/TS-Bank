"use strict";
class User {
    constructor(nome, doc, saldo = 0) {
        this.nome = nome;
        this.doc = doc;
        this.saldo = saldo;
    }
    tipoPessoa() {
        let pessoa;
        if (this.doc.length == 11) {
            pessoa = "FISICA";
            return pessoa;
        }
        else if (this.doc.length == 16) {
            pessoa = "JURIDICA";
            return pessoa;
        }
        else {
            return `Documento invalido.`;
        }
    }
    ;
}
class Conta extends User {
    extrato() {
        return `Saldo atual, R$${this.saldo}.`;
    }
    ;
    sacar(saque) {
        if (this.saldo > 0 && saque <= this.saldo) {
            this.saldo -= saque;
        }
        else {
            return `Saldo insuficiente.`;
        }
        ;
    }
    ;
    depositar(deposito) {
        this.saldo += deposito;
    }
    ;
    tranferir(conta, valor) {
        if (this.tipoPessoa() === "juridica".toUpperCase().trim()) {
            console.log("CNPJ não pode fazer transferencias.");
        }
        else if (this.tipoPessoa() === "fisica".toUpperCase().trim()) {
            this.saldo -= valor;
            conta.saldo += valor;
        }
        ;
    }
    ;
}
;
let user1 = new User("Rodrigo", "12345678910", 600);
let user2 = new User("Lucas", "0198765432112345", 600);
const conta1 = new Conta(user1.nome, user1.doc, user1.saldo);
const conta2 = new Conta(user2.nome, user2.doc, user2.saldo);
conta2.tranferir(conta1, 400);
console.log(`Saldo atual ${conta1.saldo}, Pessoa fisica.`);
console.log(`Saldo atual ${conta2.saldo}, Pessoa juridica.`);
