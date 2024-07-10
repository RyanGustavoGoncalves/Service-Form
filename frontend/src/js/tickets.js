const API_BASE_URL = 'http://localhost:5000';

const URLS = {
    ADICIONA_TICKET: `${API_BASE_URL}/ticket`,
    BUSCAR_TICKETS: `${API_BASE_URL}/tickets`,
    BUSCAR_TICKET_POR_ID: `${API_BASE_URL}/ticket`,
    BUSCAR_TICKET_POR_NOME: `${API_BASE_URL}/busca_ticket`,
    ATUALIZAR_TICKET: `${API_BASE_URL}/ticket`,
    EXCLUIR_TICKET: `${API_BASE_URL}/ticket`,
};



class Validacao {

    /*
    --------------------------------------------------------------------------------------
    Função para inicializar a máscara dos campos e validar o CPF
    --------------------------------------------------------------------------------------
    */
    static init() {
        $(document).ready(function () {
            $('#cep').mask('00000-000', { reverse: true });
        });
    }

    /*
    --------------------------------------------------------------------------------------
    Função para validar se todos os campos estão preenchidos, exceto o 'cep'
    --------------------------------------------------------------------------------------
    */
    static validarCamposExcetoCEP() {
        let todosPreenchidos = true;
        var formData = $('#formCadastro').serializeArray();

        // Itera sobre cada item no array de objetos formData
        formData.forEach(item => {
            if (item.name !== 'cep' && item.value.trim() === '') {
                todosPreenchidos = false;
                return false;  // Interrompe o loop
            }
        });

        return todosPreenchidos;
    }
}


// Chama a função para obter os tickets quando a página carregar
$(document).ready(function () {
    buscarTickets();
    Validacao.init();
});

/*
  --------------------------------------------------------------------------------------
  Função que busca os tickets cadastrados e adiciona na tabela
  --------------------------------------------------------------------------------------
*/

function buscarTickets() {
    limparTabelaTickets();
    $.ajax({
        url: URLS.BUSCAR_TICKETS,
        method: 'GET',
        contentType: 'application/json',
        success: function (data) {
            if (data && Array.isArray(data.tickets)) { // Verifica se data.tickets é um array
                data.tickets.forEach(function (ticket) {
                    adicionarTicketNaTabela(ticket);
                });
            } else {
                console.error('Formato inesperado da resposta da API:', data);
            }
        },
        error: function (error) {
            Swal.fire({
                title: "Erro ao obter tickets:",
                text: error.responseText,
                icon: "error"
            });
        }
    });
}

/*
  --------------------------------------------------------------------------------------
  Função para excluir ticket, via requisição DELETE
  --------------------------------------------------------------------------------------
*/

window.excluirTicket = function (id) {
    Swal.fire({
        title: "Você tem certeza que deseja excluir este ticket?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Sim, excluir!",
        cancelButtonText: "Não, cancelar!"
    }).then((result) => {
        if (result.isConfirmed) {
            $.ajax({
                url: `${URLS.EXCLUIR_TICKET}?id=${encodeURIComponent(id)}`,
                type: 'DELETE',
                success: function (response) {
                    Swal.fire({
                        title: "Ticket excluído!",
                        icon: "success"
                    }).then(() => {
                        buscarTickets(); // Atualiza a lista de tickets após a exclusão
                    });
                },
                error: function (xhr, status, error) {
                    Swal.fire({
                        title: "Erro ao excluir ticket",
                        text: xhr.responseText,
                        icon: "error"
                    });
                }
            });
        }
    });
}

/*
  --------------------------------------------------------------------------------------
  Funções de filtros
  --------------------------------------------------------------------------------------
*/

function filtrarTicketsPorNome() {
    const nomeFiltro = $('#nome').val().toLowerCase();
    $.ajax({
        url: `${URLS.BUSCAR_TICKET_POR_NOME}?nome=${encodeURIComponent(nomeFiltro)}`,
        type: 'GET',
        success: function (data) {
            limparTabelaTickets();
            if (data && Array.isArray(data.tickets)) { // Verifica se data.tickets é um array
                data.tickets.forEach(ticket => {
                    adicionarTicketNaTabela(ticket);
                });
            } else {
                $('#ticketsTableBody').append('<tr><td colspan="10">Ticket não encontrado</td></tr>');
            }
        },
        error: function () {
            limparTabelaTickets();
            $('#ticketsTableBody').append('<tr><td colspan="10">Erro ao buscar tickets</td></tr>');
        }
    });
}

function filtrarTicketsPorId(id) {
    $.ajax({
        url: `${URLS.BUSCAR_TICKET_POR_ID}?id=${encodeURIComponent(id)}`,
        type: 'GET',
        success: function (data) {
            limparTabelaTickets();
            if (data && Array.isArray(data.tickets)) { // Verifica se data.tickets é um array
                data.tickets.forEach(ticket => {
                    adicionarTicketNaTabela(ticket);
                });
            } else {
                $('#ticketsTableBody').append('<tr><td colspan="10">Ticket não encontrado</td></tr>');
            }
        },
        error: function () {
            limparTabelaTickets();
            $('#ticketsTableBody').append('<tr><td colspan="10">Erro ao buscar ticket</td></tr>');
        }
    });
}

// Adiciona evento de input aos campos de filtro
$('#nome').on('input', filtrarTicketsPorNome);

/*
  --------------------------------------------------------------------------------------
  Função que adiciona tickets na Tabela
  --------------------------------------------------------------------------------------
*/

function adicionarTicketNaTabela(ticket) {
    console.log("ticket", ticket);
    $('#ticketsTableBody').append(`
        <tr>
            <td class="nome-column">${ticket.title}</td>
            <td>${ticket.stats}</td>
            <td class="email-column">${ticket.description}</td>
            <td>${ticket.endereco}</td>
            <td>${mascararCEP(ticket.cep)}</td>
            <td>                
                <button class="btn btn-sm btn-edit" style="color:#ffffff;background:#ff6600" onclick="window.location.href='../app/editar.html?id=${ticket.id}'"><i class="fas fa-edit"></i> Editar</button>
                <button class="btn btn-danger btn-sm btn-delete" onclick="excluirTicket(${ticket.id})"><i class="fas fa-trash"></i> Excluir</button>
            </td>
        </tr>
    `);

    Validacao.init();
}

/*
  --------------------------------------------------------------------------------------
  Função para limpar tabela de Tickets
  --------------------------------------------------------------------------------------
*/

function limparTabelaTickets() {
    $('#ticketsTableBody').empty();
}

function mascararCEP(cep) {
    return cep.replace(/(\d{5})(\d{3})/, '$1-$2');
}
