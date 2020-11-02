function totalValue (num1,num2,num3,num4,num5) {
  return parseInt(num1) + parseInt(num2) + parseInt(num3) + parseInt(num4) + parseInt(num5)
}

$(document).ready(function(){
$("form#questions").submit(function(event){
  event.preventDefault();
  
  let mathart = $("#question1").val();
  let designtheory = $("#question2").val();
  let money = $("#question3").val();
  let job = $("#question4").val();
  let rabitts = $("#question5").val();
  let total = totalValue (mathart, designtheory, money, job, rabitts);
  
  if (total >= 20){
    $("#ruby").show();
  } else if (total >=15) {
    $("#csharp").show();
  } else if (total >= 5) {
    $("#rabits").show();
  } else (alert("come on be honest and answer the questions a little better than than that"));
});
});