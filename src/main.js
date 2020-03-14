//Exercício 1
const delay = () => new Promise(resolve => setTimeout(resolve, 1000));

async function umPorSegundo() {
    await delay();
    console.log('1s');
    await delay();
    console.log('2s');
    await delay();
    console.log('3s');
}

umPorSegundo();

//Exercício 2
import axios from 'axios';

async function getUserFromGithub(userName) {
    try {
        const response = await axios.get(`https://api.github.com/users/${userName}`);
        console.log(response.data);
    } catch (err) {
        console.warn('Usuário não existe');
    }
}

getUserFromGithub('iuryoliveira');
getUserFromGithub('iuryoliveira1231321');

//Exercício 3
class Github {
    static async getRepositories(repo) {
        try {
            const response = await axios.get(`https//api.github.com/repos/${repo}`);
            console.log(await response.data);
        } catch (err) {
            console.log('Repositório não existe');
        }
    }
}

Github.getRepositories('rocketseat/rocketseat.com.br');
Github.getRepositories('rocketseat/dslkvmskv');