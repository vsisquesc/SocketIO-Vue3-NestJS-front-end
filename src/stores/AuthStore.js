import { defineStore } from "pinia";


export const useAuthStore = defineStore('authStore', {
    state: () => {
        return {
          myself: undefined,
          token: undefined, 
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
        getToken(){
            return this.token
        },
    
 
    }, 
    persist: true,
})
