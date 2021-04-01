let questions = document.getElementsByClassName("questions");


for (i = 0; i < questions.length; i++) {
    questions[i].onclick = function(){
      let answerHidden = this.nextElementSibling;
      if (answerHidden.style.display === "block") {
        answerHidden.style.display = "none";
      }

       else {
        answerHidden.style.display = "block";
       }
    };
}




