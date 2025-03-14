let CarIdsObject;
const Key = "CARID";

async function LoadCarIdJSON() 
{    
    let buildedString = "../jsons/RealJsons/carids.json"
    let resiltQuery = await fetch(buildedString);
    let jsonData = await resiltQuery.json();
    CarIdsObject = JSON.parse(JSON.stringify(jsonData));
    let main = document.getElementById("tablecar");

    let table = document.createElement("table");
    let tbody = document.createElement("tbody");
    table.classList.add("tablecar");
    main.appendChild(table);
    table.appendChild(tbody)

    let _tr = document.createElement("tr");
    tbody.appendChild(_tr);

    let namingarray = ["Car id", "Car Name", "Model name", "Category"];
    namingarray.forEach((element, index) => 
    {
        let td = document.createElement("td");
        td.classList.add("tablecar-td");
        td.innerHTML = element;
        td.style.fontWeight = "bold";
        _tr.appendChild(td);
    });

    CarIdsObject.forEach((element, index) => 
    {
        let tr = document.createElement("tr");    
        tbody.appendChild(tr); 
        tr.classList.add("tablecar-row");

        let array = [element.Carid, element.Name, element.GameName, element.Category];
        array.forEach((element, index) => 
        {
            let td = document.createElement("td");
            td.classList.add("tablecar-td");
            let text = element + '  ';
            if(index == 1)
                td.innerHTML = text.replace(/_/, " ");
            else
                td.innerHTML = text;
            tr.appendChild(td);
        });   

        tr.addEventListener("click", () =>
        {
            let rowData = CarIdsObject[index];

            // Выводим объект в консоль
            console.log(rowData);
            sessionStorage.setItem(Key, JSON.stringify(rowData));
            window.location.href = "./CarInfoViever.html"
        });

        tr.style.cursor = "pointer";
    });
    
}

function SelectCar()
{

}
window.addEventListener("DOMContentLoaded", LoadCarIdJSON);