# crackjs
Lab para practicar diversos conceptos de js y crackear las entrevistas

## Nativejs
En el directorio Nativejs se pueden econtrar distintos ejemplos y scripts para aprovechar al máximo funcionalidades nativas de JS, entenderlas y aplicarlas durante el desarrollo.

### Code quality and formarter tools
Existen varias herramientas a la hora de asegurarse que el código que se esta construyendo es adecuado para que otros programadores lo entiendan y lo modifiquen, en el caso particular de JS, existen muchos y variados estándares y por lo tanto cientos de herramientas para utilizar.
Para este caso poner código sería incluir los comandos necesarios para ejecutar los depuradores, por lo que resulta más útil incluir un enlace a un [libro](https://github.com/ryanmcdermott/clean-code-javascript) que define varios de estos lineamientos y una lista de los mas importantes.

#### Recomendados

* ESlint
Muy utilizado entre los programadores js, uno de los que más aceptación tiene debido a su facilidad de aplicación y sus plugins desarrollados para las ides más importantes. Su instalación y comandos son sencillos, el [sitio oficial](https://eslint.org/) es muy completo y tiene toda la información necesaria.

* TypeScript
Lógicamente, al estar usando [TS](https://www.typescriptlang.org/) ya se tiene un compilador y un analizador de código estático, por lo que aunque es posible construir código que podría mejorarse, el código que funciona ya de por sí debería ser de mejor calidad. No obstante, existen herramientas lint también para TypeScript, algunas de las mencionadas en esta lista también ofrecen soporte para TS.

* Flow
 Flow es una analizador estático de js que puede realizar análisis sintáctico y de la calidad de código a medida que  lo vamos construyendo y mediante notations, en el momento de redactar esta guía, parece lo más novedoso y muy práctico debido a la facultad de mirar el código en tiempo real. Ni la instalación ni la utilización son complejos, se puede utilizar siguiendo los lineamientos del [sitio](https://www.typescriptlang.org/).

* Prettier
Prettier es un formateador de código basado en opiniones que esta siendo muy utilizado en el mercado en este momento. Soporte muchas herramientas y lenguajes de programación como JS, HTML, CSS, Angular, Vue, etc.
Su fortaleza está en que formatea el código en el momento de guardar el archivo, por lo que resulta muy útil para el programador y que esta integrado de manera nativa a WebStorm y mediante plugins a prácticamente todas las IDES para JS en el mercado. Es fácilmente configurable e instalable desde su [sitio oficial] (https://prettier.io/).

## ECMA2015
En este directorio se encuentran repasadas las principales funcionalidades agregadas en 2015, con el objetivo de buscar un lenguaje mas claro y mejorar la calidad del código generado en JS, muy importantes si se piensa en ir hacia TS en algún momento. 

## Node
En este directorio existen scripts pensados para ser ejecutados con node, y código que busca explicar el funcionamiento de node y como aprovecharlo al máximo a la hora de desarrollar.

## POO
En el directorio POO se encuentran usos, explicaciones y prácticas de la Programación Orientada a Objetos para JS, tanto en el caso de js nativo como para distintos compiladores y Especificaciones ECMA.

## Modules
El directorio modules contiene distintos ejemplos de encapsulamiento y abstracción pensandos para javascript, los patrones necesarios que un programador js debería conocer y aplicar. Desde los primeros, que no tienen ningún feature de ECMA6 incorporados, hasta los mas novedosos hasta el momento.
