let text = document.querySelector(".text")
let value = prompt("summani kiriting")

let num1 = value % 3
let num2 = value % 5


 if(num1 == 0 && num2 == 0){
     text.textContent = "5 ga 3 ga bo'linadi"
 }
else if(num2 == 0){
    text.textContent = "5 ga bo'linadi"
}
else if( num1 == 0){
    text.textContent = "3 ga bo'linadi"
}
else{
    text.textContent = "Bo'linmaydi"
}


