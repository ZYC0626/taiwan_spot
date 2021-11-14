<template>
  <nav
    class="
      navbar navbar-expand-sm
      bg-white
      border-bottom
      fixed-top
    "
  >
    <div class="container-fluid px-0">
      <a class="navbar-brand m-0" href="#">
        <img src="@/assets/images/Logo-desktop.svg" height="32" alt="LOGO" />
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <!-- <a class="nav-link" href="#">探索景點</a> -->
            <router-link :to="{ name: 'spotSearch', params: { queryString: params}}"  class="nav-link">探索景點</router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'eventSearch', params: { queryString: params}}" class="nav-link">節慶活動</router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'foodSearch', params: { queryString: params}}"  class="nav-link">品嚐美食</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  data () {
    return {
      params: ''
    }
  },
  methods: {
    createParams () {
      const p = {
        keyword: '',
        city: 'all',
        class1: 'all',
        search: false
      }
      this.params = JSON.stringify(p)
      console.log(this.params)
    }
  },
  created () {
    this.createParams()
  }
}
</script>
