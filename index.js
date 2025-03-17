
// https://www.omdbapi.com/?i=tt3896198&apikey=abc56403
// https://www.omdbapi.com/apikey.aspx?VERIFYKEY=a8c7b43a-51f7-42a2-b27f-82e03403e65f
const input = document.getElementById("input");
const submit = document.getElementById("submit");
const container = document.querySelector(".container")





submit.addEventListener("click", async (e) => {
    e.preventDefault();
    const inputvalue = input.value.trim();


    if(inputvalue === ""){
        container.innerHTML = "";
        const name = document.createElement("h2");
        name.textContent = "Please enter a movie name";

        const divas = document.createElement("div");
        divas.append(name)

        container.append(divas);

    }else{
        try{
            const result = await fetch(`http://www.omdbapi.com/?apikey=abc56403&t=${input.value}`);
            const data = await result.json();
            console.log(data);
    

            container.innerHTML = "";
           
    
                if(data.Response == "False"){
                    const name = document.createElement("h2");
                    name.textContent = "Does not exist";
        
                    const divas = document.createElement("div");
                    divas.append(name)
        
                    container.append(divas);
                }else{
                    const name = document.createElement("h2");
                    name.textContent = data.Title;
        
                    const date = document.createElement("h3");
                    date.textContent = data.Released;
        
                    const img = document.createElement("img");
                    img.src = data.Poster;
        
                    const divas = document.createElement("div");
                    divas.append(name,date,img)
        
                    container.append(divas);
                };
    
        }catch(err){
            console.log(err);
        }
    }
    
});
