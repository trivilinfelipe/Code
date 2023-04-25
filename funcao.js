// Função que verifica se o navegador tem suporte AJAX 
function AjaxF() {
    var ajax;

    try {
        ajax = new XMLHttpRequest();
    }
    catch (e) {
        try {
            ajax = new ActiveXObject("Msxml2.XMLHTTP");
        }
        catch (e) {
            try {
                ajax = new ActiveXObject("Microsoft.XMLHTTP");
            }
            catch (e) {
                alert("Seu browser não da suporte à AJAX!");
                return false;
            }
        }
    }
    return ajax;
}

function validarFormulario() {
    //Obtém os valores selecionados nos elementos selects e no input titulo
    var titulo = document.getElementById("titulo").value;
    var abr = document.getElementById("abr").value;
    var orig = document.getElementById("orig").value;
    var dest = document.getElementById("dest").value;

    //Verifica se o Título do Documento está vazio
    if (titulo == "") {
        alert("O campo 'Título do Documento' não pode estar vazio");
        return false;
    }
    //Verifica se o valor selecionado em Abrangência está vazio
    if (abr == "") {
        alert("Selecione uma opção para Abrangência!");
        return false;
    }
    //Verifica se o valor selecionado em Destino está vazio
    if (dest == "") {
        alert("Selecione uma opção para Destino!");
        return false;
    }
    if (orig == "") {
        alert("Selecione uma opção para Origem!");
        return false;
    }
}

function setHeight() {
    const windowHeight = window.innerHeight;
    const contentWrapper = document.querySelector('.content-wrapper');
    contentWrapper.style.height = windowHeight + 'px';
}

window.addEventListener('load', setHeight);
window.addEventListener('resize', setHeight);

// Função que envia os dados do formulário para o arquivo PHP
function salvarDestino() {
    // Obtém os valores dos campos do formulário
    var nome_dest = document.getElementById("nome_dest").value;
    var sigla_dest = document.getElementById("sigla_dest").value;

    // Cria um objeto FormData para enviar os dados do formulário
    var formData = new FormData();
    formData.append('nome_dest', nome_dest);
    formData.append('sigla_dest', sigla_dest);

    // Envia um pedido AJAX para o arquivo insert_dest.php
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'insert_dest.php', true);
    xhr.onload = function () {
        // Verifica se a resposta foi um sucesso
        if (xhr.status === 200 && xhr.responseText != '') {
            var response = JSON.parse(xhr.responseText);
            if (response.status === 'success') {
                alert(response.message);
                // Redireciona para a página de cadastro
                window.location.href = 'Cad_Destino.php';
            } else {
                alert(response.message);
            }
        }
    };
    xhr.send(formData);

    // Previne o envio do formulário
    return false;
}

function salvarAbrangencia() {
    // Obtém os valores dos campos do formulário
    var nome_abr = document.getElementById("nome_abr").value;
    var sigla_abr = document.getElementById("sigla_abr").value;

    // Cria um objeto FormData para enviar os dados do formulário
    var formData = new FormData();
    formData.append('nome_abr', nome_abr);
    formData.append('sigla_abr', sigla_abr);

    // Envia um pedido AJAX para o arquivo insert_abr.php
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'insert_abr.php', true);
    xhr.onload = function () {
        // Verifica se a resposta foi um sucesso
        if (xhr.status === 200 && xhr.responseText != '') {
            var response = JSON.parse(xhr.responseText);
            if (response.status === 'success') {
                alert(response.message);
                // Redireciona para a página de cadastro
                window.location.href = 'Cad_Abrangencia.php';
            } else {
                alert(response.message);
            }
        }
    };
    xhr.send(formData);

    // Previne o envio do formulário
    return false;
}

function salvarCategoria() {
    // Obtém os valores dos campos do formulário
    var nome_cat = document.getElementById("nome_cat").value;
    var sigla_cat = document.getElementById("sigla_cat").value;

    // Cria um objeto FormData para enviar os dados do formulário
    var formData = new FormData();
    formData.append('nome_cat', nome_cat);
    formData.append('sigla_cat', sigla_cat);

    // Envia um pedido AJAX para o arquivo insert_abr.php
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'insert_cat.php', true);
    xhr.onload = function () {
        // Verifica se a resposta foi um sucesso
        if (xhr.status === 200 && xhr.responseText != '') {
            var response = JSON.parse(xhr.responseText);
            if (response.status === 'success') {
                alert(response.message);
                // Redireciona para a página de cadastro
                window.location.href = 'Cad_Categoria.php';
            } else {
                alert(response.message);
            }
        }
    };
    xhr.send(formData);

    // Previne o envio do formulário
    return false;
}

function salvarOrigem() {
    // Obtém os valores dos campos do formulário
    var nome_orig = document.getElementById("nome_orig").value;
    var sigla_orig = document.getElementById("sigla_orig").value;

    // Cria um objeto FormData para enviar os dados do formulário
    var formData = new FormData();
    formData.append('nome_orig', nome_orig);
    formData.append('sigla_orig', sigla_orig);

    // Envia um pedido AJAX para o arquivo insert_orig.php
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'insert_orig.php', true);
    xhr.onload = function () {
        // Verifica se a resposta foi um sucesso
        if (xhr.status === 200 && xhr.responseText != '') {
            var response = JSON.parse(xhr.responseText);
            if (response.status === 'success') {
                alert(response.message);
                // Redireciona para a página de cadastro
                window.location.href = 'Cad_Origem.php';
            } else {
                alert(response.message);
            }
        }
    };
    xhr.send(formData);

    // Previne o envio do formulário
    return false;
}

function salvarDocumento() {
    // Obtém os valores dos campos do formulário
    var seq = document.getElementById("seq").value;
    var abr = document.getElementById("abr").value;
    var orig = document.getElementById("orig").value;
    var dest = document.getElementById("dest").value;
    var titulo = document.getElementById("titulo").value;
    var user = document.getElementById("user").value;
    var sigla = document.getElementById("sigla").value;

    //Verifica se o Título do Documento está vazio
    if (titulo == "") {
        alert("O campo 'Título do Documento' não pode estar vazio");
        return false;
    }
    //Verifica se o valor selecionado em Abrangência está vazio
    if (abr == "") {
        alert("Selecione uma opção para Abrangência!");
        return false;
    }
    //Verifica se o valor selecionado em Destino está vazio
    if (dest == "") {
        alert("Selecione uma opção para Origem!");
        return false;
    }

    // Cria um objeto FormData para enviar os dados do formulário
    var formData = new FormData();
    formData.append('seq', seq);
    formData.append('abr', abr);
    formData.append('orig', orig);
    formData.append('dest', dest);
    formData.append('titulo', titulo);
    formData.append('user', user);
    formData.append('sigla', sigla);

    // Envia um pedido AJAX para o arquivo insert_docs.php
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'insert_docs.php', true);
    xhr.onload = function () {
        // Verifica se a resposta foi um sucesso
        if (xhr.status === 200 && xhr.responseText != '') {
            var response = JSON.parse(xhr.responseText);
            if (response.status === 'success') {
                alert(response.message);
                window.location.href = 'Cad_Documento.php';
            } else {
                alert(response.message);
            }
        }
    };
    xhr.send(formData);

    // Previne o envio do formulário
    return false;

}
