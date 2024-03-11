<template> 
  <defaultLayoutVue @click="setChosen">
     <input v-model="text" required  /> 
     <button @click="updateElement">Update chosen</button>
   </defaultLayoutVue>

 
  </template>
    
    <script> 
    import defaultLayoutVue from '@/components/defaultLayout.vue' 
    export default {
      name: 'RemovePage',
      components: {defaultLayoutVue},
    data(){
          return {
            chosenElement: undefined,
          }
      },
    methods: {
      setChosen(element){
        this.chosenElement = element
      },
      updateElement() {
        if(this.chosenElement){
          this.chosenElement.content = this.text
          this.$socket.emit('updateElement', this.chosenElement, (res) => {
            console.log(res, `(ID ${this.chosenElement.id})`)
            this.chosenElement = undefined
          }) 
        }
      }
    },
    mounted() {
      // Obtener los correos del BackEnd
      this.$socket.emit('findAllElements', {}, (res) => {
        console.log(res)

        this.elements = res;
      })
      
    },
  
  }
  </script>
   