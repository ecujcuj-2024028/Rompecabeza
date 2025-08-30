<%-- 
    Document   : index
    Created on : 27 ago 2025, 07:49:20
    Author     : informatica
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>

<html lang="es">
    <head>
        <title>Juego de Rompecabezas</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="css/style.css"/>
    </head>
    <body>
        <header>
            <h1>Rompecabeza 4x4 del juego Blasphemous</h1>
        </header>
        
        <main>
            <section>
            <div class="container-por">
                <img src="img/imagen-total.jpg" alt="imagen del rompecabeza completo"/>
                <button class="glow-on-hover" type="button" onclick="mostrarImagenCompleta()">Ver puzzle Completado</button>
            </div>
            
            <div class="container">
                <div id="tempo"></div>
                <h2>Rompecabezas 4x4</h2>
                <p>haz clic en un número adyacente al espacio vacío para moverlo.</p>
                <h2 id="contador"></h2>
                <div id="puzzle" class="puzzle"></div>
                <p id="mensaje"></p>
                <button class="glow-on-hover" type="button" onclick="reiniciar()">Reiniciar</button>
            </div>
            

        </section>
            <audio id="sonido-mover" src="audio/mover.mp3" preload="auto"></audio>
            <audio id="sonido-ganar" src="audio/ganar.mp3" preload="auto"></audio>


        </main>
        

        <script src="js/script.js"></script>
    </body>
</html>
