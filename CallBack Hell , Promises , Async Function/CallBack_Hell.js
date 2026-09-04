// callback hell generally happens because of the synchronous and single threaded
// Nature of javascript . for example : Nesting of callback functions.

h1 = document.querySelector("h1");

function changecolor(color,delay,nextcolor){
    setTimeout(()=>{
        h1.style.color=color;
        if(nextcolor) nextcolor();
    },delay);
}

changecolor("red",1000,()=>{
    changecolor("orange",1000,()=>{
        changecolor("blue",1000,()=>{
            changecolor("yellow",1000,()=>{
                changecolor("pink",1000);
            });
        });
    });
});