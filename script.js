


// Função para abrir o modal
function abrirModal(imagemSrc) {
    const modalOverlay = document.getElementById('modalOverlay');
    const modalImagem = document.getElementById('modalImagem');

    // Define a imagem no modal
    modalImagem.src = imagemSrc;

    // Abre o modal
    modalOverlay.style.display = 'flex';
}

// Função para fechar o modal
function fecharModal() {
    const modalOverlay = document.getElementById('modalOverlay');

    // Fecha o modal
    modalOverlay.style.display = 'none';
}




// parte dos contatos
function mascararCPF(input) {
    // Remove caracteres não numéricos
    let cpf = input.value.replace(/\D/g, '');

    // Aplica a máscara de CPF
    if (cpf.length <= 11) {
        cpf = cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
        input.value = cpf;
    }
}

function mascararTelefone(input) {
    // Remove caracteres não numéricos
    let telefone = input.value.replace(/\D/g, '');

    // Aplica a máscara de telefone
    if (telefone.length <= 11) {
        telefone = telefone.replace(/(\d{2})(\d{4,5})(\d{4})/, '($1) $2-$3');
        input.value = telefone;
    }
}

function enviarFormulario() {
    // Exibe um alerta ao clicar no botão "Enviar"
    alert('Formulário enviado com sucesso!');
}


function mascararCPF(input) {
    // Implementação da máscara de CPF...
}

function mascararTelefone(input) {
    // Implementação da máscara de telefone...
}

function mostrarPlaceholder(input) {
    // Mostra o placeholder apenas se o campo estiver vazio
    if (!input.value.trim()) {
        input.placeholder = input.getAttribute('placeholder');
    } else {
        input.placeholder = '';
    }
}

function enviarFormulario() {
    // Exibe um alerta ao clicar no botão "Enviar"
    alert('Formulário enviado com sucesso!');
}

// script.js
function mascararCPF(input) {
    let value = input.value.replace(/\D/g, ''); // Remove caracteres não numéricos
    if (value.length > 11) {
        value = value.substring(0, 11); // Limita o CPF a 11 dígitos
    }
    input.value = value.replace(/(\d{3})(\d{3})(\d{3})(\d{0,2})/, '$1.$2.$3-$4');
}

function mascararTelefone(input) {
    let value = input.value.replace(/\D/g, ''); // Remove caracteres não numéricos
    value = value.substring(0, 11);
    input.value = value.replace(/(\d{2})(\d{4,5})(\d{4})/, '($1) $2-$3');
}

function mostrarPlaceholder(input) {
    // Adicione aqui a lógica para mostrar ou esconder o placeholder
}

function enviarFormulario() {
    // Adicione aqui a lógica para enviar o formulário
}


function calcularRegraDe3() {
    const valor1 = parseFloat(document.getElementById('valor1').value);
    const valor2 = parseFloat(document.getElementById('valor2').value);
    const proporcao = parseFloat(document.getElementById('proporcao').value);

    if (!isNaN(valor1) && !isNaN(valor2) && !isNaN(proporcao)) {
        const resultado = (proporcao * valor2) / valor1;

        const resultadoElement = document.getElementById('resultado');
        resultadoElement.textContent = `Resultado: ${resultado.toFixed(2)}`;
        resultadoElement.style.display = 'block';
    }
}

function captureAndDownload() {
    html2canvas(document.body).then(canvas => {
        // Cria um link para baixar a imagem
        const a = document.createElement('a');
        a.href = canvas.toDataURL('image/png');
        a.download = 'sua-imagem.png';
        a.click();
    });
}

