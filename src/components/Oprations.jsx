let stack = [];
let mainNumber = '';
let showOpration = new String();


export function PushNumber(number){
    if (stack.length < 4){
        if (typeof stack[stack.length -1] == 'number'){
            alert('Input opration between numbers !!!');
        } else {
            mainNumber += number.toString();
            showOpration += number.toString();
            ShowMonitor(showOpration);
        }
    } else {
        Compute();
    }
}

export function PushOpration(opration){
    PushNumberTStack();
    if (typeof stack[stack.length - 1] == 'number'){
        stack.push(opration);
        showOpration += ` ${opration} `
        ShowMonitor(showOpration);
        mainNumber = ''
    } else {
        alert('First input Operand !!!')
    }
}

export function Compute(){
debugger;

    PushNumberTStack();
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
    stack = []
    ShowMonitor(answer);
    showOpration = ''
    showOpration = answer.toString();
    mainNumber = answer.toString();
    PushNumberTStack()
}

export default function ShowMonitor(str){
    document.getElementById('show-monitor').innerHTML = str
}

export function Del(){
    stack = []
    ShowMonitor('0')
    showOpration = ''
}

function PushNumberTStack(){
    if (mainNumber != ''){
        stack.push(Number(mainNumber));
    }
}