const perguntas = [
  {
    pergunta: "Qual é a finalidade do comando 'console.log()' em JavaScript?",
    respostas: [
      "Exibir uma mensagem de erro",
      "Imprimir dados no console",
      "Criar uma variável"
    ],
    correta: 1
  },
  {
    pergunta: "Qual é a função do operador '===' em comparações em JavaScript?",
    respostas: [
      "Comparação de valores sem considerar o tipo",
      "Atribuição de valores",
      "Comparação estrita de valores e tipos"
    ],
    correta: 2
  },
  {
    pergunta: "Como se declara uma variável em JavaScript?",
    respostas: [
      "let myVar;",
      "const myVar = 10;",
      "ambas as opções acima estão corretas"
    ],
    correta: 2
  },
  {
    pergunta: "O que é uma função em JavaScript?",
    respostas: [
      "Um tipo de dado",
      "Um bloco de código reutilizável",
      "Uma variável global"
    ],
    correta: 1
  },
  {
    pergunta: "Qual é a diferença entre 'let' e 'const' na declaração de variáveis?",
    respostas: [
      "Nenhuma, são sinônimos",
      "let é usado para valores constantes, const para variáveis",
      "let permite reatribuição, const cria variáveis imutáveis"
    ],
    correta: 2
  },
  {
    pergunta: "O que é o DOM em JavaScript?",
    respostas: [
      "Um método de criptografia",
      "Um modelo de objeto para manipular documentos HTML",
      "Uma linguagem de programação"
    ],
    correta: 1
  },
  {
    pergunta: "Como se realiza uma iteração sobre os elementos de um array em JavaScript?",
    respostas: [
      "Usando a estrutura 'if-else'",
      "Com a declaração 'switch'",
      "Utilizando loops como 'for' ou 'forEach'"
    ],
    correta: 2
  },
  {
    pergunta: "O que é o JSON em JavaScript?",
    respostas: [
      "Um método de formatação de texto",
      "Uma linguagem de estilização",
      "Um formato de dados leve e intercambiável"
    ],
    correta: 2
  },
  {
    pergunta: "Qual é a diferença entre 'null' e 'undefined' em JavaScript?",
    respostas: [
      "São iguais, usados de forma intercambiável",
      "'null' representa a ausência de valor, 'undefined' é atribuído explicitamente",
      "Ambos representam valores vazios"
    ],
    correta: 1
  },
  {
    pergunta: "Como se adiciona um evento a um elemento HTML usando JavaScript?",
    respostas: [
      "Apenas com CSS",
      "Usando o atributo 'event'",
      "Através do método 'addEventListener'"
    ],
    correta: 2
  },
];

// possível seletor: body > div:first-child
const id = '#quiz' //# é uma forma de encontrar um nó html na página
const quiz = document.querySelector(id) //localizou o elemento de id quiz e colocou dentro de uma var
const template = document.querySelector('template')     //document transforma em java script. O query selector é uma função de pesquisa 

const corretas = new Set()
const totalDePerguntas = perguntas.length
const mostrarTotal = document.querySelector('#acertos span')
mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas

// loop ou laço de repetição
for(const item of perguntas) { //para cada item de perguntas. { é um escopo que pertence ao for
  const quizItem = template.content.cloneNode(true)   //criou o quizItem e fez uma função para clonar (clonenode) o nó (cada tag é chamada de nó). Para clonar todos os nós, se coloca o true
  quizItem.querySelector('h3').textContent = item.pergunta  //pegou o quizItem, pesquisou o h3 (cada pergunta), o conteúdo de texto dele e atribuiu um novo valor, que está no item da pergunta.
  
  for(let resposta of item.respostas) { //para cada resposta do item respostas, vai rodar 3x (são três opções de respostas)
    const dt = quizItem.querySelector('dl dt').cloneNode(true)//vai pegar todo o dt. Vai no quizItem e pesquisar ('dl dt') dentro de um dl, um dt (que é filho do dl) e clonar.
    dt.querySelector('span').textContent = resposta //dentro do span vai colocar um texto que vai ser a resposta
    dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))  //input é a função de selecionar uma alternativa (a, b, c)
    dt.querySelector('input').value = item.respostas.indexOf(resposta)   //pega de dentro do codigo o valor e atribuir as respostas e procurar dentro delas o índice (a=0, b=1, c=2) das respostas
    dt.querySelector('input').onchange = (event) => {
     //quando houver mudança, o código fará essa função chamada evento
     //seta é chamada arrow, por isso está se criando uma arrow function
      const estaCorreta = event.target.value == item.correta //o == esta atribuindo uma comparação
      
      corretas.delete(item)  //se mudar a escolha, a sua pontuação muda.
      if(estaCorreta) {  //se esta correta, vai acontecer isso:
        corretas.add(item)  //se acertar, a pontuação é somada
      }
      mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
    }
    
     quizItem.querySelector('dl').appendChild(dt) //o quizitem procura o dl, adiciona um filho que é o dt. Isso vai fazer com que as alternativas das perguntas (a, b, c) apareçam na tela
  }

  
  quizItem.querySelector('dl dt').remove() //sem esse código, todas as primeiras alternativas iriam ficar com o texto "resposta A"
  
  
  // coloca a pergunta na tela
  quiz.appendChild(quizItem)  //como ta dentro do loop, repete em todas as perguntas para aparecer na tela.
}
