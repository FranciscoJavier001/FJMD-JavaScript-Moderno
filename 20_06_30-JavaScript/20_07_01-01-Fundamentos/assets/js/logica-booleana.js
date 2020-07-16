const regresaTrue = () => {
    console.log('Regresa True');
    return true;
}

const regresaFalse = () => {
    console.log('Regresa False');
    return false;
}

console.warn('Not o la negacion');
console.log(true);
console.log(!true);
console.log(!false);

console.log(!regresaFalse()); //true

console.warn('And'); //true si todos los valores son verdaderos
console.log(true && true); //true
console.log(true && !false); //false

console.log('=========');
console.log(regresaFalse() && regresaTrue()); //false
console.log(regresaTrue() && regresaFalse()); //false

console.log('=========');
regresaFalse() && regresaTrue();

console.log('4 condiciones', true && true && true && false); //false

console.warn('OR'); //true
console.log(true || false);
console.log(false || false);

console.log(regresaTrue() || regresaFalse());
console.log('4 condiciones', true || true || true || false);

console.warn('Asignaciones');