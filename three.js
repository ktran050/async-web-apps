function handleSubmit() {
  $("#form2").on("click", "#submit2", function(event) {
    event.preventDefault();
    let userInput = $("#breedInput").val();
    fetch(`https://dog.ceo/api/breed/${userInput}/images/random`)
      .then(function(result) {
        if (!result.ok) {
          throw new Error("result not ok");
        } else {
          return result.json();
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
  console.log("three handled");
  handleSubmit();
}

$(handleThree);
