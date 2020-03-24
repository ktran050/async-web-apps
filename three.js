function handleSubmit() {
  $("#form2").on("click", "#submit2", function(event) {
    event.preventDefault();
    console.log("breed value", $("#breedInput").val());
  });
}
function handleThree() {
  console.log("three handled");
  handleSubmit();
}

$(handleThree);
