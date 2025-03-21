
const button = document.querySelectorAll('button');
const input = document.querySelector("input");
var answer = 'undefined'
var i = -1

button.forEach((button) => {
  button.addEventListener("click", () => {
    //let outputArray = Array.from(input.value)
    //console.log(outputArray) 
    if (button.value == 'clear'){
        input.value = ''
        answer = 'undefined'
    }
    else if (button.value == 'enter'){
        finalinput = Array.from(input.value)
        i = finalinput.findLastIndex(item => (item == '*' || item == '/' || item == '+' || item == '-'))
        
        a = finalinput.slice(0, i)
        a = a.join("")
        a = Math.floor(parseFloat(a))

        b = finalinput.slice(i + 1) 
        b = b.join("")
        b = Math.floor(parseFloat(b))
        
        if (i >= 0) {
            answer = calculate(finalinput, a, b)
            length = answer.toString().length
        }
        else {
            answer = input.value
            length = answer.toString().length
            
        }
        
        input.value = answer
        //console.log(input.value.at(length - 1))
        //console.log(typeof(input.value))
        
        //console.log(Array.from(input.value))
    }
    else if (button.value < 10 && answer == 'undefined') {
        //console.log(input.value)
        //console.log(answer)
        input.value = input.value.concat("", button.value)
    }
    else if (button.value < 10 && answer != 'undefined' && (input.value.at(length) == '+' || input.value.at(length) == '-' || input.value.at(length) == '*' || input.value.at(length) == '/')) {
        input.value = input.value.concat("", button.value)
    }
    else if (button.value < 10 && answer != 'undefined') {
        //console.log('start again')
        input.value = button.value
        answer = 'undefined'
    }
    
    else {
        if (input.value.includes("*") || input.value.includes("/")){
            alert("Only one operation at a time")
        }
        else if (input.value.includes("+") || input.value.includes("-")) {
            if (input.value.indexOf("+") == 0 || input.value.indexOf("-") == 0){
                input.value = input.value.concat("", button.value)
                 
            }
            else {
                alert("Only one operation at a time")
            }
        }
        else {
            input.value = input.value.concat("", button.value)
            console.log(input.value.at(i))
            
            //console.log(input.value.indexOf("+"))
            //console.log(input.value)
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
