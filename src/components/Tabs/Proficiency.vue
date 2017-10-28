<template>
  <div class="details-container">
    <div>
      <div class="title">
        <h4>Skill Proficiencies</h4>
      </div>
      <div class="row box-container">
        <div class="col-xs-12 col-sm-4 col-sm-3 col-lg-2" v-for="data in proficiencies">
          <div class="box">{{data.name}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Proficiency',
  props: ['proficiencies']
}
</script>
