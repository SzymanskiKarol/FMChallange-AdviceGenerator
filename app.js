const adviceId = document.getElementById("advice-id");
const adviceContent = document.getElementById("advice-content");
const nextAdviceButton = document.getElementById("button");

window.onload = () => {
    generateAdvice()
}

nextAdviceButton.addEventListener('click', () => {
    generateAdvice()
});

function generateAdvice() {
    fetch("https://api.adviceslip.com/advice")
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            adviceId.innerText = "Advice: #" + data.slip.id;
            adviceContent.innerText = data.slip.advice;
        })
        .catch((error) => {
            console.error('Error:', error);
        });
}