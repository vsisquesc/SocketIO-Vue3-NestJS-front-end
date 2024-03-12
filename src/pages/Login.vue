<template>
  <!-- <form @submit="saveUser">
    <input type="email" v-model="text" required />
    <input type="submit" value="login" />
  </form> -->
    <input type="email" v-model="text" required />
    <input type="submit" value="login" @click="saveUser" />

</template>

<script>
import { useAuthStore } from '@/stores/AuthStore';

export default {
  name: 'LoginPage',
  data() {
    return {
      text: "",
      authStore: useAuthStore(),
    }
  },
  mounted() {
    if (this.authStore.getSelf() != undefined) {
      console.log("already logged in")
      this.$router.push('AddPage')
    }
  },
  methods: {

    saveUser() {
      window.fetch('http://localhost:3001/auth/login', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
          "email": this.text
        })
      }).then((res) => {
        return res.json() 
      }).then((data)=>{
        console.log('---- Login ----')
        if(data.access_token == undefined){
          alert('user already logged in')
        } else {
          const token = `Bearer ${data.access_token}`
          this.authStore.login(this.text, token)
          this.$loginSocket(token)
          this.$router.push('AddPage')
        }
      })
    }
  }

}
</script>