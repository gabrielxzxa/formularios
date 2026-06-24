/*nome*/
/*endereço*/
/*cep*/
/*cidade*/
/*estado*/
/*dtadmissao*/
/*salario*/
/*estadocivil*/
/*escolaridade*/
/*idiomas*/
/*npai*/
/*nmae*/
function validarform() {
    var nome = form1.nome.value;
    var endereco = form1.endereco.value;
    var cep = form1.cep.value;
    var cidade = form1.cidade.value;
    var estado = form1.estado.value;
    var dtadmissao = form1.dtadmissao.value;
    var salario = form1.salario.value;
    var estadocivil = form1.estadocivil.value;
    var escolaridade = form1.escolaridade.value;
    var idiomas = form1.idiomas.value;
    var npai = form1.npai.value;
    var nmae = form1.nmae.value;

    if (nome == "") {
        alert("por favor,digite o nome do funcionario");
        form1.nome.focus();
        return false;
    }
     if (endereco == "") {
        alert("por favor,digite o endereco do funcionario");
        form1.endereco.focus();
        return false;
    }
     if (cep == "") {
        alert("por favor,selecione o cep do funcionario");
        form1.cep.focus();
        return false;
    }
     if (cidade == "") {
        alert("por favor,digite a cidade do funcionario");
        form1.cidade.focus();
        return false;
    }
     if (estado == "") {
        alert("por favor,digite o estado  do funcionario");
        form1.estado.focus();
        return false;
    }
     if (dtadmissao == "") {
        alert("por favor,digite a data de admissão funcionario");
        form1.dtadmissao.focus();
        return false;
    }
     if (salario == "") {
        alert("por favor,digite o salario do funcionario");
        form1.salario.focus();
        return false;
    }
     if (estadocivil == "") {
        alert("por favor,digite o estado civil do funcionario");
        form1.estadocivil.focus();
        return false;
    }
     if (escolaridade == "") {
        alert("por favor,escolha o nivel de escolaridade do funcionario");
        form1.escolaridade.focus();
        return false;
    }
     if (idiomas == "") {
        alert("por favor,escolha o idioma que o funcionario");
        form1.idiomas.focus();
        return false;
    }
     if (npai == "") {
        alert("por favor,digite o nome do pai do funcionario");
        form1.npai.focus();
        return false;
     }
      if (nmae == "") {
        alert("por favor,digite o nome da mae do funcionario");
        form1.nmae.focus();
        return false;
    }
    return true;
    
}
   function processarform() {
        if(validarform()) {
            alert("dados enviados com sucesso!");
            form1.reset();
        }
        return false;
    }