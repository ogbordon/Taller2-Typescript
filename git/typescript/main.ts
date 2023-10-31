import { Serie } from './serie.js';
import { dataSeries } from './data.js';

let seriesTbody: HTMLElement = document.getElementById('series')!;
const avgSeasonsElm: HTMLElement = document.getElementById("avg-seasons")!;
let cardSeries : HTMLElement = document.getElementById("card-series")!;

renderSeriesInTable(dataSeries);

avgSeasonsElm.innerHTML = `${getAvgSeasons(dataSeries)}`

function createCard(serie : Serie){
  cardSeries.innerHTML = `<div class="card" style="width: 18rem;">
      <div class="card-body">
          <img src="${serie.image}" class="card-img-top">
          <h3 class="card-title">${serie.name}</h3>
          <p class="card-text">${serie.description}</p>
          <a href="${serie.link}">${serie.link}</a>
      </div>
  </div>`;
}

function renderSeriesInTable(series: Serie[]): void {
    console.log('Desplegando series');
    series.forEach(s => {
        let trElement = document.createElement("tr");
        trElement.onclick = () => createCard(s);
        trElement.innerHTML = `<td>${s.id}</td> 
                          <td><button type="button" class="btn btn-link" data-toggle="modal" data-target="#cardModal">${s.name}</button></td>
                           <td>${s.channel}</td>
                           <td>${s.seasons}</td>`;
        seriesTbody.appendChild(trElement);
  });
}

function getAvgSeasons(series: Serie[]): number {
  let totalSeasons: number = 0;
  series.forEach((serie) => totalSeasons = totalSeasons + serie.seasons);
  let seasonsAvg: number = totalSeasons / series.length
  return seasonsAvg;
}


