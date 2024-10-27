let data = [
    {name: "Nacho", telephone: "966112233", age: 40},
    {name: "Ana", telephone: "911223344", age: 35},
    {name: "Mario", phone: "611998877", age: 15},
    {name: "Laura", telephone: "633663366", age: 17}
];

data.push(
    {name: "Pedro", telephone: "611944444", age: 25},
    {name: "Julia", phone: "633232323", age: 37}
);

console.log("Array después de añadir nuevos elementos:");
console.log(data);

let porEdad = [...data].sort((a, b) => a.age - b.age);
console.log("\nArray ordenado por edad:");
console.log(porEdad);

let porNombre = [...data].sort((a, b) => a.name.localeCompare(b.name));
console.log("\nArray ordenado por nombre:");
console.log(porNombre);

let mayoresDe30 = data.filter(person => person.age > 30);
console.log("\nArray de personas mayores de 30 años:");
console.log(mayoresDe30);