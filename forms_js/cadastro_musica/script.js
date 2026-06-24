function validarform() {
    var autor = form1.autor.value;
    var duracao = form1.duracao.value;
    var album = form1.album.value;
    var estmusica = form1.estmusica.value;
    var cantor = form1.cantor.value;
    var banda = form1.banda.value;
    var nmusica = form1.nmusica.value;

    if (nmusica == "") {
        alert("por favor,,digite o nome da musica");
        form1.nmusica.focus();
        return false;
    }
    if (autor == "") {
        alert("Por favor,digite o nome do autor");
        form1.autor.focus();
        return false;
    }
    if (duracao == ""){
        alert("por favor,digite a duração da musica");
        form1.duracao.focus();
        return false;
    }
    if (album == ""){
        alert("por favor,escreva o nome do album");
        form1.album.focus();
        return false;
    }
    if (estmusica == "") {
        alert("por favor digite o estilo de musica");
        form1.estmusica.focus();
        return false;
    }
    if (cantor == "") {
        alert("por favor digite o nome do cantor");
        form1.cantor.focus();
        return false;
    }
    if (banda == "") {
        alert("Por favor,Digite o nome da banda");
        form1.banda.focus();
        return false;
    }
    return true;
}
function processarform() {
    if (validarform()){
        alert("enviado com sucesso!");
        form1.reset();
     
    }
    return false;
}