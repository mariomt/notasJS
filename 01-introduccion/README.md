# Introducción a JavaScript

  JavaScript es un lenguaje de programación interpretado, débilmente tipado y dinámico. JavaScript es usado del lado del cliente, es decir desde un navegador web, proporcionando dinamismo a nuestros sitios web.
  
  > Ahora javascript también puede ser utilizando del lado del servidor (como lenguaje backend).
 
 En este caso nosotros nos estaremos enfocando más en usar javascript del lado del cliente, no obstante, todo lo que se aprenda puede ser de gran ayuda para comprender javascript en general y así poder utilizarlo en nuestro desarrollo backend.
## Comentarios

Los comentarios en en todos los lenguajes de programación sirven para dejar notas en el código, para nosotros mismos o para otros programadores que lean nuestro código.

Hay dos tipos de comentarios en JavaScript…

-  **Una línea.**
Para los comentarios de una línea solo es necesario colocar dos diagonales.
`// Comentario de una línea en javaScript`

- **Múltiples líneas.**
Para los comentarios de múltiples líneas es necesario colocar una diagonal seguida de un asterisco como símbolos de apertura y un asterisco seguido de una diagonal como símbolos de cierre.
` /*Comentario multilínea en javaScript*/ `

## Variables

Como ya sabemos y lo hemos visto en todos nuestros cursos de programación, una variable es un espacio reservado en memora y es representado por un nombre que nosotros le indiquemos.

En javascript hay varias formas de declarar variables:

- **Var**

## Strings

- **str.toUpperCase()** Esta función nos permite transformar un string a mayúsculas.
- **str.toLowerCase()** Esta función nos permite transformar un string a minúsculas.
- **str.charAt(0)** Esta función nos retorna el caracter indicado de la cadena.
- **str.length** Este atributo de los strings nos dice cuantos caracteres contiene.
- **str.substr(1,2)** Esta función nos extrae de la cadena 

## Números

 - **Operaciones** En javascript para hacer operaciones con los numeros de igual manera que otros lenguajes puedes hacerlos. Para ejemplos revisa el documento 03-Nuemros.js

## funciones

> Las funciones son bloques de código reutizables.

Para ver ejemplos de funciones ver el archivo _04-funciones.js_

### Alcance de las funciones

- Si una variable no está definida dentro del cuerpo de la función, se dice que esa variable es de alcance global (puede ser accedida desde cualquier función). Ver el archivo _05-AlcanceDeFunciones.js_ para ejemplos.

>  **Side effect:** El efecto colateral viene ocasionado cuando una función modifica valores de variables que no están definidas dentro de ella.


## Objetos
Gracias a los objetos podemos agrupar características de alguna cosa de la vida real. (Ver el archivo _06-Objetos.js_ para ejemplos)


### Desestruccuración de objetos
Asi como podemo agrupar atributos en un objeto tambien podemos separarlos en variables independiente, para esto nos ayuda la desestructuración del mismo. Ver ejemplo en _07-Destructuring.js_


## Parámetros como referencia o valor

Cuando enviamos un objeto como parámetro de una función y modificamos alguno de sus atributos estos cambios se harán de manera global, es decir cuando pasamos un objeto a una función la estamos pasando por referencia. Ver ejemplo en _08-referenciaOvalor.js_

## Comparaciones

En javascript podemos comparar dos variables utilizando un doble igual o utilizando un triple igual.
`x == y`
Cuando comparamos con doble igual javascript lo que hace es llevar a un mismo tipo de dato las dos variables para despues comparar su contenido, es decir, si comparamos un entero contra un string javascript convertirá el entero a string y después los compara.
`x === y`
Ciando comparamos con un triple igual javascript lo que hace primero que nada es comparar el tipo de datos de las variables si no son iguales la comparación nos devolverá un _false_. Es decir, con la comparación de triple igual si importa el tipo de dato.
> Es recomendable utilizar siempre el triple igual, a menos que sea estrictamente necesario usar el doble igual, no lo utilice.

ver ejemplo en _09-comparaciones.js_

### Comparación de objetos

