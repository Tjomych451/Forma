const button = document.querySelector("button");
const input1 = document.getElementById("text1");
const input = document.getElementById("text2");
const zag1 = document.getElementById("zag1");
const zag2 = document.getElementById("zag2");
const button1 = document.getElementById("btn")
const container = document.querySelector("#container");
button.addEventListener("click", () => {
    if (input.value) {
        
        container.insertAdjacentHTML("beforeend", `<p>${input1.value} </p>`);
        container.insertAdjacentHTML("beforeend", `<p>${input.value} </p>`);
        
        input.value = "";
     }
});

button1.addEventListener("click", () => {
        print()
       
     }
);