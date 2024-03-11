<template> 
    <div class="header">  
        <router-link to="/AddPage">Add element to the list</router-link>
        <router-link to="/UpdatePage">Edit element from the list</router-link>
        <router-link to="/RemovePage">Delete element from the list</router-link> 
    </div>
</template>
     
<script> 


export default {
  name: 'headerVue',
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