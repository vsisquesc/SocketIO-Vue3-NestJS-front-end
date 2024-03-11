<template>
 <div class="list">  
      <button v-for="(element, index) in content"
        v-bind:class="getClass(element)"
       :key="index" @click="selected(element)">
        {{ `${index} -> ${element.content}` }}
      </button>
  </div>
</template>
  
<script> 
import { useElementsStore } from '@/stores/ElementsStore';


export default {
  name: 'elementsListVue',
  data(){
        return {
          elementsStore: useElementsStore(),
          content:[],
          chosenElement: undefined
        }
    },
    created () {
        this.content = this.elementsStore.getElements();
    },
    methods:{
      getClass(el){
        return this.chosenElement == el ? 'chosen' : ''
      },
      selected(el){
        if(this.chosenElement == el){ this.chosenElement = undefined }
        else { this.chosenElement = el }
        this.$emit("click", this.chosenElement) 
      }
    }
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