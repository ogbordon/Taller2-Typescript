import { dataSeries } from './data.js';
var seriesTbody = document.getElementById('series');
var avgSeasonsElm = document.getElementById("avg-seasons");
var cardSeries = document.getElementById("card-series");
renderSeriesInTable(dataSeries);
avgSeasonsElm.innerHTML = "".concat(getAvgSeasons(dataSeries));
function createCard(serie) {
    cardSeries.innerHTML = "<div class=\"card\" style=\"width: 18rem;\">\n      <div class=\"card-body\">\n          <img src=\"".concat(serie.image, "\" alt = ").concat(serie.name, " class=\"card-img-top\">\n          <h3 class=\"card-title\">").concat(serie.name, "</h3>\n          <p class=\"card-text\">").concat(serie.description, "</p>\n          <a href=\"").concat(serie.link, "\">").concat(serie.link, "</a>\n      </div>\n  </div>");
}
function renderSeriesInTable(series) {
    console.log('Desplegando series');
    series.forEach(function (s) {
        var trElement = document.createElement("tr");
        var nameButton = document.createElement("button");
        nameButton.type = "button";
        nameButton.className = "btn btn-link";
        nameButton.style.border = "none";
        nameButton.style.background = "none";
        nameButton.style.cursor = "pointer";
        nameButton.textContent = s.name;
        nameButton.onclick = function () { return createCard(s); };
        trElement.innerHTML = "<td>".concat(s.id, "</td>\n                           <td></td>\n                           <td>").concat(s.channel, "</td>\n                           <td>").concat(s.seasons, "</td>");
        var tdElement = trElement.querySelector('td:nth-child(2)');
        if (tdElement) {
            tdElement.appendChild(nameButton);
        }
        else {
            console.error('Could not find the second td element in the row.');
        }
        seriesTbody.appendChild(trElement);
    });
}
function getAvgSeasons(series) {
    var totalSeasons = 0;
    series.forEach(function (serie) { return totalSeasons = totalSeasons + serie.seasons; });
    var seasonsAvg = totalSeasons / series.length;
    return seasonsAvg;
}
