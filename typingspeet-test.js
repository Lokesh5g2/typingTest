let timer = document.getElementById("timer")
let quoteDisplay = document.getElementById("quoteDisplay")
let result = document.getElementById("result")
let resetBtn = document.getElementById("resetBtn")
let submitBtn = document.getElementById("submitBtn")
let quoteInput = document.getElementById("quoteInput")
let spinner = document.getElementById("spinner")
let counter = 0
let uniqueId
let quote = ""

function setTimer() {
    uniqueId = setInterval(function() {
        timer.textContent = counter
        counter += 1
    }, 1000)
}
setTimer()

function fetchQuote() {
    fetch("https://apis.ccbp.in/random-quote").then(function(response) {
        return response.json()
    }).then(function(jsonData) {
        quoteDisplay.textContent = jsonData.content
        spinner.classList.add("d-none")
        quote = jsonData.content
    })

}
submitBtn.addEventListener("click", function() {
    if (quoteInput.value != quote) {
        result.textContent = "mismatch"
    } else {
        result.textContent = "You did in " + counter + "seconds"
        clearInterval(uniqueId)
    }
})
resetBtn.addEventListener("click", function() {
    quoteDisplay.textContent = ""
    spinner.classList.remove("d-none")
    counter = 0
    fetchQuote()
})
fetchQuote()