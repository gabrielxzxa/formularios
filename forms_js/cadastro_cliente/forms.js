  function validar() {
            var nome = form1.nome.value;
            var senha = form1.senha.value;
            var consenha = form1.consenha.value;

            if (nome == "") {
                alert("Campo de nome esta vazio,digite seu nome");
                form1.nome.focus();
                return false;

            }
            if (senha == "") {
                alert("Campo de senha esta vazio")
                form1.senha.focus();
                return false;
            }
            if (senha != consenha) {
                alert("As senhas não sao iguais, por favor digite a mesma senha")
                form1.consenha.focus();
                 return false;
            }
                return true;
        }
            function validarform() {
                if (validar()) {
                    alert("dados enviados com Sucesso!");
                    form1.reset();
                }
                    return false;
            }
