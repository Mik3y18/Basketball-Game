let addHome = document.getElementById("home-score");
let addGuest = document.getElementById("guest-score");

function add1h() {
    let count = Number(addHome.textContent);
    addHome.textContent = count + 1;
} 
function add2h() {
    let count = Number(addHome.textContent);
    addHome.textContent = count + 2;
} 
function add3h() {
    let count = Number(addHome.textContent);
    addHome.textContent = count + 3;
} 
function add1g() {
    let count = Number(addGuest.textContent);
    addGuest.textContent = count + 1;
} 
function add2g() {
    let count = Number(addGuest.textContent);
    addGuest.textContent = count + 2;
} 
function add3g() {
    let count = +addGuest.textContent;
    addGuest.textContent = count + 3;
} 