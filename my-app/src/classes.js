// Generación de clase Pet, el nombre de las clases, siempre van con Mayuscula y deben tener su método constructor
class Pet {
    // Creación de constructor de la clase Pet
    constructor(species, breed, name, owner){
        // La palabra reservada this, hace referencia a la variable de la clase
        this.species = species
        this.breed = breed
        this.name = name
        this.owner = owner
    }

    // Para definir los metodos (acciones), debemos declararlos dentro de la clase
    sleep() {
        // Podemos hacer referencia al contexto de la clase con this y utilizar las propiedades o métodos dentro de otro método
        return `${this.name} esta durmiendo`;
    }

    // Para definir los metodos (acciones), debemos declararlos dentro de la clase
    aet() {
        // Podemos hacer referencia al contexto de la clase con this y utilizar las propiedades o métodos dentro de otro método
        return `${this.name} esta comiendo`;
    }

}


// Para instanciar una clase, utilizamos la palabra reservada new y envíamos las parametros en forma ordenada
const taliban = new Pet("Perro", "French", "Taliban", "Mariana");

// Para invocar un metodo de la instancia, colocamos el nombre de la instancia, en este caso taliban e invocar el metodo interno
taliban.sleep();



// Para el tema de la herencia, utilizamos la palabra reservada extends
class Dog extends Pet {
    constructor(species, breed, name, owner, pedigree) {
        // Adicionalmente, dentro del contructor, debemos invocar la palabra reservada super, que invoca el contructor de la clase de donde se esta herendando
        // debemos enviar los parametros que requiere el contructor en super
        super(species, breed, name, owner);
        this.pedigree = pedigree;
    }   
    
    bark() {
        return "guau";
    }
}


// Al instanciar a la clase que esta herendando (clase hija), podemos utilizar todos los metodos de la clase de la que se esta herendando (clase padre)