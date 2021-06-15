let url = "https//api.osrsbox.com/";

const getData = (urlRequest) => {
    
    let encodedURI = encodeURI(url + urlRequest);
   fetchData(encodedURI)
    //.then(data) => {
    //    displayData(data);
    //}
}



async function fetchData(url){
    const response = await fetch(url)
    .then((response) =>{

    
    return response.json();
    })
}

function displayData(data){
    const dataTable = document.getElementById("data-table");
    //data._items.forEach(element => {
    //dataTable.innerHTML += "<tr>
    //<td>$(element.name)</td>
    //</tr>"
    let tr = document.createElement("tr");
    let td = document.createElement("td");
    td.innerHTML = element.name;
    tr.appendChild();
    //});
}

//url += "equipment";
getData("equipment");