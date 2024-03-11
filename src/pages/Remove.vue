<template> 
  <defaultLayoutVue @click="setChosen">
     <button @click="deleteElement">Delete Chosen</button>
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
      deleteElement() { 
        if(this.chosenElement){

          this.$socket.emit('removeElement', {id: this.chosenElement.id}, (res) => {
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
   