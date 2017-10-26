<template>
  <div class="row">
    <div class="col-xs-12 col-sm-2">
      <div class="box">Class list</div>
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
    background: #f1f1f1;
    height: 150px;
  }
</style>
