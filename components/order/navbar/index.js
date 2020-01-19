var sliderWidth = 16; // 需要设置slider的宽度，用于计算中间位置
let app = getApp();

Component({
  properties: {
    // 这里定义了tabs属性，属性值可以在组件使用时指定，类似于react的props和proptype
    tabs: {
      type: [],
      value: ["全部", "待付款", "待配送", "配送中", "待提货", "已提货"],
    }
  },
  data: {
    // 初始化一些默认值ß
    activeIndex: 0,
    sliderOffset: 0,
    sliderLeft: 0,
    navHeight: 0
  },
  created: function () {
    //空间被创建时触发

    this.setData({
      navHeight: app.globalData.navHeight
    })

    var that = this;
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          sliderLeft: (res.windowWidth / that.data.tabs.length - sliderWidth) / 2,
          sliderOffset: res.windowWidth / that.data.tabs.length * that.data.activeIndex
        });
      }
    });
  },
  methods: {
    // 按钮行为触发状态机变化
    tabClick: function (e) {
      this.setData({
        sliderOffset: e.currentTarget.offsetLeft,
        activeIndex: e.currentTarget.id
      });
    }
  }
});
