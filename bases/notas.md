## https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html
## npm install -g typescript
## tsc --version
## tsc app.ts -> genera el app.js
## !+tab en archivo html -> genera estructura pag. html

## tsc --init (genera la configuración ts del proyecto
## tsc --watch (modo watcher)

## SECTION 1:
¿Qué son los tipos de datos?
Una introducción a los diferentes tipos de datos que existen en TypeScript.
Booleanos.
Números.
Strings.
Tipo Any.
Arreglos.
Tuplas.
Enumeraciones
Retorno void
Null
Undefined
Y al final un exámen práctico y seguidamente un examen teórico.

## TypeScript es un super set de JS
## TS tiene más tipos de datos que JS
## https://www.typescriptlang.org/docs/handbook/2/everyday-types.html

## tsconfig.json
## "strict": true,
## "noImplicitAny": true,  

## USAR EL TIPO DE DATO ANY LO MENOS POSIBLE !!!


## SECTION 2:
¿Qué veremos en esta sección?
Esta sección esta enfocada en aprender como trabajan las funciones en TypeScript y también nos enfocaremos en aplicar buenas prácticas a la hora de crearlas.

Puntualmente tenemos:

Declaraciones básicas de funciones
Parámetros obligatorios
Parámetros opcionales
Parámetros por defecto
Parámetros REST
Tipo de datos "Function"
Al final de la sección, tendremos el examen práctico y el examen teórico.

## SECTION 3,4,5:
¿Qué veremos en esta sección?
Aprenderemos a utilizar los objetos en TypeScript, su uso y mantener nuestro código bien limpio mediante tipos personalizados.

Los temas serán:

Objetos básicos
Crear objetos con tipos específicos
Crear métodos dentro de objetos
Tipos personalizados
Crear variables que soporten varios tipos a la vez.
Comprobar el tipo de un objeto.
Al final, el respectivo examen práctico y teórico.

## https://github.com/Klerith/ts-bases/tree/fin-seccion-5

## SECTION 6:
¿Qué veremos en esta sección?
La sección se enfoca en la depuración de errores y comprender el archivo de configuración de TypeScript (el tsconfig.json)

Puntualmente:

Aprenderemos el ¿por qué siempre compila a JavaScript?
Para que nos puede servir el archivo de configuración de TypeScript
Realizaremos depuración de errores directamente a nuestros archivos de TypeScript
Removeremos todos los comentarios en nuestro archivo de producción.
Restringiremos al compilador que sólo vea ciertos archivos o carpetas
Crearemos un archivo final de salida
Aprenderemos a cambiar la version de JavaScript de salida
Adicionalmente tendrán el conocimiento necesario para compilar automáticamente cualquier archivo que se vaya creando al momento de ser insertado a nuestro proyecto.

## https://www.typescriptlang.org/docs/handbook/tsconfig-json.html#:~:text=The%20tsconfig.json%20file%20specifies,compiler%20flags%20enabled%20by%20default.
## advanced options of tsconfig

- "sourceMap": true, 
- "removeComments": true, 

## SECTION 7
¿Qué veremos en esta sección?
JavaScript va actualizando año con año, y tenemos que estar enterados de todo lo nuevo para saber cómo le sacamos el máximo provecho!

Esta sección esta orientada a enseñarles un par de cosas muy útiles y necesarias del ES6 (ES2015 o ECMAScript 6), que ya podemos utilizar con toda confianza en TypeScript.

Aprenderemos sobre:

Diferencia entre declarar variables con VAR y con LET
Uso de constantes
Plantillas literales
Funciones de flecha
Destructuración de objetos
Destructuración de Arreglos
Nuevo ciclo, el FOR OF
Conocer sobre la programación orientada a objetos
Clases
Al final, un examen práctico y teórico para afianzar los conocimientos.

## https://github.com/Klerith/ts-bases/tree/fin-seccion-7

## SECTION 8
¿Qué veremos en esta sección?
La programación orientada a objetos es un tema sumamente importante, especialmente si nuestras aplicaciones van de mediana a gran escala. TypeScript trae toda la potencia de una programación orientada a objetos a la web.

