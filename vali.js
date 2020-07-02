const form = document.getElementById("sample-form");
const name = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const submitBtn = document.getElementById("submit-btn");

const errorsHolder = document.getElementById("errors-holder");

form.addEventListener("submit", (e) => {

    let messages = [];
    if(name.value === "" || name.value == null) {
        messages.push("Field is required!");
    }

    if(messages.length > 0) {
        e.preventDefault();
        errorsHolder.innerHTML = messages.join(", ");
    }
});
