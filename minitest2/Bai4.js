
let b = 0
for (let i = 0; i< arra;) {
    let check = false
    for (let j = 2; j < array[i]; j++) {
        if (array[i] % j === 0) {
            check = true
            break
        }
    }
    if (!check) {

        b += parseInt(array[i])
    }
    i++
}
document.write(array)
document.write("tổng sốguyên tố : " + b)