<template>
  <sweet-modal ref="modal" v-bind:title="name" width="100%">
    <div class="main-info">
      <Info title="Hit Die" :data="details.hit_die"/>
      <Info title="Subclass" :data="details.subclasses"/>
      <Info title="Saving Throws" :data="details.saving_throws"/>
      <Info title="Equipment choices to make" :data="equipments.choices_to_make"/>
    </div>
    <sweet-modal-tab title="Skill Proficiencies" id="tab1">
      <Proficiency :proficiencies="details.proficiencies"/>
    </sweet-modal-tab>
  	<sweet-modal-tab title="Skill Proficiency Choices" id="tab2">
      <Choices :choices="details.proficiency_choices"/>
    </sweet-modal-tab>
  	<sweet-modal-tab title="Equipments" id="tab3">
      <Equipments :equipments="equipments" :choices="choices"/>
    </sweet-modal-tab>
    <vue-progress-bar></vue-progress-bar>
  </sweet-modal>
</template>

<script>
import { SweetModal, SweetModalTab } from 'sweet-modal-vue'
import api from '@/services/api'
import { EventBus } from '@/utils/eventBus'
import Equipments from '@/components/Tabs/Equipments'
import Proficiency from '@/components/Tabs/Proficiency'
import Choices from '@/components/Tabs/Choices'
import Info from '@/components/Info'

export default {
  name: 'Details',
  components: {
    SweetModal,
    SweetModalTab,
    Equipments,
    Proficiency,
    Choices,
    Info
  },
  data () {
    return {
      id: null,
      name: null,
      details: {},
      equipments: {},
      choices: {}
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
    isNumber (str) {
      return !/\D/.test(str)
    },
    reset () {
      this.details = {}
      this.equipments = {}
      this.choices = {}
    },
    openModal (data) {
      this.$refs.modal.open('modal')
      this.reset()
      this.name = data.name

      setTimeout(() => {
        this.$Progress.start()
      }, 300)
      api.get(data.url).then(response => {
        this.id = response.index
        this.details = response
      }).then(() => {
        api.get('/api/startingequipment/' + this.id).then(response => {
          this.equipments = response
          for (var i in response) {
            if (this.isNumber(i.split('_')[1])) {
              let choice = null
              for (var x in response[i]) {
                choice = (choice === null) ? response[i][x].from : choice.concat(response[i][x].from)
              }
              this.choices[i] = choice
            }
          }
          this.$Progress.finish()
        })
      })
    }
  }
}
</script>

<style scoped lang="scss">
  .main-info {
    padding: 10px;
    border-radius: 3px;
    padding-bottom: 30px;
    text-align: left;
  }
</style>
