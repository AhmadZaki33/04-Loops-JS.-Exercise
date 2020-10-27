/* eslint-disable no-unused-vars */
function repeat (string,num) {
    let newString = ''

    for (let i=1; i<=num; i++) {
        newString += string
    }
    return newString
    
}

function sum (arr) {
    let newSum = 0
    for (let i=0; i<arr.length; i++) {
        newSum += arr[i]
    }

    return newSum
}


function join (arr,delimiter) {
    let newString = ''
    for (let i=0; i<arr.length; i++) {
        newString += arr[i] 
        
        if (typeof delimiter !== 'undefined' && i<arr.length-1) {
            newString += delimiter
        }
        
    }
    return newString
}








function gridGenerator (num) {
    let grid = ''

    for (let i=0; i<num; i++) {
        for (let j=0; j<num; j++) {
            if ((i+j)%2 === 0) {
                grid += '#';
            } else {
                grid += ' ';
            }
        }
        grid += '\n';
    } 
    return grid;
}


const paramify = (obj) => {
    let arr = [];

    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            arr.push(`${key}=${obj[key]}`)
        }
    }

    return arr.sort()
    .join('&')
    // or using previous function join(arr,delimiter)
    // return join(arr.sort(),'&') 
}



const paramifyObjectKeys = (obj) => {
   return Object.keys(obj).map(key => `${key}=${obj[key]}`)
   .sort()
   .join('&')
}








function sort (unsortedArr) {

    for(let i = unsortedArr.length-1; i>0; i--) {
        for (let j=unsortedArr.length-1; j>0; j--) {


            /* if the number ahead in the array is 
            smaller than the number before it then 
            change position by re-assigning them 
            to each other */

            if (unsortedArr[j] < unsortedArr[j-1]) {

                /* CAN NOT do the following:
                unsortedArr[j] = unsortedArr[j-1];
                unsortedArr[j-1] = unsortedArr[j]

                - because "unsortedArr[j]" will be re-assigned forever
                and lose it's original value before 
                giving it to the unsortedArr[j-1]

                - so we need to store one copy of unsortedArr[j] 
                in a variable

                */
                let currentNum = unsortedArr[j];
                unsortedArr[j] = unsortedArr[j-1];
                unsortedArr[j-1] = currentNum  
            }
        }
    }

    return unsortedArr
    
}


