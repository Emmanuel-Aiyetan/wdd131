const form = document.querySelector("#ticketForm");
const type = document.querySelector("#type");
const extraField = document.querySelector("#extraField");
const extraLabel = document.querySelector("#extraLabel");
const extraInput = document.querySelector("#extraInput");
const output = document.querySelector("#output");

function updateExtraField() {

    if (type.value === "student") {
        extraField.hidden = false;
        extraLabel.textContent = "Student I#";
        extraInput.required = true;

    }

    else if (type.value === "guest") {
        extraField.hidden = false;
        extraLabel.textContent = "Access Code";
        extraInput.required = true;
    }

    else {
        extraField.hidden = true;
        extraInput.required = false;
    }

}
type.addEventListener("change", updateExtraField);
updateExtraField();

// Check if the chosen date is after today
function isPastDate(dateValue) {

    const today = new Date();
    today.setHours(0,0,0,0);

    const chosenDate = new Date(dateValue);

    return chosenDate <= today;

}


form.addEventListener("submit", function(event){

    event.preventDefault();

    output.innerHTML = "";

    const firstName = form.firstName.value.trim();
    const lastName = form.lastName.value.trim();
    const email = form.email.value.trim();
    const eventDate = form.eventDate.value;
    const userType = form.type.value;
    const extra = extraInput.value.trim();


    // Date validation
    if (isPastDate(eventDate)){
        output.textContent = "Please choose a date later than today.";
        return;
    }

    // Student validation
    if(userType === "student"){
        if(extra.length !== 9){
            output.textContent = "Student I# must be 9 digits.";
            return;
        }

    }

    // Guest validation
    if(userType === "guest"){
        if(extra !== "EVENT131"){
            output.textContent = "Access Code must be EVENT131.";
            return;
        }

    }

    output.innerHTML = `
        <h2>Ticket Created</h2>

        <p>${firstName} ${lastName}</p>
        <p>${userType}</p>
        <p>${eventDate}</p>
    `;

    form.reset();
    updateExtraField();

});