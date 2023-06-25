const input = document.querySelector("#input");
const result = document.querySelector(".data-section");

async function getResults() {
    let word = input.value.trim();
    try {
        result.innerHTML = `<h4>Cargando...</h4>`;
        let fetchUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
        let data = await fetch(fetchUrl).then((res) => res.json());

        result.innerHTML = `
        <h2>Word: ${data[0].word}</h2>
        <div class="sound"><button>🔈</button></div>
        <div class="data-wrapper">
            <span>${data[0].word}</span>
        </div>
        <hr>
        <div class="data-wrapper">
            <h4>Significado:</h4>
            <span>${data[0].meanings[0].definitions[0].definition}</span>
        </div>
        <hr>
        <div class="data-wrapper">
            <h4>Sinónimo:</h4>
            <span>${data[0].meanings[0].definitions[0].synonyms[0]}</span>
        </div>
        <hr>
        <div class="data-wrapper">
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