Cuando hacemos la comparación de dos objetos, estos siempre nos devolverán un _false_, al menos que el objeto este apuntando exactamente a la misma referencia. Por ejemplo...

  

    var persona1 = { 
    nombre: 'Mario' 
    }, 
    persona2 = { 
    nombre: 'Mario' 
    }
    
    if(persona1 == persona2) {
	    Console.log('iguales');
	} else {
		Console.log('diferentes')
	}
	// devolverá diferentes

Aun que usemos el comparador de triple igual javascript nos seguirá arrojando el mismo resultado, ya que realmente no son el mismo objeto (no están en la misma dirección de memoria).

## Estructuras de control
Las estructuras de control nos van a permitir decidir si un código se ejecuta o no se ejecuta o si se ejecuta múltiples veces hasta que se cumpla una condición dada.

- **if** Ver ejemplo en _10-condicionales.js_
- **for** Ver ejemplo en _13-for.js_
- **while** Ver ejemplo en _14-while.js_
- **do-while** Ver ejemplo en _15-doWhile.js_
- **switch** Ver ejemplo en _16-switch.js_

## Funciones que regresan valores
Lo lo que nos permite esto es que despues de que una función trate un valor, esta nos devuelva el resultado de la operación para poder seguir manipulando dicha información.

Ver ejemplo en el archivo _11-returnandoValores.js_

## Arrow functions
Las funciones de flecha nos permiten generar una nomenclatura más corta para escribir expresiones de funciones. Al escribir estas funciones no es necesario escribir la palabra _function_ ni el _return_ no las llaves. Tambien hace pequeños cambios en cuanto a su scope. Ver ejemplo en _12-arrowFunctions.js_


## Arreglos
Estas estructuras de datos nos permitirán agrupar datos dentro de una colección de datos.
Ver ejemplo en _17-Arreglos.js_

### Filtrar arreglos
Ver ejemplo en _18-filtrarArreglo.js_

### Función map()
Esta función a diferencia de filter, nos devolverá un nuevo arreglo en el cual modificará cada uno de los elementos que le pasemos del arreglo original.
Ver ejemplo en _19-transformarArreglos.js_

### funcion reduce()
Esta función nos permite reducir, mediante una función que se aplica a cada uno de los elementos del arreglo, todos los elementos de dicho arreglo, a un valor único.
Ver ejemplo en _20-ReducirArreglo.js_


## Clases en JavaScript
> Cuando se habla de objetos de javascript estamos hablando de prototipos y no tanto de clases, si bien en las nuevas versiones de javascript existen las clases, estas alfinal terminan siendo prototipos.

> JavaScript como tal no soporta la herencia, esto es ya que sus clases no son clases exactamente si no que son prototipos. Pero no obstante si existe la herencia prototipal en javascript.

### herencia protitipal
Ver despues de prototipo el ejemplo en _24-herenciaPrototipal.js_
Ver ejemplo de la misma herencia pero usando clases _25-clasesHerencia.js_



Las clases son funciones cuya sintaxis tienen dos componentes:
- expresiones
- declaraciones

### prototipos
Ver el primer ejemplo en _21-prototipos.js_

## Contexto de funciones
**¿Quién es this?**
El error del contexto de _this_ en javascript es uno de los errores más comunes.
La palabra reservada _this_ en javascript se comporta un poco diferente que en otros lenguajes. En general, el valor _this_ está determinado por cómo se invoca a la función. No puede ser establecida mediante una asignación en tiempo de ejecución, y puede ser diferente cada vez que la función es invocada. ES5 introdujo el método _bind()_ para establecer el valor de la función _this_ indepenfientemente de como es llamada, y ES2015 introdujo las funciones flecha que no proporcionan su propio "binding" de _this_ (se mantiene el valor de this del contexto léxico que envuelve a la función).
 Ver más [aquí](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Operadores/this).

## Funciones como parámetros
En JavaScript, los parámetros de funciones son por defecto undefined. De todos modos, en algunas situaciones puede ser útil colocar un valor por defecto diferente que lo evalúe como verdadero.

## Asincronismo en JavaScript
JavaScript sólo pude hacer una cosa a la vez, sin embargo; es capaz de delegar la ejecución de ciertas funciones a otro procesos. Este modelo de concurrencia se llama EventLoop.

