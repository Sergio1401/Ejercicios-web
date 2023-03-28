//* arrow funtion

const sum = (a, b) => a + b;
console.log(sum(2, 5));


//? template literals
const name = "Sergio";
console.log(`Hola ${name}, ¿cómo estás?`)

//!Desestructuracion
const person = {
    nombre: "Sergio",
    age: 21,
    country: "Colombia"
}

const { nombre, age } = person;
console.log(nombre);
console.log(age);

//*Clases

class personas{
    constructor(name, ages){
        this.names = name;
        this.ages = ages;
    }

    sayHello(){
        console.log(`Hola, mi nombre es ${this.names} y tengo ${this.ages} años.`);
    }
}

const persona = new personas("Sergio Andres", 21);
persona.sayHello();
 
//*Promesas

function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Datos recuperados correstamente.");  
        }, 2000);
    });
}
fetchData()
    .then(response => console.log(response))
    .catch(error => console.error(error));

//!Spread operator
    const numbers = [1, 2, 3, 8];
    console.log(...numbers);

    const personajes = {
        names: "PAULAS",
        ages:28,
        country: "Holanda"
    };
    console.log({...personajes});

//* Default parameters

function greet(nombres = "Amigo"){
    console.log(`Hola, ${nombres}!`);
}
greet();
greet("Camilo");