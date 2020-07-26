class Rectangulo { // Asi se crea una clase
    #
    area = 0;

    constructor(base = 0, altura = 0) { // Un constructor recibe argumentos
        this.base = base;
        this.ltura = altura;

        this.#area = base * altura;
    }

    calcularArea() {
        console.log(this.#area * 2);
    }
}

const rectangulo = new Rectangulo(10, 15); // Asi instanciamos una clase
// rectangulo.area = 100;

rectangulo.calcularArea();
console.log(rectangulo);

// Asi se crea un metodo, en un metodo puedo mandar parametros