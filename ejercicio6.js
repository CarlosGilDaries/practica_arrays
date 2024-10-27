let personas = new Map();

personas.set("Edgar", 43);
personas.set("María", 5);
personas.set("Lucas", 15);
personas.set("Laura", 7);

personas.set("María", 36);

personas.forEach((edad, nombre) => {
    console.log(`${nombre}: ${edad} años`);
});