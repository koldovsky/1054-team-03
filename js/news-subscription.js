const email = document.getElementById("email");
const form = document.getElementById("form");
const errorMsg = document.getElementById("error-msg-id");
const submitBtn = document.querySelector(".subscription-card__submit-btn");
const submitBtnText = document.querySelector(".submit-btn-text");

const isValidEmail = email => {
    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(String(email).toLowerCase());
}

form.addEventListener("submit", (e) => {
    if(email.value === "" || email.value == null){
        e.preventDefault();       
        errorMsg.innerText = "Email is required for subscription";       
    }

    else if(email.value.length > 0){      
        if(!isValidEmail(email.value)){           
            errorMsg.innerText = "Provide valid email address";
            e.preventDefault();
            return;        
        }
        e.preventDefault();

        submitBtnText.innerText = "";
        submitBtn.classList.add("btn-loading");
    }
})