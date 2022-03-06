/*
Stwórz program, który będzie sprawdzał czy podany wyraz to Palindrom.
Palindrom jest to wyraz który brzmi tak samo od początku do końca, jak i od końca do początku.
Ala - alA
Jeżeli jest palindromem poinformuj użytkownika za pomocą napisu w konsoli.
*/

let tekstA = 'paweł';
let tekstB = 'racecar';
let tekstC = 'paweł';
let odwrotTesktA = tekstA;


odwrotTesktA = [...odwrotTesktA]; //rozbijamy go na tablice literek

odwrotTesktA.reverse(); //odwraca tablice

odwrotTesktA = odwrotTesktA.join(''); //łączy tablice w tekst

console.log(tekstA, odwrotTesktA);

if (tekstA === odwrotTesktA) {
    console.log(`${tekstA} jest palindromem.`);
} else {
    console.log(`${tekstA} nie jest palindromem.`);
}
