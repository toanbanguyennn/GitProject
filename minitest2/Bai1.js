
    let n = +prompt("Nhập vào số phần tử của mảng: ")
    let array = new Array(n)
    for ( i = 0; i < array.length; i++) {
        array[i] = prompt("Nhập vào phần tử thứ " + (i+1))

}
let dem = 0
for (i=0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
        dem += 1;
    }
    // document.getElementById("result").innerHTML = dem
}
document.write("so luong "+ dem)