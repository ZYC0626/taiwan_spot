<template>
  <div class="container-fluid conatainer-px">
    <nav aria-label="breadcrumb" class="py-2 mt-3">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <a href="#" class="text-decoration-none">首頁</a>
        </li>
        <li class="breadcrumb-item">
          <a href="#" class="text-decoration-none" @click.prevent="breadCrumbSearch('spot', 'all')">探索景點</a>
        </li>
        <li class="breadcrumb-item" v-if="currentCity !== ''">
          <a href="#" class="text-decoration-none" @click.prevent="breadCrumbSearch('spot', currentCity_en)">{{ currentCity }}</a>
        </li>
        <li class="breadcrumb-item active" aria-current="page">
          {{ detailData.Name }}
        </li>
      </ol>
    </nav>

    <div
      id="carouselSpot"
      class="carousel slide"
      data-bs-ride="carousel"
      ref="carouselSpot"
    >

    </div>

    <div class="detail-content">
      <h2 class="detail-title">{{ detailData.Name }}</h2>
      <span v-if="detailData.Class1" class="badge badge-customer"># {{ detailData.Class1 }}</span>
      <span v-if="detailData.Class2" class="badge badge-customer"># {{ detailData.Class2 }}</span>
      <span v-if="detailData.Class3" class="badge badge-customer"># {{ detailData.Class3 }}</span>
      <div class="intro">
        <h3 class="intro-title">景點介紹 :</h3>
        <p class="intro-content">
          <span v-if="detailData.Description">{{ detailData.Description }}</span>
          <span v-else>{{ detailData.DescriptionDetail }}</span>
        </p>
      </div>
    </div>

    <div class="row bg-md-gray">
      <div class="col-md-6">
        <ul class="contact">
          <li><strong>營業時間：</strong> : {{ detailData.OpenTime   }}</li>
          <li v-if="detailData.Phone"><strong>聯絡電話：</strong> : {{ detailData.Phone   }}</li>
          <li v-if="detailData.Address"><strong>餐廳地址：</strong> : {{ detailData.Address  }}</li>
          <li v-if="detailData.WebsiteUrl"><strong>官方網站：</strong> : <a :href="detailData.WebsiteUrl" target="_blank">{{ detailData.WebsiteUrl }}</a></li>
        </ul>
      </div>
      <div class="col-md-6">
      <iframe width="100%" height="250"
        style="border: 0; border-radius: 12px; margin-bottom: 12px"
        :src="iframeSrc"
        >
      </iframe>
        <div class="relation">
          <h3 class="title">周邊資訊:</h3>
          <div class="row">
            <div class="col-md-4 mb-md-0 mb-3">
              <div class="relation-item" @click="getAroundOne('ScenicSpot','spot')">
                <img
                  src="@/assets/images/nearby-scene30.svg"
                  alt="scene30"
                  height="22.5"
                />
                <div>附近景點</div>
              </div>
            </div>
            <div class="col-md-4 mb-md-0 mb-3">
              <div class="relation-item" @click="getAroundOne('Activity','event')">
                <img
                  src="@/assets/images/nearby-event30.svg"
                  alt="scene30"
                  height="22.5"
                />
                <div>附近活動</div>
              </div>
            </div>
            <div class="col-md-4 mb-md-0 mb-3">
              <div class="relation-item" @click="getAroundOne('Restaurant','food')">
                <img
                  src="@/assets/images/nearby-food30.svg"
                  alt="scene30"
                  height="22.5"
                />
                <div>附近美食</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="mt-4">
      <div class="d-flex align-items-center">
        <h2 class="me-auto ms-2 d-md-block d-none">還有這些不能錯過的景點</h2>
        <h2 class="me-auto ms-2 d-block d-md-none">這些也不能錯過</h2>
        <a class="more-link me-2 d-md-block d-none" href="#"
        @click.prevent="goToRelation('spot')"
          >查看更多{{ this.currentCity }}景點<img
            src="@/assets/images/arrow-right16_R.svg"
            class="ms-1"
            alt="arrow"
        /></a>
        <a class="more-link me-2 d-block d-md-none" href="#"
        @click.prevent="goToRelation('spot')"
          >更多景點<img
            src="@/assets/images/arrow-right16_R.svg"
            class="ms-1"
            alt="arrow"
        /></a>
      </div>
      <div class="row">
        <div class="col-lg-3 col-md-6" v-for="item in aroundSpotList" :key="item.ID">
          <div class="recommended-card"  @click="goToDetail('spot', item.ID)">
            <div class="recommended-card-img-border">
              <div
                class="recommended-card-img"
                :style="{ 'background-image': 'url(' + item.Picture.PictureUrl1 + ')' }"
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
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      id: '',
      detailData: {},
      iframeSrc: '',
      aroundSpotList: [],
      currentCity: '',
      currentCity_en: ''
    }
  },
  watch: {
    $route () {
      // 相同path 不同 praram 時需要 透過watch $route 來重新Render
      if (this.$route.name === 'spotDetail') {
        this.id = this.$route.params.Id
        this.getDetail()
        this.getCityList()
      }
    }
  },
  methods: {
    goToDetail (category, id) {
      this.$router.push(`/${category}/${id}`)
    },
    getDetail () {
      this.axios.get(`https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot?$filter=ScenicSpotID%20eq%20'${this.id}'&$top=1&$format=JSON`,
        {
          headers: this.$getAuthorizationHeader()
        }
      )
        .then((response) => {
          // console.log(response)
          this.detailData = response.data[0]
          this.iframeSrc = `https://maps.google.com.tw/maps?f=q&hl=zh-TW&geocode=&q=${this.detailData.Position.PositionLat},${this.detailData.Position.PositionLon}&z=16&output=embed&t=`
          this.getAroundSpot()
          this.renderCarousel(this.detailData)
          this.getCityList()
        })
        .catch((err) => {
          console.log(err)
        })
    },
    getAroundSpot () {
      this.axios.get(`https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot?$filter=Picture%2FPictureUrl1%20ne%20null%20and%20ScenicSpotID%20ne%20'${this.detailData.ID}'&$orderby=UpdateTime%20desc&$top=4&$spatialFilter=nearby(${this.detailData.Position.PositionLat}%2C%20${this.detailData.Position.PositionLon}%2C%2010000)&$format=JSON`,
        {
          headers: this.$getAuthorizationHeader()
        }
      )
        .then((response) => {
          // console.log(response)
          this.aroundSpotList = response.data
          // console.log(this.aroundSpotList)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    checkImage (data) {
      const re = []
      if (data.Picture.PictureUrl1) {
        re.push(data.Picture.PictureUrl1)
      }
      if (data.Picture.PictureUrl2) {
        re.push(data.Picture.PictureUrl2)
      }
      if (data.Picture.PictureUrl3) {
        re.push(data.Picture.PictureUrl3)
      }
      return re
    },
    renderCarousel (data) {
      // console.log('renderCarousel')
      const imgData = this.checkImage(data)
      let str = ''
      const NavbtnStr = `
      <button
        class="carousel-control-prev d-lg-block d-none"
        type="button"
        data-bs-target="#carouselSpot"
        data-bs-slide="prev"
      >
        <img src="${require('@/assets/images/Arrow-Left.svg')}" alt="" />
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next d-lg-block d-none"
        type="button"
        data-bs-target="#carouselSpot"
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
      imgData.forEach((x, index) => {
        IndiStr += `
        <button
          type="button"
          data-bs-target="#carouselSpot"
          data-bs-slide-to="${index}"
          class="${index === 0 ? 'active' : ''} circle-radius"
        ></button>
        `
      })
      IndiStr += '</div>'
      let contentStr = ''
      contentStr = '<div class="carousel-inner">'
      imgData.forEach((x, index) => {
        contentStr += `
        <div
          class="carousel-item ${index === 0 ? 'active' : ''} bg-cover bg-center"
          style="
            background-image: url(${x});
          "
        >
        </div>`
      })
      contentStr += '</div>'
      str += IndiStr
      str += contentStr
      str += NavbtnStr
      this.$refs.carouselSpot.innerHTML = str
    },
    getCityList () {
      this.axios.get('https://gist.motc.gov.tw/gist_api/V3/Map/Basic/City?$format=JSON',
        {
          headers: this.$getAuthorizationHeader()
        }
      )
        .then((response) => {
          // console.log(response.data)
          const cityList = response.data
          this.currentCity = this.detailData.City ? this.detailData.City : this.$filter.formatCity(this.detailData)
          // console.log(this.currentCity)
          cityList.forEach((x) => {
            if (x.CityName === this.currentCity) {
              this.currentCity_en = x.City
            }
          })
        })
        .catch((err) => {
          console.log(err)
        })
    },
    goToRelation (way) {
      const p = {
        keyword: '',
        city: this.currentCity_en === '' ? 'all' : this.currentCity_en,
        class1: 'all',
        search: true
      }
      const pstr = JSON.stringify(p)
      this.$router.push(`/${way}Search/${pstr}`)
    },
    getAroundOne (way, way2) {
      this.axios.get(`https://ptx.transportdata.tw/MOTC/v2/Tourism/${way}?$filter=${way}ID%20ne%20'${this.detailData.ID}'&$orderby=UpdateTime%20desc&$top=3&$spatialFilter=nearby(${this.detailData.Position.PositionLat}%2C%20${this.detailData.Position.PositionLon}%2C%201000)&$format=JSON`,
        {
          headers: this.$getAuthorizationHeader()
        }
      )
        .then((response) => {
          // console.log(response)
          if (response.data) {
            // 隨機 三選一
            const IDName = `${way}ID`
            const ID = response.data[Math.floor(Math.random() * response.data.length)][IDName]
            this.$router.push(`/${way2}/${ID}`)
          }
        })
        .catch((err) => {
          console.log(err)
        })
    },
    breadCrumbSearch (way, City) {
      const p = {
        keyword: '',
        city: City,
        class1: 'all',
        search: true
      }
      const pstr = JSON.stringify(p)
      this.$router.push(`/${way}Search/${pstr}`)
    }
  },
  created () {
    this.id = this.$route.params.Id
    // console.log(this.id)
    this.getDetail()
  }
}
</script>
