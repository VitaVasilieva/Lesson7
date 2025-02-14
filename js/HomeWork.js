function Calculator () {
    this.read = function () {
        this.values = [
            parseFloat(prompt("Введіть перше число:")),
            parseFloat(prompt("Введіть друге число:")),
        ];
    };

    this.sum = function () {
        return this.values[0] + this.values[1];
    };

    this.mul = function () {
        return this.values[0] * this.values[1]
    };
}

const call = new Calculator ();
call.read();
console.log(call.sum());
console.log(call.mul());


