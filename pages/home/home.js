// pages/home/home.js
const devip = require('../../utils/ipconfig')
Page({

  /**
   * 页面的初始数据
   */
  data: {
 
  },
  
  // 触摸开始时间
//   touchStartTime: 0,
//   // 触摸结束时间
//   touchEndTime: 0,  
//   // 最后一次单击事件点击发生时间
//   lastTapTime: 0, 
// /// 按钮触摸开始触发的事件
// touchStart: function(e) {
//   this.touchStartTime = e.timeStamp
// },

// /// 按钮触摸结束触发的事件
// touchEnd: function(e) {
//   this.touchEndTime = e.timeStamp
// },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

/// 双击
onClick: function(e) {
  // var that = this
  var id = e.currentTarget.id
  wx.navigateTo({
    url: `../test/test?id=${id}`
  })
  // 控制点击事件在350ms内触发，加这层判断是为了防止长按时会触发点击事件
  // if (that.touchEndTime - that.touchStartTime < 350) {
  //   // 当前点击的时间
  //   var currentTime = e.timeStamp
  //   var lastTapTime = that.lastTapTime
  //   // 更新最后一次点击时间
  //   that.lastTapTime = currentTime
  //   // 如果两次点击时间在300毫秒内，则认为是双击事件
  //   if (currentTime - lastTapTime < 300) {
  //     wx.navigateTo({
  //       url: `../test/test?id=${id}`
  //     })
  //   }
  // }
},

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    const backgroundAudioManager = wx.getBackgroundAudioManager()

    backgroundAudioManager.title = 'I Hate Myself For Loving You'
    // backgroundAudioManager.epname = '此时此刻'
    // backgroundAudioManager.singer = '许巍'
    backgroundAudioManager.coverImgUrl = 'http://y.gtimg.cn/music/photo_new/T002R300x300M000003rsKF44GyaSk.jpg?max_age=2592000'
    // 设置了 src 之后会自动播放
    backgroundAudioManager.src = `${devip.devip}/staticResource/1_20190103112140476.mp3`;
    backgroundAudioManager.onError(function(e){
      console.log(e)
    })

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