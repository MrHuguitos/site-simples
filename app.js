const switcher = document.querySelector('.btn'); //referência a classe 'btn'

switcher.addEventListener('click', function() {
    document.body.classList.toggle('dark-theme') //Ao apertar o botão, o toggle altera a classe do elemento body para 'dark-theme'

    var className = document.body.className; //Obter a classe atual da tag body
    if(className == 'light-theme') {
        this.textContent = "Dark"; //Caso o nome da classe da tag body seja 'light-theme', o texto do botão será 'Dark'
        console.log('Nome da classe atual da tag body: ' + className);
    }
    else {
        this.textContent = "Light"; //Caso o nome da classe da tag body seja 'dark-theme', o texto do botão será 'Light'
        console.log('Nome da classe atual da tag body: ' + className);
    }
});
