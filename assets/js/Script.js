const button = document.getElementById('generate');

button.addEventListener('click', function() {
    const min = parseInt(document.getElementById('min').value);
    const max = parseInt(document.getElementById('max').value);

    // Lista de símbolos que podem ser gerados
    const symbols = ['!', '@', '#', '$', '%', '&', '*', '(', ')', '-', '+', '=', '?'];
    
    // Gera uma quantidade aleatória de caracteres entre 3 e 6
    const characterCount = Math.floor(Math.random() * 4) + 3;

    // Função para escolher aleatoriamente um número ou símbolo
    let result = '';
    for (let i = 0; i < characterCount; i++) {
        if (Math.random() < 0.5) {
            // Adiciona um número aleatório dentro do intervalo
            let number = Math.floor(Math.random() * (max - min + 1)) + min;
            result += isNaN(number) ? '' : number;
        } else {
            // Adiciona um símbolo aleatório
            result += symbols[Math.floor(Math.random() * symbols.length)];
        }
    }

    // Exibe o resultado
    document.querySelector('#result > span').textContent = result;
});
