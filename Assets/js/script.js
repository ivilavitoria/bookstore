// Função para controlar o slider automático
let count= 1;
document.getElementById("bttn1").checked = true;

setInterval( function(){
  nextImage();
}, 4000)

function nextImage(){
  count++;
  if(count>4){
    count = 1;
  }
  document.getElementById("bttn"+count).checked = true;
}