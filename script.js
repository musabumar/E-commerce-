// let card1 = document.querySelector(".cards")

// card1.addEventListener("mouseenter" , function(){
//     card1.innerHTML.transform = scale(1.4);
    
    
// })
let clean = document.getElementById("clean")

let treat = document.getElementById("treat")

let moist = document.getElementById("moisturize")

let first = document.querySelector("a")


clean.addEventListener("mouseenter"  , function(){
    first.style.border =  '1px solid black'
    // console.log("runnung");
    
    
})

treat.addEventListener("mouseenter"  , function(data){
    li.style.border = "1px solid black"
    // console.log(data);
    
    
})

moisturize.addEventListener("mouseenter"  , function(){
    li.style.border = "1px solid black"
    // console.log("moist");
    
    
})