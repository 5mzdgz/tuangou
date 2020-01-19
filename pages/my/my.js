// pages/my/my.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showIcon: false,
    loadingHidden: true,
    isShow: false,
    groupArr: [
      { iconUrl: '', leftName: '我的拼团', rightSub: '' },
      { iconUrl: '', leftName: '拼团收益', rightSub: '' }
    ],
    itemArr: [
      { iconUrl: '/images/icon_money.png', leftName: '余额', rightSub: '钱包', pageUrl: '/pages/detail/detail' },
      { iconUrl: '/images/icon_jifen.png', leftName: '积分', rightSub: '立即签到', pageUrl: '' },
      { iconUrl: '/images/icon_coupon.png', leftName: '优惠券', rightSub: '', pageUrl: '' },
      { iconUrl: '/images/icon_huangguan.png', leftName: '申请成为团长', rightSub: '', pageUrl: '' },
      { iconUrl: '/images/icon_gongyingshang.png', leftName: '申请成为供应商', rightSub: '', pageUrl: '' },
      { iconUrl: '/images/icon_help.png', leftName: '常见帮助', rightSub: '', pageUrl: '' },
      { iconUrl: '/images/icon_serve.png', leftName: '联系客服', rightSub: '', pageUrl: '' }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },
  myGroupTap: function(e) {

  },
  hideTap: function() {
    this.setData({
      isShow: false
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})