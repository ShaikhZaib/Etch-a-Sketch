const resizeButton = document.querySelector("#resize-btn");
const container = document.querySelector(".container")

let n = 16;

createGrid(n);

resizeButton.addEventListener("click", () => {
    n = parseInt(prompt("Enter the new grid number: "));
    
    while(n > 100 || n < 0){
        n = parseInt(prompt("Enter the new grid number: "));
    }

    createGrid(n);
});


function createGrid(gridSize){
    container.innerHTML = "";

    const totalSquare = gridSize * gridSize;

    for(let i = 0; i < totalSquare; i++){
        const item = document.createElement("div");
        item.classList.add("items");

        const squareSize = 100 / gridSize;
        item.style.flex = `0 0 ${squareSize}%`;
        item.style.height = `${squareSize}%`; 

        item.addEventListener("mouseover", () => {
            item.style.backgroundColor = "#2ecc71";
        });


        container.appendChild(item); 
    }
}

