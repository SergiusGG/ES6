// Ejercicio 1

var li1 = '<li>';
var row = '<div class="row">';
var col = '<div class="col-md-4">';
var img = '<img src="';
var poster = 'img/Shrek-903764423-large.jpg';
var size = '" height="250" alt="" />';
var div = '</div>';
var col2 = '<div class="col-md-8">';
var h2 = '<h2>';
var title = "Shrek";
var h2cierre = '</h2>';
var div2 = '</div>';
var div3 = '</div>';
var li2 = '</li>';

document.body.innerHTML = `${li1} ${row} ${col} ${img} ${poster} ${size} ${div} ${col2} ${h2} ${title} ${h2cierre} ${div2} ${div3} ${li2}`;


//Ejercicio 2


const multiply = (num1, num2) => num1 * num2;
console.log(multiply(4, 2));


const toCelsius = (fahrenheit) => (5 / 9) * (fahrenheit - 32);
console.log(toCelsius(80));

const padZeros = (num, totalLen) => {
    var numStr = num.toString();
    var numZeros = totalLen - numStr.length;
    for (var i = 1; i <= numZeros; i++) {
        numStr = "0" + numStr;
    }
    return numStr;
}
console.log(padZeros("5", "8"));

const power = (base, exponent) => {
    var result = 1;
    for (var i = 0; i < exponent; i++) {
        result *= base;
    }
    return result;
}
console.log(power(4, 6));

const greet = (who) => `Hello ${who}`;
console.log(greet("Wazowski"));

// Ejercicio 3

const users = [{ firstName: 'Homer', lastName: 'Simpson' },
    { firstName: 'Marge', lastName: 'Simpson' },
    { firstName: 'Bart', lastName: 'Simpson' },
    { firstName: 'Lisa', lastName: 'Simpson' },
    { firstName: 'Maggie', lastName: 'Simpson' }
];
const usersF = users.map(user => { return user.firstName; });
console.log(usersF);



// Ejercicio 4


const epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];

const reducer = (accumulator, currentValue) => accumulator + " " + currentValue;
console.log(epic.reduce(reducer));



// Ejercicio 5

let str = "Supercalifragilisticoespialidoso";
const reverseStr = newStr => {
    let strRvrs = [...str].reverse();
    return strRvrs;
}
console.log(reverseStr());



// Ejercicio 6

async function b() {
    let a = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("I'll be back");
        }, 2000)
    })
    let result = await a;
    console.log(result);
}
b();


// Ejercicio 7


var tasks = [{
        'name': 'Start React web',
        'duration': 120
    },
    {
        'name': 'Work out',
        'duration': 60
    },
    {
        'name': 'Procrastinate on facebook',
        'duration': 240
    }
]
const taskN = tasks.map(task => {
    return task.name;
});
console.log(taskN);

tasks.forEach(task => console.log(task.name));