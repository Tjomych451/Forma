let messages = document.querySelector(".mess");
let form = document.querySelector(".footer form");
form.addEventListener('submit', function(event) {
event.preventDefault();

let txt = this.userText.value;
    this.userText.value = "";
    if (!txt.trim()) return;
let message = document.createElement('div');
message.classList.add('message');
let messageContainer = document.createElement('p');
// messageContainer.classList.add('text'+'3')

messageContainer.classList.add('text');
console.log(4565)
// messageContainer.classList.add('123');
messageContainer.textContent = txt;
message.appendChild(messageContainer);
messages.appendChild(message);
messageContainer.classList.add(this.fontStyle.value);

})
