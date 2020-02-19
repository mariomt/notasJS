function diasEntreFechas(f1, f2) {
    const unDia = 1000 * 60 * 60 * 24;
    const dif = Math.abs(f1 - f2);// numero absoluto

    return Math.floor(dif / unDia);
}



const hoy = new Date(); // fecha actual
const nacimiento = new Date(1996,9,9);