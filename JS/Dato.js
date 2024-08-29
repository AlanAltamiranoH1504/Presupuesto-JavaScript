/**
 * CLASE PADRE "DATO"
 */

class Dato{
    // Definimos constructor que inicializa atributo de "descripcion" y "valor"
    constructor(descripcion, valor){
        this.descripcion = descripcion;
        this.valor = valor;
    }

    // Definimos metodos GET y SET para ambos atributos
    // → Atributo descripcion
    get get_Descripcion(){
        return this.descripcion;
    }
    set set_Descripcion(descripcion){
        this.descripcion = descripcion;
    }
    // → Atributo valor
    get get_Valor(){
        return this.valor;
    }
    set set_Valor(valor){
        this.valor = valor;
    }
}