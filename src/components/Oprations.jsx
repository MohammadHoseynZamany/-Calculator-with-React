let Oprations;
export default Oprations = {
    "stack": [],
    "showMonitor": "",
    "toShow": function (){
        let showStr = " ";
        for (let i in this.stack){
            showStr += this.stack[i].toString();
        }
        this.showMonitor = showStr;
    },
    "pushNumber": function (number){
        this.stack.push(number);
        this.toShow();
        console.log(this.showMonitor)
    },
    "pushOpration":function (opration){
        pass
    }
}