// components/category/index.js
Component({
  options: {
    addGlobalClass: true,
  },
  /**
   * 组件的属性列表
   */
  properties: {
    categoryNavArr: {
      type: Array,
      default: []
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    scrolly: true,
    scrollY: true,
    current: 0,
    prodcutArr: [
      { id: 1, imgUrl: '/images/home/reward.png', title: '积分签到积分签到积分签到', subTitle: '积分签到积分签到积分签到', price: '66.00', originalPrice: '55.00' },
      { id: 2, imgUrl: '/images/home/reward.png', title: '积分签到积分签到积分签到', subTitle: '积分签到积分签到积分签到', price: '66.00', originalPrice: '55.00' },
      { id: 3, imgUrl: '/images/home/reward.png', title: '积分签到积分签到积分签到', subTitle: '积分签到积分签到积分签到', price: '66.00', originalPrice: '55.00' },
      { id: 4, imgUrl: '/images/home/reward.png', title: '积分签到积分签到积分签到', subTitle: '积分签到积分签到积分签到', price: '66.00', originalPrice: '55.00' },
      { id: 4, imgUrl: '/images/home/reward.png', title: '积分签到积分签到积分签到', subTitle: '积分签到积分签到积分签到', price: '66.00', originalPrice: '55.00' },
      { id: 4, imgUrl: '/images/home/reward.png', title: '积分签到积分签到积分签到', subTitle: '积分签到积分签到积分签到', price: '66.00', originalPrice: '55.00' },
      { id: 4, imgUrl: '/images/home/reward.png', title: '积分签到积分签到积分签到', subTitle: '积分签到积分签到积分签到', price: '66.00', originalPrice: '55.00' },
      { id: 4, imgUrl: '/images/home/reward.png', title: '积分签到积分签到积分签到', subTitle: '积分签到积分签到积分签到', price: '66.00', originalPrice: '55.00' },
      { id: 4, imgUrl: '/images/home/reward.png', title: '积分签到积分签到积分签到', subTitle: '积分签到积分签到积分签到', price: '66.00', originalPrice: '55.00' },
      { id: 4, imgUrl: '/images/home/reward.png', title: '积分签到积分签到积分签到', subTitle: '积分签到积分签到积分签到', price: '66.00', originalPrice: '55.00' },
      { id: 4, imgUrl: '/images/home/reward.png', title: '积分签到积分签到积分签到', subTitle: '积分签到积分签到积分签到', price: '66.00', originalPrice: '55.00' },
      { id: 4, imgUrl: '/images/home/reward.png', title: '积分签到积分签到积分签到', subTitle: '积分签到积分签到积分签到', price: '66.00', originalPrice: '55.00' },
      { id: 4, imgUrl: '/images/home/reward.png', title: '积分签到积分签到积分签到', subTitle: '积分签到积分签到积分签到', price: '66.00', originalPrice: '55.00' }
    ]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    selectedCategory(e) {
      this.setData({
        current: e.currentTarget.dataset.index
      })
    },
    goDetail(e) {
      const id = e.currentTarget.dataset.id;
      wx.navigateTo({
        url: '../../pages/detail/detail?id=' + id
      })
    }
  }
})
