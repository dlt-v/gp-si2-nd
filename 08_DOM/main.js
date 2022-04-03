//zapisywanie/cache'owanie elementów
const przycisk = document.getElementById('przycisk');

// dodawanie nasłuchiwacza na zdarzenia
przycisk.addEventListener('click', przycikKlikniety);

function przycikKlikniety() {
    console.log('Zostałem kliknięty.');
}

/*
ZADANIE
Dodaj event listener dla podwójnego kliknięcia (dblclick) oraz wyloguj stosowny tekst.

*/
