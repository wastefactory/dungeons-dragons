<template>
  <div class="navbar" v-bind:class="{ 'active': status }">
    <div class="logo">
      <span class="bold">DUNGEONS</span><span class="mid">&</span><span class="light">DRAGONS</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  props: ['status']
}
</script>

<style scoped lang="scss">
  .navbar {
    padding: 20px;
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: 100%;
    text-align: left;
    position: fixed;
    width: 100%;
    z-index: 999;
    transition: background-color 0.5s ease;

    .logo {
      color: white;
      .bold {
        font-weight:500;
      }
      .mid {
        font-size: 13px;
      }
    }
  }

  .active {
    background: #e15656;
  }
</style>
