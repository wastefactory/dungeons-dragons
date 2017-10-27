<template>
  <sweet-modal ref="modal" v-bind:title="name" width="100%">
    <sweet-modal-tab title="Skill Proficiencies" id="tab1">
      <div class="details-container">
        <div>
          Hit Die: {{hit_die}}
        </div>
        <div>
          <div class="title">Skill Proficiencies:</div>
          <div class="row box-container">
            <div class="col-xs-12 col-sm-4" v-for="data in details.proficiencies">
              <div class="box">{{data.name}}</div>
            </div>
          </div>
        </div>
      </div>
    </sweet-modal-tab>
  	<sweet-modal-tab title="Skill Proficiency Choices" id="tab2">
      <div class="details-container">
        <div>
          <div class="title">Skill Proficiency Choices:</div>
          <div class="row box-container" v-for="data in details.proficiency_choices">
            <div class="col-xs-12 col-sm-64" v-if="data.from[0].from" v-for="choices in data.from[0].from">
              <div class="box">{{choices.name}}</div>
            </div>
            <div class="col-xs-12 col-sm-4" v-if="data.from[1].from" v-for="choices in data.from[1].from">
              <div class="box">{{choices.name}}</div>
            </div>
            <div class="col-xs-12 col-sm-4" v-if="!data.from[0].from && !data.from[1].from" v-for="choices in data.from">
              <div class="box">{{choices.name}}</div>
            </div>
          </div>
        </div>
      </div>
    </sweet-modal-tab>
  	<sweet-modal-tab title="Equipments" id="tab3">
      <div class="details-container">
        <div>
          <div class="title">Starting Equipment:</div>
          <div class="row box-container">
            <div class="col-xs-12 col-sm-4" v-for="data in equipments.starting_equipment">
              <div class="box">{{data.quantity}} {{data.item.name}}</div>
            </div>
          </div>
          <div class="title">Choices 1:</div>
          <div class="row box-container">
            <div class="col-xs-12 col-sm-4" v-for="data in choices.one">
              <div class="box">{{data.quantity}} {{data.item.name}}</div>
            </div>
          </div>
          <div class="title">Choices 2:</div>
          <div class="row box-container">
            <div class="col-xs-12 col-sm-4" v-for="data in choices.two">
              <div class="box">{{data.quantity}} {{data.item.name}}</div>
            </div>
          </div>
        </div>
      </div>
    </sweet-modal-tab>
    <vue-progress-bar></vue-progress-bar>
  </sweet-modal>
</template>

<script>
import { SweetModal, SweetModalTab } from 'sweet-modal-vue'
import api from '@/services/api'
import { EventBus } from '@/utils/eventBus'

export default {
  name: 'app',
  components: {
    SweetModal,
    SweetModalTab
  },
  data () {
    return {
      id: null,
      name: null,
      hit_die: null,
      details: {},
      equipments: {},
      choices: {
        one: {},
        two: {}
      }
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
        this.hit_die = response.hit_die
        this.id = response.index
        this.details = response
      }).then(() => {
        api.get('/api/startingequipment/' + this.id).then(response => {
          this.equipments = response
          console.log(response)
          for (var i in response) {
            if (i === 'choice_1') {
              let choiceOne = response[i][0].from
              let choiceTwo = response[i][1].from
              this.choices.one = choiceOne.concat(choiceTwo)
            } else if (i === 'choice_2') {
              let choiceOne = response[i][0].from
              let choiceTwo = response[i][1].from
              this.choices.two = choiceOne.concat(choiceTwo)
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
  .details-container {
    min-height: 300px;

    .title {
      font-weight: 400;
      padding: 20px;
    }

    .box-container {
      // padding-bottom: 30px;

      .box {
        background: #f1f1f1;
        padding: 10px;
        margin: 10px;
        border-radius: 3px;
      }
    }
  }
</style>
