const button = document.querySelector( 'button' ); 
let resultdiv = document.createElement('div')
resultdiv.id= 'result'
document.getElementById("wrapper").appendChild(resultdiv);

button.addEventListener( "click", displayStats)
function displayStats(){
    // console.log('clicked'); // Button object
    const input = (document.getElementById('input').value);
    let operator = input.split(/[+\-*/]/)
    let operand1 = parseInt(operator[0])
    let operand2 = parseInt(operator[1])

    var operation = input.match(/[+\-*/]/)[0];// it will match the first occurence of any char
    // [0] This retrieves the first (and only) element of the array

    switch(operation){
        case '+':
            resultdiv=operand1+operand2
            break
        case '-':
            resultdiv=operand1-operand2
            break
        case '*':
            resultdiv=operand1*operand2
            break

        case '/':
            resultdiv=operand1/operand2
            break
    }

    let text = `The Result is ${resultdiv}`
    console.log(text)
    document.getElementById('result').innerHTML = text
}


