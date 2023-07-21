//Funciones
function nombreFunction(parametro1, parametro2){
    //codigo a ejecutar
    //declaraciones variables
    //condicionales bucles
    return resultado
}
//Hello There
function saludo(){
    console.log('Hello there')
}

console.log(saludo())

//Array
function saludo1(){
    return [1,2,3,4]
}

console.log(saludo1())

//Objeto
function saludo2(){
    return {nombre: 'tatiana'}
}

console.log(saludo2())

//funcion dentro de otra funcion
function saludo3(){
    return function(){
    return 'Hola a todos'
    }
}
console.log(saludo3()())

//Nombre y apellido
function saludo4(nombre, apellido){
    return 'Hola ' + nombre + apellido
}
console.log(saludo4 ('Tatiana ', 'Angarita'))

//SUMA
function suma (a, b){
    return a + b
}
console.log(suma(3,8)) 

//SUMA 2
function suma (a, b){
    if (b === undefined){
        b = 0
    }
    return a + b
}
console.log(suma(3)) 

//PARAMETRO PREDETERMINADO

function saludar(nombre = 'invitado'){
    console.log('Hola!, ' + nombre)
}

console.log(saludar('Karol'))
saludar('Tatiana') //de las dos formas de puede

//OBJETO
const persona = {   //el objeto es 'persona'
    nombre: 'Karol',
    edad: 19, //un objeto dentro de otro objeto
    saludar: function(){ //una funcion dentro de un objeto
        console.log('Hola')
    }
}

console.log(persona)
console.log(persona.nombre)
console.log(persona.edad)
persona.saludar()

//OBJETO 2
//datos dentro de un objeto
const user = {
    nombre: 'Jimmy',
    apellido: 'Lombana',
    edad: 30,
    direccion:{
        pais: 'Colombia',
        departamento: 'Huila',
        cuidad: 'Garzon'
    },
    amigos: ['Morocho', 'Karol', 'Maria'],
    active: true, 
    enviarMail: function(){
        return 'Enviando correo ...'
    }
}

console.log(user.direccion.municipio)
console.log(user.amigos)
console.log(user.active)
console.log(user.enviarMail())

function saludo(nombre = 'invi'){
    return function(){
        return 'hola ' + nombre
    }
}

console.log(saludo('Sergio')())

const person = {
    nombre: 'Sergio',
    edad: 19,
    saludo: function(){
        console.log('Hola')
    },
    amigos: ['Karol', 'Paula'],
    enviarEmail(){
        return 'Enviando Correo'
    }
}
console.log(person.nombre)
console.log(person.edad)
console.log(person.amigos)
person.saludo()
console.log(person.enviarEmail())

//Shorthand property names
//Propiedades abreviadas
const nombre = 'Arcico'
const edad = 20

const humano ={
    nombre,
    edad,
    saludo(){
        console.log(nombre + ' ' + edad)
    }
}

console.log(humano.nombre)
console.log(humano.edad)
humano.saludo()

const pc = 'Laptop ASUS M16'
const precio = 'USD $5000'

const newProduct = {
    nombre,
    precio
}

console.log(newProduct)

const titulo = document.createElement("h1")
titulo.innerText = 'Hello There'
document.body.append(titulo)


