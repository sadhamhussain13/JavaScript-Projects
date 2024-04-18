const btn = document.getElementById("btn")
const colortext = document.getElementById("color")
const wrap =  document.getElementById("wrap")
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']


// It can written as below mentioned like that
// btn.addEventListener("click", colorchg)
// function colorchg() {
//     let hexColor = '#'
//     for (let i=1;i<=6;i++){
//         hexColor += randHex()
//     }
//     // console.log(hexColor)
//     wrap.style.backgroundColor = hexColor
//     colortext.innerHTML = "Random Color: "+ hexColor
// }


function randHex(){
    let randIndex = Math.floor(Math.random() * hex.length)
    return hex[randIndex]
}

btn.addEventListener("click", function() {
    let hexColor = '#'
    for (let i=1;i<=6;i++){
        hexColor += randHex()
    }
    // console.log(hexColor)
    wrap.style.backgroundColor = hexColor
    colortext.innerHTML = "Random Color: "+ hexColor
})