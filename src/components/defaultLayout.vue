<template>
   
  <headerVue />
  <div class="content">
    <div class="left">
      <slot></slot>
    </div>
    <div class="right">
      
      <elementsListVue @click="onClick"/>
      <usersListVue/>
    </div>
  </div>
</template>
  
<script> 
import { useUsersStore } from '@/stores/UsersStore';
import elementsListVue from '@/components/elementsList.vue'
import usersListVue from '@/components/usersList.vue'
import headerVue from '@/components/header.vue'
export default {
  name: 'DefaultLayout',
  components: {elementsListVue, headerVue, usersListVue},
  data() {
    return {  
      usersStore: useUsersStore(),
    }
  },
  mounted() {
    if (this.usersStore.getSelf() == undefined) {
      this.$router.push('/')
    }
  },
  methods: {
    onClick(element){
      // @BUG - Se invoca esta función 2 veces, una con el elemento y otra con el nodo DOM del botón clicado
      if(element?.target == undefined){
        this.$emit("click", element)
      }
    }
  }
}
</script>

 
<style>
.content {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
}
</style>