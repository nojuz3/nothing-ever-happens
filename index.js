
const input = document.getElementById("input");
const submit = document.getElementById("submit");
const container = document.querySelector(".container")





submit.addEventListener("click", async (e) => {
    e.preventDefault();
    const inputvalue = input.value.trim();


    if(inputvalue === ""){
        container.innerHTML = "";
        const name = document.createElement("h2");
        name.textContent = "Please enter a superhero name";

        const divas = document.createElement("div");
        divas.append(name)

        container.append(divas);

    }else{
        try{
            const result = await fetch(`https://www.superheroapi.com/api.php/4dfcedf7b71cb4f4351d31ac5dc62052/search/${inputvalue}`);
            const data = await result.json();
            console.log(data);
            let list = data.results;
            console.log(list);
    

            container.innerHTML = "";
           
    
                if(data.response == "False" || data.response == "error"){
                    const name = document.createElement("h2");
                    name.textContent = "Does not exist";
        
                    const divas = document.createElement("div");
                    divas.append(name)
        
                    container.append(divas);
                }else{
                    list.forEach(e => {
                        const name = document.createElement("h2");
                        name.textContent = e.name;
                        
                        const stats = document.createElement("h3");
                        for (const key in e.powerstats) {
                            stats.textContent += `${key}: ${e.powerstats[key]} `;
                        }
            

                        const img = document.createElement("img");
                        img.src = e.image.url;
            
                        const divas = document.createElement("div");
                        divas.append(name,stats,img)
            
                        container.append(divas);
                    });

                };
    
        }catch(err){
            console.log(err);
        }
    }
    
});
