function validarform() {
    var formulario = document.forms.form1;
    var nome = formulario.nome.value.trim();
    var raca = formulario.raca.value;
    var idade = formulario.idade.value;
    var tipo = formulario.tipo.value;
    var cor = formulario.cor.value;
    var tutor = formulario.tutor.value.trim();

    if (nome === "") {
        alert("Por favor, digite o nome do seu pet.");
        formulario.nome.focus();
        return false;
    }
    if (tutor === ""){
        alert("por favor.digite o nome do tutor");
        formulario.tutor.focus();
        return false;
    }
    if (idade === "") {
        alert("Por favor, digite a idade do seu pet.");
        formulario.idade.focus();
        return false;
    }

    if (isNaN(Number(idade)) || Number(idade) < 0) {
        alert("Por favor, digite uma idade valida.");
        formulario.idade.focus();
        return false;
    }

    if (tipo === "") {
        alert("Por favor, selecione o tipo do seu pet.");
        formulario.tipo.focus();
        return false;
    }

    if (cor === "") {
        alert("Por favor, selecione a cor do seu pet.");
        formulario.cor.focus();
        return false;
    }

    if (raca === "") {
        alert("Por favor, selecione a raça.");
        formulario.raca.focus();
        return false;
    }

    return true;
}

function processarform() {
    if (validarform()) {
        alert("Cadastro feito com sucesso.");
        document.forms.form1.reset();
    }

    return false;
}
