<template>
  <div class="info">
    <span class="info-title">{{title}}:</span>
    <span class="pill" v-if="Array.isArray(data)" v-for="info in data">{{info.name}}</span>
    <span class="pill" v-if="!Array.isArray(data)">{{data}}</span>
  </div>
</template>

<script>
export default {
  name: 'Info',
  props: ['title', 'data']
}
</script>

<style scoped lang="scss">
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
</style>
