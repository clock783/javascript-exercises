const add = function(a,b) {
	return a + b;
};

const subtract = function(a,b) {
	return a - b;
};

const sum = function(arr) {
	return arr.reduce((sum,current)=>sum + current,0);
};

const multiply = function(arr) {
  return arr.reduce((product,current)=>product * current,1);

};

const power = function(a,n) {
	return a ** n;
};

const factorial = function(n) {
  if(n <= 1){
    return 1;
  } else{
    let product = 1;
    for(i = n; i>1; i--){
      product *= i;
    }
    return product;
  }
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
