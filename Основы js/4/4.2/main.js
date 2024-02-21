let calculator = {
    a: null,
    b: null,
    read(a, b){
        while(1){
        this.a = +prompt(`A:`, ``);
        this.b = +prompt(`B:`, ``);
        if (!isNull(this.a) && !isNull(this.b)) break;
        }
    },
    sum(){
        return this.a + this.b;
    },
    mul(){
        return this.a * this.b;
    }
};

calculator.read();
alert(calculator.sum());
alert(calculator.mul());


function isNull(a){
    if (a == null) return true;
    return false;
}