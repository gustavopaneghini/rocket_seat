alert('Hello World')

let first_value = Number(prompt('Digite o primeiro valor?'))
let second_value = Number(prompt('Digite o segundo valor?'))

const somar_valores = (first_value, second_value) => {
    console.log(`O resultado da soma foi de ${first_value + second_value}`)
}
somar_valores(first_value, second_value)



let tipo_numerico = 12;

function numberVerification(tipo_numerico) {

    if (typeof tipo_numerico != 'number') {
        console.log('Não é um número')
    } else {
        console.log('É um número')
    }
}
numberVerification(1)


function stringVerification(arg) {
    if (typeof arg != 'string') {
        console.log('Não é uma string')
    } else {
        console.log('É uma string')
    }
}
stringVerification('false')

function booleanVerification(arg) {
    console.log(typeof arg)
    if (arg === true || arg === false) {
        console.log('É boolean')
    } else {
        console.log('Não é um boolean')
    }
}

booleanVerification(false)



const subtrair_valores = (first_value, second_value) => {
    console.log(`O resultado da subtração foi de ${first_value - second_value}`)
}
subtrair_valores(first_value, second_value)

const multiplicar_valores = (first_value, second_value) => {
    console.log(`O resultado da multiplicação foi de ${first_value * second_value}`)
}
multiplicar_valores(first_value, second_value)

const dividir_valores = (first_value, second_value) => {
    console.log(`O resultado da divisão foi de ${first_value / second_value}`)
}
dividir_valores(first_value, second_value)


const par_impar = (arg) => {
    if (arg % 2 == 0) {
        console.log('Número par')
    } else {
        console.log('Número ímpar')
    }
}

par_impar(11)