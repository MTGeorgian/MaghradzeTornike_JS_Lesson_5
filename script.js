"use strict";
// burger bar
let toggleBurger = document.getElementById('burger-toggle');
let toggleNavi = document.getElementById('nav-bar-toggle');
let toggleUl = document.getElementById('nav-ul-toggle')

toggleBurger.addEventListener('click', function() {
    toggleBurger.classList.toggle('active');
    toggleNavi.classList.toggle('show');
    toggleUl.classList.toggle('show')
})

// input 

let input$ = document.getElementById('input');
let button$ = document.getElementById('submit');
let ul$ = document.getElementById('ul');


button$.addEventListener('click', function(day){
    day.preventDefault();
    let value = input$.value;
    if(value != ''){
        let li = document.createElement('li');
        li.classList.add('li-stl');
    
        let btnDelete = document.createElement('button');
        btnDelete.textContent = 'X';
        btnDelete.classList.add('btn-stl')
        btnDelete.addEventListener('click', function (){
            li.remove();
        })


        li.textContent = value;
        
        li.appendChild(btnDelete);
        ul.appendChild(li);
        
        input$.value = '';
    }
    
});

document.getElementById('clear-button').addEventListener('click', function(){
    ul$.innerHTML = '';
})