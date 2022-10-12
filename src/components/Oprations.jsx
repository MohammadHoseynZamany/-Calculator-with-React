let stack = [];
let mainNumber = new String();
let showOpration = new String();

export function PushNumber(number){
    if (stack.length < 4){
        if (typeof stack[stack.length -1] == 'number'){
            alert('Input opration between numbers !!!');
        } else {
            stack.push(number);
            showOpration += number.toString();
            ShowMonitor(showOpration);
        }
    } else {
        Compute();
    }
}

export function PushOpration(opration){
    if (typeof stack[stack.length - 1] == 'number'){
        stack.push(opration);
        showOpration += ` ${opration} `
        ShowMonitor(showOpration);
    } else {
        alert('First input Operand !!!')
    }
}

export function Compute(){
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

    ShowMonitor(answer);
    showOpration = answer.toString();
    stack.push(answer);
}

export default function ShowMonitor(str){
    document.getElementById('show-monitor').innerHTML = str
}

export function Del(){
    stack = []
    ShowMonitor('0')
}