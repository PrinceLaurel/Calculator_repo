function calculate(x, y, op) {
    if (op === 'add') {
        return x + y;
    } 
    else if (op === 'sub') {
        return x - y;
    } 
    else if (op === 'multiply') {
        return x * y;
    }
    else if (op === 'divide') {
        if (y === 0){
            return "not defined";
        }
        else {
            return x / y;
        }
    }

}

module.exports = {
    calculate
};

