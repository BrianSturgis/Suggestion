//bussiness logic


//user interface logic

$(document).ready(function(){
  $("#formOne").submit(function(event){
      const countTo = parseInt($("#countTo").val());
      const countBy = parseInt($("#countBy").val());
      
      let outputText = [];
     
      for (let num = 0; num <= countTo; num += countBy) {
        
        outputText.push(num);
       $(".output").text(outputText);
      }
      
      
    
    
    
    
      
      
      
    
    
    
    
    
    
    
    
    
    
    
    event.preventDefault();

    //const inputs = ["#countTo", "#countBy"];

    //let newInputs = [];

    //for (let i=0; i < inputs.length; i +=1) {
     // let userInput = parseInt($("input" + inputs[i]).val());
     // newInputs.push(userInput);
    //}

    //let output = [];

    //for (let i=0; i < newInputs[0]; i +=newInputs[1]) {
      
    //}
    
  });

});