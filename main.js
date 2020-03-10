class List {
    constructor() {
        this.data = [];
    }

    add(data) {
        this.data.push(data);
        console.log(this.data);
    }
}

class TodoList extends List {
    constructor() {
        super();

        this.usuario = 'Iury';
    }

    mostraUsuario() {
        console.log(this.usuario);
    }
}

const MinhaLista = new TodoList();

document.getElementById("novotodo").onclick = function() {
    MinhaLista.add('Novo todo');
}

MinhaLista.mostraUsuario();

class Matematica {
    constructor() {
        this.todos = [];
    }

    static soma(a, b) {
        return a + b;
    }
}

console.log(Matematica.soma(1, 2));