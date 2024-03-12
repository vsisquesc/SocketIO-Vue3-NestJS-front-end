# SocketIO-Vue3-NestJS-front-end
## Características
Este Front-end se ha implementado haciendo uso de Vue3, Pinia y Socket-io. 

Por defecto, el cliente se lanza en http://localhost:8080. 

El usuario es presentado cun un cuadro de texto en el que tiene que introducir su correo electrónico, acto seguido puede pulsar `login` para ser redirigido a las páginas principales.

Las páginas principales se han estructurado de tal manerea que, en el lateral izquierdo se establece la funcionalidad de cada página, y en el lateral derecho se muestra una lista de elementos que se actualiza en tiempo real y un listado de los usuarios que están conectados actualmente.

La primera página permite al usuario añadir elementos en la lista, únicamente tiene que escribir en el cuadro de texto y pulsar el botón.

La segunda página permite editar los elementos, para ello tiene que clicar en un elemento de la lista, escribir el nuevo texto en el cuadro y finalmente pulsar el botón.

En la última página se permite borrar los elementos clicando en ellos y luego pulsando el botón situado en el lateral izquierdo.

Para cerrar sesión es necesario pulsar el botón `logout` situado en la parte superior derecha de la pantalla, esto se debe a que se ha hecho uso de pinia para almacenar los credenciales de usuario de manera persistente.

La conexión al Back-end se realiza mediante un plugin; este se encarga de establecer una conexión mediante WebSockets con el servidor. Este plugin expone el socket al resto del front-end y permite emitir eventos (como el de creación de un nuevo elemento) y definir la manera en la que se actua cuando se recibe un evento emitido por el servidor (por ejemplo, cuando un usuario ha eliminado un elemento, este será eliminado de la lista que ve el usuario).

## Ejecución
### 1º Instalar dependencias
Se debe ejecutar el siguiente comando para instalar las dependencias
```
npm i
```

### 2º Ejecutar el cliente
Con el siguiente comando se ejecuta el cliente en modo de desarrollo
```
npm run serve
```




 