var user_classes = [];
var countGMU = 0;
var countWM = 0;
var countUVA = 0;
var countVT = 0;
var option = 0;
var user_scores = [];


function select(object) {
    if(object.style.background==='green'){
        object.style.background = 'rgb(217,217,217)'
        user_classes.splice(user_classes.indexOf(object.textContent), 1);
        //console.log(user_classes)
    }else{
        object.style.background = 'green'
        user_classes.push(object.textContent)
        //console.log(user_classes)
        
    }
} 

function getScores() {
    //console.log(chart_data.credit_transfer[0])
    for (let i = 0; i < user_classes.length; i++) {
      option = 0;
      while (option == 0) {
      let person = prompt(
        "Please enter what score you received on " +
          user_classes[i] +
          " (3 - 5)"
      );
      if (
        person == parseInt("3") ||
        person == parseInt("4") ||
        person == parseInt("5")
      ) {
        user_scores.push(parseInt(person));
        //console.log(user_scores);
        option = 1;
      } else {
        alert("Invalid score! Please enter score 3 - 5");
      }
    }
  }
  calculateCredits();
  localStorage.setItem("storageGMU", countGMU);
  localStorage.setItem("storageWM", countWM);
  localStorage.setItem("storageUVA", countUVA);
  localStorage.setItem("storageVT", countVT);

}

function calculateCredits(){
    for (let i = 0; i < chart_dataGMU.credit_transfer.length; i++) {
        for(let j = 0; j < user_classes.length; j++){
            if((chart_dataGMU.credit_transfer[i].ap_exam == user_classes[j]) && (chart_dataGMU.credit_transfer[i].minimum_score == user_scores[j])){
                countGMU += parseInt(chart_dataGMU.credit_transfer[i].credits);
            }
        }
    }
    for (let i = 0; i < chart_dataWM.credit_transfer.length; i++) {
      for(let j = 0; j < user_classes.length; j++){
          if((chart_dataWM.credit_transfer[i].ap_exam == user_classes[j]) && (chart_dataWM.credit_transfer[i].minimum_score == user_scores[j])){
              countWM += parseInt(chart_dataWM.credit_transfer[i].credits);
          }
      }
  }
  for (let i = 0; i < chart_dataUVA.credit_transfer.length; i++) {
    for(let j = 0; j < user_classes.length; j++){
        if((chart_dataUVA.credit_transfer[i].ap_exam == user_classes[j]) && (chart_dataUVA.credit_transfer[i].minimum_score == user_scores[j])){
            countUVA += parseInt(chart_dataUVA.credit_transfer[i].credits);
        }
    }
}
for (let i = 0; i < chart_dataVT.credit_transfer.length; i++) {
  for(let j = 0; j < user_classes.length; j++){
      if((chart_dataVT.credit_transfer[i].ap_exam == user_classes[j]) && (chart_dataVT.credit_transfer[i].minimum_score == user_scores[j])){
          countVT += parseInt(chart_dataVT.credit_transfer[i].credits);
      }
  }
}
}