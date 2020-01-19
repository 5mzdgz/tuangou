// components/my/order/index.js
Component({
  options: {
    addGlobalClass: true,
  },
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    statusArr: [
      { icon: 'icon-daizhifu', statusName: '待付款' },
      { icon: 'icon-daifahuo', statusName: '待配送' },
      { icon: 'icon-daishouhuo', statusName: '待提货' },
      { icon: 'icon-iconddsho', statusName: '已提货' },
      { icon: 'icon-shouhoufuwu', statusName: '售后服务' },
    ]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    goOrderClick() {
      wx.navigateTo({
        url: '/pages/order/order?index=0',
      })
    },
    orderClickTap(e) {

    }
  }
})
