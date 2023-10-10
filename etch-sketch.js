const container = document.querySelector('#container');
let root = document.querySelector(':root');
let rootStyles = getComputedStyle(root);
let colNumber = rootStyles.getPropertyValue('--colNumber');
let grids = 16;

function createDivs(gridNum){
    for(i = 0; i < (gridNum*gridNum);i++){
        let divs =document.createElement('div');
        container.appendChild(divs);
        divs.className = 'grids';
    }
    root.style.setProperty('--colNumber', gridNum);
}
createDivs(grids);