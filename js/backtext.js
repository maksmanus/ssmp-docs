function toBack()
{
    let backText = document.getElementById("backtext");
    backText.setAttribute("href", "javascript:history.back()")
}

document.addEventListener("DOMContentLoaded", toBack);