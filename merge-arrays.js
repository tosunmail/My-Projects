const A = [12, 14, 16]; 
const B = [11, 13, 17];

function mergeSortedArrays (A , B) {
    return A.concat(B).sort((a,b) => a - b)
}

console.log(mergeSortedArrays(A , B));

