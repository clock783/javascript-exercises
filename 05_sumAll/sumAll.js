const sumAll = function(a,b) {
    //check types of inputs and confirm they are positive integers
    let args = [a,b];
    //console.log(args);
    
    for(i=0; i<args.length; i++){
        if (Number.isInteger(args[i]) === false){
            //console.log('not a number');
            return 'ERROR';
        }    
        if (args[i] < 0){
            //console.log('less than zero')
            return 'ERROR';
        }
    }
    //.forEach does not work in this instance because there is no way to
    //stop or break a forEach loop
    // args.forEach((item) =>{
    //     if (Number.isInteger(item) === false){
    //         console.log('not a number');
    //         return 'ERROR';
    //     }
    //     if (item < 0){
    //         console.log('less than zero')
    //         return 'ERROR';
    //     }
    // })
    
    //grab upper and lower numbers
    let low = Math.min(a,b);
    let high = Math.max(a,b);
    //use math instead of loops
    return (high + low)*((high-low+1)/2);

};

// Do not edit below this line
module.exports = sumAll;
