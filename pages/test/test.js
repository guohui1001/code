// pages/test/test.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    animationData: {},
    imgSrc:'/image/master01@2x.png'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      imgSrc: `/image/master0${options.id}@2x.png`
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
    const animation = wx.createAnimation({
      duration: 1000,
      timingFunction: 'linear',
    })
    this.animation = animation
    this.setData({
      animationData: animation
    })
    var n = 0;    var m = true;    
    //连续动画需要添加定时器,所传参数每次+1就行    
      setInterval(function () {      
      n = n + 1;      
      if(m){        
        this.animation.translateY(10).step()        
        m = !m;      
      } else {       
         this.animation.translateY(-20).step()       
          m = !m;      
        }            
      this.setData({        
        animationData: this.animation.export()      
      })    
    }.bind(this), 800)
  
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