<template>
  <div class="home">
    <div class="banner">
      <div class="intro">
        <h3>{{title}}</h3>
        <div class="description">{{description}}</div>
        <div class="cta">
          <a class="btn" href="http://dnd.wizards.com/" target="_blank">Learn more</a>
        </div>
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
      title: 'YOUR ADVENTURE AWAITS',
      description: `Play Dungeons & Dragons online, at your local game store, or in your living room—it's your story.`
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  $brand: #ed6868;
  $gradient: #f97256;

  .banner {
   display: flex;
   align-items: center;
   justify-content: center;
   background: #ed6868;
   height: 400px;
   color: white;
   text-align: left;
   background: $brand;
   background: -webkit-linear-gradient(left top, $brand, $gradient);
   background: -o-linear-gradient(left top, $brand, $gradient);
   background: -moz-linear-gradient(left top, $brand, $gradient);
   background: linear-gradient(left top, $brand, $gradient);

   .intro {
     width: 100%;
     padding: 0px 100px;

     .description {
       color: white;
     }

     .cta {
       padding: 20px 0px;
     }
   }
  }

 .content {
   padding: 30px 10px;
 }
</style>
