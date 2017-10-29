<template>
  <div id="app">
    <app-header :status="scrolled"/>
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
  },
  data () {
    return {
      scrolled: false
    }
  },
  methods: {
    handleScroll () {
      this.scrolled = window.scrollY > 5
    }
  },
  created () {
    window.addEventListener('scroll', this.handleScroll)
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style lang="scss">
$brand-color: #ed6868;
body {
  margin: 0;
}

#app {
  font-family: 'Roboto', sans-serif;
  font-weight: 300;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #555;
}

.btn {
  background: white;
  border: 0px;
  padding: 15px;
  min-width: 150px;
  display: inline-block;
  text-align: center;
  border-radius: 100px;
  font-size: 15px;
  text-decoration: none;
  color: #555;
  transition: all 0.3s ease;

  &:hover {
    color: $brand-color;
  }
}

h3 {
  font-weight: 400;
  font-size:25px;
}

h4 {
  font-weight: 400;
  font-size:15px;
}

.row {
  margin:0;
}

.sweet-modal {
  height: 100%;

  .sweet-title {
    text-align: left;
    border-bottom: 1px solid #f5f5f5 !important;
    color: white;
    background: #e15656;

    h2 {
      font-weight: 300 !important;
    }
  }

  .sweet-box-actions {
    .sweet-action-close {
      transition: all 0.5s ease;
      color: white !important;

      &:hover {
        background: transparent !important;
        color: #b53838 !important;
      }
    }
  }

  ul.sweet-modal-tabs {
    margin-top: 10px !important;
    border-bottom: 1px solid #f5f5f5 !important;

    li.sweet-modal-tab a {
      transition: all 0.5s ease;
      color: #555 !important;

      div {
        padding: 5px;
      }
    }

    li.sweet-modal-tab.active a {
      border-radius: 3px;
      font-weight: 300 !important;
      color: $brand-color !important;

      div {
        border-bottom: 1px solid;
      }
    }
  }
}

.details-container {
  min-height: 300px;

  .title {
    font-weight: 400;
    text-transform: capitalize;
    text-align: left;
    border-left: 2px solid #ed6868;
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
