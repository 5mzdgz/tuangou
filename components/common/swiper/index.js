// components/swiper/index.js
Component({
  options: {
    addGlobalClass: true,
  },
  /**
   * 组件的属性列表
   */
  properties: {
    slider: {
      type: Array,
      default: []
    },
    indicatorDots: {
      type: Boolean,
      default: false
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    bannerAutoplay: true,
    circular: true,
    interval: 5000,
    duration: 500,
    current: 0,
  },

  /**
   * 组件的方法列表
   */
  methods: {
    swiperBannerChange(e) {
      this.setData({
        current: e.detail.current,
      })
    }
  }
})
