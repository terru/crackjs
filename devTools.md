
# Debugging JS usando DevTools
Este es un pequeño apunte con algunas cuestiones a recordar sobre un correcto uso de las herramientas de debugging para JS, que disminuye considerablemente los tiempos de resolución de issues. 
## Creación de Snippets
En la pestaña de **Sources** , se encuentra el menú **Snippets**, que permite gestionarlos fácilmente. Un *Snippet* es un fragmento de código que se puede guardar dentro del Devtool y ejecutar tantas veces cómo sea necesario. 
Ya sea copiando código que se quiere ejecutar o probando código nuevo de manera sencilla y rápida, los snippets pueden resultar de gran ayuda para el programador JS. 
Además, todo el potencial de las herramientas de debugging se puede aplicar en los snippets, ya que son ejecutables desde la misma herramienta, por lo tanto, son una herramienta muy útil a la hora de aislar un fragmento de código para comprobar su validez. 

### Crear un Snippet
1.  Haz clic en la pestaña  **Sources**.
2.  Click en Menú **Snippets**
3.  Click en **New Snippet**
4.  Escoger Nombre para el Snippet y pegar/escribir el código
5.  Ejecutar con *Botón Derecho -> Run*

## Puntos de interrupción

### Pausar el código

1.  Haz clic en la pestaña  **Sources**.
2.  Abre el archivo que incluye la línea de código donde deseas agregar la interrupción.
3.  Ve a la línea de código.
4.  A la izquierda de la línea de código se encuentra la columna del número de línea. Haz clic en ella. Aparecerá un ícono azul sobre la columna del número de línea.

### Tipos de puntos de interrupción

[Línea de código](https://developers.google.com/web/tools/chrome-devtools/javascript/breakpoints#loc)

En una región de código exacta.

[Línea de código condicional](https://developers.google.com/web/tools/chrome-devtools/javascript/breakpoints#conditional-loc)

En una región de código exacta, pero solo cuando hay otra condición que es verdadera.

[DOM](https://developers.google.com/web/tools/chrome-devtools/javascript/breakpoints#dom)

En código que cambia o quita un nodo de DOM específico, o alguno de sus elementos secundarios.

[XHR](https://developers.google.com/web/tools/chrome-devtools/javascript/breakpoints#xhr)

Cuando una URL de XHR incluye un patrón de string.

[Receptor de eventos](https://developers.google.com/web/tools/chrome-devtools/javascript/breakpoints#event-listeners)

En código que se ejecuta después de que se activa un evento, como  `click`.

[Excepción](https://developers.google.com/web/tools/chrome-devtools/javascript/breakpoints#exceptions)

En una línea de código que genera una excepción detectada o no detectada.

[Función](https://developers.google.com/web/tools/chrome-devtools/javascript/breakpoints#function)

Cuando se llama a una función específica.




## Gestión de variables
Cuando se esta detenido en un breakpoint, mediante la consola se pueden acceder a todas las variables que están en el scope de dicho punto. De esta forma, se pueden conocer los valores que las variables albergan en ese momento, realizar pruebas gestionando cambios sobre esos valores e incluso consultar características puntuales como el tipo de cada valor. 
Para la mayoría de estas pruebas se puede usar el watcher incorporado en el debugger. Desde la sección que muestra la ejecución se localiza la pestaña **Watch** , en donde se pueden añadir tantos observadores como se quiera. 



> Written with [StackEdit](https://stackedit.io/).