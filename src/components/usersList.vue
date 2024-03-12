<template>
 <div class="list">  
      <span v-for="(user, index) in usersStore.getUsers()"
 
       :key="index" @click="selected(element)">
        {{ user }}
        </span>

 
  </div>
</template>
  
<script> 
import { useUsersStore } from '@/stores/UsersStore';


export default {
  name: 'usersListVue',
  data(){
        return {
          usersStore: useUsersStore(), 
        }
    },
 
 
}
</script>

<style>
.chosen{
  background-color: #04AA6D; 
}
.list{
  display: flex; 
  flex-direction: column;
  width: fit-content;
  gap: 1rem;
}
</style> 