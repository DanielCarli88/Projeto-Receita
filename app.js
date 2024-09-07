function pesquisar() {
  const campoPesquisa = document.getElementById("campo-pesquisa");
  const termoPesquisa = campoPesquisa.value.trim().toLowerCase(); // Remove espaços em branco e converte para minúsculo

  // Verifica se o campo foi preenchido
  if (termoPesquisa === "") {
    alert("Digite uma comida para pesquisar");
    return;
  }

  const resultados = document.getElementById("resultados-pesquisa");
  resultados.innerHTML = "";

  // Exibe mensagem de carregamento enquanto a pesquisa é realizada (opcional)
  resultados.innerHTML = "<p>Buscando receitas...</p>";

  // Itera sobre os dados e exibe os resultados que correspondem ao termo de pesquisa
  dados.forEach(item => {
    if (item.titulo.toLowerCase().includes(termoPesquisa)) {
      resultados.innerHTML += `
        <div class="item-resultado">
          <h2>${item.titulo}</h2>
          <p class="descricao-meta">${item.descricao}</p>
          <a href="${item.link}" target="_blank">Receita</a>
        </div>
      `;
    }
  });

  // Verifica se foram encontrados resultados
  if (resultados.innerHTML === "") {
    resultados.innerHTML = "<p>Nenhuma receita encontrada.</p>";
  }
}