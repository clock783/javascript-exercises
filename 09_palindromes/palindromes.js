const palindromes = function (str) {
    //convert string to lowercase
    let lowerStrArr = str.toLowerCase();
    let strList = lowerStrArr.split('');
    
    //strip characters that are not letters or numbers
    let reg = new RegExp(/[a-z0-9]/);
    let stripped = strList.reduce((currTot, currVal)=>{
        if(reg.test(currVal)){
            currTot.push(currVal);
        }
        return currTot;
    },[]);

    //loop through and check equality of start and end indices. increase/reduce indices in every loop
    //  only check half the length rounded down. if length is odd, it will skip the middle.
    let stillPal = true;
    let i = 0;
    let right = stripped.length - 1;
    while(stillPal && (i+1)<=(stripped.length/2)){
        //3 items. i = 0, length is 3. test is 1 <= 1: passes!
        //4 items. i = 0, length is 4. test is 1<= 2: passes!
        if(stripped[i]!==stripped[right]){
            return false;
        }
        i++;
        right--;
    }
    return true
    // console.log(strList);
    // console.log(stripped);
};

// console.log(palindromes("A cat in a h-at!"));
// console.log(palindromes('Animal loots foliated detail of stool lamina.'));

// Do not edit below this line
module.exports = palindromes;
