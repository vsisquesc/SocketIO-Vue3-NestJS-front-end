// socketPlugin.js
import { io } from "socket.io-client";

import { useElementsStore } from '@/stores/ElementsStore'
import { useUsersStore } from '@/stores/UsersStore'
import { useAuthStore } from '@/stores/AuthStore'


const socketPlugin = {
  install(app, { connection }) {

    const store = useElementsStore()
    const users = useUsersStore()
    const auth = useAuthStore()

    const login = function (token) { 

      const socketOptions = {
        transportOptions: {
          polling: {
            extraHeaders: {
              Authorization: token
            }
          }
        }
      };

      const socket = io(connection, socketOptions);
 
      app.config.globalProperties.$socket = socket;
 
      socket.on("connect", () => {
        console.log("Conectado al servidor de WebSocket");
        socket.emit('findAllElements', {}, (res) => {
          store.setElements(res)
        })
        socket.emit('CurrentUsers', {}, (res) => {
          users.setUsers(res)
        })
      });

      socket.on("newUser", (el) => {
        users.addUser(el)
      })
      socket.on("userDisconected", (el) => {
        console.log('tarari')
        users.removeUser(el)
      })


      socket.on("newElement", (el) => {
        store.addElement(el)
      })
      socket.on("updatedElement", (el) => {
        store.updateElement(el)
      })
      socket.on("removedElement", (el) => {
        store.removeElement(el)
      })

 
      socket.on("reconnect", (attempt) => {
        console.log(`Reconectado después de ${attempt} intentos`);
      });
 
      socket.on("disconnect", (reason) => {
        console.log(`Desconectado del servidor de WebSocket: ${reason}`);
      });
    }

    app.config.globalProperties.$loginSocket = login;

    if(auth.getSelf() != undefined && app.config.globalProperties.$socket == undefined){
      const token = auth.getToken()
      login(token)
    } 
  }
};

export default socketPlugin;
