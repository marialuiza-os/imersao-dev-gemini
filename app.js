function pesquisar(){
    // Loga uma mensagem no console para fins de depuração ou acompanhamento
    console.log("PASSEI AQUI");
  
    // Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");
  
    // Inicializa uma string vazia para armazenar o HTML dos resultados
    let resultado = '';
  
    // Itera sobre cada item de dados e constrói o HTML correspondente
    for(let dado of dados){ 
      resultado += `
        <div class="item-resultado">
          <h2>
            <a href="#" target="_blank">${dado.titulo}</a>
          </h2>
          <p class="descricao-meta">${dado.descricao}</p>
          <a href="${dado.link}" target="_blank">Mais informações</a>
        </div>`;
    }
  
    // Atualiza o conteúdo da seção HTML com os resultados construídos
    section.innerHTML = resultado;
  }

