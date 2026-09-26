var Rules = document.querySelector("#Rules")
var RulesOpener = document.querySelector("#RulesOpener")
var RulesClose = document.querySelector("#RulesClose")

function closeWindow(element) {
    element.style.display = "none"
}

function openWindow(element) {
    element.style.display = "block"
}

RulesClose.addEventListener("click", function() {
    closeWindow(Rules)
})
RulesOpener.addEventListener("click", function() {
    openWindow(Rules)
    Rules.scrollTop = 0
})