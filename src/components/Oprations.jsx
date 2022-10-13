let stack = [];
let mainNumber = '';
let showOpration = new String();
let itsAnswer = false;


export function PushNumber(number){
    if (stack.length < 4){
        if (typeof stack[stack.length -1] == 'number' && itsAnswer == true){
            Del();
            mainNumber += number.toString();
            showOpration += number.toString();
            ShowMonitor(showOpration);
            itsAnswer = false;
        } else {
            mainNumber += number.toString();
            showOpration += number.toString();
            ShowMonitor(showOpration);
        }
    }
}

export function PushPoint(){
    if (mainNumber != ''){
        mainNumber += '.';
        showOpration += '.';
        ShowMonitor(showOpration);
    }
}

export function PushOpration(opration){
    PushNumberTStack();
    if (stack.length == 1 || itsAnswer == true){
        if (typeof stack[stack.length - 1] == 'number'){
            stack.push(opration);
            showOpration += ` ${opration} `;
            ShowMonitor(showOpration);
            mainNumber = '';
            itsAnswer = false;
        }
    } else {
        Compute();
    }
}

export function Compute(){
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
        }
    }
    stack = []
    ShowMonitor(answer);
    showOpration = ''
    showOpration = answer.toString();
    mainNumber = answer.toString();
    itsAnswer = true;
    PushNumberTStack()
}

export default function ShowMonitor(str){
    document.getElementById('show-monitor').innerHTML = str
}

export function Del(){
    stack = [];
    ShowMonitor('0');
    showOpration = '';
    mainNumber = '';
    itsAnswer = false;
}

function PushNumberTStack(){
    if (mainNumber != ''){
        stack.push(Number(mainNumber));
    }
}