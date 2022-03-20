// budynek
// kubek

// Obiekt ma właściwości oraz ma metody.
// Właściwości są to cechy obiektu które go opisują.
/*
Cechy kubka: kruchy, kolor, pojemność, zawartość
kruchy: True
kolor: "zielony"
pojemność: 0.3
zawartość: "herbata"

Cechy budunku: rozmiar, kolor, ilość_pięter, adres, ilość_mieszkań, stan

My deklarujemy tylko cechy które my potrzebujemy w kodzie.
*/

// Metody to są akcje które używają danych z właściwośći by coś zmienić lub przedstawić.
/*
Metody kubka:
wypij() -> zmniejszać zawartość
napełnij() -> wypełnij kubek jakąś zawartością
zbij() -> jeżeli kubek jest kruchy to go zbij

Metody bloku:
zburz() -> ...
zbuduj() -> ...
napraw() -> ...
pomaluj() -> ...
*/

// Tworzenie obiektu kubek

let kubekTomka = {
    pojemnosc: 0.3,
    kolor: 'zielony',
    zawartosc: 'pusty',
};

let kubekMatuesza = {
    pojemnosc: 0.2,
    kolor: 'czerwony',
    zawartosc: 'herbata',
};
// Jak się dostać do właściwości:
// console.log(kubekTomka.kolor);
// console.log(kubekMatuesza.kolor);
// Jak modyfikować właściości:
kubekTomka.kolor = 'niebieski';
// console.log(kubekTomka.kolor); // to nie jest dobry nawyk

// Jak deklarować metody:
let kubekRomka = {
    pojemnosc: 0.4,
    kolor: 'czarny',
    zawartosc: 'kawa',
    wypij: function () {
        if (this.zawartosc == 'pusty') {
            console.log('Twój kubek jest już pusty!');
        } else {
            console.log('Wypiłeś zawartość kubka!');
            this.zawartosc = 'pusty';
        }
    },
};

console.log(kubekRomka.zawartosc);
// Jak użyć metody:
kubekRomka.wypij();
console.log(kubekRomka.zawartosc);

/*
DRY - Don't Repeat Yourself - Nie Powtarzaj Sie
KISS - Keep It Simple, Stupid - Nie komplikuj sobie kodu, głupku
*/

/*
Zadanko