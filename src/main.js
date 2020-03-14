import api from './api';

class App {
    constructor() {
        this.repositories = JSON.parse(localStorage.getItem('list_repos')) || [];
        this.formEl = document.getElementById('repo-form');
        this.listEl = document.getElementById('repo-list');
        this.inputEl = document.getElementById('repo-input');
        this.registerHandlers();
        this.render();
    }

    registerHandlers() {
        this.formEl.onsubmit = event => this.addRepository(event);
    }

    setLoading(loading = true) {
        if(loading) {
            let loadingEl = document.createElement('span');
            loadingEl.appendChild(document.createTextNode('Carregando...'));
            loadingEl.setAttribute('id', 'loading');

            this.formEl.appendChild(loadingEl);
        } else {
            document.getElementById('loading').remove();
        }
    }

    async addRepository(event) {
        event.preventDefault();

        const repoInput = this.inputEl.value;
        if (repoInput.length === 0) 
            return;

        this.setLoading();

        try {
            const response = await api.get(`/repos/${repoInput}`);

            const {name, description, html_url, owner: { avatar_url } } = response.data;

            this.repositories.push({
                name,
                description: description || 'Sem descrição',
                avatar_url,
                html_url
            });

            this.saveStorage();
            this.render();
            this.inputEl.value = '';

        } catch (err) {
            alert('Repostório não encontrado');
        }
        this.setLoading(false);
    }

    render() {
        this.listEl.innerHTML = '';
        this.repositories.forEach(repo => {
            let imgEl = document.createElement('img');
            imgEl.setAttribute('src', repo.avatar_url);
            
            let titleEl = document.createElement('strong');
            titleEl.appendChild(document.createTextNode(repo.name))

            let descriptionEl = document.createElement('p');
            descriptionEl.appendChild(document.createTextNode(repo.description));

            let linkEl = document.createElement('a');
            linkEl.setAttribute('href', repo.html_url);
            linkEl.appendChild(document.createTextNode('Acessar'));
            
            let itemEl = document.createElement('li');
            itemEl.appendChild(imgEl);
            itemEl.appendChild(titleEl);
            itemEl.appendChild(descriptionEl);
            itemEl.appendChild(linkEl);
            
            this.listEl.appendChild(itemEl);
        });
    }

    saveStorage() {
        localStorage.setItem('list_repos', JSON.stringify(this.repositories));
    }
}

new App();