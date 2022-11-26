const bodyEl = document.querySelector("body");

//to detect moving mouse in browser

bodyEl.addEventListener("mousemove", ()=>{
    //mouse position event capture X and Y axis
    const xPos = event.offsetX;
    const YPos = event.offsetY;
    //now we create span (with the function above we creating span elements as we move mouse)
    const spanEl = document.createElement("span");
    //now we position the span
    spanEl.style.left = xPos + "px";
    spanEl.style.top = YPos + "px";
    //To add different size of hearts
    const diffSize = Math.random() * 100;
    spanEl.style.width = diffSize + "px"
    spanEl.style.height = diffSize + "px"
    //now we add spanEl to bodyEl
    bodyEl.append(spanEl);
    //time put function to clear hearts from screen so it wont get messy
    setTimeout(() =>{
        spanEl.remove();
    },3000)
});