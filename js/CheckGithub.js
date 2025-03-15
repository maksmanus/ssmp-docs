const _https = "https://"

function SetHomeURL()
{
    if(window.location.host.includes("github.io"))
    {
        let hostname = window.location.hostname
        let link = document.getElementById("chaeckGit");
        let string = _https + window.location.host + '/' + "ssmp-docs/";
        link.setAttribute("href", string);
        console.log(string);
    }

    else
    {
        console.log(_https + window.location.host);
    }
}

document.addEventListener("DOMContentLoaded", SetHomeURL)