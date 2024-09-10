function pesquisar() {
    // Obtém a referência ao elemento da seção onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    // Verifica se o campo de pesquisa está vazio
    if (campoPesquisa == "") {
        section.innerHTML = "Nenhum Personagem foi encontrado.";
        return;
    }

    // Converte o termo de pesquisa para minúsculas
    campoPesquisa = campoPesquisa.toLowerCase();

    // Inicializa uma string vazia para armazenar o conteúdo HTML dos resultados
    let resultados = "";

    // Itera sobre cada item do array 'dados' para construir o HTML dos resultados
    for (let dado of dados) {
        // Converte título e descrição para minúsculas
        let titulo = dado.titulo.toLowerCase();
        let descricao = dado.descricao.toLowerCase();

        // Verifica se o termo de pesquisa está presente no título ou descrição
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa)) {
            // Constrói o HTML para cada resultado encontrado
            resultados += `
                <div>
                    <h2>${dado.titulo}</h2> <!-- Exibe o título do resultado -->
                    <p>${dado.descricao}</p> <!-- Exibe a descrição do resultado -->
                    <!-- Link para mais detalhes, abre em uma nova aba -->
                    <a href="${dado.link}" target="_blank">Leia mais</a>
                </div>`;
        }
    }

    // Verifica se algum resultado foi encontrado
    if (resultados === "") {
        section.innerHTML = "Nenhum Personagem foi encontrado.";
    } else {
        section.innerHTML = resultados; // Insere o HTML construído na seção de resultados
    }
}

