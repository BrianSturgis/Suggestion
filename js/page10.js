$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault()

   const inputs = ["person1", "person2", "animal", "exclamation", "person1", "verb", "person1", "person2", "noun"]
 
   inputs.forEach(function(input) { 
    let output = $("input#" + input).val()
    $("." + input).text(output)

    });
  }); 
});