/*
ZADANIE 1 (10:35)

Stwórz program, który będzie obliczać ile będziesz mógł ściągnąć danych z
Internetu w ciągu godziny, podając jedynie prędkość swojego Internetu w
Megabitach na sekundę.

1. Pobierz od użytkownika prędkość Internetu w Mb/s(Megabity na sekundę) i
zapisz do zmiennej. Skorzystaj z metody prompt() oraz podany przez
użytkownika ciąg znaków przekształć na liczbę, użyj Number()

2. Utwórz zmienną czas w której zapiszesz 1 godzinę przekonwertowaną na
sekundy

3. zamieniamy jednostkę danych z (mega)bitów na (mega)bajty na sekundę
pamiętając że 1 (mega)bajt [B] to 8 (mega)bitów [b]

4. mnożymy przepustowość Internetu przez czas i dzielimy przez 1024 żeby
uzyskać jednostkę GB całość obliczeń zapisujemy do zmiennej np. wynik

5. wyświetlamy wynik za pomocą alert()

wynik.toFixed(2) Zaokrąglenie liczby.
*/
// let predkosc = Number(prompt('Podaj Mb/s'));
// let predkosc = 12;
// const czas = 3600;

// predkosc /= 8;

// console.log(((predkosc * czas) / 1024).toFixed(2));

/*
Zadanie 2 (10:55)
Stwórz program, który sprawdzi czy podany przez użytkownika rok jest rokiem
przestępnym. Skorzystaj z instrukcji warunkowej if

Rok przestępny jest rokiem mającym 366 dni zamiast 365. Co 4 lata w lutym dodaje
się jeden dodatkowy dzień.

Rok jest przestępny, gdy jest podzielny przez 4 i nie jest podzielny przez 100 lub
jest podzielny przez 400.

Wykorzystaj operator modulo (%) aby sprawdzić resztę z dzielenia. Jeśli jakaś
wartość jest podzielna to znaczy że dzieli się bez reszty.
*/
// const rok = 2025;

// if ((rok % 4 == 0 && rok % 100 != 0) || rok % 400 == 0) {
//     console.log(`Rok ${rok} jest rokiem przestępnym.`);
// } else {
//     console.log(`Rok ${rok} nie jest rokiem przestępnym.`);
// }

/*
Zadanie 3 (11:10)
Stwórz funkcje poleProstokata(), która będzie przyjmować dwa argumenty długość
boku1 oraz długość boku2 w celu policzenia pola powierzchni.

function poleProstokata(bokA, bokB) {
  alert("Pole powierzchni prostokąta to " + bokA * bokB);
}

let bokA = Number(prompt("Długość boku a"));
let bokB = Number(prompt("Długość boku b"));
poleProstokata(bokA, bokB);
*/

/*
Zadanie 4 (11:32)
Stwórz funkcje losowyKolor(), która będzie generować losowe kolory w zapisie
szesnastkowym. Wszystkie dostępne znaki umieść w tablicy.

Znaki budujące kolor 0123456789abcdef w sumie 16

1. Stwórz zmienna do której zapiszesz wszystkie znaki
2. Zapisz każdy znak jako osobny element do tablicy używając Spread syntax
... , to zapis, który umożliwia rozbijanie iterowanej wartości na składowe.
3. Utwórz zmienna kolor w której zapiszesz znak stały #
4. Wykorzystaj pętle for do stworzenia koloru
5. Zwróć gotowy kolor z funkcji
*/

function losowyKolor() {
    let napis = '0123456789abcdef';
    let tablica = [...napis];

    let kolor = '#';

    for (let i = 0; i < 6; i++) {
        kolor += tablica[Math.floor(Math.random() * 16)];
    }
    return kolor;
}

wynik = losowyKolor();
console.log(wynik);

/*
Praca domowa
Stwórz obiekt nowyUzytkownik.
Ustaw w nim takie właściwości jak login, email, telefon, haslo oraz metodę
generujHaslo() która będzie tworzyć nowe hasło.
Wygeneruj nowe hasło dla użytkownika.
*/
