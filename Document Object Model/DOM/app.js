// let smallimages = document.getElementsByClassName("oldImg");

// for(let i = 0 ; i < smallimages.length ; i++) console.dir(smallimages[i]);
// for(let i = 0 ; i < smallimages.length ; i++) console.dir(smallimages[i].src);
// for(let i = 0 ; i < smallimages.length ; i++){
//     smallimages[i].src = "assets/spiderman_img.png";
//     console.log(`value of Image no. ${i} is changed`);
// }


// Query Selector

console.dir(document.querySelector("p"));
console.dir(document.querySelector("#description"));
console.dir(document.querySelector(".oldImg"));
console.dir(document.querySelector("div a"));      //nested
console.dir(document.querySelectorAll("p"));


// Manipulating style     note: it only shows the inline css

let links = document.querySelectorAll(".box a");

for(link of links){
    link.style.color = "yellow";
}