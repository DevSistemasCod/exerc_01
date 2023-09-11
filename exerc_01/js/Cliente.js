export default class Cliente {
    #nomeCompleto;
    #dataNascimento;
    
    /**
     * new Date(dataNascimento) no construtor  
     * garante que o valor passado como dataNascimento 
     * seja interpretado como um objeto Date
     */
    constructor(nomeCompleto, dataNascimento) {
        this.#nomeCompleto = nomeCompleto;
        this.#dataNascimento = new Date(dataNascimento);
    }

    // Método para calcular a idade
    calcularIdade() {
        let hoje = new Date();
        let diferencaAnos = (hoje.getFullYear() - this.#dataNascimento.getFullYear());
        let mesAtual = hoje.getMonth();
        let mesNascimento = this.#dataNascimento.getMonth();

        // Ajuste para considerar o mês atual e o mês de nascimento
        /**
         * (mesNascimento > mesAtual): Se o mês de nascimento do cliente 
         * é maior que o mês atual, isso significa que o aniversário
         *  ainda não ocorreu neste ano.
         * 
         * ((mesNascimento === mesAtual) && (hoje.getDate() < this.dataNascimento.getDate())): 
         * Se o mês de nascimento do cliente é o mesmo que o mês atual 
         * e o dia atual é menor que o dia de nascimento do cliente, 
         * isso também significa que o aniversário ainda não ocorreu neste ano.
         * 
         */
        if ((mesNascimento > mesAtual) || ((mesNascimento === mesAtual) && (hoje.getDate() < this.dataNascimento.getDate()))) {
            //Se qualquer uma dessas condições for verdadeira, subtrai 1 da diferença de anos 
            return diferencaAnos - 1;
        } else {
            return diferencaAnos;
        }
    }

    // Método para obter o primeiro nome
    get getPrimeiroNome() {
        let partesNome = this.#nomeCompleto.trim().split(" ");
        return partesNome[0];
    }
}



