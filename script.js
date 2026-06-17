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
        item.dataset.lightness = 100;

        const hue = Math.floor(Math.random() * 256);

        item.addEventListener("mouseover", () => {
            // item.style.backgroundColor = randomColor();
            let currentLightness = parseInt(item.dataset.lightness);
            if(currentLightness > 0){
                currentLightness -= 10;
                item.dataset.lightness = currentLightness;
                item.style.backgroundColor = `hsl(${hue}, 100%, ${currentLightness}%)`;
            } 
        });


        container.appendChild(item); 
    }
}

function randomColor(){
   const r = Math.floor(Math.random() * 256);
   const g = Math.floor(Math.random() * 256);
   const b = Math.floor(Math.random() * 256);
   const color = `rgb(${r}, ${g}, ${b})`;

   return color;
}
