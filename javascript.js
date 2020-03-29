let contenido = document.querySelector("#page");
let gridSize = 600;
contenido.style.border = "5px solid black";
contenido.style.width= gridSize + "px";
contenido.style.height= gridSize + "px";
contenido.style.grid
let squares = 30;
contenido.style.gridTemplateRows= `repeat(${squares},auto)`;
contenido.style.gridTemplateColumns= `repeat(${squares},auto)`;



function setGrid(squares){
    contenido.style.gridTemplateRows= `repeat(${squares},auto)`;
    contenido.style.gridTemplateColumns= `repeat(${squares},auto)`;
}

function createBox(id){
    let box = document.createElement("div");
    box.id = "id"
    box.classList.add("box");
    box.style.width = gridSize/squares-2 + "px";
    box.style.height = gridSize/squares-2 + "px";
    box.style.border = "1px dotted grey"
    contenido.appendChild(box);
    
    
}

function createBoxes(squares){

    for(i = 0; i<squares*squares; i++){
    createBox("box"+i);
    }
}

createBoxes(squares);




let boxes = document.querySelectorAll(".box");

boxes.forEach(box => {

    box.addEventListener('click',(e) =>{
        e.target.style.background = "black"
    })

        }

);



const setButton = document.querySelector("#gridWidth");

console.log(squares);



setButton.addEventListener("click",()=>{

    boxes.forEach(box =>{
        box.parentNode.removeChild(box);
    })

    squares = prompt();
    console.log(squares);
    setGrid(squares);
    createBoxes(squares);
    boxes = document.querySelectorAll(".box");

    boxes.forEach(box => {

        box.addEventListener('mouseover',(e) =>{
            e.target.style.background = "black"
        })
    
            }
    
    );

   
});

const clearButton = document.querySelector("#clear");

clearButton.addEventListener('click',() => {

    boxes.forEach(box => {

        box.style.background = 'white';
        
    })


}

)


