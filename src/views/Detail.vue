<template>
  <div class="container-fluid conatainer-px">
    <nav aria-label="breadcrumb" class="py-2 mt-3">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="#" class="text-decoration-none">首頁</a></li>
        <li class="breadcrumb-item"><a href="#" class="text-decoration-none">探索景點</a></li>
        <li class="breadcrumb-item active" aria-current="page">
          羅東林業文化園區
        </li>
      </ol>
    </nav>

    <div
      id="carouselExampleIndicators"
      class="carousel slide"
      data-bs-ride="carousel"
    >
      <div
        class="
          carousel-indicators carousel-indicators-radius
          justify-content-end
        "
      >
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          class="active circle-radius"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="1"
          class="circle-radius"
          aria-label="Slide 2"
        ></button>
      </div>
      <div class="carousel-inner">
        <div
          class="carousel-item active bg-cover bg-center"
          style="
            background-image: url(https://images.unsplash.com/photo-1470004914212-05527e49370b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80);
          "
        ></div>
        <div
          class="carousel-item bg-cover bg-center"
          style="
            background-image: url(https://images.unsplash.com/photo-1470004914212-05527e49370b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80);
          "
        ></div>
      </div>
      <button
        class="carousel-control-prev d-lg-block d-none"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <img src="@/assets/images/Arrow-Left.svg" alt="" />
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next d-lg-block d-none"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <img src="@/assets/images/Arrow-Right.svg" alt="" />
        <span class="visually-hidden">Next</span>
      </button>
    </div>

    <div class="detail-content">
      <h2 class="detail-title">羅東林業文化園區</h2>
      <span class="badge badge-customer"># 自然風景類</span>
      <span class="badge badge-customer"># 林場類</span>
      <div class="intro">
        <h3 class="intro-title">景點介紹 :</h3>
        <p class="intro-content">
          日治時期台灣有三大林場，分別是：八仙山林場、阿里山林場以及太平山林場。從太平山林場所砍伐的檜木、扁柏等木材，都會運送到羅東出張所和貯木池進行存放，而羅東出張所經過規劃後，成為現今的羅東林業文化園區。羅東林業文化區坐落於羅東市區附近，交通十分方便，園內規劃有貯木池、森林鐵路、竹林車站、蒸汽火車頭、綠林和步道等，從這些設備、建築物中發現當年的林業發展多麼蓬勃，又是多麼地熱鬧，同時也讓人不禁感慨，許多珍貴的檜木消逝在太平山中。隨著林業發展的轉型，可以看見昔日風華的貯木池，零散放著當時砍伐的檜木，如今，貯木池不再具有貯木的功能，而是成為水鳥和魚兒們的天堂。在園區中散步，彷彿進入一座秘密花園，園內種植滿滿茂密的樹木，不時聽見鳥兒的叫聲，空氣中帶有芬多精與淡淡的檜木香，舒服的環境，令人不禁停下腳步，感受內心的寧靜。
        </p>
      </div>
    </div>

    <div class="row bg-md-gray">
      <div class="col-md-6">
        <ul class="contact">
          <li><strong>開放時間</strong> : 06:00-19:00</li>
          <li><strong>服務電話</strong> : 886-3-9545114</li>
          <li><strong>景點地址</strong> : 宜蘭縣265羅東鎮中正北路118號</li>
          <li><strong>官方網站</strong> : https://www.facebook.com/lfcgexhibition/</li>
        </ul>
      </div>
      <div class="col-md-6">
        <iframe
            class="slide-in slide-start"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14447.487332366718!2d121.78981246977538!3d25.14002359999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x345d4f7807d7ab5d%3A0xe005c55719594f84!2z5ZyL56uL5rW35rSL56eR5oqA5Y2a54mp6aSo!5e0!3m2!1szh-TW!2stw!4v1629706802787!5m2!1szh-TW!2stw"
            width="100%"
            height="250"
            style="border: 0; border-radius: 12px; margin-bottom: 12px;"
            allowfullscreen=""
            loading="lazy"
        ></iframe>
        <div class="relation">
          <h3 class="title">周邊資訊: </h3>
          <div class="row">
            <div class="col-md-4 mb-md-0 mb-3">
              <div class="relation-item">
                <img src="@/assets/images/nearby-scene30.svg" alt="scene30" height="22.5">
                <div>附近景點</div>
              </div>
            </div>
            <div class="col-md-4 mb-md-0 mb-3">
              <div class="relation-item">
                <img src="@/assets/images/nearby-event30.svg" alt="scene30" height="22.5">
                <div>附近活動</div>
              </div>
            </div>
            <div class="col-md-4 mb-md-0 mb-3">
              <div class="relation-item">
                <img src="@/assets/images/nearby-food30.svg" alt="scene30" height="22.5">
                <div>附近美食</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="mt-4">
      <div class="d-flex align-items-center">
        <h2 class="me-auto ms-2">還有這些不能錯過活動</h2>
        <a class="more-link me-2" href="#"
          >查看更多活動<img
            src="@/assets/images/arrow-right16_R.svg"
            class="ms-1"
            alt="arrow"
        /></a>
      </div>
      <div class="row">
        <div class="col-3">
          <div class="recommended-card">
            <div class="recommended-card-img-border">
              <div
                class="recommended-card-img"
                style="
                  background-image: url(https://images.unsplash.com/photo-1470004914212-05527e49370b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80);
                "
              ></div>
            </div>
            <p class="title">龜山島牛奶海</p>
            <p class="spot">
              <img
                src="@/assets/images/spot16.svg"
                class="me-1"
                alt="spot"
              />宜蘭縣
            </p>
          </div>
        </div>
        <div class="col-3">
          <div class="recommended-card">
            <div class="recommended-card-img-border">
              <div
                class="recommended-card-img"
                style="
                  background-image: url(https://images.unsplash.com/photo-1470004914212-05527e49370b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80);
                "
              ></div>
            </div>
            <p class="title">龜山島牛奶海</p>
            <p class="spot">
              <img
                src="@/assets/images/spot16.svg"
                class="me-1"
                alt="spot"
              />宜蘭縣
            </p>
          </div>
        </div>
        <div class="col-3">
          <div class="recommended-card">
            <div class="recommended-card-img-border">
              <div
                class="recommended-card-img"
                style="
                  background-image: url(https://images.unsplash.com/photo-1470004914212-05527e49370b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80);
                "
              ></div>
            </div>
            <p class="title">龜山島牛奶海</p>
            <p class="spot">
              <img
                src="@/assets/images/spot16.svg"
                class="me-1"
                alt="spot"
              />宜蘭縣
            </p>
          </div>
        </div>
        <div class="col-3">
          <div class="recommended-card">
            <div class="recommended-card-img-border">
              <div
                class="recommended-card-img"
                style="
                  background-image: url(https://images.unsplash.com/photo-1470004914212-05527e49370b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80);
                "
              ></div>
            </div>
            <p class="title">龜山島牛奶海</p>
            <p class="spot">
              <img
                src="@/assets/images/spot16.svg"
                class="me-1"
                alt="spot"
              />宜蘭縣
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
      id: ''
    }
  },
  methods: {
    getDetail () {
      this.axios.get('https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot?$select=ID%2CName%2CPicture%2CAddress&$filter=Picture%2FPictureUrl1%20ne%20null&$orderby=UpdateTime%20desc&$top=5&$skip=2&$format=JSON',
        {
          headers: this.$getAuthorizationHeader()
        }
      )
        .then((response) => {
          // console.log(response)
          this.carouselList = response.data
        })
        .catch((err) => {
          console.log(err)
        })
    }
  },
  created () {
    this.id = this.$route.params.Id
    console.log(this.id)
  }
}
</script>
