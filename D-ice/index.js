const randomNumber1 = () => Math.ceil(Math.random()*6);

let image1 = document.getElementsByClassName("img1")[0];
let image2 = document.getElementsByClassName("img2")[0];
let h1 = document.getElementsByTagName("h1")[0];

const imgs = {
    1: "images/dice1.png",
    2: "images/dice2.png",
    3: "images/dice3.png",
    4: "images/dice4.png",
    5: "images/dice5.png",
    6: "images/dice6.png"
};

const n1 = randomNumber1();
const n2 = randomNumber1();

image1.src=imgs[n1]; 
image2.src=imgs[n2];

if(n1!=n2){
    h1.innerText = `Winner Player ${n1>n2 ? "1" : "2"}`;
    h1.style.fontFamily="Indie Flower", cursive;
}
else{
    h1.innerText = "Tie";
    h1.style.fontFamily="Indie Flower", cursive;
}
