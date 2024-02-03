const cepRegex = /[0-9]{8}/;

cep.onkeyup = () => {

    if (cepRegex.test(cep.value)) {
        try {
            fetch(`https://viacep.com.br/ws/${cep.value}/json/`)
                .then(response => response.json())
                .then(response => {
                    if (response.erro) {
                        alert('O CEP está incorreto');
                        cep.value = '';
                        return;
                    }
                    logradouro.value = response.logradouro;
                    bairro.value = response.bairro;
                    localidade.value = response.localidade;
                    uf.value = response.uf;
                })

        } catch (error) {
            alert(error.message);
        }
    }
}