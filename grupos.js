const grupos = ['Maculados', 'Infinity', 'Financeiramente', 'Crânios', 'Mavericks', 'Gabiru', 'Livingtech'];
const gruposPasta = ['tarnished', 'infinity', 'financeiramente', 'cranios', 'mavericks', 'gabiru', 'livingtech'];

let botoes = document.querySelectorAll(".btn-links");
let card = document.querySelector(".container-card");

for (const botao of botoes) {
    botao.addEventListener('click', function() {
        gerarCard(botao.value);
    });
}

function gerarCard(pos) {
    let nomeGrupo = grupos[pos];
    let pastaGrupo = gruposPasta[pos]; // Pega a pasta correspondente ao grupo
    card.innerHTML = `
        <a href="${pastaGrupo}/index.html" class='card' id='${nomeGrupo}'>
            <p>Página do Grupo ${nomeGrupo}</p>
        </a>
    `;
}
