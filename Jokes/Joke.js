async function getDadJoke(){
    const url = "https://icanhazdadjoke.com/";
    let h = new Headers({
        Accept: 'application/json',
        'User-Agent': 'WDD-230-Test User Agent https://ahfxadam.github.io/',
        });
        //let startDate = new Date();
        const respnse = await fetch(url, {headers: h});

        //let endDate = new Date();
        if(respnse.status === 200){
            return respnse.json();
        }else{
            throw new Error("No dad jokes found: " + respnse.status);
        }
        //alert(endDate - startDate);
}

function newJoke() {
    const dad_id = document.getElementById("dad-joke");
    dad_id.innerHTML = "";
    dad_id.classList.remove("small");
    const joke = getDadJoke()
        .then(function (j){
            let joke = j["joke"];
            dad_id.innerHTML = j["joke"];
            if(joke.length > 85){
                dad_id.classList.add("small");
            }
        })
        .catch(function (e){
            dad_id.innerHTML = e;
        });
}

window.addEventListener("load", (event) =>{
    newJoke();
})