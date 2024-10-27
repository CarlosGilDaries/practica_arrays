function generarCombinacion() {
    let combinacion = new Set();

    while (combinacion.size < 6) {
        let numero = Math.floor(Math.random() * 49) + 1;
        combinacion.add(numero);
    }

    return Array.from(combinacion).sort((a, b) => a - b);
}

for (let i = 0; i < 50; i++) {
    console.log(`Combinación ${i + 1}: ${generarCombinacion().join(', ')}`);
}