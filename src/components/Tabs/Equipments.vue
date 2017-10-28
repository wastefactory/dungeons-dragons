<template>
  <div class="details-container">
    <div>
      <div class="title">
        <h4>Starting Equipment:</h4>
      </div>
      <div class="row box-container">
        <div class="col-xs-12 col-sm-4 col-sm-3 col-lg-2" v-for="data in this.equipments.starting_equipment">
          <div class="box">{{data.quantity}} {{data.item.name}}</div>
        </div>
        <div class="empty col-xs-12" v-if="this.equipments.starting_equipment && this.equipments.starting_equipment.length === 0">No list available</div>
      </div>
    </div>
    <div v-for="(list, index) in this.choices">
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
</template>

<script>
export default {
  name: 'Equipments',
  props: ['equipments', 'choices'],
  filters: {
    createTitle (value) {
      let title = value.split('_')
      return `${title[0]} ${title[1]}`
    }
  }
}
</script>
