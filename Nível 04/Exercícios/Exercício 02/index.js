/* Principais pontos abordados nesse desafio:

- Estrutura de dados com objetos;
- Estrutura de repetição;
- Criação de funções;
- Operadores comparativos; 

Bora praticar e rever tudo o que foi ensinado na aula? **💜**

Nesse desafio você irá criar uma lista de **estudantes** e, cada estudante dentro dessa lista, deverá conter os seguintes dados:

- nome;
- nota da primeira prova;
- nota da segunda prova.

Depois de criada a lista:

- [ ]  Crie uma **função** que irá calcular a média das notas de cada aluno;
- [ ]  Supondo que a média, para esse concurso é **7**, verifique **se** cada aluno obteve sucesso ou não em entrar no concurso e mostre uma mensagem na tela.

O resultado final desse desafio deve ser algo em torno de

Obs: você quem manda no tamanho da lista! No exemplo a lista é composta por 4 estudantes. 😊
Fique à vontade caso queira adicionar novos dados e fazer novas validações. Se desafie! 🚀
*/


const studentList = [
  {
    name: 'Gustavo',
    firstTest: 2.5,
    secondTest: 12
  },
  {
    name: 'Mariane',
    firstTest: 7,
    secondTest: 10
  },
  {
    name: 'Mayk',
    firstTest: 6,
    secondTest: 9
  },
  {
    name: 'João',
    firstTest: 5.5,
    secondTest: 7.8
  },
]

let approve = 7;

const media = (v1, v2) => {
  results = ((v1 + v2) / 2).toFixed(1)
  return Number(results)
}


const mensagem = (student) => {

  alert(`A média do aluno(a) ${student.name} é: ${media(student.firstTest, student.secondTest)} \n`)

}

for (let student of studentList) {
  media(student.firstTest, student.secondTest)
  if (results >= approve) {
    alert(`A média do aluno(a) ${student.name} é: ${results}\nParabéns ${student.name}! Você foi aprovado(a) no concurso!`)
  } else if (results < approve) {
    alert(`A média do aluno(a) ${student.name} é: ${results}\nNão foi dessa vez ${student.name}! Tente novamente!`)
  }
}