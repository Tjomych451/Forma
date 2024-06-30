

const btnNext = document.querySelectorAll(".btn"); 
// console.log(btnNext); 
const boxs = document.querySelectorAll(".box"); 
// console.log(boxs); 
// const boxTwo = document.getElementById("box_two"); 
// console.log(boxTwo); 
 
for (let i = 0; i < btnNext.length; i++) { 
    btnNext[i].addEventListener("click", () => { 
        if (i < btnNext.length - 1){ 
            boxs[i].style.display = 'none'; 
            boxs[i + 1].style.display = 'block'; 
        } 
        if (i === btnNext.length - 1){ 
            boxs[i].style.display = 'none'; 
            // console.log(111); 
        } 
    }) 
}
