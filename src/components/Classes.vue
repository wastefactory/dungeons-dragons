<template>
  <div class="row">
    <div class="col-xs-12 col-sm-2" v-for="classData in classes">
      <div class="box">{{classData.name}}</div>
    </div>
  </div>
</template>

<script>
import api from '@/services/api'

export default {
  name: 'app',
  data () {
    return {
      classes: {}
    }
  },
  mounted () {
    api.get('/api/classes').then(response => {
      this.classes = response.results
    })
  }
}
</script>

<style scoped lang="scss">
  .box {
    display: flex;
    align-items: center;
    justify-content: center;
    background: #f1f1f1;
    margin: 15px;
    height: 100px;
    border-radius: 3px
  }
</style>
