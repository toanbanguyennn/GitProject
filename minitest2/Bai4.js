let sum = 0
let n = 2
for (let i = 0; i < 500; ) {
    let check = false
    for (let j = 2; j < n; j++) {
        if (n % j === 0) {
            check = true
            break
        }
    }
    if (!check) {
        if (n <500 ){
        sum += n
        }
        i++
    }
    n++
}
document.write("tong " + n)