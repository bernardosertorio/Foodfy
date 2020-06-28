

// Hide and show sessions in recipes

const esconder = document.querySelectorAll("#action");

for (let i = 0; i < esconder.length; i++) {
esconder[i].addEventListener('click', function() {
    document.querySelector("#list" + i).classList.toggle("esconder")
    if(document.querySelector("#list" + i).classList.contains("esconder")){
        esconder[i].innerHTML = "show"
    } else {
        esconder[i].innerHTML = "to hide"
    }
  })
}



// Add ingretientes in the form

//Buttons function
const addIngredientBtn = document.querySelector(".add-ingredient");
const addStepBtn = document.querySelector(".add-step");

if (addIngredientBtn && addStepBtn) {
addIngredientBtn.addEventListener("click", addIngredient);
addStepBtn.addEventListener("click", addStep);


//Add New Recipe Ingredient
function addIngredient() {
    const ingredients = document.querySelector("#ingredients");
    const fieldContainer = document.querySelectorAll(".ingredient");

    // Clone the last added ingredient
    const newField = fieldContainer[fieldContainer.length - 1].cloneNode(true);
    //Don't add new value if the last one was null
    if (newField.children[0].value = "") 
        return false;

    // Reset input value
    newField.children[0].value = "";
    ingredients.appendChild(newField);
}

//Add New Recipe Step
function addStep() {
    const steps = document.querySelector("#preparation")
    const fieldContainer = document.querySelectorAll(".preparation_steps")

    //Clone the last added step
    const newField = fieldContainer[fieldContainer.length - 1].cloneNode(true);
    //Don't add new value if the last one was null
    if (newField.children[0].value == "")
        return false;

    //Reset input value
    newField.children[0].value = "";
    steps.appendChild(newField);
  }
}


// Delete Recipe

const formDelete = document.querySelector("#form-delete")
formDelete.addEventListener("submit", event => {
    const confirmation = confirm("Do you want delete?")
    if (!confirmation) {
        event.preventDefault()
    }
 })



 


