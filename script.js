// Campos
const inputs = document.getElementsByTagName("input")
const nome = document.querySelector("input#nome")
const endereco = document.querySelector("input#endereco")
const bairro = document.querySelector("input#bairro")
const cidade = document.querySelector("input#cidade")
const estado = document.querySelector("input#estado")
const telefone = document.querySelector("input#telefone")
const celular = document.querySelector("input#celular")
const CEPInput = document.querySelector("input#cep")
const RGInput = document.querySelector("input#rg")
const CPFInput = document.querySelector("input#cpf")

//  Máscaras
let CEPNumber= "xxxxx-xxx"
let phoneNumber= "(xx) xxxx-xxxx"
let celNumber= "(xx) x xxxx-xxxx"
let CPFNumber= "xxx.xxx.xxx-xx"
let RGNumber= "xx.xxx.xxx-x"

function handleCadastrar(event) {
    event.preventDefault()

    // Nome
    if (nome.value.length < 3) {
        nome.nextElementSibling.innerHTML = "O nome precisa ter mais de 3 caracteres"
    } else {
        nome.nextElementSibling.innerHTML = ""
    }

    // Endereço
    const regexpEndereco = /[0-9]/g
    if (!endereco.value.toLowerCase().includes("rua") || !regexpEndereco.test(endereco.value.toLowerCase())) {
        endereco.nextElementSibling.innerHTML = "O endereço deve ter o nome da rua e a numeração"
    } else {
        endereco.nextElementSibling.innerHTML = ""
    }

    // Bairro
    if (bairro.value.length < 3) {
        bairro.nextElementSibling.innerHTML = "O bairro precisa ter mais de 3 caracteres"
    } else {
        bairro.nextElementSibling.innerHTML = ""
    }

    // CEP
    if (CEPInput.value.length != 8) {
        CEPInput.nextElementSibling.innerHTML = "O CEP precisa ter 8 caracteres"
    } else {
        CEPInput.nextElementSibling.innerHTML = ""
    }

    // Cidade
    if (cidade.value.length < 3) {
        cidade.nextElementSibling.innerHTML = "A cidade precisa ter mais de 3 caracteres"
    } else {
        cidade.nextElementSibling.innerHTML = ""
    }

    // Estado
    if (estado.value.length < 3) {
        estado.nextElementSibling.innerHTML = "O estado precisa ter mais de 3 caracteres"
    } else {
        estado.nextElementSibling.innerHTML = ""
    }

    // Telefone
    if (telefone.value.length != 10) {
        telefone.nextElementSibling.innerHTML = "Insira um telefone válido"
    } else {
        telefone.nextElementSibling.innerHTML = ""
    }

    // Celular
    if (celular.value.length != 11) {
        celular.nextElementSibling.innerHTML = "Insira um celular válido"
    } else {
        celular.nextElementSibling.innerHTML = ""
    }

    // RG
    if (RGInput.value.length < 9) {
        RGInput.nextElementSibling.innerHTML = "Insira um RG válido"
    } else {
        RGInput.nextElementSibling.innerHTML = ""
    }

    // CPF
    const novePrimeirosDigitos = CPFInput.value.split("", 9).join("")
    const doisUltimosDigitos = CPFInput.value.split("").splice(9)
    const sequenciaDeValidacaoPrimeiroDigito = [10, 9, 8, 7, 6, 5, 4, 3, 2]
    let sum = 0

    for (let i = 0; i < sequenciaDeValidacaoPrimeiroDigito.length; i++) {
        sum += novePrimeirosDigitos[i] * sequenciaDeValidacaoPrimeiroDigito[i]
    }

    const primeiroDigitoValido = ((sum * 10) % 11 == 10 && doisUltimosDigitos[0] === 0) || (sum * 10) % 11 == doisUltimosDigitos[0] 

    // Segunda parte da validação (tendo o segundo dígito após o '-' como base)
    const sequenciaDeValidacaoSegundoDigito = [11, 10, 9, 8, 7, 6, 5, 4, 3, 2]
    sum = 0

    for (let i = 0; i < sequenciaDeValidacaoPrimeiroDigito.length; i++) {
        sum += novePrimeirosDigitos[i] * sequenciaDeValidacaoSegundoDigito[i]
    }

    sum += doisUltimosDigitos[0] * 2

    const segundoDigitoValido = ((sum * 10) % 11 == 10 && doisUltimosDigitos[1] === 0) || (sum * 10) % 11 == doisUltimosDigitos[1] 

    if (!segundoDigitoValido || !primeiroDigitoValido) {
        CPFInput.nextElementSibling.innerHTML = "CPF inválido"
    } else {
        CPFInput.nextElementSibling.innerHTML = ""
    }
}