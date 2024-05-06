// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

function binary_serach (list, target) {
    // Return index of target else null
   let first = 0;
   let last = list.length - 1; 
    
    while(first <= last) {
        let midpoint = Math.floor((first+last)/2);
        
        if (list[midpoint] === target) {
            return midpoint;
        } else if(list[midpoint] < target) {
            first = midpoint + 1;
        } else {
            last = midpoint - 1;
        }
    }
}

function verify(index) {
    if (index) {
        console.log(`Target found at: ${index}!`)
    } else {
        console.log('Target not found in list!')
    }
}

let numbers = [1,2,3,4]

result = binary_serach(numbers, 1);
verify(result);