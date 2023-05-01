const repeatString = function(theString, n) {
    let output = "";
    if (n<0) {
        return 'ERROR';
    }
    for (i=0; i<n; i++){
        output += theString;
    }
    return output;
};

// Do not edit below this line
module.exports = repeatString;
