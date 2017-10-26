<template>
  <div class="home">
    <div class="banner">
      {{title}}
    </div>
    <div class="content">
      <Classes/>
    </div>
  </div>
</template>

<script>
import Classes from '@/components/Classes'

export default {
  name: 'Home',
  components: {
    Classes
  },
  data () {
    return {
      title: 'Welcome to Dungeons & Dragons'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 .banner {
   display: flex;
   align-items: center;
   justify-content: center;
   background: #eee;
   height: 400px;
 }

 .content {
   padding: 30px 10px;
 }
</style>
