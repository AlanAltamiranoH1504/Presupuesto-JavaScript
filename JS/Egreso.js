/**
 * CLASE HIJA EGRESO QUE HEREDE DE LA CLASE DATOS
 */

class Egreso extends Dato{
    // Definimos atributo static que funcionara como ID
    static contadorEgreso = 0;

    //Herdamos el constructor de la clase padre
    constructor(descripcion, valor){
        super(descripcion, valor);
        this.id = ++Egreso.contadorEgreso;
    }

    // Definimos metodo GET para el atributo de id
    get get_ID(){
        return this.id; 
    }
}