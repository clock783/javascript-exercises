const removeFromArray = function(array, ...args) {
    // console.log(argunments.length);
    let newArray = [];
    for (i=0; i<args.length; i++){
        let n = args[i];
        for (j=0; j<array.length; j++){
            if (!(n === array[j])){
                newArray.push(array[j]);
            }
        }
    }
return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
