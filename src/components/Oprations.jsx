var stack = [];

function PushNumber(number){
    if (typeof stack[length -1] == 'number'){
        stack.push(number);
    } else {
        alert('Input opration between numbers !!!');
    }
}

function PushOpration(opration){
    if (typeof stack[length -1] == 'string'){
        stack.push(opration);
    } else {
        alert('First input Operand !!!')
    }
}

function compute(){
    let answer = 0;
    let popStack = stack.pop();
    if (typeof popStack == 'number'){
        let opration = stack.pop()
        let firstOpe = stack.pop()
        if (opration == '+'){
            answer += popStack + firstOpe;
        } else if (opration == '-'){
            answer += firstOpe - popStack 
        } else if (opration == '*'){
            answer += firstOpe * popStack
        } else if (opration == '/'){
            answer += firstOpe / popStack
        } else{
            alert('Input is wrong !!!!')
        }
    } else {
        alert('input latest operand !!!');
    }
}