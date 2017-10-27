<template>
  <div class="home">
    <div class="banner">
      <div class="intro">
        <h3>{{title}}</h3>
        <div class="description">{{description}}</div>
      </div>
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
      title: 'Welcome to Dungeons & Dragons',
      description: 'Take a closer look at this legendary fantasy role-playing game and find out why millions of players worldwide have stepped into the boots of mighty heroes to create their own stories.'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
 .banner {
   display: flex;
   align-items: center;
   justify-content: center;
   background: #f5f5f5;
   height: 400px;
   padding: 0px 50px;
   color: #a91333;

   .intro {
     width: 800px;
     .description {
       color: #777;
     }
   }
 }

 .content {
   padding: 30px 10px;
 }
</style>
