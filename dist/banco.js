"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const conta_1 = require("./conta");
const pessoa_1 = require("./pessoa");
const usuario1 = new pessoa_1.Pessoa("Rodrigo", 12345, 2000, true);
const conta1 = new conta_1.Conta(123456789, usuario1);
const usuario2 = new pessoa_1.Pessoa("Lucas", 54321, 0, true);
const conta2 = new conta_1.Conta(987654321, usuario2);
const usuario3 = new pessoa_1.Pessoa("Digo", 98765, 3000, false);
const conta3 = new conta_1.Conta(432167890, usuario3);
conta1.tranferir(500, conta2.getUser());
conta3.tranferir(600, conta1.getUser());
conta1.sacar(300);
console.log(conta1.extrato());
