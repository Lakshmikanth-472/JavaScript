var op=prompt('Enter the operator +,-,*,/ ');
var firstNum=prompt('enter the first number');
var secondNum=prompt('enter second number');
let result;
if(op=='+'){
 result=firstNum+secondNum;
}
if(op=='-')
{
    result=firstNum-secondNum;
}
if(op='*')
{
    result=firstNum*secondNum;
}
if(op='/')
{
    result=firstNum/secondNum;
}
console.log(`${firstNum} ${op} ${secondNum} = ${result}`);
