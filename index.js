// let age = prompt("your age?")
// let distance = Number( prompt('how long is your distance?'))
// if(age <= 18) {
//     let fare = 0.21 * 0.8 * distance
//     console.log("You are junior and your ticket fare is ",fare)
//     alert(`You are junior and your ticket fare is £ ${fare}`)
// } else if(age>= 65){
//     let fare = 0.21 * 0.6 * distance
//     console.log("You are senior and your ticket fare is £ ",fare)
//     alert(`You are senior and your ticket fare is £ ${fare}`)
// } else {
//     let fare = 0.21 * distance
//     console.log("You do not have discount and your ticket fare is ",fare)
//     alert(`You do not have discount and your ticket fare is £ ${fare}`)
// }
let route = prompt("Enter numbers only\n Choose which station you will go\n 1 OX-London, 20km\n 2 Sheffield-London, 33KM\n")
let age = prompt("your age?")
let distance = 0
if(route == 1) {distance = 20}
if(route == 2) { distance = 33}
if(route == 1 && age <= 18){
    let fare = 0.21 * 0.8 * distance
    console.log("You are junior and your ticket fare is ",fare)
    alert(`You are junior and your ticket fare is £ ${fare}`)
} else if(route == 1 && age>= 65){
    let fare = 0.21 * 0.6 * distance
    console.log("You are senior and your ticket fare is £ ",fare)
    alert(`You are senior and your ticket fare is £ ${fare}`)
} else if (route == 1 && 18<= age<= 65) {
    let fare = 0.21 * distance
    console.log("You do not have discount and your ticket fare is ",fare)
    alert(`You do not have discount and your ticket fare is £ ${fare}`)
}

if(route == 2 && age <= 18){
    let fare = 0.21 * 0.8 * distance
    console.log("You are junior and your ticket fare is ",fare)
    alert(`You are junior and your ticket fare is £ ${fare}`)
} else if(route == 2  && age>= 65){
    let fare = 0.21 * 0.6 * distance
    console.log("You are senior and your ticket fare is £ ",fare)
    alert(`You are senior and your ticket fare is £ ${fare}`)
} else if (route == 2 && 18<= age <= 65) {
    let fare = 0.21 * distance
    console.log("You do not have discount and your ticket fare is ",fare)
    alert(`You do not have discount and your ticket fare is £ ${fare}`)
}
