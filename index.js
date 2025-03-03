const container = document.querySelector(".button");
const button = document.createElement("button");
button.innerText = "Peep";

container.appendChild(button);

const imgel = document.createElement("img")

button.addEventListener("click",async function data() {
    const result = await fetch("https://coffee.alexflipnote.dev/random.json");
    console.log(result); // .url

    const img = await result.json();
    console.log(img);
    imgel.style.position = "fixed";
    imgel.src =img.file;
    container.appendChild(imgel);
});
