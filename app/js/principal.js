var temperaturas = document
    .querySelectorAll(".mes");

for (var index = 0; index < temperaturas.length; index++) {
    const temperatura = temperaturas[index];
 
    
    var colunaMedia = tabela_lucro.querySelector(".info-media");
    var media = colunaMedia.textContent;
   
   
   
   
    console.log(media)
    
}
    
var imputElement = document.querySelector('#preco input')
var buttonElement = document.querySelector('#preco button')
var tabela = document.getElementById("minha_tabela")
var linhas = tabela.getElementsByTagName("tr");


function rendertodos() {
    for (medias of media) {
        

}

}


function add(){
 var mediaText = imputElement.value
media.push(mediaText)
inputElement.Value = ''


}

buttonElement.onclick = add;



