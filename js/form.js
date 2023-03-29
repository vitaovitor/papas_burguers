let botaoAdicionar = document.querySelector('#adicionar-reserva')
botaoAdicionar.addEventListener('click', function (evento) {
    evento.preventDefault()

    let form = document.querySelector('#form-adiciona')

    let reserva = obtemReservaDoForm(form)

    adicionareservaNaTabela(reserva)

    form.reset()
})

function obtemReservaDoForm(form){
    let reserva = {
        nome: form.nome.value,
        quantidade: form.quantidade.value,
        data: form.data.value,
        horario: form.horario.value
    }

    return reserva
}


    






function adicionareservaNaTabela(reserva) {
    let reservasTr = montarTr(reserva)
    let tabela = document.querySelector('#tabela-reserva')
    tabela.appendChild(reservasTr)
}


function montarTr(reserva) {
    let reservasTr = document.createElement('tr')
    reservasTr.classList.add('reservas')

    reservasTr.appendChild(montarTd(reserva.nome, "info-nome"))
    reservasTr.appendChild(montarTd(reserva.quantidade, "info-pessoas"))
    reservasTr.appendChild(montarTd(reserva.data, "info-data"))
    reservasTr.appendChild(montarTd(reserva.horario, "info-horario"))


    return reservasTr
}
function montarTd(dado, classe) {
    let td = document.createElement('td')
    td.textContent = dado
    td.classList.add(classe)

    return td
}


