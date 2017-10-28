<template>
  <div class="details-container">
    <div>
      <div class="title">
        <h4>Skill Proficiency Choices</h4>
      </div>
      <div class="row box-container" v-for="data in choices">
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
</template>

<script>
export default {
  name: 'Choices',
  props: ['choices']
}
</script>
