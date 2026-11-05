function changeLanguage(language) {
    document.querySelectorAll(".language-switcher button").forEach(button => {
    button.classList.remove("active");
});

document.querySelector(
    `.language-switcher button[onclick="changeLanguage('${language}')"]`
).classList.add("active");

    document.querySelectorAll("[data-en]").forEach(element => {

element.innerHTML = element.getAttribute("data-" + language);
    });

    document.documentElement.lang = language;

    document.documentElement.dir =
        language === "ar" ? "rtl" : "ltr";
}