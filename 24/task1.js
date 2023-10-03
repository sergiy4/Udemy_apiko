function Calculator(){

}

Calculator.prototype.sum = function(a, b) {
    return a + b;
}
Calculator.prototype.subtract = function(a,b){
    return a - b
}

AdvancedCalculator.prototype = Object.create(Calculator.prototype);
function AdvancedCalculator (){

}

AdvancedCalculator.prototype.multiple = function(a, b){
    return  a*b
}

AdvancedCalculator.prototype.divide = function(a, b){
    return  a/b
}

const obj = new AdvancedCalculator()

console.log(obj)