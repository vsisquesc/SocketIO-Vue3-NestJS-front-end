<template> 
    <div class="header">  
        <router-link to="/AddPage">Add element to the list</router-link>
        <router-link to="/UpdatePage">Edit element from the list</router-link>
        <router-link to="/RemovePage">Delete element from the list</router-link> 
        <button @click="logoutUserOut">LogOut</button> 
    </div>
</template>
     
<script> 

import { useAuthStore } from '@/stores/AuthStore';

export default {
  name: 'headerVue',    
  data() {
    return {
      authStore: useAuthStore(),
    }
  },
  methods:{
    logoutUserOut() {        
      this.authStore.logout()
      this.$socket.emit('userLogout', {}, () => { 
            this.$socket.disconnect()
            this.$router.push('/')
        })  
    }
  }
}
</script>

<style>
.header{
    width: 100%;
    height: 50px;
    display:flex;
    align-items:center;
    justify-content: space-around;
}

</style>