class ContaController {
    constructor() {
        this.repositorioContas = new RepositorioContas();
    }

    adicionarConta(conta) {
        this.repositorioContas.adicionar(conta);
    }

    listar() {
        this.repositorioContas.getContas().forEach(conta =>
            this.inserirContaNoHTML(conta)
        );
    }

    inserir(evento) {
        evento.preventDefault();
        const elementoNumero = document.querySelector('#numero');
        const elementoSaldo = document.querySelector('#saldo');
        const dataAniversario= document.querySelector("#birthday");
        const TipoConta= document.querySelector("#contas")


        if (TipoConta.value==="Conta"){
             
        const conta = new Conta(elementoNumero.value,
            Number(elementoSaldo.value));
        this.repositorioContas.adicionar(conta);
        this.inserirContaNoHTML(conta);
        }
        else if(TipoConta.value==="Conta-bonificada"){
            const conta= new ContaBonificada(elementoNumero.value, Number(elementoSaldo.value));
            this.repositorioContas.adicionar(conta);
            this.inserirContaNoHTML(conta);
        }
        else{
            const conta= new Poupanca(elementoNumero.value, Number(elementoSaldo.value),dataAniversario.value);
            this.repositorioContas.adicionar(conta);
            this.inserirContaNoHTML(conta);
        }
        
       
    }

    inserirContaNoHTML(conta) {
        const elementoP = document.createElement('p');
        elementoP.textContent = 'Conta ' + conta.numero + ': ' + conta.saldo;
        const botaoApagar = document.createElement('button');
        botaoApagar.textContent = 'X';

        botaoApagar.addEventListener('click', (event) => {
            this.repositorioContas.remover(conta.numero);
            event.target.parentElement.remove();
        });

        elementoP.appendChild(botaoApagar);
        document.body.appendChild(elementoP);
    }
}
