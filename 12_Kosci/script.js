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

let punktyMax = 100;
let poprzednialiczbaOczek = 0;

document.querySelector('.btn-rzuc').addEventListener('click', () => {
    if (czyMoznaGrac) {
        document.querySelector('.punkty-max').style.display = 'none';
    }
});

// Funkcja startowa
function nowaGra() {
    // Reset danych
    punkty = [0, 0];
    punktyRundy = 0;
    aktualnyGracz = 0;
    czyMoznaGrac = true;
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

    document.querySelector('.punkty-max').style.display = 'block';
    punktyMax = document.getElementById('wartosc').value;

    if (punktyMax != 0) {
        czyMoznaGrac = true;
    }
}
nowaGra();

document.querySelector('.btn-rzuc').addEventListener('click', rzuc);

const koscObrazek = document.querySelector('.kosc');

function rzuc() {
    if (czyMoznaGrac) {
        const liczbaOczek = Math.floor(Math.random() * 5) + 1;

        koscObrazek.src = obrazki[liczbaOczek - 1];
        koscObrazek.style.display = 'block';

        if (liczbaOczek == 6 && poprzednialiczbaOczek == 6) {
            punkty[aktualnyGracz] = 0;
            document.querySelector(
                `#aktualne-punkty-${aktualnyGracz}`
            ).textContent = punktyRundy;
        } else if (liczbaOczek != 1) {
            punktyRundy += liczbaOczek;
            document.querySelector(
                `#aktualne-punkty-${aktualnyGracz}`
            ).textContent = punktyRundy;
        } else {
            nastepnyGracz();
        }
        poprzednialiczbaOczek = liczbaOczek;
    }
}

function nastepnyGracz() {
    // Zmie?? na nast??pnego gracza
    // Je??eli pierwsze wyra??enie jest prawdziwe to wykonaj drug?? instrukcj??.
    // Je??eli jest fa??szywe - wykonaj trzeci?? instrukcj??.
    aktualnyGracz ? (aktualnyGracz = 0) : (aktualnyGracz = 1);
    punktyRundy = 0;

    // toggle - je??eli klasa jest dodana to usu??, je??eli jej brakuje
    // to j?? dodaj.
    document.querySelector('#aktualne-punkty-0').textContent = '0';
    document.querySelector('#aktualne-punkty-1').textContent = '0';

    document.querySelector('.gracz-0-panel').classList.toggle('aktywny');
    document.querySelector('.gracz-1-panel').classList.toggle('aktywny');
}

document
    .querySelector('.btn-zatrzymaj')
    .addEventListener('click', zatrzymajPunkty);

function zatrzymajPunkty() {
    punkty[aktualnyGracz] += punktyRundy;

    document.querySelector(`#wynik-${aktualnyGracz}`).textContent =
        punkty[aktualnyGracz];

    if (punkty[aktualnyGracz] >= punktyMax) {
        czyMoznaGrac = false;
        // 1. Zmie?? nazw?? aktualnego gracza na "Zwyci??zca"
        document.querySelector(`#nazwa-${aktualnyGracz}`).textContent =
            'Zwyci??zca';
        // 2. Dodaj klas?? ".zwyciestwo" do panelu aktualnego gracza
        document
            .querySelector(`.gracz-${aktualnyGracz}-panel`)
            .classList.add('zwyciestwo');
    } else {
        nastepnyGracz();
    }
}
document.querySelector('.btn-nowa-gra').addEventListener('click', nowaGra);
// Dodaj funkcjonalno???? przycisku "Nowa gra"

/*
1. Utw??rz zmienn?? kt??ra zapisuje ostatni rzut gracza.
2. Je??eli jego poprzedni rzut i jego aktualny rzut maj?? warto???? 6:
    3. To wyzeruj punkty aktualnego gracza.

*/
