// >> Anotações <<

/*
1: var: é espaços na memoria como se fosse vagas de carros
2: nome: para identificar a cada variavel precisamos de um identificador
3: =: se diz recebe e nunca dizer é igual
4: valores: é chamado de atribuição dentro de uma variavel apos o sinal de =

 ¹  ²  ³     ⁴
var s1 = "JavaScript" - Aspas duplas , faz diferença de uma para a outra.
var s2 = 'Curso em Vídeo' - Aspas simples , faz diferença de uma para a outra.
var s3 = `Guanabara` - A crase , faz diferença de uma para a outra.


OBS: No JavaScript moderno, além de utilizar a palavra var,
tbm podemos usar a palavra let.

OBS-2: Existem variaveis de tamanhos diferentes para caber dados de tamanhos diferentes.

OBS-3: O nome de cada variavel é chamado de (Identificador)
    Regras:
        • Podem começar com: letras, $ ou _
        • Não podem começar com: Numeros
        • Possível usar: letras ou numeros
        • Possível usar: acentos e símbolos
        • Não podem conter: espaços (substituir pelo _ )
        • Não pode ser: palavras reservadas

ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#Keywords

// Dicas de nomes de identificadores:

• Maiúscula e minúscula fazem a diferença
• Tente escolher nomes coerentes para as variáveis
• Evite se tornar um 'programador alfabeto' ou um 'programador contador'


// Tipos Primitivos

String: "Google", 'JavaScript', `Maria`
Boolean: true, false
Number: 5, 18, -12, 0.5, -15.9, 3.14,  8.0






// typeof - Comandinho do JS (tipo de)

> var n = 200 //numero
undefined
> n
200
> typeof n
'number'
> n = "Google"
'Google'
> typeof n
'string'
> typeof 6 //literal, literalmente um numero
'number'
> typeof 6.5
'number'
> typeof "6.5" //botando dentro de aspas é string
'string'
> typeof []
'object'
> tipeof {}
'object'
> typeof function(){}
'function'
> typeof undefined
'undefined'
> typeof NaN
'number'
> typeof Infinity
'number'
> typeof null // null pro js é um objeto
'object'
*/