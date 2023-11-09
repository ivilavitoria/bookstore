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

// Função para controlar o slider
let slideIndex = 0;
showSlides(slideIndex);

// Controle anterior/próximo
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Controle das imagens miniatura
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
//slideshow automático


function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}