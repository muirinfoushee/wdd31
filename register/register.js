
let participantCount = 1; // starts at 1


function participantTemplate(count) {
    return `
    <section class="participant${count}">
        <p>Participant ${count}</p>
        <div class="item">
            <label for="fname${count}"> First Name<span>*</span></label>
            <input id="fname${count}" type="text" name="fname${count}" required />
        </div>
        <div class="item activities">
            <label for="activity${count}">Activity #<span>*</span></label>
            <input id="activity${count}" type="text" name="activity${count}" />
        </div>
        <div class="item">
            <label for="fee${count}">Fee ($)<span>*</span></label>
            <input id="fee${count}" type="number" name="fee${count}" />
        </div>
        <div class="item">
            <label for="date${count}">Desired Date <span>*</span></label>
            <input id="date${count}" type="date" name="date${count}" />
        </div>
        <div class="item">
            <p>Grade</p>
            <select id="grade${count}" name="grade${count}">
                <option selected value="" disabled selected></option>
                <option value="1">1st</option>
                <option value="2">2nd</option>
                <option value="3">3rd</option>
                <option value="4">4th</option>
                <option value="5">5th</option>
                <option value="6">6th</option>
                <option value="7">7th</option>
                <option value="8">8th</option>
                <option value="9">9th</option>
                <option value="10">10th</option>
                <option value="11">11th</option>
                <option value="12">12th</option>
            </select>
        </div>
    </section>
    `;
}

const addButton = document.querySelector("#add"); 

addButton.addEventListener("click", () => {
    participantCount++;
    addButton.insertAdjacentHTML('beforebegin', participantTemplate(participantCount));
});


const form = document.querySelector("form"); 
const summary = document.querySelector("#summary");

form.addEventListener("submit", (event) => {
    event.preventDefault(); 

    const adultName = document.querySelector("#adult_name").value;

    let feeElements = [...document.querySelectorAll("[id^=fee]")];
    let total = feeElements.reduce((sum, feeInput) => sum + Number(feeInput.value || 0), 0);

    form.style.display = "none";

    summary.style.display = "block";
    summary.innerHTML = `Thank you ${adultName} for registering. You have registered ${participantCount} participants and owe $${total} in Fees.`;
});
