<template>
  <nav
    class="
      navbar navbar-expand-sm
      bg-white
      border-bottom
      fixed-top
      d-lg-block
      d-none
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
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <router-link :to="{ name: 'spotSearch', params: { queryString: params}}"  class="nav-link"
            :class="{active: $route.name === 'spotDetail' || $route.name === 'spotSearch' }">探索景點</router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'eventSearch', params: { queryString: params}}" class="nav-link"
            :class="{active: $route.name === 'eventDetail' || $route.name === 'eventSearch' }">節慶活動</router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'foodSearch', params: { queryString: params}}"  class="nav-link"
            :class="{active: $route.name === 'foodDetail' || $route.name === 'foodSearch' }">品嚐美食</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <div class="text-center py-3"><a href="#"><img src="@/assets/images/Logo-mobile.png" height="32" alt="logo"></a></div>
  <div class="
      custom-dropdown
      d-lg-none
      d-block
      d-flex">
      <button type="button" class="btn" id="dropdown-close" @click="setDropDown('open')">
        <img src="@/assets/images/menu-mobile.svg" alt="menu">
      </button>
      <button type="button" class="btn d-none" id="dropdown-open" @click="setDropDown('close')">
        <img src="@/assets/images/menu-mobile-close.svg" alt="menu">
      </button>
      <div class="custom-dropdown-content">
        <div class="ps-3 py-3"><a href="#"><img src="@/assets/images/Logo-mobile.png" height="32" alt="logo"></a></div>
        <ul class="custom-dropdown-list text-center">
            <li class="custom-dropdown-list-item"
            :class="{active: $route.name === 'spotDetail' || $route.name === 'spotSearch' }">
              <router-link :to="{ name: 'spotSearch', params: { queryString: params}}"
              class="text-decoration-none"
              >探索景點</router-link>
            </li>
            <li class="custom-dropdown-list-item"
            :class="{active: $route.name === 'eventDetail' || $route.name === 'eventSearch' }">
              <router-link :to="{ name: 'eventSearch', params: { queryString: params}}"
              class="text-decoration-none"
              >節慶活動</router-link>
            </li>
            <li class="custom-dropdown-list-item"
            :class="{active: $route.name === 'foodDetail' || $route.name === 'foodSearch' }">
              <router-link :to="{ name: 'foodSearch', params: { queryString: params}}"
              class="text-decoration-none"
              >品嚐美食</router-link>
            </li>
        </ul>
      </div>
  </div>
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
    },
    setDropDown (status) {
      if (status === 'open') {
        document.querySelector('.custom-dropdown-content').classList.add('active')
        document.querySelector('#dropdown-open').classList.remove('d-none')
        document.querySelector('#dropdown-close').classList.add('d-none')
      } else {
        document.querySelector('.custom-dropdown-content').classList.remove('active')
        document.querySelector('#dropdown-close').classList.remove('d-none')
        document.querySelector('#dropdown-open').classList.add('d-none')
      }
    }
  },
  created () {
    this.createParams()
  }
}
</script>
