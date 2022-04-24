const listaObrazkow = [
    'https://cdn.glitch.com/252ccab9-3cec-4a04-89f5-816ee2994f79%2F0.png?v=1623760735527',
    'https://cdn.glitch.com/252ccab9-3cec-4a04-89f5-816ee2994f79%2F1.png?v=1623760735604',
    'https://cdn.glitch.com/252ccab9-3cec-4a04-89f5-816ee2994f79%2F2.png?v=1623760735890',
    'https://cdn.glitch.com/252ccab9-3cec-4a04-89f5-816ee2994f79%2F3.png?v=1623760735703',
    'https://cdn.glitch.com/252ccab9-3cec-4a04-89f5-816ee2994f79%2F4.png?v=1623760735867',
    'https://cdn.glitch.com/252ccab9-3cec-4a04-89f5-816ee2994f79%2F5.png?v=1623760735857',
    'https://cdn.glitch.com/252ccab9-3cec-4a04-89f5-816ee2994f79%2F6.png?v=1623760735876',
    'https://cdn.glitch.com/252ccab9-3cec-4a04-89f5-816ee2994f79%2F7.png?v=1623760735751',
    'https://cdn.glitch.com/252ccab9-3cec-4a04-89f5-816ee2994f79%2F8.png?v=1623760735918',
    'https://cdn.glitch.com/252ccab9-3cec-4a04-89f5-816ee2994f79%2F9.png?v=1623760735966',
    'https://cdn.glitch.com/252ccab9-3cec-4a04-89f5-816ee2994f79%2F10.png?v=1623760735998',
];

const listaWyrazow = ['wisielec', 'niedziela', 'kiełbasa'];

// cache-owanie
const miejsceNaTekst = document.querySelector('#gra');
const przyciskOk = document.querySelector('#ok');
const przyciskReset = document.querySelector('#reset');
const input = document.querySelector('#litera');
const komunikat = document.querySelector('#komunikat');

przyciskOk.addEventListener('click', graj);

let uzyteLitery = [];
let zgadnieteLitery = [];
let mozliweLitery = [];
const wyraz = listaWyrazow[Math.floor(Math.random() * listaWyrazow.length)];

function main() {
    for (let i = 0; i < wyraz.length; i++) {
        if (!mozliweLitery.includes(wyraz[i])) {
            mozliweLitery.push(wyraz[i]);
        }
    }
    console.log(mozliweLitery);
    let wyrazDoDruku = [];
    let czyTrafiony = false;
    let liczbaSzans = listaObrazkow.length;

    for (let i = 0; i < wyraz.length; i++) {
        wyrazDoDruku[i] = '_';
    }
    miejsceNaTekst.innerHTML = wyrazDoDruku.join(' ');
}

function graj() {
    const nowaLitera = input.value.toLowerCase();
    if (uzyteLitery.includes(nowaLitera)) {
        komunikat.innerHTML = 'Już użyłeś tej litery.';
        return;
    } else {
        uzyteLitery.push(nowaLitera);
        console.log(`Dodałeś ${nowaLitera} do użytych liter.`);
    }

    if (wyraz.includes(nowaLitera)) {
        zgadnieteLitery.push(nowaLitera);
    }

    wyrazDoDruku = [];
    for (let i = 0; i < wyraz.length; i++) {
        if (zgadnieteLitery.includes(wyraz[i])) {
            wyrazDoDruku[i] = wyraz[i];
        } else {
            wyrazDoDruku[i] = '_';
        }
    }
    if (zgadnieteLitery.length == mozliweLitery.length) {
        komunikat.innerHTML = 'Wygrałeś!';
    }
    miejsceNaTekst.innerHTML = wyrazDoDruku.join(' ');
    /*
    Zadanie:
    Dodaj warunek kiedy wszystkie litery zostały odkryte i poinformuj użytkownika.
    */
}

main();
