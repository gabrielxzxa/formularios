function validarform() {
    var nome = form1.nome.value;
    var cpf = form1.cpf.value.replace(/\D/g, '');
    var endereco = form1.endereco.value;
    var cnh = form1.cnh.value;
    var ncarro  = form1.ncarro.value;
    var cor = form1.cor.value;
    var placa = form1.placa.value.replace(/[^A-Za-z0-9]/g, '');
     
    if (nome == "") {
        alert("por favor,digite seu nome");
        form1.nome.focus();
        return false;
    }
   
    
    if (cpf.length !== 11) {
        alert("O CPF deve conter 11 numeros");
        form1.cpf.focus();
        return false;
    }
    if (endereco.trim() == ""){
        alert("por favor,digite seu endereço!");
        form1.endereco.focus();
        return false;
    }
    if (cnh == "") {
        alert("Escolha o tipo de CNH");
        form1.cnh.focus();
        return false;
    }
    
    if (ncarro == "") {
        alert("por favor,Escolha o nome do seu carro!");
        form1.ncarro.focus();
        return false;
    }
    if (cor == ""){
        alert("por favor,escolha a cor do carro!");
        form1.cor.focus();
        return false;
  
    }
    if (placa == "") {
        alert("Por favor,digite a placa do carro");
        form1.placa.focus();
        return false;
    }
    if (placa.length !== 7) {
        alert("a placa deve conter 7 caracteres");
        form1.placa.focus();
        return false;
    }
        return true;
}

function processarform() {
    if (validarform()) {
        alert("Formulario enviado com sucesso!");
        form1.reset();

    }
    return false;
}