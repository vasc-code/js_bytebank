class Cliente{
    nome;
    cpf;
}

class ContaCorrente{
    agencia;
    saldo;

    sacar(valor){
        if(this.saldo >= valor){
            this.saldo -= valor;
        }        
    }

    depositar(valor){
        if(valor > 0){
            this.saldo+=valor;
        }
    }
}
const cliente1 = new Cliente();
cliente1.nome = "Rafael";
cliente1.cpf = 11122233344;

const contaCorrenteRafael = new ContaCorrente()
contaCorrenteRafael.agencia = 1001;
contaCorrenteRafael.saldo = 0;

contaCorrenteRafael.depositar(100);
contaCorrenteRafael.sacar(50);
console.log(contaCorrenteRafael);

const cliente2 = new Cliente();
cliente2.nome = "Alice";
cliente2.cpf = 11111111100;

const contaCorrenteAlice = new ContaCorrente();
contaCorrenteAlice.agencia = 1001;
contaCorrenteAlice.saldo = 0;
