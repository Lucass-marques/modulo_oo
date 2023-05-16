function Pessoa(nome) {
    this.nome = nome;
}

function Funcionario(nome, cargo, salario) {
    Pessoa.call(this, nome);

    this.cargo = cargo;

    let _salario = salario;

    this.getSalario = function() {
        return _salario;
    }

    this.setSalario = function(valor) {
        if (typeof valor === 'number') {
            _salario = valor;
        }
    }

    this.aumento = function() {
        const aumentoSalarial = _salario * 1.2;
        _salario = aumentoSalarial;
    }
}

function Estagiario(nome) {
    Funcionario.call(this, nome, "estagiário", 1500)

    this.aumento = function() {
        const aumentoSalarial =this.getSalario() * 1.08;
        this.setSalario(aumentoSalarial);
        
        _salario = aumentoSalarial;
    }
}

function Gerente(nome) {
    Funcionario.call(this, nome, "gerente", 12000)

    this.aumento = function() {
        const aumentoSalarial = this.getSalario() * 1.2;
        this.setSalario(aumentoSalarial);

        _salario = aumentoSalarial;
    }
}

const funcionario1 = new Funcionario("Jorge", "dev back-end", 5000);
const funcionario2 = new Estagiario("Guilherme");
const funcionario3 = new Gerente("Isadora");

funcionario1.aumento();
console.log(funcionario1.getSalario());

funcionario2.aumento();
console.log(funcionario2.getSalario());

funcionario3.aumento();
console.log(funcionario3.getSalario());