console.log('JS OK');

// TODO recupero e scrivo gli elementi utili

//pulsate Play
const playButton = document.getElementById('play');
//griglia
const fullGrid = document.getElementById('grid');

const rows = 10; //righe
const columns = 10; //colonne
const cellsNumber = rows * columns; //totale celle
playButton.addEventListener('click', function(){ // attivo il pulsante play
    //creazione della griglia
    for(i = 0; i < cellsNumber; i++){
        const cell = document.createElement('div'); // creo i div figli di grid
        cell.className = 'col'; // 'col' per classe di Bootstrap
        cell.innerText = i + 1;
        cell.addEventListener('click', function(){ // se premo il pulsante
            console.log(); //scrivo il numero in log
            cell.classList.add('azure'); //diventa azzurro
        });

        fullGrid.appendChild(cell); // inserisco in pagina le celle
    }
})