const Key = "CARID";

let Textes = 
[
    "Car ID",
    "Car name",
    "Model name",
    "Category"
];


function GetCarItem()
{
    let CarItem = sessionStorage.getItem(Key);
    let carObject = JSON.parse(CarItem);

    let carname = document.getElementById("CarNameId");
    carname.textContent = "Car:  " + carObject.Name;
    let CarObjectArray = [carObject.Carid, carObject.Name, carObject.GameName, carObject.Category];

    let carinfoblock = document.getElementById("carinfo");

    Textes.forEach((element, index) => {
        let _element = document.createElement("p");
        _element.classList.add("left");
        _element.textContent = element;
        carinfoblock.appendChild(_element);
        let rigthElement = document.createElement("p");
        rigthElement.classList.add("rigth");
        if(index == 1)
            rigthElement.textContent = CarObjectArray[index].replace(/_/, " ");
        else
            rigthElement.textContent = CarObjectArray[index];
        carinfoblock.appendChild(rigthElement);

        if(index != 0)
        {
            _element.style.marginTop = "3vh";
            rigthElement.style.marginTop = "3vh";
        }
    });

}

document.addEventListener("DOMContentLoaded", GetCarItem);

    