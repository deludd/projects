function max(arr) {
    let max = arr[0]

    for(let i=1; i<arr.length; i++){
        if(arr[i] > max){
            max = arr[i]
        }
    }
    return max
}

function maxRecursion(arr) {
    let maxNum = -99999

    for(let el in arr){
        let val = arr[el]

        if (Array.isArray(val)) {
            val = maxRecursion(val)
        }else if(val > maxNum) {
            maxNum = val
        }
    }
    return maxNum
}

console.log(max([8]), 'one element test, must return 8');
console.log(max([1, 8, 37, 5, 17]), '5 elements test, must return 37');
console.log(max([8, 17]), '2 elements test, must return 17');
console.log('-----------------------------------')
console.log(maxRecursion([8]), 'one element test, must return 8');
console.log(maxRecursion([1, 8, 37, 5, 17]), '5 elements test, must return 37');
console.log(maxRecursion([8, 17]), '2 elements test, must return 17');