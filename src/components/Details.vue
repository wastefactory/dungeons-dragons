<template>
  <sweet-modal ref="modal" v-bind:title="name" width="100%">
    <div class="main-info">
      <div class="info">
        <span class="info-title">Hit Die:</span>
        <span class="pill">{{details.hit_die}}</span>
      </div>
      <div class="info">
        <span class="info-title">Subclass</span>
        <span class="pill" v-for="data in details.subclasses">{{data.name}}</span>
      </div>
      <div class="info">
        <span class="info-title">Saving Throws</span>
        <span class="pill" v-for="data in details.saving_throws">{{data.name}}</span>
      </div>
      <div class="info">
        <span class="info-title">Equipment choices to make:</span>
        <span class="pill">{{equipments.choices_to_make}}</span>
      </div>
    </div>
    <sweet-modal-tab title="Skill Proficiencies" id="tab1">
      <div class="details-container">
        <div>
          <div class="title">
            <h4>Skil Proficiencies</h4>
          </div>
          <div class="row box-container">
            <div class="col-xs-12 col-sm-4 col-sm-3 col-lg-2" v-for="data in details.proficiencies">
              <div class="box">{{data.name}}</div>
            </div>
          </div>
        </div>
      </div>
    </sweet-modal-tab>
  	<sweet-modal-tab title="Skill Proficiency Choices" id="tab2">
      <div class="details-container">
        <div>
          <div class="title">
            <h4>Skil Proficiency Choices</h4>
          </div>
          <div class="row box-container" v-for="data in details.proficiency_choices">
            <div class="col-xs-12 col-sm-4 col-sm-3 col-lg-2" v-if="data.from[0].from" v-for="choices in data.from[0].from">
              <div class="box">{{choices.name}}</div>
            </div>
            <div class="col-xs-12 col-sm-4 col-sm-3 col-lg-2" v-if="data.from[1].from" v-for="choices in data.from[1].from">
              <div class="box">{{choices.name}}</div>
            </div>
            <div class="col-xs-12 col-sm-4 col-sm-3 col-lg-2" v-if="!data.from[0].from && !data.from[1].from" v-for="choices in data.from">
              <div class="box">{{choices.name}}</div>
            </div>
          </div>
        </div>
      </div>
    </sweet-modal-tab>
  	<sweet-modal-tab title="Equipments" id="tab3">
      <div class="details-container">
        <div>
          <div class="title">
            <h4>Starting Equipment:</h4>
          </div>
          <div class="row box-container">
            <div class="col-xs-12 col-sm-4 col-sm-3 col-lg-2" v-for="data in equipments.starting_equipment">
              <div class="box">{{data.quantity}} {{data.item.name}}</div>
            </div>
            <div class="empty col-xs-12" v-if="equipments.starting_equipment && equipments.starting_equipment.length === 0">No list available</div>
          </div>
        </div>
        <div v-for="(list, index) in choices">
          <div class="title">
            <h4>{{index | createTitle}}</h4>
          </div>
          <div class="row box-container">
            <div class="col-xs-12 col-sm-4 col-sm-3 col-lg-2" v-for="choice in list">
              <div class="box">{{choice.quantity}} {{choice.item.name}}</div>
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
  filters: {
    createTitle (value) {
      let title = value.split('_')
      return `${title[0]} ${title[1]}`
    }
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
      this.$Progress.start()
      this.reset()

      this.name = data.name
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

    .info {
      padding: 5px 0px;

      .info-title {
        color: #555;
      }

      .pill {
        background: #f1f1f1;
        padding: 3px 15px;
        border-radius: 3px;
        margin: 0 3px;
      }
    }
  }

  .details-container {
    min-height: 300px;

    .title {
      font-weight: 400;
      text-transform: capitalize;
      text-align: left;
      border-left: 2px solid #a91333;
      background: #f7f7f7;
      padding: 10px;

      h4 {
        margin: 0px;
      }
    }

    .box-container {
      padding-bottom: 30px;

      .empty {
        text-align: center;
        padding: 20px 10px;
        color: #ccc;
      }

      .box {
        background: #fafafa;
        padding: 10px;
        margin: 15px 0px;
        border-radius: 0px 3px 3px 0px;
        padding-left: 20px;
        text-align: left;
        border-left: 2px solid #f1f1f1;
      }
    }
  }
</style>
