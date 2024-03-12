<template>
   <defaultLayoutVue>
     <input v-model="text" required  /> 
     <button @click="send">Add element to the list</button>
   </defaultLayoutVue>

</template>
  
<script> 
import defaultLayoutVue from '@/components/defaultLayout.vue' 
import { useUsersStore } from '@/stores/UsersStore';
export default {
  name: 'AddPage',
  components: {defaultLayoutVue},
  data(){
        return {
            text: "",
      usersStore: useUsersStore(),
        }
    },
  methods: {
 
    send() {
      const email = this.usersStore.getSelf()
    this.$socket.emit('createElement', {content: this.text, sender: email}, (res) => {
        console.log('---- ADD ----')
        console.log(res)
      }) 
    }
  }

}
</script>

 