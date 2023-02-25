/* 
  Crie uma lista de pacientes

  Cada paciente dentro da lista, deverá conter
    nome
    idade
    peso
    altura

  Escreva uma lista contendo o nome dos pacientes, suas idades, alturas e pesos.
*/

let pacients = [
  {
    name: "Luis Gustavo",
    age: 26,
    weight: 78,
    height: 182,
  },
  {
    name: "Mariane",
    age: 25,
    weight: 84,
    height: 162,
  },
  {
    name: "Junior",
    age: 33,
    weight: 80,
    height: 178,
  }
]

let info = []

for (let data of pacients) {
  info.push(data)
}

for (let index = 0; index < info.length; index++) {
  alert(`${info[index].name} tem ${info[index].age} anos, pesa ${info[index].weight}kg e sua altura é de ${info[index].height} cm`)
}