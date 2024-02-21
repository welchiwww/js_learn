/*
let calculator = {
    a: null,
    b: null,
    read(){
        while(1){
        this.a = +prompt(`A:`, ``);
        this.b = +prompt(`B:`, ``);
        if (!isNullOrEmpty(this.a) && !isNullOrEmpty(this.b)) break;
        }
    },
    sum(){
        return this.a + this.b;
    },
    mul(){
        return this.a * this.b;
    }
};
*/

/*Task 2
function Calculator(){
    this.read = function(a, b){
        while(1){
        this.a = +prompt(`A:`, `0`);
        this.b = +prompt(`B:`, `0`);
        if (!isNull(this.a) && !isNull(this.b)) break;
        }
    }
    this.sum = function(){
        return this.a + this.b;
    }
    this.mul = function(){
        return this.a * this.b;
    }

}

calculator = new Calculator();
calculator.read();
alert(calculator.sum());
alert(calculator.mul());


function isNull(a){
    if (a == null) return true;
    return false;
}
*/

/* Task 3 acc
function Accumulator(startVal){
    this.value = startVal;
    this.read = function(){
        a = +prompt(`Число:`, `0`);
        this.value += a;
    }
}

let acc = new Accumulator(1);
acc.read();
acc.read();
alert(acc.value);
*/