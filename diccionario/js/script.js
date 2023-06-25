const input = document.querySelector("#buscar");
const result = document.querySelector(".resultado");

async function getResults() {
    let word = input.value.trim();
    try {
        result.innerHTML = `<input class="loading">`;
        let fetchUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
        let data = await fetch(fetchUrl).then((res) => res.json());

        result.innerHTML = `
        <h4>Word: ${data[0].word}</h4>
        <div class="sound"><button></button></div>
        <div class="resultado">
            <span>${data[0].word}</span>
        </div>
        <hr>
        <div class="resultado">
            <h4>Significado:</h4>
            <span>${data[0].meanings[0].definitions[0].definition}</span>
        </div>
        <hr>
        <div class="resultado">
            <h4>Sinónimo:</h4>
            <span>${data[0].meanings[0].definitions[0].synonyms[0]}</span>
        </div>
        <hr>
        <div class="resultado">
            <h4>Más Información:</h4>
            <span>${data[0].meanings[0].definitions[0].example}</span>
        </div>`;

        input.value = '';
    } catch (error) {
        if (word.length == 0) {
            console.log("Por favor, ingresa una palabra.");
        } else {
            console.log("Error al obtener los resultados.");
        }
    }
}

input.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        getResults();
    }
});