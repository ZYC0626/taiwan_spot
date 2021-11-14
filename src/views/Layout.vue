<template>
  <TopBar></TopBar>
  <div class="container-fluid padding-top">
    <router-view/>
  </div>
  <Footer></Footer>
</template>

<script>
import TopBar from '@/components/TopBar.vue'
import Footer from '@/components/Footer.vue'
export default {
  components: {
    TopBar,
    Footer
  },
  data () {
    return {}
  },
  methods: {},
  created () {}
}
</script>
