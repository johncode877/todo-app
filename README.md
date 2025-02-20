# Todo App
Proyecto Inicial que permite revisar y poner en practica 
los conceptos de React de la mano de la herramienta vite

Los siguientes puntos son algunos de los conceptos y temas 
que se abordaron en el presente proyecto 

## Comunicacion objeto padre e hijo

## Estilos CSS en React

## Eventos en React: onClick, onChange

## Trabajando con el Estado
En cada componente debemos importar React
import React from 'react';
para poder utilizar la funcion useState()

## Compartiendo estado del padre al hijo y trabajar con estados derivados

Los estados deben estar a nivel del componente
padre.
El componente padre se encargara de pasarle el 
estado y el metodo para actualizarlo a los componentes
hijos a través de los props 

Los estados derivados , son calculos , operaciones
o resultados que hacemos con los estados 

## Buscando Todos

## Completando y eliminando TODOs

## Iconos en React: librerías y SVG

npm i vite-plugin-svgr
npm i @svgr/rollup --save-dev

iconType[type] es el componente 
que maneja el icono al cual 
le pasamos un parametro 'color'
el cual es utilizado por el componente
como una propiedad 

Pasamos el parametro color
{iconType[type](color)}


## Local Storage con React.js

El navegador nos ofrece una api, para la
persistencia de datos de forma local

"JSON.stringify" permite convertir un objeto json a string 
let stringifiedTodos = JSON.stringify(defaulTodos)

"JSON.parse" permite convertir a string un json 
JSON.parse(stringifiedTodos);

## Custom Hooks

Nuestro componente es mas complejo ahora , ya que tenemos logica para almacenar  el localStorage y
manejo del estado  vamos a utilizar una nueva estrategia para simplificar el codigo "customHooks"

Los hooks son funciones que puedes llamar dentro de componentes funcionales para agregar y manipular características de React, como el estado, el ciclo de vida y los efectos secundarios. Los hooks más comunes son useState, useEffect y useContext, pero también puedes crear tus propios hooks personalizados.

## Organización de archivos y carpetas
Trabajar generando una carpeta por componente
y migrando el codigo al archivo index.jsx


## Feature-First Directories en React

## Tips para naming y abstracción de componentes React
Separamos la logica "App.jsx" de la presentacion "AppUI.jsx"

## Efectos en React 
Hay partes de la logica de nuestra aplicacion 
que pueden demorar (consulta api , etc)

## Estados de carga y error

Vamos a mostrar un mensaje temporal
mientras se actualiza la informacion 
en nuestra aplicacion 

Se recomienda que si un custom hooks
va a devolver mas de 2 elementos 
se retorne un objeto en lugar de un arreglo

## Reto: loading skeletons

## React Context

Prop Drilling: es una paso que ocurre cuando necesitamos propagar(enviar/recibir) datos que están en varias componentes React(comunicacion entre componentes).

Esto se ve siempre cuando pasamos props entre hijos, luego ese a otros hijos y así sucesivamente... la solución es usar "context":

Context: es un elemento que podemos crear en React para establecer una comunicación directa entre un componente en un nivel muy alto y uno en un nivel mucho más bajo.

Por ende "context" permite acceder a los valores de forma directa.

## useContext
Vamos a cambiar el React.Consumer por useContext 
un hook que nos simplifica la forma de acceder al context


## React Portals

portales nos permiten ubicar un componente hijo dentro del conjunto de componentes que 
se renderizan en el nodo html principal del DOM, generalmente el id = “root”, 
pero hacer que aparezcan en un **nodo **fuera de la jerarquía del DOM. 
Esto permite una mayor facilidad a la hora de maquetar y estilizar componentes que 
aparecen y desaparecen en el renderizado de nuestra página como los modales (ventanas). 
Gracias a los portales, por ejemplo, podemos ubicar a nuestro componente <Modal> 
luego del conjunto de componentes que tenemos en la AppUI como <TodoCounter/>, 
<TodoSearch/> o <CreateTodoButton/>, 
pero el renderizado se hará en el div del nodo html que nosotros indiquemos, 
osea fuera del “root”. Esto trae como ventaja por ejemplo poder estilizar fácilmente 
el modal para que aparezca por encima del resto de componentes.

createPortal recibe 3 parametros:

Children: cualquier cosa que pueda ser renderizada con react.
domNode: nodo(s)
(opcional) Key: un string o número único que para ser usado como portal


## Maquetando formularios en React

## Despliegue de TODO Machine en GitHub Pages

    1) Hacemos el build
    npm run build 

    2) Validamos el build productivo
    generado en el paso anterior
    npm run preview

    3) Instalamos dependencia de desarrollo
    para hacer el deploy en ghpages
    npm i --save-dev gh-pages

    4) Añadir los siguientes scripts al package.json
    para realizar el predeploy y deploy

    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"

    5) Configurar el contexto en vite.config.js
    
    base: '/todo-app/'

    6) Ejecutar el comando para realizar el deploy 
    npm run deploy


## Links de Interes 

https://es.vitejs.dev/guide/
https://es.vitejs.dev/guide/static-deploy
https://es.react.dev/learn/start-a-new-react-project
https://www.dhiwise.com/post/understanding-event-stop-propagation-in-react-a-comprehensive-guide
https://javascript.plainenglish.io/creating-modals-with-react-portal-40829c33a626






