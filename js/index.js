const passwordEl = document.querySelector(".form-input--password");

const eyeContainerEl = document.querySelector(".password-eye-container");

const eyeImgEL = eyeContainerEl.getElementsByTagName("img")[0];

passwordEl.addEventListener("keyup", (e) => {
    e.target.value.length ? eyeContainerEl.classList.remove("hidden") : eyeContainerEl.classList.add("hidden");
})


eyeContainerEl.addEventListener("click", () => {
    if(eyeImgEL.classList.contains("eye-off")) {
        eyeImgEL.src="../assets/img/eye.jpeg";
        eyeImgEL.classList.remove("eye-off");
        passwordEl.type="text";
    }
    else {
        eyeImgEL.src="../assets/img/eye_off.png";
        eyeImgEL.classList.add("eye-off");
        passwordEl.type="password"
    }
})