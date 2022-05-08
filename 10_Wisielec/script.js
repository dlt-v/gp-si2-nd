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
const obrazek = document.querySelector('img');

przyciskOk.addEventListener('click', graj);
przyciskReset.addEventListener('click', zresetuj);

let uzyteLitery = [];
let zgadnieteLitery = [];
let mozliweLitery = [];
let zycia = listaObrazkow.length;
let wyraz = listaWyrazow[Math.floor(Math.random() * listaWyrazow.length)];

function main() {
    wydrukuj();
}

function graj() {
    const nowaLitera = input.value.toLowerCase();
    if (uzyteLitery.includes(nowaLitera)) {
        komunikat.innerHTML = 'Już użyłeś tej litery.';
        return;
    } else {
        uzyteLitery.push(nowaLitera);
    }

    if (wyraz.includes(nowaLitera)) {
        zgadnieteLitery.push(nowaLitera);
        komunikat.innerHTML = '';
    } else {
        // Gracz popełnił błąd.
        komunikat.innerHTML = 'Ups! Tej litery nie ma w wyrazie.';
        zycia -= 1; // zycia = zycia - 1;
        obrazek.style.display = 'block';
        if (zycia == 0) {
            // Gracz przegrał.
            let odpowiedzi = [
                'Przegrałeś! Naciśnij "RESET" by zacząć od nowa.',
                'Wygrałeś! Nie! Żartuje. Naciśnij "RESET" by zacząć od nowa.',
            ];

            komunikat.innerHTML =
                odpowiedzi[Math.floor(Math.random() * odpowiedzi.length)];
            przyciskOk.style.display = 'none';
            // przyciskOk.disabled = true;
        }
        obrazek.src = listaObrazkow[zycia];
    }

    wydrukuj();

    if (zgadnieteLitery.length == mozliweLitery.length) {
        komunikat.innerHTML = 'Wygrałeś!';
    }
}

function zresetuj() {
    wyraz = listaWyrazow[Math.floor(Math.random() * listaWyrazow.length)];
    obrazek.style.display = 'none';
    uzyteLitery = [];
    zgadnieteLitery = [];
    mozliweLitery = [];
    zycia = listaObrazkow.length;
}
function wydrukuj() {
    wyrazDoDruku = [];
    for (let i = 0; i < wyraz.length; i++) {
        if (zgadnieteLitery.includes(wyraz[i])) {
            wyrazDoDruku[i] = wyraz[i];
        } else {
            wyrazDoDruku[i] = '_';
        }
    }
    miejsceNaTekst.innerHTML = wyrazDoDruku.join(' ');
}

main();

/*
Życia:
- gracz ma ograniczoną ilość żyć. (11) DONE
- za każdym błędem gracza musimy mu odjąć jedno życie. DONE
- musimy gracza poinformować kiedy skończyły mu się życia. DONE
- musimy zablokować możliwość zgadywania dalej, jeżeli graczowi skończył się życia. DONE


Przycisk Reset:
- losować nowy wyraz
- zresetować wyświetlany wyraz
- zresetować życia, podanych i zgadniętych liter - reset zmiennych globalnych
- (dodanie komunikatu o restarcie)
- odblokowanie możliwości zgadywania

Wynik Gracz vs komputer...

*/
