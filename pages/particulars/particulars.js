// pages/particulars/particulars.js

const App = getApp();

const  devip = require('../../utils/ipconfig')


Page({

  /**
   * 页面的初始数据
   */
  data: {
    id: '',
    newsDetail: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      navH: App.globalData.navHeight
    })

    // console.log(options.id, 'options')
    // this.setData({
    //   id: options.id
    // })
    this.requestData(options.id)

  },
  requestData:function(id){
    const app = getApp();
    wx.request({
      url:`${devip.devip}/news/newsDetail`,
      method: 'POST',
      header: {"Content-Type":"application/x-www-form-urlencoded", token:app.globalData.token },
      data: {id: id},
      success:function(res){
        // console.log(res,'1243')
        if(res.data.code === 0){
          const newsDetail = res.data.data.news
            newsDetail.coverImgPath = `${devip.devip}`+"/news/viewImg?id="+newsDetail.id+"&t="+Math.random();
          this.setData({
            newsDetail:newsDetail
          })
        }
      }.bind(this)

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

  },

  navBack(){
    wx.switchTab({
      url:"/pages/product/product"
    })
}
})