import { defineStore } from "pinia";


export const useUsersStore = defineStore('usersStore', {
    state: () => {
        return {
          myself: undefined,
          token: undefined,
          users: [],
        }
      },

    actions: {
        login(value, token){
            this.myself = value
            this.token = token
        },
        logout(){
            this.myself =undefined
            this.token = undefined
        },
        getSelf(){
            return this.myself
        },
        setUsers (arr) {
            this.users = arr.map(el=>el.email)
        },
        getUsers () {
            return this.users;
        },
        addUser (user) {
            this.users.push(user)
        },
        removeUser (user) {
            const idx = this.users.indexOf(user)
            if (idx >= 0) {
                this.users.splice(idx, 1) 
            }
        },
    
 
    },
    persistedState: {
        persist: true
    }
})
