const cepRegex = /[0-9]{8}/;

cep.onkeyup = () => {

    if(cepRegex.test(cep.value)){
        alert('Deu certo');
    }
}