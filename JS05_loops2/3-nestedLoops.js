// * ============================================
// *            NESTED LOOPS
// * ============================================

console.log("** NESTED FOR **")

let result
line = ""
for (let row = 1; row <= 10; row++){
    for(let col = 1; col <= 10 ; col++){
        result = row * col
        line += result + "\t"
        
    }
    line += "\n"
}
console.log(line);
