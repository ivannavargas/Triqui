let miMatriz = [
    ["A", "B", "C"],
    ["D", "E", "F"],
    ["G", "H", "I"]
];

function armarTablero() {

    let tablero = document.getElementById("tablero");


    for (let i = 0; i < 9; i++) {
        tablero.innerHTML = tablero.innerHTML +
            "<input type='text' class='casilla'  id='casilla1' onClick='realizarJugada()'></input>";

        if ((i + 1) % 3 === 0) {
            tablero.innerHTML = tablero.innerHTML + "<br>";
        }
    }

    tablero.innerHTML = tablero.innerHTML +
        "<input class='boton' type='button' value='X' id='boton1' onclick='alternarBotones()'>";
    tablero.innerHTML = tablero.innerHTML +
        "<input class='boton' type='button' value='O' id='boton2' onclick='alternarBotones()'>";
}

function alternarBotones() {

    let boton1 = document.getElementById('boton1');
    let boton2 = document.getElementById('boton2');

    if (boton1.disabled === true) {
        boton1.disabled = false;
        boton2.disabled = true;
    } else {

        boton1.disabled = true;
        boton2.disabled = false;

    }
}

function realizarJugada() {

    let miCuadro = event.target;
    let miMensaje = document.getElementById("mensaje");


    if (!(miCuadro.value === "X" || miCuadro.value === "O")) {


        let boton1 = document.getElementById('boton1');
        let valor;
        if (boton1.disabled === true) {
            valor = 'O';
        } else {

            valor = 'X';
        }
        console.log(valor);

        miCuadro.value = valor;

        //Aquí llenar la matriz


        //Aquí llamamos a la función verificarTriqui()



        alternarBotones();

        miMensaje.innerText = "";

    } else {


        miMensaje.innerText = "Este cuadro ya está ocupado!!!!";

    }
}



function verificarTriqui() {
 

    let triqui = false;

    //Verificar si hay triqui en las filas
    for (let i = 0; i < 3; i++) {
        if (miMatriz[i][0] === miMatriz[i][1] === miMatriz[i][2]) {
            console.log("triqui");
        }
    }

    //Verificar si hay triqui en las columnas
    for(let  j=0;j<3;j++){

        if(miMatriz[0][j]===miMatriz[1][j]===miMatriz[2][j]){
            triqui=true;            
        }
    }

    // Para verificar si hay triqui en las diagonales
    if(miMatriz[0][0]===miMatriz[1][1]===miMatriz[2][2]){
        triqui=triqui;
    }

    if(miMatriz[0][2]===miMatriz[1][1]===miMatriz[2][0]){
        triqui=true;
    }

    return triqui;

}
