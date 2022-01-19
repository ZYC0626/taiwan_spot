<template>
  <div class="container-fluid conatainer-px">
    <nav aria-label="breadcrumb" class="py-2 mt-3">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <a href="#" class="text-decoration-none">首頁</a>
        </li>
        <li class="breadcrumb-item active">探索景點</li>
      </ol>
    </nav>

    <div class="row py-4">
      <div class="col-lg-3 mb-3">
        <select class="form-select" v-model="selectCity">
          <option value="all" selected>全部縣市</option>
          <option :value="item.City" v-for="item in CityList" :key="item.City">{{ item.CityName }}</option>
        </select>
      </div>
      <div class="col-lg-3 mb-3">
        <select class="form-select" v-model="class1">
          <option value="all" selected>全部主題</option>
          <option value="自然風景類">自然風景類</option>
          <option value="觀光工廠類">觀光工廠類</option>
          <option value="遊憩類">遊憩類</option>
          <option value="休閒農業類">休閒農業類</option>
          <option value="生態類">生態類</option>
          <option value="溫泉類">溫泉類</option>
          <option value="古蹟類">古蹟類</option>
        </select>
      </div>
      <div class="col-lg-4 mb-3">
        <input
          v-model="keyword"
          type="text"
          class="form-control"
          placeholder="想找有趣的？請輸入關鍵字"
        />
      </div>
      <div class="col-lg-2 mb-3">
        <button type="button" class="btn btn-customer w-100 d-flex align-items-center justify-content-center" @click="searchByInput()">
          <img src="@/assets/images/search30.svg" alt="search">
          <span>搜尋</span>
        </button>
      </div>
    </div>

    <h3 class="mt-5 mb-4">熱門主題</h3>
    <div class="row">
      <div class="col-md-3 col-6 mb-3">
        <div class="category-border">
          <div
            @click="goToClass('自然風景類')"
            class="category bg-cover bg-center"
            :style="{ 'background-image': 'url(' + require('@/assets/images/spot_1.png') + ')' }"
          >
            <strong>自然風景類</strong>
          </div>
        </div>
      </div>
      <div class="col-md-3 col-6 mb-3">
        <div class="category-border">
          <div
            @click="goToClass('觀光工廠類')"
            class="category bg-cover bg-center"
            :style="{ 'background-image': 'url(' + require('@/assets/images/spot_2.png') + ')' }"
          >
            <strong>觀光工廠類</strong>
          </div>
        </div>
      </div>
      <div class="col-md-3 col-6 mb-3">
        <div class="category-border">
          <div
            @click="goToClass('遊憩類')"
            class="category bg-cover bg-center"
            :style="{ 'background-image': 'url(' + require('@/assets/images/spot_3.png') + ')' }"
          >
            <strong>遊憩類</strong>
          </div>
        </div>
      </div>
      <div class="col-md-3 col-6 mb-3">
        <div class="category-border">
          <div
            @click="goToClass('休閒農業類')"
            class="category bg-cover bg-center"
            :style="{ 'background-image': 'url(' + require('@/assets/images/spot_4.png') + ')' }"
          >
            <strong>休閒農業類</strong>
          </div>
        </div>
      </div>
      <div class="col-md-3 col-6 mb-3">
        <div class="category-border">
          <div
            @click="goToClass('生態類')"
            class="category bg-cover bg-center"
            :style="{ 'background-image': 'url(' + require('@/assets/images/spot_5.png') + ')' }"
          >
            <strong>生態類</strong>
          </div>
        </div>
      </div>
      <div class="col-md-3 col-6 mb-3">
        <div class="category-border">
          <div
            @click="goToClass('溫泉類')"
            class="category bg-cover bg-center"
            :style="{ 'background-image': 'url(' + require('@/assets/images/spot_6.png') + ')' }"
          >
            <strong>溫泉類</strong>
          </div>
        </div>
      </div>
      <div class="col-md-3 col-6 mb-3">
        <div class="category-border">
          <div
            @click="goToClass('古蹟類')"
            class="category bg-cover bg-center"
            :style="{ 'background-image': 'url(' + require('@/assets/images/spot_7.png') + ')' }"
          >
            <strong>古蹟類</strong>
          </div>
        </div>
      </div>
    </div>

<!-- 搜尋結果 -->
    <template v-if="searchTrigger">
      <div class="d-flex align-items-center">
        <h2 class="me-2">搜尋結果</h2>
        <span style="font-family: 'Noto Sans TC', sans-serif;">共有 {{ totalLength }} 筆</span>
      </div>
      <div class="row" v-if="totalLength > 0">
        <div class="col-xl-3 col-md-6 mb-3" v-for="item in resultData" :key="item.ScenicSpotID">
          <div class="recommended-card" @click="goToDetail('spot',item.ScenicSpotID)">
            <div class="recommended-card-img-border">
              <div v-if="item.Picture.PictureUrl1"
                class="recommended-card-img"
                :style="{ 'background-image': 'url(' + item.Picture.PictureUrl1 + ')' }"
              ></div>
              <div v-else
                class="recommended-card-img"
                :style="{ 'background-image': 'url(' + require('@/assets/images/NoImage-255x200.png') + ')' }"
              ></div>
            </div>
            <p class="title">{{ item.ScenicSpotName }}</p>
            <p class="spot">
              <img
                src="@/assets/images/spot16.svg"
                class="me-1"
                alt="spot"
              />
              <span v-if="item.City">{{ item.City }}</span>
              <span v-else>{{ this.$filter.formatCity(item) }}</span>
            </p>
          </div>
        </div>
      </div>
      <div v-else class="text-center py-3">
        <img src="@/assets/images/nofound80.png" alt="">
        <p>目前查無資料<br>請重新搜尋</p>
      </div>
    </template>

    <Pagination class="mt-4"
      v-if="searchTrigger && totalLength != 0"
      :pages="pagination"
      v-on:emit-pages="searchByInput"
    ></Pagination>
  </div>
