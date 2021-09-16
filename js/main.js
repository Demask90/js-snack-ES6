/* SNACK 1 */

const bici = [
    {
        nome : 'Specialized',
        peso : '14,8',
    },

    {
        nome : 'LePierre',
        peso : '13,7',
    },

    {
        nome : 'Bianchi',
        peso : '12,1',
    },
]

console.log(bici);

let biciLeggera = bici[0];

for (let i = 0; i < bici.length - 1; i++){

    if (bici[i].peso < biciLeggera.peso){
        biciLeggera = bici[i];
    }
}

console.log(biciLeggera);

// Stampare a schermo la bici con peso minore utilizzando destructuring e template literal

const {nome, peso} = biciLeggera;
console.log(
`La ${nome} con il peso di ${peso}Kg è la bici più leggera`
)

// BONUS: inserire una arrow function che preso in input l'array di bici ritorni l'oggetto con bici più leggera

const printWeight = (element) => {
    for (let i = 0; i < element.length - 1; i++){
        if (element[i].peso < biciLeggera.peso){
            biciLeggera = element[i];
        }
    }
    return biciLeggera;
}

console.log(printWeight(bici));

/* SNACK 2 */

// Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
let teams = [
    {team: 'Torino', points: 0, fauls: 0},
    {team: 'Juventus', points: 0, fauls: 0},
    {team: 'Milan', points: 0, fauls: 0},
    {team: 'Inter', points: 0, fauls: 0},
    {team: 'Napoli', points: 0, fauls: 0},
    {team: 'Fiorentina', points: 0, fauls: 0},
]

// Generare numeri random al posto degli 0 nelle proprietà:
// Punti fatti e falli subiti.

for(let i = 0; i < teams.length; i++){
    teams[i].points = getRandom(1,50);
    teams[i].fauls = getRandom(30,70);
}
console.log(teams);

// Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console. 

let newTeams = [];
for(let i = 0; i < teams.length; i++){
    const {team, fauls} = teams[i];
    newTeams.push({team, fauls}); 
}
console.log(newTeams)

function getRandom(min, max){
    return Math.floor(Math.random() * (max - min) + min);
}

/* SNACK 3 */

// Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).

const myArray = [4,8,24,28,7,33,37,44,21,36,49,50,2];
var newArray = filterArray(myArray, 4,7);
console.log(newArray);

// La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.

function filterArray(array, a, b){
    return array.filter((i) => {
        return a <= i && b >= i});
}

// Usiamo i nuovi metodi degli array foreach o filter.

const forEachArray = [4,8,24,28,7,33,37,44,21,36,49,50,2];
var arrayTarget = arrayForEach(forEachArray,2,8);

console.log(arrayTarget);

function arrayForEach(array,a,b){

    const newArray2 = [];

    array.forEach((value, i) => {
        console.log(value)
        if(a < i && b > i){
            newArray2.push(value);
        }
    });

    return newArray2;
}