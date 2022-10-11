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
        // alert('he')
    },
    "pushOpration":function (opration){
        pass
    }
}