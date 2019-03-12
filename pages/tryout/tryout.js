// pages/tryout/tryout.js
const App = getApp();
const  devip = require('../../utils/ipconfig')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    company:"",
    username:"",
    phone:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   

  },
  companyInput:function(e){
    // console.log(e,"gongsi")
    this.setData({
      company:e.detail.value
    })
  },
  userNameInput:function(e){
    // console.log(e,"mingzi")
    this.setData({
      username:e.detail.value
    })
  },
  phoneInput:function(e){
    // console.log(e,"dianhua")
    this.setData({
      phone:e.detail.value
    })
  },
  requestData:function(id){
    const app = getApp();
    wx.request({
      url:`${devip.devip}/applyUse/saveApplyUse `,
      method: 'POST',
      header: {"Content-Type":"application/x-www-form-urlencoded", token:app.globalData.token },
      data: {
        company: this.data.company,
        name:this.data.username,
        phoneNum:this.data.phone
      },
      success:function(res){
var myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1})|(17[0-9]{1}))+\d{8})$/
        // console.log(data,'444')
        if(this.data.company == 0){
          wx.showToast({
            title: '公司名称！',
            icon: 'succes',
            duration: 500,
            mask: true
          })
        }else if(this.data.username == 0){
          wx.showToast({
            title: '姓名！',
            icon: 'succes',
            duration: 500,
            mask: true
          })
        }else if(!myreg.test(this.data.phone)){
          wx.showToast({
            title: '手机号！',
            icon: 'succes',
            duration: 500,
            mask: true
          })
        }else if(this.data.company != 0&&this.data.username != 0&&this.data.phone!=0){
          wx.showToast({
            title: '提交成功',
          })
        }
      }.bind(this),
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