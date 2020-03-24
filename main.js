let myHeaders = new Headers();

let requestOptions = {
  method: "GET",
  headers: myHeaders,
  redirect: "follow"
};

function renderQuestion() {
  let optionsHTML = `
  <label for="numPictures">How many random dog pictures do you want?</label>
  <select id="numPictures" name="numPictures" size="5" autocomplete="3" required>
  `;
  for (let i = 1; i <= 50; i++) {
    // loop for (1-50) inclusive
    if (i === 3) {
      optionsHTML += `<option value="${i}" selected>${i}</option>`;
    } else {
      optionsHTML += `<option value="${i}">${i}</option>`;
    }
  }
  optionsHTML += "</select>";
  return optionsHTML;
}

function handleFormSubmit() {
  $("#form").on("click", ".submit", function(event) {
    event.preventDefault();
    let containerHTML = renderResult($("#numPictures :selected").val());
    containerHTML.then(function(result) {
      console.log("result", result);
      $(".container").html(result);
    });
  });
}

async function renderResult(someNum, someResult) {
  let resultHTML = "";
  for (let i = 0; i < someNum; ++i) {
    await fetch("https://dog.ceo/api/breeds/image/random", requestOptions)
      .then(function(response) {
        return response.text();
      })
      .then(function(result) {
        resultHTML += `<img src="${JSON.parse(result).message}">`;
        console.log(`inside loop: ${resultHTML}`);
      })
      .catch(function(error) {
        console.log("error", error);
      });
  }
  console.log(`outside loop: ${resultHTML}`);
  return resultHTML;
}

function renderForm() {
  let formHTML = renderQuestion();
  formHTML += "<input type='submit' class='submit'/>";
  $("#form").html(formHTML);
}

function handleEverything() {
  renderForm();
  handleFormSubmit();
}

$(handleEverything);
