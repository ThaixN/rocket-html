const perguntas = [
  {
    pergunta: "Qual é a forma correta de declarar uma variável em JavaScript?",
    respostas: [
      "let myVar = 10;",
      "variable myVar = 10;",
      "myVar := 10;",
      "const myVar = 10;"
    ],
    correta: 0
  },
  {
    pergunta: "Qual é a saída do console.log(typeof []) em JavaScript?",
    respostas: [
      "array",
      "object",
      "undefined",
      "null"
    ],
    correta: 1
  },
  {
    pergunta: "Como se refere a uma função que é atribuída a uma propriedade de um objeto em JavaScript?",
    respostas: [
      "Procedimento",
      "Método",
      "Rotina",
      "Instância"
    ],
    correta: 1
  },
  {
    pergunta: "Qual destes é um método de array em JavaScript?",
    respostas: [
      "push()",
      "add()",
      "append()",
      "insert()"
    ],
    correta: 0
  },
  {
    pergunta: "O que o operador '===' faz em JavaScript?",
    respostas: [
      "Compara o valor e o tipo",
      "Atribuição",
      "Compara apenas o valor",
      "Compara apenas o tipo"
    ],
    correta: 0
  },
  {
    pergunta: "Qual é a função usada para analisar uma string e retornar um número em JavaScript?",
    respostas: [
      "parseInt()",
      "parseString()",
      "stringToNumber()",
      "toNumber()"
    ],
    correta: 0
  },
  {
    pergunta: "O que o método 'map()' faz em um array em JavaScript?",
    respostas: [
      "Modifica o array original",
      "Retorna um novo array com elementos alterados",
      "Remove elementos duplicados do array",
      "Ordena o array em ordem alfabética"
    ],
    correta: 1
  },
  {
    pergunta: "Qual é a palavra-chave usada para declarar uma função em JavaScript?",
    respostas: [
      "func",
      "function",
      "def",
      "funct"
    ],
    correta: 1
  },
  {
    pergunta: "O que o método 'querySelector()' faz em JavaScript?",
    respostas: [
      "Seleciona um elemento pelo seu id",
      "Seleciona um elemento pelo seu nome",
      "Seleciona um elemento pelo seu índice",
      "Seleciona um elemento pelo seu tipo"
    ],
    correta: 0
  },
  {
    pergunta: "Qual é a função do operador '&&' em JavaScript?",
    respostas: [
      "OU lógico",
      "E lógico",
      "OU exclusivo",
      "Negação lógica"
    ],
    correta: 1
  }
];

alert("Oi")
const quiz = document.querySelector("#quiz");
const template = document.querySelector("#template");


//loop ou laço de repetição, serve para entrar em um array e pra cada item do array ele vai fazer alguma coisa.
// { chamado de escopo, executa o código.
for(const item of perguntas) { //para cada item de pergunta, repetindo para cada uma delas.
  const quizItem = template.textContent.cloneNode(true)
  quizItem.querySelector('h3').textContent = item.pergunta
  
  for(let resposta of item.respostas){
    const dt = quizItem.querySelector('dl dt').cloneNode (true)
    dt.querySelector('span').textContent = resposta
    
    quizItem.querySelector('dl').appendChild(dt)
  }
    
  quizItem.querySelector('dl dt').Remove()
  
  
  //coloca a pergunta na tela
  quiz.appendChild(quizItem)
}