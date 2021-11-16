<template>
<!-- {{ pages.pageRange }} -->
  <nav>
    <ul class="pagination pagination-sm justify-content-center">
      <li class="page-item"
      :class="{ 'disabled' : pages.current_page === 1}">
        <a class="page-link" href="#" aria-label="Previous"
        @click.prevent="updatePage(pages.current_page - 1)">
          <i class="bi bi-chevron-left" style="font-size: 0.1rem;"></i>
        </a>
      </li>
      <!-- <li class="page-item" v-for="page in  pages.total_pages" :key="page"
      :class="{ 'active': page === pages.current_page }">
        <a class="page-link" href="#" v-on:click.prevent="updatePage(page)">
          {{ page }}
        </a>
      </li> -->
      <template v-if="pages.page_range">
        <template v-if="pages.page_range[0] !== 1">
          <li class="page-item" :class="{ 'active': pages.current_page === 1 }">
            <a class="page-link" href="#" v-on:click.prevent="updatePage(1)">
              1
            </a>
          </li>
          <li class="page-item disabled">
            <a href="#" class="page-link">..</a>
          </li>
        </template>
      </template>
      <li class="page-item" v-for="page in pages.page_range" :key="page"
      :class="{ 'active': page === pages.current_page }">
        <a class="page-link" href="#" v-on:click.prevent="updatePage(page)">
          {{ page }}
        </a>
      </li>
      <template v-if="pages.page_range">
        <template v-if="pages.page_range[pages.page_range.length - 1] !== pages.total_pages">
          <li class="page-item disabled">
            <a href="#" class="page-link">..</a>
          </li>
          <li class="page-item" :class="{ 'active': pages.current_page === pages.total_pages }">
            <a class="page-link" href="#" v-on:click.prevent="updatePage(pages.total_pages)">
              {{ pages.total_pages }}
            </a>
          </li>
        </template>
      </template>
      <li class="page-item"
      :class="{ 'disabled' : pages.current_page === pages.total_pages}">
        <a class="page-link" href="#" aria-label="Next"
        @click.prevent="updatePage(pages.current_page + 1)">
          <i class="bi bi-chevron-right" style="font-size: 0.1rem;"></i>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
// :pages="{ 頁碼資訊 }"
// @emitPages="更新頁面事件"
export default {
  props: ['pages'],
  data () {
    return {
    }
  },
  methods: {
    updatePage (page) {
      this.$emit('emit-pages', page)
    }
    // getPageRange (currentPage = 1) {
    //   console.log('test', this.pages)
    //   if (this.pages.total_pages <= 5) {
    //     const pageRange = Array(this.pages.total_pages)
    //       .fill(1)
    //       .map((val, index) => {
    //         const value = val + index
    //         return value
    //       })
    //     this.pageRange = pageRange
    //   } else {
    //     const startPage = (() => {
    //       // if (currentPage - 2 <= 0) return 1 // 前幾頁
    //       // const overNumber = currentPage + 2 - this.pages.total_pages
    //       // if (overNumber > 0) return currentPage - 2 - overNumber // 最後幾頁
    //       // return currentPage - 2 // 正常頁
    //       if (currentPage - 1 <= 0) return 1 // 前幾頁
    //       const overNumber = currentPage + 1 - this.pages.total_pages
    //       if (overNumber > 0) return currentPage - 1 - overNumber // 最後幾頁
    //       return currentPage - 1 // 正常頁
    //     })()
    //     const pageRanges = Array(3) // 5
    //       .fill(startPage)
    //       .map((val, index) => {
    //         const value = val + index
    //         // return { isActive: value === currentPage, action: 'setPage', value }
    //         return value
    //       })
    //       // .filter(({ value }) => value >= 1 && value <= this.pages.total_pages)
    //     // if (pageRanges[0] !== 1) pageRanges.unshift(1)
    //     // if (pageRanges[pageRanges.length - 1] !== this.pages.total_pages) pageRanges.push(this.pages.total_pages)
    //     // console.log(startPage, pageRanges)
    //     this.pageRange = pageRanges
    //   }
    // }
  },
  created () {
    // this.getPageRange(this.pages.current_page)
  }
}
</script>
