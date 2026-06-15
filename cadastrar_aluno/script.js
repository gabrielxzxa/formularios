function validarform() {
    var nome = form1.nome.value;
    var nascimento = form1.nascimento.value;
    var cpf = form1.cpf.value;
    var matricula = form1.matricula.value;
    var curso = form1.curso.value;

    if (nome.trim() === "") {
        alert("O campo nome está vazio. Por favor, digite o nome do aluno.");
        form1.nome.focus();
        return false;
    }

    if (nascimento === "") {
        alert("O campo data de nascimento está vazio. Digite a data de nascimento do aluno.");
        form1.nascimento.focus();
        return false;
    }

    if (cpf === "") {
        alert("O campo CPF está vazio. Por favor, digite o CPF do aluno.");
        form1.cpf.focus();
        return false;
    }

    if (isNaN(cpf)) {
        alert("O CPF deve conter apenas números.");
        form1.cpf.focus();
        return false;
    }

    if (cpf.length !== 11) {
        alert("O CPF deve conter exatamente 11 dígitos.");
        form1.cpf.focus();
        return false;
    }

    if (matricula === "") {
        alert("O campo matrícula está vazio. Digite a matrícula do aluno.");
        form1.matricula.focus();
        return false;
    }

    if (curso.trim() === "") {
        alert("O campo curso está vazio. Por favor, digite o curso do aluno.");
        form1.curso.focus();
        return false;
    }

    return true;
}

function processarform() {
    if (validarform()) {
        alert("Dados enviados com sucesso!");
        form1.reset();
        return true; 
    }

    return false;
}