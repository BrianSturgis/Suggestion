$(document).ready(function() {
  $("form#triangle").submit(function(event) {
    const sideOne = parseInt($("input#side1").val());
    const sideTwo = parseInt($("input#side2").val());
    const sideThree = parseInt($("input#side3").val());
    const sidefour = parseInt($("input#side3").val());
    const sidefive = parseInt($("input#side3").val());
    console.log()
    if (sideOne === sideTwo && sideThree) {
    let answer = "all 3 sides match! This is a Equilateral Triangle!"
    alert(answer);
    }

    else if (sideOne != sideTwo || sideTwo === sideThree || sideOne === sideThree || sideOne === sideTwo ){
      let answer = "2 sides match! This is a Isosceles Triangle"
      alert(answer);
    }

    else {
      alert("This is Scalene Triangle");
    }
  
  event.preventDefault();

});
});