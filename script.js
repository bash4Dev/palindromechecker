const inputText = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
const resultMsg = document.getElementById("result");
// const inputValue = document.getElementById("text-input").value;

function checkPalindrome(check) {
    const cleaned = check.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    const reversed = cleaned.split('').reverse().join('');
    return cleaned === reversed;
}

function simpleCheck() {
    const inputValue = inputText.value;

    if (inputValue === "") {
        alert("Please input a value");
    } else if (checkPalindrome(inputValue)) {
        resultMsg.innerText = `${inputValue} is a palindrome`
    } else {
        resultMsg.innerText = `${inputValue} is not a palindrome`
    }
}

checkBtn.addEventListener("click", simpleCheck);