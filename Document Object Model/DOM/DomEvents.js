// let btn = document.querySelector("button");
// console.dir(btn);

// btn.onclick = function(){
//     console.log('Button was clicked');
// }

// we can also create a alert for example

// btn.onclick = function(){
//     alert('Button was clicked');
// }


//   For multiple Buttons

let btns = document.querySelectorAll("button");

for(btn of btns){
    // btn.onclick = sayhello;
    // btn.onmouseenter = function(){
    //     console.log("you entered a button");
    // };
    btn.addEventListener("click" , sayhello);
    btn.addEventListener("click" , sayhi);

}

function sayhello(){
    alert("hello");
}

function sayhi(){
    alert("hi");
}

