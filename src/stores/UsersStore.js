import { defineStore } from "pinia";


export const useUsersStore = defineStore('usersStore', {
    state: () => {
        return { 
          users: [],
        }
      },

    actions: {
 
 
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
 
})
