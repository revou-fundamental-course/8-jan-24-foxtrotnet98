/* perbedaan variabel const, var, let 
const = digunakan untuk nilai yg tidak berubah
*/
/*
const birthdate = "01-01-2021"
const phi = 3.14
let name = "anggit"
let age = 24

if (name == "anggit") {
    console.log("team lead")
} else {
    console.log("unknown")
}*/

/* 
loopig terdiri 3 bagian
1. inisialisasi mulai start nya -> let i=0;
2. kondisi looping berjalan -> i < 10;
3. menambahkan angka sampai kondisi terpenuhi -> i++;

for (let i = 0; i < 10; i++) {
    console.log(i)
}*/

const inputField = document.getElementById("squareside")
const countButton = document.getElementById("katikButton")

inputField.addEventListener('input', function () {
    const inputValue = inputField.value.trim()
    if (validateInput(inputValue)) {
        countButton.disabled = false
    } else {
        countButton.disabled = true
    }
})

function validateInput(input) {
    const integerRegex = /^-?\d+$/;
    return integerRegex.test(input)
}

