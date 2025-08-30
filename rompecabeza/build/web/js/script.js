
    // rompecabeza de numeros
    let puzzleContainer = document.getElementById("puzzle");
    let mensaje = document.getElementById("mensaje");

    let piezas = [];
    for (let fila = 1; fila <= 4; fila++) {
        for (let columna = 1; columna <= 4; columna++) {
            piezas.push(`img/fila-${fila}-columna-${columna}.webp`);
        }
    }
    
    piezas[piezas.length - 1] = "";
    let estado = [];

    // Funcióon para mezclar piezas
    function mezcla(array) {
        let copia = [...array];
        for (let i = copia.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [copia[i], copia[j]] = [copia[j], copia[i]];
        }
        return copia;
    }
    function mostrarImagenCompleta() {
        estado = [...piezas]; // copia ordenada
        dibujar();
    }
    
    // Dibuja el puzzle
    function dibujar() {
        puzzleContainer.innerHTML = "";
        estado.forEach((valor, i) => {
            let celda = document.createElement("div");
            if (valor === "") {
                celda.classList.add("vacio");
            } else {
                celda.classList.add("celda");
                let img = document.createElement("img");
                img.src = valor;
                celda.appendChild(img);
                celda.addEventListener("click", () => mover(i));
            }
            puzzleContainer.appendChild(celda);
        });
        verificar();
    }
    
    //Intentar mover pieza
    function mover(indice){
        if (juegoTerminado) return;
        let vacio = estado.indexOf("");
        let filas = 4;
        let col = indice % filas;
        let fila = Math.floor(indice/filas);
        let colVacio = vacio % filas;
        let filaVacio = Math.floor(vacio/filas);
        
        // Verificar si es adyacente
        if ((Math.abs(col - colVacio) === 1 && fila === filaVacio) ||
            (Math.abs(fila - filaVacio) === 1 && col === colVacio)) {
                [estado[indice], estado[vacio]] = [estado[vacio], estado[indice]];
                dibujar();
                contador(1);
                reproducirMover();
        }
    }
    // Reproducir sonido de mover
    function reproducirMover() {
        let sonido = document.getElementById("sonido-mover");
        sonido.currentTime = 0; 
        sonido.play();
    }
    
    // Reproducir sonido de ganar
    function reproducirGanar() {
        let sonido = document.getElementById("sonido-ganar");
        
        sonido.play();
    }
    
    let movimientos = 0;

    function contador(cantidad) {
        movimientos += cantidad;
        document.getElementById("contador").innerHTML =
            "El número de movimientos es: " + movimientos;
    }
    
    contador();
    
    let juegoTerminado = false;

    // Verificar si ganó
    function verificar(){
        if (juegoTerminado) return;
        if (JSON.stringify(estado) === JSON.stringify(piezas)) {
            juegoTerminado = true;
            mensaje.innerText = `¡Felicidades! Completaste el juego. \n 
                Para jugar de nuevo presiona el boton de Reiniciar` ;
            reproducirGanar();
            alert("¡Felicidades! Completaste el juego.");
            clearInterval(temporizador);
            
        }
    }
    

    let tiempoRestante = 500;
    let temporizador;

    // Iniciar temporizador
    function iniciarTemporizador() {
        clearInterval(temporizador);
        tiempoRestante = 500;
        document.getElementById("tempo").innerHTML = tiempoRestante + " segundos";

        temporizador = setInterval(() => {
            if (tiempoRestante > 0) {
                document.getElementById("tempo").innerHTML = tiempoRestante + " segundos";
                tiempoRestante--;
            } else {
                document.getElementById("tempo").innerHTML = 0 + " segundos";
                window.alert("Perdiste el juego :(");
                clearInterval(temporizador);
            }
        }, 1000);
    }

    // Reiniciar Juego
    function reiniciar() {
        estado = mezcla(piezas);
        mensaje.innerHTML = "";
        movimientos = 0;
        contador(0);
        juegoTerminado = false;
        dibujar();
        iniciarTemporizador();
        document.getElementById("btn-reintentar").style.display = "none";
    }

    // Iniciar al cargar
    reiniciar();
    
    
    