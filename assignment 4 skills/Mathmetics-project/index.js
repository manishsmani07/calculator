function Addition()
{   let number1=Number(window.prompt("Enter the first number:"));
    let number2=Number(window.prompt("Enter the second number:"));
    document.getElementById("result").textContent=`The addition of two number is ${number1+number2}`
}

function subtraction()
{   let number1=Number(window.prompt("Enter the first number:"));
    let number2=Number(window.prompt("Enter the second number:"));
    document.getElementById("result").textContent=`The subtraction of two number is ${number1-number2}`
}

function multiplication()
{   let number1=Number(window.prompt("Enter the first number:"));
    let number2=Number(window.prompt("Enter the second number:"));
    document.getElementById("result").textContent=`The subtraction of two number is ${number1*number2}`  
}

function division()
{   let number1=Number(window.prompt("Enter the first number:"));
    let number2=Number(window.prompt("Enter the second number:"));
    document.getElementById("result").textContent=`The subtraction of two number is ${number1/number2}`  
}

function oddoreven()
{   let number1=Number(window.prompt("Enter the nubmer:"));
    number1%2==0?document.getElementById("result").textContent=`The number is even`:document.getElementById("result").textContent=`The number is odd`;
}

function findthesign()
{   let number1=Number(window.prompt("Enter the nubmer:"));
    number1>=0?document.getElementById("result").textContent=`The number is positive`:document.getElementById("result").textContent`The number is negative`;  
}

function factorial()
{   let number1=Number(window.prompt("Enter the number:"));
    let fact=1;
    for(let i=1;i<=fact;i++)
        fact*=i;
    document.getElementById("result").textContent=`The factorial of entered number is ${fact}`;
}
function reminder()
{   let number1=Number(window.prompt("Enter the number1:"));
    let number2=Number(window.prompt("Enter the number2:"));
    document.getElementById("result").textContent=`The remainder is ${number1%number2}`;
}