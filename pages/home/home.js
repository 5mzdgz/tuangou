// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showIcon: false,
    loadingHidden: true,
    indicatorDots: true,
    bannerAutoplay: true,
    circular: true,
    scrollx: true,
    interval: 5000,
    duration: 500,
    current: 0,
    slider: [
      { imgUrl: '/images/home/home_banner.png' },
      { imgUrl: '/images/home/home_banner.png' }
    ],
    gridArr: [
      { imgUrl: '/images/home/reward.png', gridName: '积分签到' },
      { imgUrl: '/images/home/reward.png', gridName: '积分签到' },
      { imgUrl: '/images/home/reward.png', gridName: '积分签到' },
      { imgUrl: '/images/home/reward.png', gridName: '积分签到' },
      { imgUrl: '/images/home/reward.png', gridName: '积分签到' }
    ],
    prodcutArr: [
      { id: 1, imgUrl: '/images/home/reward.png', title: '积分签到积分签到积分签到', price: '66.00' },
      { id: 2, imgUrl: '/images/home/reward.png', title: '积分签到积分签到积分签到', price: '66.00' },
      { id: 3, imgUrl: '/images/home/reward.png', title: '积分签到积分签到积分签到', price: '66.00' },
      { id: 4, imgUrl: '/images/home/reward.png', title: '积分签到积分签到积分签到', price: '66.00' },
      { id: 4, imgUrl: '/images/home/reward.png', title: '积分签到积分签到积分签到', price: '66.00' },
      { id: 4, imgUrl: '/images/home/reward.png', title: '积分签到积分签到积分签到', price: '66.00' },
      { id: 4, imgUrl: '/images/home/reward.png', title: '积分签到积分签到积分签到', price: '66.00' },
      { id: 4, imgUrl: '/images/home/reward.png', title: '积分签到积分签到积分签到', price: '66.00' },
      { id: 4, imgUrl: '/images/home/reward.png', title: '积分签到积分签到积分签到', price: '66.00' },
      { id: 4, imgUrl: '/images/home/reward.png', title: '积分签到积分签到积分签到', price: '66.00' },
      { id: 4, imgUrl: '/images/home/reward.png', title: '积分签到积分签到积分签到', price: '66.00' },
      { id: 4, imgUrl: '/images/home/reward.png', title: '积分签到积分签到积分签到', price: '66.00' },
      { id: 4, imgUrl: '/images/home/reward.png', title: '积分签到积分签到积分签到', price: '66.00' }
    ],
    days: '',
    hours: '',
    min: '',
    sec: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.countTime()
  },
  countTime() {
    var date = new Date();
    var now = date.getTime();
    var endDate = new Date("2020-01-30 00:00:00");//设置截止时间
    var end = endDate.getTime();
    var leftTime = end - now; //时间差                              
    var d, h, m, s, ms;
    if (leftTime >= 0) {
      d = Math.floor(leftTime / 1000 / 60 / 60 / 24);
      h = Math.floor(leftTime / 1000 / 60 / 60 % 24);
      m = Math.floor(leftTime / 1000 / 60 % 60);
      s = Math.floor(leftTime / 1000 % 60);
      ms = Math.floor(leftTime % 1000);
      if (ms < 100) {
        ms = "0" + ms;
      }
      if (s < 10) {
        s = "0" + s;
      }
      if (m < 10) {
        m = "0" + m;
      }
      if (h < 10) {
        h = "0" + h;
      }
      this.setData({
        days: d,
        hours: h,
        min: m,
        sec: s
      })
      setTimeout(this.countTime, 1000);
    } else {
      this.setData({
        days: '',
        hours: '',
        min: '',
        sec: ''
      })
    }
  },
  swiperBannerChange: function (e) {
    this.setData({
      current: e.detail.current,
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