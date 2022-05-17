let n = +prompt("Nhập vào số phần tử của mảng: ")
let array = new Array(n)
for (let i = 0; i < array.length; i++) {
    array[i] = prompt("Nhập vào phần tử thứ " + (i + 1))
}
let b = 0
for (let i = 0; i< array.length;) {
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

