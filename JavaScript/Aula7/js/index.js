fetch('https://servicodados.ibge.gov.br/api/v1/localidades/regioes')
.then(response => response.json())
.then(response => {
    for (let i = 0; i < response.length; i++){
        regioes.innerHTML += `<option value= "${response[i].id}">${response[i].nome}</option>`;
    }
})

function getStates(){
    fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/regioes/${regioes.value}/estados`)
    .then(response => response.json())
    .then(response => {
        estados.innerHTML = '';

        for (let i = 0; i < response.length; i++){
            estados.innerHTML += `<option value= "${response[i].id}">${response[i].nome}</option>`;
        }
    }) 
}

function getCities(){
    fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${estados.value}/municipios`)
    .then(response => response.json())
    .then(response => {
        cidades.innerHTML = '';

        for (let i = 0; i < response.length; i++){
            cidades.innerHTML += `<option>${response[i].nome}</option>`;
        }
    }) 
}