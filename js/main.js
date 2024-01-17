$(document).ready(function () {

    $('#telefone').mask('(00) 00000-0000', {
        placeholder: '(xx) xxxxx-xxxx',
    });
    $('#cpf').mask('000.000.000-00', {
        reverse: true,
        placeholder: '000.000.000-00',
    });
    $('#cep').mask('00000-000', {
        placeholder: '00000-000',
    });

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            cpf: {
                required: true
            },
            cep: {
                required: true
            },
            endereco: {
                required: false
            }
        },
        messages: {
            nome: 'Por favor, digite o seu nome',
            telefone: 'Por favor, digite seu telefone',
            email: 'Por favor, digite seu email',
            cpf: 'Por favor digite o seu CPF',
            cep: 'Por favor digite o seu CEP'
        }
    });
})
