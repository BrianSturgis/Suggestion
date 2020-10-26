
$(document).ready(function(event) {
  $("form#questions").submit(function(event) {
    var q1 = $("#question1").val();
    // console.log("q1")
    var q2 = $("#question2").val();
    // console.log("q2")
    var q3 = $("#question3").val();
    // console.log("q3")
    var q4 = $("#question4").val();
    // console.log("q4")
    var q5 = $("#question5").val();
    // console.log("q5")
    var answer1 = $("*").val();
    // console.log(answer1)
    

  if (q5 == "ohhh nooo"){
    $("#rabits").toggle().show();

  }
  else if (q2 == "theory" || q1 == "math"){
    $("#ruby").toggle().show();
    // console.log("answer 1");
  
  } else (q1 == "art" || q2 == "design")
    $("#csharp").toggle().show();
    // console.log("answer 1");
  
  // } else ("*")
  // alert("please fill in all the answers");
  // event.preventDefault();

  // } else ("ohhh nooo") 
  //   $("rabits").toggle().show();
  
  event.preventDefault();
    
  });
});