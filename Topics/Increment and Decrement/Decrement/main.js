// let i = 1;
// function sum () {
//     if (i <= 100) {
//         i = i + ++i;
//     } else {
//         console.log(i);
//     }
// }
// alert (sum());

function sum() {
    let i = 0;
    for (let j = 0; j <= 100; j++) {
        i += j;
    }
    alert(i);
}

sum()


//
// function sum(){
//     let sum = 0;
//     for (let i = 0; i <= 100; i++) {
//         sum += i;
//     }
//     alert(sum);
// }
// sum()
