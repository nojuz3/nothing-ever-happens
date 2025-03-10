// const container = document.querySelector(".button");
// const button = document.createElement("button");
// button.innerText = "Peep";

// container.appendChild(button);

// const imgel = document.createElement("img")

// button.addEventListener("click",async function data() {
//     const result = await fetch("https://coffee.alexflipnote.dev/random.json");
//     console.log(result); // .url

//     const img = await result.json();
//     console.log(img);
//     imgel.style.position = "fixed";
//     imgel.src =img.file;
//     container.appendChild(imgel);
// });

const input = document.getElementById("input");
const submit = document.getElementById("submit");
const container = document.querySelector(".container")





submit.addEventListener("click", async (e) => {
    e.preventDefault();
    const inputvalue = input.value.trim();
    
    try{
        const result = await fetch(`https://restcountries.com/v3.1/name/${inputvalue}`);
        const data = await result.json();
        console.log(data);

        container.innerHTML = "";

       

        if (input.value == "" ){
            alert("Does not exist")
        }else{
            data.forEach((e) => {

                const name = document.createElement("h2");
                name.textContent = e.name.common;
    
                const capital = document.createElement("h3");
                capital.textContent = e.capital[0];
    
                const img = document.createElement("img");
                img.src = e.flags.png;
    
                const divas = document.createElement("div");
                divas.append(name,capital,img)
    
                container.append(divas);
            });
        }
        // data.forEach((e) => console.log(e.name.common));



        // data.forEach((e) => console.log(e.capital[0]));

        // data.forEach((e) => console.log(e.flags.png));

    }catch(err){
        console.log(err);
    }
});
