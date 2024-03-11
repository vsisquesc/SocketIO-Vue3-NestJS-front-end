import { defineStore } from "pinia";


export const useElementsStore = defineStore('elementsStore', {
    state: () => {
        return {
          elements: {},
        }
      },

    actions: {
        setElements (arr) {
            arr.forEach((el) => {
                this.elements[el.id] = el
            });
        },
        getElements () {
            return this.elements;
        },
        addElement (el) {
            this.elements[el.id] = el
        },
        updateElement (el) {
            this.elements[el.id] = el
            
        },
        removeElement (el) {
            delete this.elements[el.id]
        },
    
 
    },
    persistedState: {
        persist: true
    }
})
