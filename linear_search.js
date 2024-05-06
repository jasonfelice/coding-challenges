// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

function linear_search (list, target) {
    // Return index of target else null
    for (i in list ) {
        if(list[i] === target) return i;
    }
return null;
}

function verify(index) {
    if (index) {
        console.log(`Target found at: ${index}!`)
    } else {
        console.log('Target not found in list!')
    }
}

let numbers = [1,2,3,4]

result = linear_search(numbers, 4);
verify(result);