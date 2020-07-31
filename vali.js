const form = document.getElementById("sample-form");
const name = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const submitBtn = document.getElementById("submit-btn");

const errorsHolder = document.getElementById("errors-holder");

form.addEventListener("submit", (e) => {


    
    let requiredFields = ["name","email"];
    var inputs = form.elements;
    var inputByIndex = inputs[0];
    var inputByName = inputs["username"];

    let messages = [];
    for (var i = 0; i < inputs.length; i++) {
        let currentInput = inputs.item(i);
        if(requiredFields.includes(currentInput.id)) {
            console.log("Field with ID: " + currentInput.id + " is REQUIERED");
            if(currentInput.value === "" || currentInput.value == null) {
                messages.push("Field is required!");
            }
        }
    }

    if(messages.length > 0) {
        e.preventDefault();
        errorsHolder.innerHTML = messages.join("<br>");
    }

    e.preventDefault();
});
