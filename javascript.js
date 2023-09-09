document.addEventListener("DOMContentLoaded", function() {
const select = document.querySelector("select");
const body = document.querySelector("body");
const header = document.querySelector(".header")
const firstSection = document.querySelector(".first-section");
const signup = document.querySelector(".signup");
const third = document.querySelector(".third-section");
const quote = document.querySelector(".quote");
const cta = document.querySelector(".CTA");
const secondsignup = document.querySelector(".fourth-section button");


function update(bgColor, textColor, headerColor, firstSectionColor, signUp, thirdSection, quoteText, ctaBg, secondSignup, secondSignuptxt){
    body.style.backgroundColor = bgColor;
    body.style.color = textColor;
    header.style.backgroundColor = headerColor;
    firstSection.style.backgroundColor = firstSectionColor;
    signup.style.backgroundColor = signUp;
    third.style.backgroundColor = thirdSection;
    quote.style.color = quoteText;
    cta.style.backgroundColor = ctaBg
    secondsignup.style.backgroundColor = secondSignup;
    secondsignup.style.color = secondSignuptxt
}

select.addEventListener("change", () =>
    select.value === "black"
    ? update("#01040a", "#e2ecfd", "#01040a", '#01040a',"#200aae","#050422", "#e2ecfd","#200aae", "#e2ecfd", "#01040a")
    : update("white", "black", "#1f2937", "#1f2937", "#005eff"),
);
});