</template>
<script>
import Pagination from '@/components/Pagination.vue'
export default {
  components: {
    Pagination
  },
  data () {
    return {
      CityList: [],
      selectCity: 'all',
      keyword: '',
      class1: 'all',
      searchTrigger: false,
      totalLength: 0,
      resultData: [],
      pagination: {}
    }
  },
  methods: {
    getParams () {
      const pstr = '' + this.$route.params.queryString
      const pjson = JSON.parse(pstr)
      this.keyword = pjson.keyword
      this.selectCity = pjson.city
      this.class1 = pjson.class1
      console.log(pjson)
      this.searchTrigger = pjson.search
      this.pagination = {}
      if (this.searchTrigger) {
        this.searchByInput()
      }
    },
    goToDetail (category, id) {
      this.$router.push(`/${category}/${id}`)
    },
    getCityList () {
      this.axios.get('https://gist.motc.gov.tw/gist_api/V3/Map/Basic/City?$format=JSON',
        {
          headers: this.$getAuthorizationHeader()
        }
      )
        .then((response) => {
          // console.log(response.data)
          this.CityList = response.data
        })
        .catch((err) => {
          console.log(err)
        })
    },
    goToClass (cl) {
      const para = {
        keyword: '',
        city: 'all',
        class1: cl,
        search: true
      }
      const strParam = JSON.stringify(para)
      this.$router.push({ name: 'spotSearch', params: { queryString: strParam } })
    },
    searchByInput (page = 1) {
      let Filter = ''
      if (this.keyword === '') {
        if (this.class1 === 'all') {
          Filter = ''
        } else {
          Filter = `$filter=Class1%20eq%20'${this.class1}'&`
        }
      } else {
        if (this.class1 === 'all') {
          Filter = `$filter=contains(Name,'${this.keyword}')&`
        } else {
          Filter = `$filter=contains(Name,'${this.keyword}')%20and%20Class1%20eq%20'${this.class1}'&`
        }
      }
      let url = ''
      if (this.selectCity === 'all') {
        url = `https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot?${Filter}$top=200&$format=JSON`
      } else {
        url = `https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot/${this.selectCity}?${Filter}$top=200&$format=JSON`
      }
      console.log(url)
      this.axios.get(url,
        {
          headers: this.$getAuthorizationHeader()
        }
      )
        .then((response) => {
          // console.log(response)
          this.searchTrigger = true
          this.resultData = response.data
          this.totalLength = this.resultData.length
          const pageItem = 20
          const totalPage = Math.ceil(this.resultData.length / pageItem)
          const start = (page - 1) * pageItem
          const end = page * pageItem
          this.resultData = this.resultData.slice(start, end)
          this.pagination = {
            category: null,
            current_page: page,
            has_next: page < totalPage,
            has_pre: page !== 1,
            total_pages: totalPage,
            page_range: this.getPageRange(page, totalPage)
          }
        })
        .catch((err) => {
          console.log(err)
        })
    },
    getPageRange (currentPage, totalPage) {
      if (totalPage <= 5) {
        const pageRanges = Array(totalPage)
          .fill(1)
          .map((val, index) => {
            const value = val + index
            return value
          })
        return pageRanges
      } else {
        const startPage = (() => {
          // if (currentPage - 2 <= 0) return 1 // 前幾頁
          // const overNumber = currentPage + 2 - totalPage
          // if (overNumber > 0) return currentPage - 2 - overNumber // 最後幾頁
          // return currentPage - 2 // 正常頁
          if (currentPage - 1 <= 0) return 1 // 前幾頁
          const overNumber = currentPage + 1 - totalPage
          if (overNumber > 0) return currentPage - 1 - overNumber // 最後幾頁
          return currentPage - 1 // 正常頁
        })()
        const pageRanges = Array(3) // 5
          .fill(startPage)
          .map((val, index) => {
            const value = val + index
            // return { isActive: value === currentPage, action: 'setPage', value }
            return value
          })
          // .filter(({ value }) => value >= 1 && value <= totalPage)
        // if (pageRanges[0] !== 1) pageRanges.unshift(1)
        // if (pageRanges[pageRanges.length - 1] !== totalPage) pageRanges.push(totalPage)
        // console.log(startPage, pageRanges)
        return pageRanges
      }
    }
  },
  watch: {
    $route () {
      // 相同path 不同 praram 時需要 透過watch $route 來重新Render
      if (this.$route.name === 'spotSearch') {
        this.getParams()
      }
    }
  },
  created () {
    this.getCityList()
    this.getParams()
  }
}
</script>
