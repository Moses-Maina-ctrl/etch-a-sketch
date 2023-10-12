const container = document.querySelector('#container');
let root = document.querySelector(':root');
let rootStyles = getComputedStyle(root);
let colNumber = rootStyles.getPropertyValue('--colNumber');
let slider = document.querySelector(".slider");
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
    
}

function deleteDivs(){
    container.innerHTML = '';
}