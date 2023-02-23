const reset = () => {
    localStorage.colorPalette=JSON.stringify("url(src/initial.jpg)"); 
    document.querySelectorAll(".block").forEach(e=> {
        e.style.backgroundImage="url(src/initial.jpg)"; 
    })
}
reset()
let myPalette=document.querySelectorAll("[data-wall]"); 
localStorage.colorPalette=JSON.stringify("url(src/initial.jpg)"); 
myPalette.forEach(e=> {
    e.addEventListener("click" , () => {
        localStorage.colorPalette=JSON.stringify(e.getAttribute("data-wall"))
    })
})
let myContainer=document.createElement("div");
myContainer.classList.add("container");
for (let i=0;i<10;i++) {
    var myBlocks=document.createElement("div"); 
    myBlocks.classList.add("block-row");
    myBlocks.style.height="calc(100%/10)"
    for(let j=0;j<10;j++) {
        let myBlock=document.createElement("div");
        myBlock.classList.add("block");
        myBlocks.appendChild(myBlock);
    }
    myContainer.appendChild(myBlocks);
}

document.querySelector(".App-container").appendChild(myContainer);
let myAddedBlocks=document.querySelectorAll(".block");
myAddedBlocks.forEach(e=> {
    e.addEventListener("click" , () => {
        e.style.backgroundColor="none"
        e.style.backgroundImage=JSON.parse(localStorage.colorPalette); 
    })
})
