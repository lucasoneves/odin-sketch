const mainDiv = document.querySelector(".content");
const divText = document.createElement("div");
divText.classList.add("square-div");

for (let i = 0; i < 256; i++) {
  mainDiv.innerHTML += divText.outerHTML;
}

const square = document.querySelectorAll('.square-div');

square.forEach(element => {
    element.addEventListener('mouseenter', (item) => {
        console.log('item', item.target)
        item.target.classList.add('hovered')
    })
});


console.log(divText);
