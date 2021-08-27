let sec = document.querySelector(".episodes");
let sele = document.getElementById("myDropdown");

function fetchEpisodes() {
    fetch("https://api.tvmaze.com/shows/1/episodes")
        .then((response) => response.json())
        .then((data) => {
            data.filter((episode) => {
                ep = {
                    id: episode.id,
                    names: episode.name,
                    seasonNumber: episode.season,
                    epNumber: episode.number,
                    image: episode.image.medium,
                    summary: episode.summary,
                };

                let div = document.createElement("div");
                let epName = document.createElement("h1");
                let seasonAndEpNum = document.createElement("h3");
                let epImg = document.createElement("img");
                let Summary = document.createElement("p");

                div.className = "epInformation";
                epName.className = "epName";
                seasonAndEpNum.className = "seasonAndEpNum";
                epImg.className = "epImg";
                Summary.className = "Summary";
                div.setAttribute("id", ep.id);

                epName.textContent = ep.names;
                epImg.setAttribute("src", ep.image);
                s = ep.summary.replace("<p>", "").replace("</p>", "");
                Summary.textContent = s;
                let x = "E" + "0" + ep.epNumber + "S" + "0" + ep.seasonNumber;

                seasonAndEpNum.textContent = x;

                div.appendChild(epName);
                div.appendChild(seasonAndEpNum);
                div.appendChild(epImg);
                div.appendChild(Summary);
                sec.appendChild(div);

                let options = document.createElement("option");
                var a = document.createElement("a");
                a.href = "#" + ep.id;
                a.textContent = x + "-" + ep.names;

                sele.appendChild(a);
                console.log(a);
                // options.appendChild(a);
            });
            //
        });
}

fetchEpisodes();

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches(".dropbtn")) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains("show")) {
                openDropdown.classList.remove("show");
            }
        }
    }
};