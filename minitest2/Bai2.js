let n = +prompt("Nhập vào số phần tử của mảng: ")
let array = new Array(n)
for ( i = 0; i < array.length; i++) {
    array[i] = prompt("Nhập vào phần tử thứ " + (i + 1))
}
let dem =0
let a = "a"
    for (let i = 0; i < array.length; i++) {
        if (array[i] === a) {
            dem += 1 ;
        }
    }
    document.write("so phan tu a la :" + dem)