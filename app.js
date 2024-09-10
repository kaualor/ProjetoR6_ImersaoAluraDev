function pesquisar() {
    let section = document.getElementById("resultados-pesquisa");
    let campoPesquisa = document.getElementById("campo-pesquisa").value.trim().toLowerCase();

    if (campoPesquisa === "") {
        section.innerHTML = "Nenhum Personagem foi encontrado.";
        return;
    }

    let resultados = "";

    for (let dado of dados) {
        let titulo = dado.titulo.toLowerCase();
        let descricao = dado.descricao.toLowerCase();

        if (titulo === campoPesquisa || descricao === campoPesquisa) {
            resultados += `
                <div>
                    <h2>${dado.titulo}</h2>
                    <p>${dado.descricao}</p>
                    <a href="${dado.link}" target="_blank">Leia mais</a>
                </div>`;
        }
    }

    if (resultados === "") {
        section.innerHTML = "Nenhum Personagem foi encontrado.";
    } else {
        section.innerHTML = resultados;
    }
}
