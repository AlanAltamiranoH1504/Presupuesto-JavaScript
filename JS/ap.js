/**
 * 
 */

// Definimos arreglos de la clase Ingreso y Egreso

//Arreglo de ingresos
const ingresos = [
    new Ingreso("Salario", 2100.00),
    new Ingreso("Venta Coche", 1500.00)
];
//Arreglo de egresos
const egresos = [
    new Egreso("Renta", 900),
    new Egreso("Ropa", 400)
];

// Definimos funcion cargarApp() la cual se va a cagar siempre que se inicie la aplicacion 
let cargarApp = () =>{
    cargarCabecero();
    cargarIngresos();
    cargarEgreso();
}

// Definimos funcion que calcula el total del arreglo de Ingresos
let totalIngresos = () =>{
    let totalIngreso = 0;
    // Iteramos los elementos del arreglo "ingresos"
    for(let ingreso of ingresos){
        totalIngreso += ingreso.valor;
    }
    return totalIngreso;
}
// Definimos funcion que calcula el total del arreglo de Egresos
let totalEgresos = () =>{
    let totalEgreso = 0;
    // Iteramos los elementos del arreglo egresos
    for(let egreso of egresos){
        totalEgreso += egreso.valor;
    }
    return totalEgreso;
}

// Definimos funcion cargarCabecero. Esta funcion se encarga de actualizar los elementos HTML del cabecero
let cargarCabecero = () => {
    // Definimos variable que va a tener el presupuesto total
    let presupuesto = totalIngresos() - totalEgresos();
    // Definimos variable que tiene el porcentaje del presupuesto de la relacion de egreso e ingreso
    let porcentajeEgreso = totalEgresos() / totalIngresos();

    // Recuperamos los elementos HTML
    document.getElementById("presupuesto").innerHTML = formatoMoneda(presupuesto);
    document.getElementById("porcentaje").innerHTML = formatoPorcentaje(porcentajeEgreso)
    document.getElementById("ingresos").innerHTML = formatoMoneda(totalIngresos());
    document.getElementById("egresos").innerHTML = formatoMoneda(totalEgresos());
}

// Definimos  funcion llamada formatoMoneda(), la cual da formato a los elementos HTML que sean de moneda
const formatoMoneda = (valor) =>{
    return valor.toLocaleString("en-US", {style:"currency", currency: "USD", minimumFractionDigits:2});
}

// Definimos funcion llamada formatoPorcentaje(), la cual da formato a los elementos HTML que sean de porcentaje
const formatoPorcentaje = (valor) =>{
    return valor.toLocaleString("en-US", {style:"percent", minimumFractionDigits: 2});
}

// Definimos funcion que nos va a permitir mostrar dinamicamente los ingresos en el codigo html
// Esta funcion sustituye cada uno los elementos DIV que son un ingreso
// Esta funcion tambien la mandamos a llamar dentro de la funcion onload, para cada vez que se inicie la pagina se cargue
const cargarIngresos = () =>{
    //Recorremos cada uno de los elementos que hay en el arreglo
    let ingresosHTML = "";
    for(let ingreso of ingresos){
        //Con la variable ingresosHTML vamos concatenando cada uno de los ingresos segun la funcion crearIngresoHTML
        // y le pasamos como referencia el ingreso que estamos interando
        ingresosHTML += crearIngresoHTML(ingreso);
    }
    //Una vez ya tengamos la variable ingresosHTML, recuperamos nuestro elemento que tiene por id "lista-ingresos"
    document.getElementById("lista-ingresos").innerHTML = ingresosHTML;
}

