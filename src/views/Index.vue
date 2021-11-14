<template>
  <div class="container-fluid banner">
    <div class="row g-0 justify-content-center">
      <div class="col-lg-6 mb-lg-0 mb-4">
        <p class="slogan m-0">
          探索<span class="slogan-border-bottom">台灣之美</span
          ><br />讓我們更親近這片土地
        </p>
        <p
          class="
            sub_slogan
            d-flex
            justify-content-lg-start justify-content-center
            align-itmes-center
          "
        >
          <img src="@/assets/images/Vector.svg" alt="icon" class="me-1" />
          台灣旅遊景點導覽<span class="ms-1 sub_slogan_en"
            >Taiwan Travel Guide</span
          >
        </p>
      </div>
      <div
        class="col-lg-4 d-flex flex-column justify-content-end"
        style="width: 350px"
      >
          <div class="mb-2">
            <select class="form-select" v-model="s_category">
              <option value="spot" selected>探索景點</option>
              <option value="evetn">節慶活動</option>
              <option value="food">品嚐美食</option>
            </select>
          </div>
          <div class="mb-2">
            <input v-model="s_keyword"
              type="text"
              class="form-control"
              placeholder="想找有趣的？請輸入關鍵字"
            />
          </div>
          <button type="button" class="btn btn-customer w-100 d-flex align-items-center justify-content-center" @click="goToSearch">
          <img src="@/assets/images/search30.svg" alt="search">
          <span>搜尋</span>
          </button>
      </div>
    </div>
  </div>
  <div class="container-fluid conatainer-px">
    <div
      id="carouselBanner"
      class="carousel slide"
      data-bs-ride="carousel"
      ref="carouselBanner"
    >

    </div>
  </div>

  <div class="container-fluid conatainer-px mt-4">
    <div class="d-flex align-items-center">
      <h2 class="me-auto ms-2">近期活動</h2>
      <a class="more-link me-2" href="#"
        >查看更多活動<img
          src="@/assets/images/arrow-right16_R.svg"
          class="ms-1"
          alt="arrow"
      /></a>
    </div>
    <div class="row">
      <div class="col-lg-6 mb-3" v-for="item in eventList" :key="item.ID">
        <div class="info-card h-100">
          <div class="row g-0 h-100">
            <div class="col-4 over-hidden">
              <div
                class="info-card-img"
                :style="{ 'background-image': 'url(' + item.Picture.PictureUrl1 + ')' }"
              ></div>
            </div>
            <div class="col-8">
              <div class="info-card-content d-flex flex-column">
                <p class="time">{{ $filter.formatDate(item.StartTime ) }} - {{ $filter.formatDate(item.EndTime  ) }}</p>
                <p class="title">
                  {{ item.Name }}
                </p>
                <div class="d-flex mt-auto">
                  <p class="spot me-auto">
                    <img
                      src="@/assets/images/spot16.svg"
                      class="me-1"
                      alt="spot"
                    />{{ item.City }}
                  </p>
                  <a href="#" class="detail" @click.prevent="goToDetail('event',item.ID)"
                    >詳細介紹<img
                      src="@/assets/images/arrow-right16_G.svg"
                      class="me-1"
                      alt="arrow"
                  /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="container-fluid conatainer-px mt-4">
    <div class="d-flex align-items-center">
      <h2 class="me-auto ms-2">熱門打卡景點</h2>
      <a class="more-link me-2" href="#"
        >查看更多活動<img
          src="@/assets/images/arrow-right16_R.svg"
          class="ms-1"
          alt="arrow"
      /></a>
    </div>
    <div class="row">
      <div class="col-3" v-for="item in hotSpot" :key="item.ID">
        <div class="recommended-card" @click="goToDetail('spot',item.ID)">
          <div class="recommended-card-img-border">
            <div
              class="recommended-card-img"
              :style="{ 'background-image': 'url(' + item.Picture.PictureUrl1 + ')' }"
            ></div>
          </div>
          <p class="title">{{ item.Name }}</p>
          <p class="spot">
            <img
              src="@/assets/images/spot16.svg"
              class="me-1"
              alt="spot"
            />{{ item.City }}
          </p>
        </div>
      </div>
    </div>
  </div>

  <div class="container-fluid conatainer-px mt-4">
    <div class="d-flex align-items-center">
      <h2 class="me-auto ms-2">一再回訪美食</h2>
      <a class="more-link me-2" href="#"
        >查看更多活動<img
          src="@/assets/images/arrow-right16_R.svg"
          class="ms-1"
          alt="arrow"
      /></a>
    </div>
    <div class="row">
      <div class="col-3" v-for="item in FoodList" :key="item.ID">
        <div class="recommended-card" @click="goToDetail('food',item.ID)">
          <div class="recommended-card-img-border">
            <div
              class="recommended-card-img"
              :style="{ 'background-image': 'url(' + item.Picture.PictureUrl1 + ')' }"
            ></div>
          </div>
          <p class="title">{{ item.Name }}</p>
          <p class="spot">
            <img
              src="@/assets/images/spot16.svg"
              class="me-1"
              alt="spot"
            />{{ item.City }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// import Swiper from '@/components/Swiper.vue'
import Carousel from 'bootstrap/js/dist/carousel'
export default {
  components: {
  },
  data () {
    return {
      RandomCity: '',
      carouselList: [],
      eventList: [],
      hotSpot: [],
      FoodList: [],
      CityList: [],
      s_category: 'spot',
      s_keyword: ''
    }
  },
  methods: {
    getCity () {
      // 資料圖片過少 not a good idea
      // this.axios.get('https://gist.motc.gov.tw/gist_api/V3/Map/Basic/City?$format=JSON',
      //   {
      //     headers: this.$getAuthorizationHeader()
      //   }
      // )
      //   .then((response) => {
      //     // console.log(response)
      //     response.data.forEach((x) => {
      //       this.CityList.push(x.City)
      //     })
      //     this.RandomCity = this.getRandomCity()
      //     this.getCarousel()
      //     this.getRecentEvent()
      //     this.getHotSpot()
      //     this.getFoodList()
      //   })
      //   .catch((err) => {
      //     console.log(err)
      //   })
      this.RandomCity = this.getRandomCity()
      this.getCarousel()
      this.getRecentEvent()
      this.getHotSpot()
      this.getFoodList()
    },
    getRandomCity () {
      this.CityList = ['NewTaipei', 'Tainan', 'NantouCounty', 'HualienCounty']
      return this.CityList[Math.floor(Math.random() * this.CityList.length)]
    },
    goToDetail (category, id) {
      this.$router.push(`/${category}/${id}`)
    },
    getCarousel () {
      this.axios.get(`https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot/${this.RandomCity}?$select=ID%2CCity%2CName%2CPicture%2CAddress&$filter=Picture%2FPictureUrl1%20ne%20null&$orderby=UpdateTime%20desc&$top=5&$format=JSON`,
        {
          headers: this.$getAuthorizationHeader()
        }
      )
        .then((response) => {
          // console.log(response)
          this.carouselList = response.data
          this.renderCarousel()
          this.reworkCarousel()
        })
        .catch((err) => {
          console.log(err)
        })
    },
    getRecentEvent () {
      this.axios.get(`https://ptx.transportdata.tw/MOTC/v2/Tourism/Activity/${this.RandomCity}?$filter=Picture%2FPictureUrl1%20ne%20null&$top=4&$format=JSON`,
        {
          headers: this.$getAuthorizationHeader()
        }
      )
        .then((response) => {
          // console.log(response)
          this.eventList = response.data
          // console.log(this.eventList)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    getHotSpot () {
      this.axios.get(`https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot/${this.RandomCity}?$filter=Picture%2FPictureUrl1%20ne%20null&$top=4&$format=JSON`,
        {
          headers: this.$getAuthorizationHeader()
        }
      )
        .then((response) => {
          // console.log(response)
          this.hotSpot = response.data
        })
        .catch((err) => {
          console.log(err)
        })
    },
    getFoodList () {
      this.axios.get(`https://ptx.transportdata.tw/MOTC/v2/Tourism/Restaurant/${this.RandomCity}?$filter=Picture%2FPictureUrl1%20ne%20null&$orderby=SrcUpdateTime%20desc&$top=4&$format=JSON`,
        {
          headers: this.$getAuthorizationHeader()
        }
      )
        .then((response) => {
          // console.log(response)
          this.FoodList = response.data
        })
        .catch((err) => {
          console.log(err)
        })
    },
    goToSearch () {
      const param = {
        keyword: this.s_keyword,
        city: 'all',
        class1: 'all',
        search: true
      }
      const strParam = JSON.stringify(param)
      console.log(strParam)
      console.log(`${this.s_category}Search`)
      this.$router.push({ name: `${this.s_category}Search`, params: { queryString: strParam } })
    },
    renderCarousel () {
      // use innerHTML , active 難以解決
      // console.log(this.$refs.carouselBanner)
      // get img path
      // console.log(require('@/assets/images/Arrow-Right.svg'))
      let str = ''
      const NavbtnStr = `
      <button
        class="carousel-control-prev d-lg-block d-none"
        type="button"
        data-bs-target="#carouselBanner"
        data-bs-slide="prev"
      >
        <img src="${require('@/assets/images/Arrow-Left.svg')}" alt="" />
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next d-lg-block d-none"
        type="button"
        data-bs-target="#carouselBanner"
        data-bs-slide="next"
      >
        <img src="${require('@/assets/images/Arrow-Right.svg')}" alt=""/>
        <span class="visually-hidden">Next</span>
      </button>`
      let IndiStr = ''
      IndiStr = `
      <div
        class="
          carousel-indicators carousel-indicators-radius
          justify-content-end
        "
      >
      `
      this.carouselList.forEach((x, index) => {
        IndiStr += `
        <button
          type="button"
          data-bs-target="#carouselBanner"
          data-bs-slide-to="${index}"
          class="${index === 0 ? 'active' : ''} circle-radius"
        ></button>
        `
      })
      IndiStr += '</div>'
      let contentStr = ''
      contentStr = '<div class="carousel-inner">'
      this.carouselList.forEach((x, index) => {
        const city = x.City ? x.City : this.$filter.formatCity(x)
        contentStr += `
        <div
          class="carousel-item ${index === 0 ? 'active' : ''} bg-cover bg-center"
          style="
            background-image: url(${x.Picture.PictureUrl1});
          "
        >
        <div class="carousel-caption"><p><strong>${city}</strong> | <strong>${x.Name}</strong></p></div>
        </div>`
      })
      contentStr += '</div>'
      str += IndiStr
      str += contentStr
      str += NavbtnStr
      this.$refs.carouselBanner.innerHTML = str
    },
    reworkCarousel () {
      const carouselEl = document.querySelector('#carouselBanner')
      const mycarousel = new Carousel(carouselEl)
      mycarousel.cycle()
    }
  },
  mounted () {
  },
  created () {
    this.getCity()
  }
}
</script>
