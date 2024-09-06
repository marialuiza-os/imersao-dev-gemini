function pesquisar(){

  let campoPesquisa = document.getElementById("campo-pesquisa").value;
  campoPesquisa = campoPesquisa.toLowerCase();

  // Obtém a seção HTML onde os resultados serão exibidos
  let section = document.getElementById("resultados-pesquisa");

  if(campoPesquisa == ""){
    section.innerHTML = "<p>Preencha o campo de pesquisa</p>"
    return
  }

  // Inicializa uma string vazia para armazenar o HTML dos resultados
  let resultado = '';
  let titulo = "";
  let descricao = "";
  let tags = "";
  // Itera sobre cada item de dados e constrói o HTML correspondente
  for(let dado of dados){ 
 
    titulo = dado.titulo.toLowerCase();
    descricao = dado.descricao.toLowerCase();
    tags == dado.tags.toLowerCase();

    if(titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa) ){
        //Cria um elemento HTML para cada resultado
        resultado += `
        <div class="item-resultado">
        <h2>
        <a href="#" target="_blank">${dado.titulo}</a>
        </h2>
        <p class="descricao-meta">${dado.descricao}</p>
        <a href="${dado.link}" target="_blank">Mais informações</a>
        </div>`;
    } 
  }
  if(!resultado){
      resultado = "<p> Nada foi encontrado</p>"
  }
    // Atualiza o conteúdo da seção HTML com os resultados construídos
    section.innerHTML = resultado;
  }

