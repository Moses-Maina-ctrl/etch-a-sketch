const container = document.querySelector('#container');
const erase = document.querySelector('#erase');
const reset = document.querySelector('#reset');
const color = document.querySelector('#color');


let black = '#000000';
let root = document.querySelector(':root');
let rootStyles = getComputedStyle(root);
let colNumber = rootStyles.getPropertyValue('--colNumber');
let slider = document.querySelector('.slider');
let grids = slider.value;

createDivs(grids);
slider.onchange = function (){
     grids = slider.value;   
     deleteDivs();
     createDivs(grids);
}

function createDivs(gridNum){
    for(i = 0; i < (gridNum*gridNum);i++){
        let divs =document.createElement('div');
        container.appendChild(divs);
        divs.className = 'grids';
    }
    root.style.setProperty('--colNumber', gridNum);
    root.style.setProperty('--rowNumber', gridNum); 
    const item = document.querySelectorAll('.grids');
    defaultColorOnHover(item); 
}

function deleteDivs(){
    container.innerHTML = '';
}

function defaultColorOnHover(div){
    div.forEach((cell) => {
        cell.addEventListener('mouseover', () => {
          cell.style.background = black;
        });
      });
} 

erase.addEventListener('click', ()=>{
    black = '#FFFFFF';
});

reset.addEventListener('click', ()=>{
    document.location.reload();
});

color.addEventListener('click', ()=>{
    black = "#000000";
});