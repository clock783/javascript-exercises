const sumAll = function(a,b) {
    //check types of inputs and confirm they are positive integers
    let args = [a,b];
    args.forEach((item) =>{
        if (!Number.isInteger(item) && (item < 0)){
            return 'ERROR';
        }
    })
    //grab upper and lower numbers
    let low = Math.min(a,b);
    let high = Math.max(a,b);
    //use math instead of loops
    return (high + low)*((high-low+1)/2);

};

// Do not edit below this line
module.exports = sumAll;
