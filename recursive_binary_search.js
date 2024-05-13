function recursive_binary (list, target) {
    if (!list) return false;
    let midpoint = Math.floor(list.length / 2);
    if (list[midpoint] === target) return true;
    if (list[midpoint] < target) return recursive_binary(list.slice(midpoint+1), target);
    if (list[midpoint] > target) return recursive_binary(list.slice(0, midpoint), target);
}

function verify(index) {
    if (index) {
        console.log(`Target found`)
    } else {
        console.log('Target not found in list!')
    }
}

let numbers = [1,2,3,4,5,6,7]

result = recursive_binary(numbers, 0);
verify(result);