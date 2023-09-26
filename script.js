// Função para exibir os livros de uma categoria
function exibirCategoria(categoria) {
    // Ocultar todos os livros
    var livros = document.querySelectorAll("#livros ul");
    for (var i = 0; i < livros.length; i++) {
        livros[i].style.display = "none";
    }

    // Mostrar os livros da categoria selecionada
    var categoriaLivros = document.getElementById(categoria);
    categoriaLivros.style.display = "block";
}

// Vincular eventos aos links das categorias
document.getElementById("link-ficcao-cientifica").addEventListener("click", function () {
    exibirCategoria("ficcao-cientifica");
});

document.getElementById("link-fantasia").addEventListener("click", function () {
    exibirCategoria("fantasia");
});

document.getElementById("link-romance").addEventListener("click", function () {
    exibirCategoria("romance");
});

document.getElementById("link-terror").addEventListener("click", function () {
    exibirCategoria("terror");
});
document.getElementById("link-nao-ficcao").addEventListener("click", function () {
    exibirCategoria("nao-ficcao");
});
document.getElementById("link-manga").addEventListener("click", function () {
    exibirCategoria("manga");
});


