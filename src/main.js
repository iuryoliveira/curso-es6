let pessoa = {
    nome: 'Iury',
    idade: 22
}

pessoa.show = false;
console.log(pessoa.show ?? true);

let user = {};
user.address = {street: 'londrina'};
let street = user?.address?.street;
console.log(street);

const minhaPromise = () => new Promise((resolve, reject) => {
    setTimeout(() => { resolve('OK') }, 2000);
});

async function executaPromise() {
    console.log(await minhaPromise());
    console.log(await minhaPromise());
}

executaPromise();