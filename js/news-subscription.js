import * as subscriptionAproveResponceModalComponents from "./modals/news-subscription-aprove-responce-modal.js";

const email = document.getElementById("email");
const form = document.getElementById("form");
const errorMsg = document.getElementById("error-msg-id");
const submitBtn = document.querySelector(".subscription-card__submit-btn");
const submitBtnText = document.querySelector(".submit-btn-text");

// When the user clicks cross of the modal, close it
subscriptionAproveResponceModalComponents.span.onclick = function () {
    subscriptionAproveResponceModalComponents.modal.style.display = "none";
}
// When the user clicks OK of the modal, close it
subscriptionAproveResponceModalComponents.okBtn.onclick = function () {
    subscriptionAproveResponceModalComponents.modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == subscriptionAproveResponceModalComponents.modal) {
        subscriptionAproveResponceModalComponents.modal.style.display = "none";
    }
}

const isValidEmail = email => {
    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(String(email).toLowerCase());
}

form.addEventListener("submit", (e) => {
    if (email.value === "" || email.value == null) {
        e.preventDefault();
        errorMsg.innerText = "Email is required for subscription";
    }

    else if (email.value.length > 0) {
        if (!isValidEmail(email.value)) {
            errorMsg.innerText = "Provide valid email address";
            e.preventDefault();
            return;
        }
        e.preventDefault();

        console.log('was here');
        errorMsg.innerText = "";
        submitBtnText.innerText = "";
        submitBtn.classList.add("btn-loading");

        setTimeout(() => {
            subscriptionAproveResponceModalComponents.modal.style.display = "block";
            submitBtn.classList.remove("btn-loading");
            submitBtnText.innerText = "Submit";
            email.value = "";
        }, 2500);
    }
});