//récupérer les réponses dans le fichier HTML
let answerHidden = document.getElementsByClassName("answerHidden");
console.log(answerHidden);

//parcourir les réponses
for(answer of answerHidden){
    //caché les réponses
    answer.style.display= "none";
}

//au click la fonction se lance et fait apparaitre les blocs
function notHiddenAnswer(){
   answerHidden[0].style.display= "block";
}
