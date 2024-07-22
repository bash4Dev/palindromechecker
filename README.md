# Palindrome Checker

A palindrome is a word or phrase that can be read the same way forwards and backwards, ignoring punctuation, case, and spacing.

__Note:__ You'll need to remove all __non-alphanumeric__ characters (punctuation, spaces and symbols) and turn everything into the same case (lower or upper case) in order to check for palindromes.


## Tasks

- You should have an *`input`* element with an __id__ of *`text-input`*.

- You should have a *`button`* element with an __id__ of *`check-btn`*.

- You should have a *`div`*, *`span`*, or *`p`* element with an __id__ of *`result`*.

- When you click on the *`#check-btn`* element without entering a value into the *`#text-input`* element, an alert should appear with the text "**Please input a value**".

- When the *`#text-input`* element only contains the letter **A** and the *`#check-btn`* element is clicked, the *`#result`* element should contain the text "**A is a palindrome**".


- When the *`#text-input`* element contains the text **eye** and the *`#check-btn`* element is clicked, the *`#result`* element should contain the text "**eye is a palindrome**".

- When the *`#text-input`* element contains the text **_eye** and the *`#check-btn`* element is clicked, the *`#result`* element should contain the text "**_eye is a palindrome**".

- When the *`#text-input`* element contains the text **race car** and the *`#check-btn`* element is clicked, the *`#result`* element should contain the text "**race car is a palindrome**".

- When the *`#text-input`* element contains the text **not a palindrome** and the *`#check-btn`* element is clicked, the *`#result`* element should contain the text "**not a palindrome is not a palindrome**".

- When the *`#text-input`* element contains the text **A man, a plan, a canal. Panama** and the *`#check-btn`* element is clicked, the *`#result`* element should contain the text "**A man, a plan, a canal. Panama is a palindrome**".

- When the *`#text-input`* element contains the text **never odd or even** and the *`#check-btn`* element is clicked, the *`#result`* element should contain the text "**never odd or even is a palindrome**".

- When the *`#text-input`* element contains the text **nope** and the *`#check-btn`* element is clicked, the *`#result`* element should contain the text "**nope is not a palindrome**".

- When the *`#text-input`* element contains the text **almostomla** and the *`#check-btn`* element is clicked, the *`#result`* element should contain the text "**almostomla is not a palindrome**".

- When the *`#text-input`* element contains the text **My age is 0, 0 si ega ym**. and the *`#check-btn`* element is clicked, the *`#result`* element should contain the text "**My age is 0, 0 si ega ym. is a palindrome**".

- When the *`#text-input`* element contains the text **1 eye for of 1 eye**. and the *`#check-btn`* element is clicked, the *`#result`* element should contain the text "**1 eye for of 1 eye. is not a palindrome**".

- When the *`#text-input`* element contains the text **`0_0 (: /-\ :) 0-0`** and the *`#check-btn`* element is clicked, the *`#result`* element should contain the text "**`0_0 (: /-\ :) 0-0` is a palindrome**".

- When the *`#text-input`* element contains the text **five`|\_/|`four** and the *`#check-btn`* element is clicked, the *`#result`* element should contain the text "**five`|\_/|`four is not a palindrome**".

- When the *`#text-input`* element contains an **alphanumeric palindrome**, the *`#result`* element should **correctly identify it as a palindrome**.

- When the *`#text-input`* element contains **a random sequence of alphanumeric characters that is not a palindrome**, the *`#result`* element should say **it is not a palindrome**.




Here's an explanation of how to handle the specified behavior in plain text:

1. **Check for Empty Input:**
   - When the button with the ID `#check-btn` is clicked, first check if the text input element with the ID `#text-input` is empty.
   - If it is empty, display an alert message saying "Please input a value".

2. **Check for Palindromes:**
   - When there is text in the `#text-input` element and the `#check-btn` button is clicked, retrieve the text from the `#text-input` element.
   - Determine if the text is a palindrome by comparing the original text to its reversed version. A palindrome reads the same backward as forward, ignoring spaces, punctuation, and capitalization.
   - To compare, remove any non-alphanumeric characters and convert all letters to lowercase.

3. **Update the Result:**
   - If the text is a palindrome, set the text of the element with the ID `#result` to display the input text followed by "is a palindrome".
   - If the text is not a palindrome, set the text of the `#result` element to display the input text followed by "is not a palindrome".

### Example Scenarios:
1. **Empty Input:**
   - If the input field is empty and the button is clicked, an alert should pop up with the message "Please input a value".

2. **Single Letter 'A':**
   - If the input field contains "A" and the button is clicked, the `#result` element should display "A is a palindrome".

3. **Simple Palindromes:**
   - If the input field contains "eye" and the button is clicked, the `#result` element should display "eye is a palindrome".
   - If the input field contains "_eye" and the button is clicked, the `#result` element should display "_eye is a palindrome".
   - If the input field contains "race car" and the button is clicked, the `#result` element should display "race car is a palindrome".

4. **Complex Palindromes:**
   - If the input field contains "A man, a plan, a canal. Panama" and the button is clicked, the `#result` element should display "A man, a plan, a canal. Panama is a palindrome".
   - If the input field contains "never odd or even" and the button is clicked, the `#result` element should display "never odd or even is a palindrome".

5. **Non-Palindromes:**
   - If the input field contains "not a palindrome" and the button is clicked, the `#result` element should display "not a palindrome is not a palindrome".
   - If the input field contains "nope" and the button is clicked, the `#result` element should display "nope is not a palindrome".
   - If the input field contains "almostomla" and the button is clicked, the `#result` element should display "almostomla is not a palindrome".



   To achieve the described behavior using JavaScript, you can use the following techniques:

### 1. **Event Handling:**
   - **Add Event Listener:** Attach an event listener to the `#check-btn` element to handle the click event.

### 2. **Form and Input Handling:**
   - **Retrieve Input Value:** Use methods to get the value from the `#text-input` element when the button is clicked.
   - **Check for Empty Input:** Verify if the retrieved input value is empty.

### 3. **Alert:**
   - **Display Alert:** Use the `alert()` function to show a message if the input is empty.

### 4. **String Manipulation:**
   - **Normalize Input:** Convert the input text to lowercase to make the palindrome check case-insensitive.
   - **Remove Non-Alphanumeric Characters:** Use regular expressions to remove spaces, punctuation, and other non-alphanumeric characters from the input.
   - **Reverse String:** Reverse the normalized input string to compare it with the original normalized string.

### 5. **DOM Manipulation:**
   - **Update HTML Content:** Change the text content of the `#result` element based on whether the input is a palindrome or not.

### 6. **Conditionals:**
   - **Conditional Statements:** Use `if-else` statements to determine if the input is a palindrome and update the result accordingly.

### 7. **Helper Functions (optional but recommended):**
   - **Create Helper Functions:** Write small, reusable functions to handle tasks like normalizing the input, checking for palindromes, and updating the result.

By combining these techniques, you can effectively implement the desired functionality without writing any actual code here. This structured approach ensures your code will be organized, readable, and maintainable.