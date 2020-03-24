function handleSubmit() {
  $("#form2").on("click", "#submit2", function(event) {
    event.preventDefault();
    let userInput = $("#breedInput").val();
    fetch(`https://dog.ceo/api/breed/${userInput}/images/random`)
      .then(function(result) {
        if (result.ok) {
          return result.json();
        } else {
          $("#container2").html("<p>ERROR: Breed not found</p>");
          throw new Error("breed not found");
        }
      })
      .then(function(result) {
        $("#container2").html(`<img src="${result.message}"></img>`);
      })
      .catch(function(error) {
        console.log("error", error);
      });
  });
}

function handleThree() {
  handleSubmit();
}

$(handleThree);
