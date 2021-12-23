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

    // Metodos get y set, para poder actualizar u obtener información de la clase
    getOwnerFullName() {
        // El simbolo ? nos sirve para que se valide si la propiedad existe o no
        // en caso negativo, devuelve un undefined no un error 
        return `${this.owner?.firstName} ${this.owner?.lastName}`;
    }

    // Para crear un metodo get y set, utilizamos la palabra reservada get o set
    get ownerName() {
        return this.getOwnerFullName();
    }

    set setOwnerName(owner) {
        // Si el tipo del dato recibido no object, se generara un error y se termina el proceso
        if(typeof owner !== "object") {
            throw new Error("Invalid property");
        }

        // de lo contrario, se setea el valor recibido a la propiedad
        this.owner = owner;
    }
    
}

// Al instanciar a la clase que esta herendando (clase hija), podemos utilizar todos los metodos de la clase de la que se esta herendando (clase padre)



// Las funciones estaticas en javascript, solo pueden accederse desde la clase misma, sin necesidad de instanciarla
// De hecho, si la instanciamos, no tendríamos acceso a los metodos y variables estaticas

class Calculator {
    static resultMessage = "El resultadop es:";

    static sum(a, b) {
        return `${this.resultMessage} ${a + b}`;
    }
}