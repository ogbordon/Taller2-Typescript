import { dataSeries } from './data.js';
var seriesTbody = document.getElementById('series');
var avgSeasonsElm = document.getElementById("avg-seasons");
var cardSeries = document.getElementById("card-series");
renderSeriesInTable(dataSeries);
avgSeasonsElm.innerHTML = "".concat(getAvgSeasons(dataSeries));
function createCard(serie) {
    cardSeries.innerHTML = "<div class=\"card\" style=\"width: 18rem;\">\n      <div class=\"card-body\">\n          <img src=\"".concat(serie.image, "\" class=\"card-img-top\">\n          <h3 class=\"card-title\">").concat(serie.name, "</h3>\n          <p class=\"card-text\">").concat(serie.description, "</p>\n          <a href=\"").concat(serie.link, "\">").concat(serie.link, "</a>\n      </div>\n  </div>");
}
function renderSeriesInTable(series) {
    console.log('Desplegando series');
    series.forEach(function (s) {
        var trElement = document.createElement("tr");
        trElement.onclick = function () { return createCard(s); };
        trElement.innerHTML = "<td>".concat(s.id, "</td> \n                          <td><button type=\"button\" class=\"btn btn-link\" data-toggle=\"modal\" data-target=\"#cardModal\">").concat(s.name, "</button></td>\n                           <td>").concat(s.channel, "</td>\n                           <td>").concat(s.seasons, "</td>");
        seriesTbody.appendChild(trElement);
    });
}
function getAvgSeasons(series) {
    var totalSeasons = 0;
    series.forEach(function (serie) { return totalSeasons = totalSeasons + serie.seasons; });
    var seasonsAvg = totalSeasons / series.length;
    return seasonsAvg;
}
