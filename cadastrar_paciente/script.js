function validarform() {
    var nome = form1.nome.value;
    var idade = form1.idade.value;
    var cpf = form1.cpf.value;

     if (nome.trim() === "") {
        alert("O campo nome esta vazio,digite o nome do paciente");
        form1.nome.focus();
        return false;
     }
     if (idade === "") {
        alert('por favor,digite a idade do paciente');
        form1.idade.focus();
        return false;
     }
     if (cpf === "") {
        alert("por favor,digite o cpf do paciente");
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
     return true;
}
function processarform() {
    if (validarform()) {
        alert('dados enviados com sucesso!');
        form1.reset();
    }
    return false;
}