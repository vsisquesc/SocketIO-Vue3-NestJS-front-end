<template>
   <defaultLayoutVue>
     <input v-model="text" required  /> 
     <button @click="send">Add element to the list</button>
   </defaultLayoutVue>

</template>
  
<script> 
import defaultLayoutVue from '@/components/defaultLayout.vue' 
import { useAuthStore } from '@/stores/AuthStore';
export default {
  name: 'AddPage',
  components: {defaultLayoutVue},
  data(){
        return {
            text: "",
      authStore: useAuthStore(),
        }
    },
  methods: {
 
    send() {
      const email = this.authStore.getSelf()
    this.$socket.emit('createElement', {content: this.text, sender: email}, (res) => {
        console.log('---- ADD ----')
        console.log(res)
      }) 
    }
  }

}
</script>

 