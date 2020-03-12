let myHeaders = new Headers();

let requestOptions = {
  method: "GET",
  headers: myHeaders,
  redirect: "follow"
};

fetch("https://dog.ceo/api/breeds/image/random", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log("error", error));

function renderQuestion() {
  let optionsHTML = `
  <label for="numPictures">How many random dog pictures do you want?</label>
  <select name="numPictures" size="5">
  `;
  for (let i = 1; i <= 50; i++) {
    // loop for (1-50) inclusive
    optionsHTML += `<option value="${i}">${i}</option>`;
  }
  optionsHTML += "</select>";
  return optionsHTML;
}

function handleFormSubmit() {
  $("#form").on("click", ".submit", function(event) {
    event.preventDefault();
    console.log("form submit handled");
  });
}

function renderResult() {
  console.log("result rendered");
}

function renderForm() {
  console.log("form rendered");
  let formHTML = renderQuestion();
  formHTML += "<input type='submit' class='submit'/>";
  $("#form").html(formHTML);
}

$(renderForm());
