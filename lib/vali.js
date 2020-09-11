class Validator {
	constructor(formSelector, options) {
		this.form = document.querySelector(formSelector)
		this.options = options
		this.errorsHolder = document.querySelector(this.options.errorsElement)
		this.messages = []
		this.#init()
	}
	#init() {
		console.log("initializing vali.js!")
		this.form.addEventListener("submit", (event) => {
			alert("submiting form!")
			this.#validate(event)
		});
	}
	#validate(e) {
		let requiredFields = this.options.requiredFields
		let formInputs = this.form.elements;
		for (var i = 0; i < formInputs.length; i++) {
			let currentInput = formInputs.item(i);
			if(requiredFields.includes(currentInput.id)) {
				console.log("Field with ID: " + currentInput.id + " is REQUIERED");
				if(currentInput.value === "" || currentInput.value == null) {
					this.messages.push("Field is required!");
				}
			}
		}
	
		if(this.messages.length > 0) {
			e.preventDefault();
			this.errorsHolder.innerHTML = this.messages.join("<br>");
			if(this.options.errorsClass) {
                            this.errorsHolder.classList.add(this.options.errorsClass);
                        }
		}
		
	
		e.preventDefault();
	}
}