Toda la sección se enfoca en enseñar sobre el uso de clases.

Puntualmente aprenderemos sobre:

Crear clases en TypeScript
Constructores
Accesibilidad de las propiedades:
Públicas
Privadas
Protegidas
Métodos de las clases que pueden ser:
Públicos
Privados
Protegidos
Herencia
Llamar funciones del padre, desde los hijos
Getters 
Setters
Métodos y propiedades estáticas
Clases abstractas
Constructores privados.

## https://github.com/Klerith/ts-bases/tree/fin-seccion-8

## SECTION 9
¿Qué veremos en esta sección?
Esta sección esta dedicada a crear interfaces, las cuales nos permitirán crear reglas o planos de como se deben de construir clases, métodos u objetos.

Puntualmente aprenderemos:

¿Por qué es necesario una interfaz?
¿Cómo creamos una interfaz básica?
Crear propiedades opcionales
Crear métodos
Asignar interfaces a las clases
Al final, tendremos un examen práctico y teórico sobre las interfaces.

## https://github.com/Klerith/ts-bases/tree/fin-seccion-8
## https://fernando-herrera.com/#/courses/JavaScript

## SECTION 10
¿Qué veremos en esta sección?
TypeScript, es un lenguaje de programación web, que nos permite crear objetos que nos servirán a lo largo de nuestro programa. Los namespaces, existen para ayudarnos en la re utilización de nuestras variables, constantes y métodos.

Puntualmente aprenderemos sobre:

Explicación del ¿por qué son necesarios los namespaces?
Crear namespaces
Multiples namespaces en un mismo proyecto
Importar namespaces
Problemática que se puede presentar utilizando un namespace.

## https://github.com/Klerith/curso-typescript/tree/fin-seccion-10

## SECTION 11
¿Qué veremos en esta sección?
JavaScript por ser un lenguaje dinámico, conlleva a tener varios problemas por esa misma flexibilidad, pero a su vez, permite resolver problemas de una forma muy sencilla. Esta sección esta destinada a comprender como mantener la programación estructurada del TypeScript con el dinamismo de JavaScript.

Puntualmente aprenderemos sobre:

Uso de los genéricos
Funciones genéricas
Ejemplos prácticos sobre los genéricos
Arreglos genéricos
Clases genéricas

## Para armar interfaces a partir de una respuesta rest
## genera todas las clases necesarias

https://app.quicktype.io/ 
Extensión de VSCode - https://marketplace.visualstudio.com/items?itemName=quicktype.quicktype

## https://github.com/Klerith/curso-typescript/tree/fin-seccion-11

## SECTION 12
¿Qué veremos en esta sección?
Los decoradores son una característica nueva en el TypeScript que cada vez es más utilizada por otros frameworks como Angular 2. Pero vamos a aprender a utilizar decoradores en nuestros proyectos.

Puntualmente aprenderemos sobre:

¿Qué son los decoradores?
¿Para qué sirven?
Decoradores de clases
Decoradores de fabrica
Ejemplos prácticos
Decoradores anidados
Decoradores de métodos
Decoradores de propiedades
Decoradores de parámetros

## https://www.typescriptlang.org/docs/handbook/decorators.html
Decorador: funciones que expanden más funcionalidades o añaden funcionalidades o restringen funcionalidades
a otros objetos o clases, con el objetivo de que sea más facil de leer/ejecutar el código al momento que se hace
la compilación/transpilación de código.
## https://github.com/Klerith/curso-typescript/tree/fin-seccion-12

## SECTION 13
¿Qué veremos en esta sección?
Sabemos muy bien que nuestras aplicaciones web, no serán programadas únicamente con TypeScript puro, por lo cual es importante aprender como utilizar librerías de terceros en nuestros proyectos de TypeScript.

Puntualmente aprenderemos sobre:

Configuración de un proyecto utilizando el package.json y realizar instalaciones con node.

Utilizar archivos de definiciones "*.d.ts" o Typings

Agregar definiciones de archivos mediante node