const removeFromArray = function(array, ...args) {
    //this function checks if args are in the array and removes the args.
    //for every arg, if the arg is not in the array, it adds it to a new array.
    //after completing one iteration of checks for an arg, the next arg is only
    //checked against the new array, not the inital array. the new array is re-initialized
    //at the begining of the arg check.

    let copyArray = array;
    let newArray = [];
    for (i=0; i<args.length; i++){
        let n = args[i];
        newArray = []; 
        for (j=0; j<copyArray.length; j++){
            if (!(n === copyArray[j])){
                newArray.push(copyArray[j]);
            }
        }
        copyArray = newArray;
    }
return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
