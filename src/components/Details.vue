<template>
  <sweet-modal ref="modal" width="800" v-bind:title="name">
    <div class="details-container">
      <div>
        Hit Die: {{details.hit_die}}
      </div>
    </div>
    <vue-progress-bar></vue-progress-bar>
  </sweet-modal>
</template>

<script>
import { SweetModal } from 'sweet-modal-vue'
import api from '@/services/api'
import { EventBus } from '@/utils/eventBus'

export default {
  name: 'app',
  components: {
    SweetModal
  },
  data () {
    return {
      name: null,
      details: {}
    }
  },
  mounted () {
    api.get('/api/classes').then(response => {
      this.classes = response.results
    })
  },
  created () {
    EventBus.$on('open', this.openModal)
  },
  methods: {
    openModal (data) {
      this.$refs.modal.open('modal')
      this.$Progress.start()

      this.name = data.name
      this.details = {}
      api.get(data.url).then(response => {
        this.details = response
        this.$Progress.finish()
      })
    }
  }
}
</script>

<style scoped lang="scss">
  .details-container {
    min-height: 300px;
  }
</style>
