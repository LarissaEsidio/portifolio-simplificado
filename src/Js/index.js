/*- Objetivo 1 - quando o usuário clicar no botão de mostrar mais deve abrir os projetos que estão escondidos no html 

  Passo 1 - pegar o botão mostrar mais no JS pra poder verificar quando o usuário clicar em cima dele 
  Passo 2 - identificar o clique no botão 
  Passo 3 - adicionar a classe ativo nos projetos escondidos 

- Objetivo 2 - esconder o botão de mostrar mais 
  Passo 1 - pegar o botão e esconder ele */

  //Objetivo 1 - passo 1
const BotaoMostrarProjetos = document.querySelector('.btn-mostrar-projetos');
const projetosInativos = document.querySelectorAll('.projeto:not(.ativo')

 //Objetivo 1 - passo 2
BotaoMostrarProjetos.addEventListener('click', () => {
    projetosInativos.forEach(projetoInativo => {
        projetoInativo.classList.add('ativo');
        //Objetivo 1 - passo 3
    })

    //Objetivo 2 - Passo 1
    BotaoMostrarProjetos.classList.add("remover");
});

