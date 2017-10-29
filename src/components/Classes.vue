<template>
  <div>
    <div class="class-title">
      <span>Classes</span>
    </div>
    <div class="row class-container">
      <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3" v-for="classData in classes">
        <div class="box animated slideInUp" @click="classDetails(classData)">{{classData.name}}</div>
      </div>
      <class-details />
      <vue-progress-bar></vue-progress-bar>
    </div>
  </div>
</template>

<script>
import api from '@/services/api'
import Details from '@/components/Details'
import { EventBus } from '@/utils/eventBus'

export default {
  name: 'Classes',
  components: {
    classDetails: Details
  },
  data () {
    return {
      classes: {}
    }
  },
  mounted () {
    this.$Progress.start()
    api.get('/api/classes').then(response => {
      this.$Progress.finish()
      this.classes = response.results
    })
  },
  methods: {
    classDetails (data) {
      EventBus.$emit('open', data)
    }
  }
}
</script>

<style scoped lang="scss">
  $brand: #ed6868;
  .class-title {
    padding: 20px 0px 50px;
    color: #ed6868;
    span {
      border-bottom: 1px solid;
      padding: 0px 8px 5px;
    }
  }

  .class-container {
    min-height: 250px;

    .box {
      display: flex;
      align-items: center;
      justify-content: center;
      background: #f1f1f1;
      cursor: pointer;
      margin: 15px;
      height: 100px;
      border-radius: 3px;
      transition: all 0.7s ease;
      border: 1px solid #eee;

      &:hover {
        // background: $brand;
        color: $brand;
        border-color: rgba(237,104,104,.4);
      }
    }
  }
</style>
