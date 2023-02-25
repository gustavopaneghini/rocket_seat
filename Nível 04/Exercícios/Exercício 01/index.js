/* # 💻 Sobre o desafio

<aside>
💡 O que será abordado nesse desafio:

- Variáveis;
- Operações matemáticas;
- Operadores comparativos;
- Condicional.

</aside>

Bora praticar e rever tudo o que foi ensinado na aula? **💜**
Nesse desafio, você irá solicitar ao usuário que ele insira **dois números** e, a partir daí, calcular:

- [ ]  A soma dos dois números;
- [ ]  A subtração dos dois números;
- [ ]  A multiplicação dos dois números;
- [ ]  A divisão dos dois números;
- [ ]  O resto da divisão dos dois números;

Fácil até aqui, né? Bora se desafiar? 👀 🧑‍🚀

- [ ]  Verifique se a soma dos dois números é par ~~(ou ímpar)~~;
- [ ]  Verifique se os dois números inseridos são iguais ~~(ou diferentes)~~.

Lembre-se de sempre mostrar na tela o resultado de cada uma dessas operações!
O resultado final desse desafio deve ser algo em torno de:



E então, topa encarar esse desafio? 💜
Vai ser muito importante para o seu aprendizado rever e aplicar esses novos conceitos. 

Lembrando: tente se desafiar mas, caso apareça alguma dificuldade, você pode ir no nosso fórum e deixar sua dúvida por lá! 
Boa sorte e boooooora codar! 
*/

let n1 = Number(prompt('Digite o primeiro número'))
let n2 = Number(prompt('Digite o segundo número'))

const desafio = (param1, param2) => {
    let soma = param1 + param2;
    alert('A soma dos dois número é: ' + soma)
    let multiplicacao = param1 * param2;
    alert('A multiplicação dos dois número é: ' + multiplicacao)
    let divisao = param1 / param2;
    alert('A divisão dos dois número é: ' + divisao)
    let resto = param1 % param2;
    alert('O resto dos dois número é: ' + resto)

    if ((soma / 2) % 2) {
        alert('A soma dos dois números é Par: ' + soma)
    } else {
        alert('A soma dos dois números é impar: ' + soma)
    }

    if (param1 == param2) {
        alert(" Os número inseridos são iguais")
    } else {
        alert(" Os número inseridos são diferentes")

    }
}

desafio(n1, n2)