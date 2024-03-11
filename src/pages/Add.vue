<template>
   <defaultLayoutVue>
     <input v-model="text" required  /> 
     <button @click="send">Add element to the list</button>
   </defaultLayoutVue>

</template>
  
<script> 
import defaultLayoutVue from '@/components/defaultLayout.vue' 
export default {
  name: 'AddPage',
  components: {defaultLayoutVue},
  data(){
        return {
            text: "",
        }
    },
  methods: {
 
    send() {
    this.$socket.emit('createElement', {content: this.text}, (res) => {
        console.log('---- ADD ----')
        console.log(res)
      }) 
    }
  }

}
</script>

 