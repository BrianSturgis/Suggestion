//bussiness logic


//user interface logic

$(document).ready(function(){
  $("#formOne").submit(function(event){
    event.preventDefault();
    const countTo = parseFloat($("#countTo").val());
    const countBy = parseFloat($("#countBy").val());
    
    if (countBy > countTo) {
      alert("'Count By' can not be larger than 'Count To'")
    }  
    else if (countBy < 1 || countTo < 1) {
      alert("Values can not be less than 1")
    }
    else if (Number.isInteger(countTo) === false || Number.isInteger(countBy) === false) {
      alert("Values must be whole numbers")
    } else 
    
    let outputText = [];

    for (let num = 0; num <= countTo; num += countBy) {
      outputText.push(num);
     $(".output").text(outputText);
    }
  });

});
