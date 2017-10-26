<template>
  <div id="app">
    <app-header/>
    <router-view/>
    <app-footer/>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default {
  name: 'app',
  components: {
    appHeader: Navbar,
    appFooter: Footer
  }
}
</script>

<style lang="scss">
body {
  margin: 0;
}

#app {
  font-family: 'Roboto', sans-serif;
  font-weight: 300;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

.row {
  margin:0;
}

.sweet-modal {
  height: 100%;

  .sweet-title {
    text-align: left;
    border-bottom: 1px solid #f5f5f5 !important;

    h2 {
      font-weight: 300 !important;
    }
  }

  .sweet-box-actions {
    .sweet-action-close {
      transition: all 0.5s ease;

      &:hover {
        background: transparent !important;
        color: #e20031 !important;
      }
    }
  }
}
</style>
