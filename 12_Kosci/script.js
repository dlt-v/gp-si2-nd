const obrazki = [
    'https://cdn.glitch.com/8fbc579f-3346-47a0-abbc-945a83abb962%2Fkosc-1.png?v=1610038358032',

    'https://cdn.glitch.com/8fbc579f-3346-47a0-abbc-945a83abb962%2Fkosc-2.png?v=1610038358080',

    'https://cdn.glitch.com/8fbc579f-3346-47a0-abbc-945a83abb962%2Fkosc-3.png?v=1610038358032',

    'https://cdn.glitch.com/8fbc579f-3346-47a0-abbc-945a83abb962%2Fkosc-4.png?v=1610038358142',

    'https://cdn.glitch.com/8fbc579f-3346-47a0-abbc-945a83abb962%2Fkosc-5.png?v=1610038358032',

    'https://cdn.glitch.com/8fbc579f-3346-47a0-abbc-945a83abb962%2Fkosc-6.png?v=1610038358193',
];

// Zmienne globalne
let punkty = [0, 0];
let punktyRundy = 0;
let aktualnyGracz = 0;
let czyMoznaGrac = true;

// Funkcja startowa
function nowaGra() {
    // Reset danych
    // Elementy HTML
    document.querySelector('#wynik-0').textContent = '0';
    document.querySelector('#wynik-1').textContent = '0';
    document.querySelector('#aktualne-punkty-0').textContent = '0';
    document.querySelector('#aktualne-punkty-1').textContent = '0';

    document.querySelector('#nazwa-0').textContent = 'Gracz 1';
    document.querySelector('#nazwa-1').textContent = 'Gracz 2';

    document.querySelector('.gracz-panel-0').classList.remove('zwyciestwo');
    document.querySelector('.gracz-panel-0').classList.remove('aktywny');

    document.querySelector('.gracz-panel-1').classList.remove('zwyciestwo');
    document.querySelector('.gracz-panel-1').classList.remove('aktywny');

    /*
    Dodaj klasę 'aktywny' do elementu gracz-panel-1
    */
}
nowaGra();
