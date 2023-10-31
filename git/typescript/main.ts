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
          <img src="${serie.image}" alt = ${serie.name} class="card-img-top">
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
        let nameButton = document.createElement("button");
        nameButton.type = "button";
        nameButton.className = "btn btn-link"; 
        nameButton.style.border = "none"; 
        nameButton.style.background = "none"; 
        nameButton.style.cursor = "pointer";
        nameButton.textContent = s.name;
        nameButton.onclick = () => createCard(s);

        trElement.innerHTML = `<td>${s.id}</td>
                           <td></td>
                           <td>${s.channel}</td>
                           <td>${s.seasons}</td>`;
        const tdElement = trElement.querySelector('td:nth-child(2)');
          if (tdElement) { tdElement.appendChild(nameButton);} 
          else { console.error('Could not find the second td element in the row.'); }
        seriesTbody.appendChild(trElement);
  });
}


function getAvgSeasons(series: Serie[]): number {
  let totalSeasons: number = 0;
  series.forEach((serie) => totalSeasons = totalSeasons + serie.seasons);
  let seasonsAvg: number = totalSeasons / series.length
  return seasonsAvg;
}


