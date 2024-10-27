let valores = [1, 1, 2, 3, 4, 4, 5 , 6, 6, 7];

let contador = {};
valores.forEach(num => contador[num] = (contador[num] || 0) + 1);

let unicos = valores.filter(num => contador[num] === 1);

console.log(unicos);