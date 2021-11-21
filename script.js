let toggleBurger = document.getElementById('burger-toggle');
let toggleNavi = document.getElementById('nav-bar-toggle');
let toggleUl = document.getElementById('nav-ul-toggle')

toggleBurger.addEventListener('click', function() {
    toggleBurger.classList.toggle('active');
    toggleNavi.classList.toggle('show');
    toggleUl.classList.toggle('show')
})

document.getElementById('inputText').addEventListener('input', function(a) {
    a.target.value = a.target.value.toUpperCase();
})