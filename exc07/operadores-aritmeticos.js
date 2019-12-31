/* Operadores Aritméticos - usados para fazer calculo 
// ¹+, -, *, /, %, ** : Operadores
// ²Operandos que envolvem os operadores

ex: ² ¹ ²
    5 + 2 → 7
    5 - 2 → 3
    5 * 2 → 10
    5 / 2 → 2.5
    5 % 2 → 1 : é o resto da divisão inteira
    5 ** 2 → 25: é a potencia

Dica: Cuidado com a ordem de "precedência de operadores"

ex: 
    5 + 3 / 2 = 6.5

R: Quando uma mesma expressão tem soma(+) e divisão(/) primeiro,
fazemos a divisão(/) primeiro e o resultado acima não é 4 e sim 6.5

Obs: se quizermos executar a soma primeiro colocamos o operador entre ()

Ex: (5 + 3) / 2 = 4

A order de precedência é analizada primeiro os...
()
**
* / %  se mais deles estiverem na expressão, sempre executar da esquerda pra direita
+ -

Obs: se quisermos quardar o valor precisaremos utilizar o operador de atribuição

ex:
var a = 5 + 3 // a variavel "a" recebe o valor de cinco mais três| 5+3 = 8 então fica guadado na variavel "a"
var b = a % 5 // sendo q "a" é 8, consegue fazer essa operação substituindo... 8 dividido por 5 da 1. 5 vezes 1 da 5 para 8 resta 3
var c = 5 * b ** 2 // (faz primeiro a potencia) "b" ao quadrado ("b" vale 3, 3 ao quadrado é 9) 5 vezes 9 é 45
var d = 10 - a / 2 // ("a" sendo 8) 8 divido por 2 é 4 e 10 menos 4 da 6
var e = 6 * 2 / d // (* e / tem mesma ordem de precedência, faço quem aparecer por primeiro) 6 vezes 2 da 12. 12 divido por 6 dá 2 (valor da variavel)
var f = b % e + 4 / e // (fazer ordem de precedência % que apareceu primeiro) "b" que é 3 e "e" é 2. 3%2 vale 1... 4 dividido por 2 vale 2... 1 + 2 vale 3












*/
