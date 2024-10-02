let menu = document.querySelector('nav');
function handleMenu() {
    menu.classList.toggle('nav-menu');
}
function handleMenuChange() {
    menu.classList.toggle('nav-menu');
}
var popup = document.querySelector('.pop-up ')
var loading = document.querySelector(".loading");
var maincontent = document.querySelector(".main-content");
window.addEventListener('load', () => {
    setTimeout(() => {
        loading.style.display = "none";
        popup.style.display = "block";

    }, 1600)

});

function popoupRemove() {
    popup.style.display = "none";
    maincontent.style.display = "none";

}


let count = document.querySelector('.count')

let a = 0;

function handleCount(event) {

    let b = event.target.innerText;


    if (b == 'Add to Cart') {
        a++;
        count.innerHTML = a;
        event.target.innerText = 'Remove';
        event.target.style.backgroundColor = 'red';
        event.target.style.color = 'white';
    } else if (b == 'Remove') {
        a--;
        count.innerHTML = a;
        event.target.innerText = 'Add to Cart';
        event.target.style.backgroundColor = '#ffb400';
        event.target.style.color = 'black';

    }

}





