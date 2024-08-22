const inputText = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
const resultMsg = document.getElementById("result");

const isPalindrome = (input) => {
    let word = input.toLowerCase();
    word = word.replace(/[^a-z0-9]/gi, '');

    let reversedWord = word.split('').reverse().join('');
    return word === reversedWord;
}

function checkPal() {
    const inputValue = inputText.value;

    if (inputValue === '') {
        resultMsg.textContent = 'Please enter a value!'
    } else if (isPalindrome(inputValue)) {
        resultMsg.textContent = `${inputValue} is a palindrome.`
    } else {
        resultMsg.textContent = `${inputValue} is not a palindrome.`
    }

    // resultMsg.textContent = isPalindrome(inputValue) 
    //     ? `${inputValue} is a palindrome.`
    //     :  inputValue === ""
    //         ? "Please input a value"
    //         : `${inputValue} is not a palindrome.`;
}

checkBtn.addEventListener("click", checkPal);
inputText.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        checkPal();
    }
});