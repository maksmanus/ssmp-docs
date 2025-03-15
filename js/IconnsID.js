const format = ".png";
const serverPath = "../images/icons/";

async function loadIcons()
{
    let responce = await fetch("../jsons/RealJsons/Icons.json");
    let jsonData = await responce.json();
    let icons = JSON.parse(JSON.stringify(jsonData));
    
    let roothtml = document.getElementById("rooticons");

    let iconsnameElement = document.createElement("div");
    iconsnameElement.textContent = "Icon ID"
    iconsnameElement.classList.add("iconsElement");
    roothtml.appendChild(iconsnameElement);

    let icongImages = document.createElement("div");
    icongImages.textContent = "Icon Image"
    icongImages.classList.add("iconsElement");
    roothtml.appendChild(icongImages);

    icons.forEach(element => 
    {
        let _iconsid = document.createElement("div");
        _iconsid.textContent = element.IconID;
        _iconsid.classList.add("iconsElement");
        roothtml.appendChild(_iconsid);  

        let buildedImagePath = serverPath + element.ImageRelativePath + format;
        
        let imageElement = document.createElement("div");
        imageElement.classList.add("iconsElement");
        roothtml.appendChild(imageElement);  

        let image = document.createElement("img");
        image.src = buildedImagePath;
        imageElement.appendChild(image);
    });
}

document.addEventListener("DOMContentLoaded", loadIcons);