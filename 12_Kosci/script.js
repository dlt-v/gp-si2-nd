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

    document.querySelector('.gracz-0-panel').classList.remove('zwyciestwo');
    document.querySelector('.gracz-0-panel').classList.remove('aktywny');

    document.querySelector('.gracz-1-panel').classList.remove('zwyciestwo');
    document.querySelector('.gracz-1-panel').classList.remove('aktywny');

    document.querySelector('.gracz-0-panel').classList.add('aktywny');
}
nowaGra();

document.querySelector('.btn-rzuc').addEventListener('click', rzuc);

const koscObrazek = document.querySelector('.kosc');

function rzuc() {
    if (czyMoznaGrac) {
        const liczbaOczek = Math.floor(Math.random() * 5) + 1;

        koscObrazek.src = obrazki[liczbaOczek - 1];
        koscObrazek.style.display = 'block';

        if (liczbaOczek != 1) {
            punktyRundy += liczbaOczek;
            document.querySelector(
                `#aktualne-punkty-${aktualnyGracz}`
            ).textContent = punktyRundy;
        } else {
            nastepnyGracz();
        }
    }
}

function nastepnyGracz() {
    // Zmień na następnego gracza
    // Jeżeli pierwsze wyrażenie jest prawdziwe to wykonaj drugą instrukcję.
    // Jeżeli jest fałszywe - wykonaj trzecią instrukcję.
    aktualnyGracz ? (aktualnyGracz = 0) : (aktualnyGracz = 1);
    punktyRundy = 0;

    // toggle - jeżeli klasa jest dodana to usuń, jeżeli jej brakuje
    // to ją dodaj.
    document.querySelector('#aktualne-punkty-0').textContent = '0';
    document.querySelector('#aktualne-punkty-1').textContent = '0';

    document.querySelector('.gracz-0-panel').classList.toggle('aktywny');
    document.querySelector('.gracz-1-panel').classList.toggle('aktywny');
}
