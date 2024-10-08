class CustomConsole {
    constructor(type,historyLog){
        this.type = type
        this.historyLog = []
    }

    log(...args){
        const logMessage = `${this.type}: ${args.join(', ')}`;
        this.historyLog.push(logMessage);
        return logMessage;
    }

    history() {
        return this.historyLog.join('\n');
    }

    clearHistory() {
        this.historyLog = [];
        return true;
    }
}
const myConsole = new CustomConsole('Regular');
const fancyConsole = new CustomConsole('Fancy');

console.log(myConsole.log([0, 1, 2, 3])); 
console.log(fancyConsole.log({ a: 1, b: 2 }));
console.log(myConsole.log("ok:", 1, 2, 3));
console.log(myConsole.history());
console.log(myConsole.clearHistory());           
console.log(myConsole.history());  