/**
 * CLASE HIJA INGRESO QUE HEREDA DE CLASE DATO
 */
    
class Ingreso extends Dato{
    // Definimos atributo estatico para que sirva de ID para cada objeto de la clase ingreso
    static contadorIngresos = 0;

    //Heredamos el constructor de la clase padre
    constructor(descripcion, valor){
        super(descripcion, valor);
        // Definimos ID del objeto creado por medio de atributo static
        this.id = ++Ingreso.contadorIngresos;
    }
    // Definimos metodo GET para el atributo id
    get get_ID(){
        return this.id;
    }
}