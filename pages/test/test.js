// pages/test/test.js
const app = getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    animationData: {},
    imgSrc:'/image/master01@2x.png',
    // topicList:[],
    // answerArrays:["A","B"],

    index: 0,
    realIndex: 0,
    A: 0,
    B: 0,
    a:0,
    b:0,
    optionA: "A",
    optionB: "B",
    // questionDetail: app.globalData.question[0].question,
    // answerA: app.globalData.question[0].option.A,
    // answerB: app.globalData.question[0].option.B,
    list: ["在生活/工作中你做事是怎样一个人？", "在生活/工作中你更倾向于哪一个？", "在生活/工作中你比较注重的是哪一个？"],
    listAB : ['A','B']
  },
  randSort: function () {
    return Math.random() > 0.5 ? 1 : -1;
  },

  setList: function () {
    var newList = this.data.list.sort(this.randSort);
    console.log(newList,'123')
    this.setData({
      list: newList,
    });
  },

  setABC : function(){
    var ab = this.data.listAB.sort(this.randSort);
    console.log(ab,'123')
    this.setData({
      listAB: ab,
    });
  },

  setOption: function(){

  },



  selectShow: function () {
    if (this.data.listAB[0] == 'A') {
      this.setData({
        A: this.data.A + 1
      })
    }
    else if (this.data.listAB[0] == 'B') {
      this.setData({
        B: this.data.B + 1
      })
    }
    this.setData({
      index: this.data.index + 1,
      realIndex: this.data.list[this.data.index],

      
    })
   
    this.setData({
      questionDetail:list[0].list,
     
      answerA: app.globalData.question[this.data.realIndex].option[this.data.listAB[0]],
      answerB: app.globalData.question[this.data.realIndex].option[this.data.listAB[1]],

    })
    if (this.data.index == 10) {
      wx.redirectTo({
        url: '/pages/result/result'
      })
    }
  },

  selectShow: function () {
    if(this.data.listAB[1] == 'A'){
      this.setData({
        A:this.data.A + 1
      })
    }
    else if (this.data.listAB[1] == 'B') {
      this.setData({
        B: this.data.B + 1
      })
    }

    this.setData({
      index: this.data.index + 1,
      realIndex: this.data.list[this.data.index]
    })
    this.setData({
      questionDetail: app.globalData.question[this.data.realIndex].question,
      answerA: app.globalData.question[this.data.realIndex].option[this.data.listAB[0]],
      answerB: app.globalData.question[this.data.realIndex].option[this.data.listAB[1]],

    })
    if (this.data.index == 10) {
      wx.redirectTo({
        url: '/pages/result/result'
      })
    }
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const App = getApp();
    this.setData({
      navH: App.globalData.navHeight
    })
    this.setData({
      imgSrc: `/image/master0${options.id || 1}@2x.png`
    })
  },
   //渐入，渐出实现 
   show (that,param,opacity){
    var animation = wx.createAnimation({
      //持续时间800ms
      duration: 3000,
      timingFunction: 'ease',
    });
    //var animation = this.animation
    animation.opacity(opacity).step()
    //将param转换为key
    var json = '{"' + param + '":""}'
    json = JSON.parse(json);
    json[param] = animation.export()
    //设置动画
    that.setData(json)
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
    this.show(this, 'slide_up1',  1)
  },
  selectShow(){
    this.show(this, 'slide_up1',  0)
    setTimeout(function(){
      this.show(this, 'slide_up1',  1)
    }.bind(this),1000)
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
      url:"/pages/home/home"
    })
}
})