
const button = document.querySelectorAll('button');
const input = document.querySelector("input");

button.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.value == 'clear'){
        input.value = ''
    }
    else if (button.value == 'enter'){

        finalinput = Array.from(input.value)
        finalinput = finalinput.filter(item => item != ' ');
        i = finalinput.findIndex(item => (item == '*' || item == '/' || item == '+' || item == '-'))
        
        a = finalinput.slice(0, i)
        a = a.join("")
        a = Math.floor(parseFloat(a))

        b = finalinput.slice(i + 1) 
        b = b.join("")
        b = Math.floor(parseFloat(b))
        
        if (i >= 0) {
            answer = calculate(finalinput, a, b)
        }
        else {
            answer = input.value
        }
        
        input.value = answer
    }
    else if (button.value < 10) {
        input.value = input.value.concat(" ", button.value)
    }
    else {
        if (input.value.includes("*") || input.value.includes("/") || input.value.includes("+") || input.value.includes("-")){
            alert("Only one operation at a time")
        }
        else {
            input.value = input.value.concat(" ", button.value)
        }
    }

  });
});

function calculate(input, a, b){
    return input.includes('*') ? (a * b)
    : input.includes('/') ? (a / b)
    : input.includes('+') ? (a + b)
    : input.includes('-') ? (a - b)
    : false;
}
