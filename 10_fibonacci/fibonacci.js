const fibonacci = function(n) {
    let prev2 = 1;
    let prev1 = 1;
    let next;
    n = +n;//convert strings to numbers.

    if (n <=0 ){
        return "OOPS";
    } else if ((n === 1) || (n===2) ){
        return 1;
    } else {
        for(i=3; i<=n; i++){
            next = prev1 + prev2;
            prev2 = prev1;
            prev1 = next;
        }
        return next;
    }
};

// Do not edit below this line
module.exports = fibonacci;
