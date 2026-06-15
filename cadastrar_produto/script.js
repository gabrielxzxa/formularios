function validar() {
    var nome = form1.nome.value;
    var preco= form1.preco.value;
    var codigo = form1.codigo.value;
    var estoque = form1.estoque.value;
    if (nome === "") {
        alert("o campo nome esta vazio,digite o nome do produto");
        form1.nome.focus();
        return false;
    }
    if (preco === "") {
        alert("o campo preço esta vazio,por favor digite o preço");
        form1.preco.focus();
        return false;
    }
    if (codigo === "") {
        alert("o campo codigo esta vazio,por favor digite o codigo");
        form1.codigo.focus();
          return false;
    }
    if (estoque === "") {
        alert("por favor digite o valor do produto no estoque");
        form1.estoque.focus();
        return false;
    }
        return true;
}
    function envform() {
        if (validar()) {
            alert('produto registrado com sucesso!');
            form1.reset();
        }
            return false;
    }