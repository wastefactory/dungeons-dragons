<template>
  <div class="row class-container">
    <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3" v-for="classData in classes">
      <div class="box" @click="classDetails(classData)">{{classData.name}}</div>
    </div>
    <class-details />
  </div>
</template>

<script>
import api from '@/services/api'
import Details from '@/components/Details'
import { EventBus } from '@/utils/eventBus'

export default {
  name: 'app',
  components: {
    classDetails: Details
  },
  data () {
    return {
      classes: {}
    }
  },
  mounted () {
    api.get('/api/classes').then(response => {
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
      transition: background-color 0.5s ease;

      &:hover {
        background: #ddd;
      }
    }
  }
</style>
