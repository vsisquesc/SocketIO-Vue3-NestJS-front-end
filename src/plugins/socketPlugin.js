// socketPlugin.js
import { io } from "socket.io-client";

import { useElementsStore } from '@/stores/ElementsStore' 


const socketPlugin = {
  install(app, { connection, options }) {

    const store = useElementsStore()

    // Crea una instancia de socket.io-client
    const socket = io(connection, options);

    // Opción 1: Inyecta el socket en todas las instancias de Vue para que puedas acceder a él como `this.$socket`
    app.config.globalProperties.$socket = socket;

    // Opción 2: Proporciona una manera de acceder al socket usando `inject` en la composición API
    app.provide('socket', socket);

    // Ejemplo de cómo escuchar un evento al instalar el plugin
    // Puedes eliminar esto o personalizarlo según tus necesidades
    socket.on("connect", () => {
      console.log("Conectado al servidor de WebSocket");
      socket.emit('findAllElements', {}, (res) => {
        store.setElements(res)
      })
    });

    socket.on("newElement", (el) => {
      store.addElement(el)
    })
    socket.on("updatedElement", (el) => {
      store.updateElement(el)
    })
    socket.on("removedElement", (el) => {
      store.removeElement(el)
    })

    // Manejo de la reconexión
    socket.on("reconnect", (attempt) => {
      console.log(`Reconectado después de ${attempt} intentos`);
    });

    // Manejo de la desconexión
    socket.on("disconnect", (reason) => {
      console.log(`Desconectado del servidor de WebSocket: ${reason}`);
    });

    // Añade más manejadores de eventos según sea necesario
  }
};

export default socketPlugin;
