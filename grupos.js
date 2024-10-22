const grupos = ['Maculados', 'Infinity', 'Financeiramente', 'Crânios', 'Mavericks', 'Gabiru', 'Livingtech']
const gruposPasta = ['maculados', 'infinity', 'ClinicaDiNutri', 'cranios', 'mavericks', 'gabiru', 'livingtech']


let botoes = document.querySelectorAll(".btn-links");
let card = document.querySelector(".container-card");

for (const botao of botoes) {
    botao.addEventListener('click', function(){
        gerarCard(botao.value);
    })
}

function gerarCard(pos){
    let nomeGrupo = grupos[pos];
    card.innerHTML = `
        <div class='card' id='${nomeGrupo}'>
            <a href='${gruposPasta[pos]}/index.html'><p>Página do Grupo ${nomeGrupo}</p></a>
        </div>
    `
}