// Definimos funcion crearIngresoHTML(), esta funcion nos permite crear cada elemento DIV que es un ingreso segun
// el arreglo de ingresos 
const crearIngresoHTML =  (ingreso) =>{
    let ingresoHTML = `
        <div class="elemento limpiarEstilos">
                    <div class="elemento_descripcion">${ingreso.descripcion}</div>
                    <div class="derecha limpiarEstilos">
                        <div class="elemento_valor">${formatoMoneda(ingreso.valor)}</div>
                        <div class="elemento_eliminar">
                            <button class="elemento_eliminar--btn">
                                <!--Aplicamos evento onclick-->
                                <ion-icon name="close-circle-outline"
                                onclick="eliminarIngreso(${ingreso.id})"></ion-icon>
                            </button>
                        </div>
                    </div>
                </div>
    `;
    // Returnamos la variable ingresoHTML
    return ingresoHTML;
}

// Definimos metodo para eliminar un ingreso
const eliminarIngreso = (id) =>{
    //Con el id vamos a buscar el objeto dentro del arreglo de ingresos, y para ello usamos el arreglo junto
    //con el metodo findIndex. Utilizamos una variable que almacena cada una de las referencias del arreglo de ingresos  
    let indiceEliminar = ingresos.findIndex(ingreso => {ingreso.id === id});

    //Eliminamos el elemento con la funcion splce
    ingresos.splice(indiceEliminar, 1);

    //Volvemos a cagar el cabecero como listado de ingresos
    cargarCabecero();
    cargarIngresos();
}

// Definimos la funcion que nos va a permitir generar dinamicamente los egresos en el codigo HTML
// Esta funcion sustituye o agrega cada uno de los elementos de tipo egreso 
// Esta funcion se manda a llamar en el onload() siempre
const cargarEgreso = () =>{
    // Recorremos cada uno de los elementos que hay en el arreglo de egreso
    let egresosHTML = "";
    for(let egreso of egresos){
        // Con la variable egresoHTML vamos a ir concatenando cada uno de los elementos del arreglo egreso, y 
        // le pasamos como referencia cada egreso a la funcion cargarEgresoHTML para que cree dicho egreso
        egresosHTML += cargarEgresoHTML(egreso);
    }
    // Recuperamos el elemento html que hara la lista de egresos
    document.getElementById("lista-egresos").innerHTML = egresosHTML;
}

// Creamos la funcion que va generar dinamicamente cada uno de los elementos DIV que es un egreso
const cargarEgresoHTML = (egreso) => {
    let egresoHTML = `
        <div class="elemento limpiarEstilos">
                    <div class="elemento_descripcion">${egreso.descripcion}</div>
                    <div class="derecha limpiarEstilos">
                        <div class="elemento_valor">- ${formatoMoneda(egreso.valor)}</div>
                        <div class="elemento_porcentaje">${formatoPorcentaje(egreso.valor/totalEgresos())}</div>
                        <div class="elemento_eliminar">
                            <button class="elemento_eliminar--btn">
                                <ion-icon name="close-circle-outline"
                                onclick = "eliminarEgreso(${egreso.id})"></ion-icon>
                            </button>
                        </div>
                    </div>
                </div>
    `;
    return egresoHTML;
}
// Definimos funcion que nos permite eliminar un egreso
const eliminarEgreso = (id) =>{

    let indiceEliminar = egresos.findIndex(egreso => {egreso.id === id});


    egresos.splice(indiceEliminar, 1);

  
    cargarCabecero();
    cargarEgreso();
}

// Definimos funcion agregarDato()
const agregarDato = () =>{
    //Recuperamos el formulario
    let forma = document.forms["forma"];

    // Preguntamos si el usuario selecciono un ingreso o un egreso y recuperamos los otros elementos
    let tipo = forma["tipo"];
    let descripcion = forma["descripcion"];
    let valor  = forma["valor"];

    // Preguntamos si los campos no estan vacios o son distintos de null
    if(descripcion.value !== "" && valor.value !== ""){
        if(tipo.value === "ingreso"){
            ingresos.push(new Ingreso(descripcion.value, Number(valor.value)));
            cargarCabecero();
            cargarIngresos();
        }else if(tipo.value === "egreso"){
            egresos.push(new Egreso(descripcion.value, Number(valor.value)));
            cargarCabecero();
            cargarEgreso();
        }
    }else{
        alert("Formulario Vacio");
    }
}