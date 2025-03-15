const sessionCar = "WeaponObject";
const iconpng = "icon.png";
const serverPath = "../images/weaponicons/";

let WeaponTableObject;

async function GetWeaponTable()
{
    let WeaponResponce = await fetch("../jsons/RealJsons/weapons.json");
    let jsondata = await WeaponResponce.json();
    WeaponTableObject = JSON.parse(JSON.stringify(jsondata));

    let namingarray = ["Weapon Id", "Weapon Model Id", "Weapon Name", "Weapon Model Name", "Weapon Slot", "Weapon Icon Image"];
    let WeaponTableRoot = document.getElementById("WeaponTable");

    let rowNaming = document.createElement("div");
    rowNaming.classList.add("weaponTableRow");
    WeaponTableRoot.appendChild(rowNaming);
    
    namingarray.forEach(element => 
    {
        let _element = document.createElement("div");
        _element.classList.add("weaponTableBlock");
        _element.textContent = element;
        _element.style.fontWeight = "bold";
        rowNaming.appendChild(_element);    
    });

    WeaponTableObject.forEach(element => 
    {
        console.log(element.ModelName + iconpng);
        let rowNaming = document.createElement("div");
        rowNaming.classList.add("weaponTableRow");
        rowNaming.classList.add("weapontransition");
        WeaponTableRoot.appendChild(rowNaming);

        let ModelName = element.ModelName;
        
        let array = [element.WeaponId, element.WeaponModelID, element.WeaponName, element.ModelName, element.SlotId, 1];

        array.forEach((element, index) => 
        {
            let block = document.createElement("div");
            block.classList.add("weaponTableBlock");
            if(index == 5)
            {
                let image = document.createElement("img");
                block.style.justifyContent = "center";
                let builtstring = serverPath + ModelName + iconpng;
                block.appendChild(image);
                image.src = builtstring;
                
            }
                
            else
                block.textContent = element;
            rowNaming.appendChild(block);
        });
    });
}

document.addEventListener("DOMContentLoaded", GetWeaponTable);