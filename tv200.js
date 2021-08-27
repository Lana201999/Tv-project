document.getElementById("myBtn").addEventListener("click", search);

let sec = document.querySelector(".episodes");

function search() {
    // const newDoc = document.implementation.createHTMLDocument(title);
    if (sec.innerText !== "") {
        // location.reload();
        sec.innerText = "";
    }
    let searchs = document.getElementById("link").value;
    let url = "https://api.tvmaze.com/search/shows?q=" + searchs;

    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            data.filter((episode) => {
                let ep = {
                    names: episode.show.name,
                    seasonNumber: episode.show.season,
                    epNumber: episode.show.number,
                    image: episode.show.image.medium,
                    summary: episode.show.summary,
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

                epName.textContent = ep.names;
                epImg.setAttribute("src", ep.image);
                s = ep.summary.replace("<p>", "").replace("</p>", "");
                Summary.textContent = s;

                seasonAndEpNum.textContent =
                    "E" + "0" + ep.epNumber + "S" + "0" + ep.seasonNumber;

                div.appendChild(epName);

                div.appendChild(epImg);
                div.appendChild(Summary);
                sec.appendChild(div);
            });
        });
}
// let url = "https://api.tvmaze.com/singlesearch/shows?q=" + search;
// async function fetchSerch() {
//     let search = document.getElementById("link").value;
//     console.log(search);
//     fetch(`${apiURL}/search/`)
//         .then((response) => response.json())
//         .then((data) => {
//             data.filter((episode) => {
//                 let ep = {
//                     names: episode.name,
//                     seasonNumber: episode.season,
//                     epNumber: episode.number,
//                     image: episode.image.medium,
//                     summary: episode.summary,
//                 };
//             });
//         });
//     .then((data) => {
//
//         let searchSec = document.querySelector(".input-sec");
//         var r = document.createElement("div");
//         r.textContent = data;
//         searchSec.appendChild(r);
//     });
// }