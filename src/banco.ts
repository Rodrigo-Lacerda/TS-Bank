import { Conta } from "./conta";
import { Pessoa } from "./pessoa";

const usuario1 = new Pessoa("Rodrigo", 12345, 2000, true)
const conta1 = new Conta(123456789, usuario1)

const usuario2 = new Pessoa("Lucas", 54321, 0, true)
const conta2 = new Conta(987654321, usuario2)

const usuario3 = new Pessoa("Digo", 98765, 3000, false)
const conta3 = new Conta(432167890, usuario3)

conta1.tranferir(500, conta2.getUser())
conta3.tranferir(600, conta1.getUser())

conta1.sacar(300)

console.log(conta1.extrato())