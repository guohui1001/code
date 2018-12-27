// pages/test/test.js
const app = getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    animationData: {},
    imgSrc:'/image/master01@2x.png',
    index: 0,
    realIndex: 0,
    A: 0,
    B: 0,
    a: 0,
    b: 0,
    optionA: "A",
    optionB: "B",
    list: [{
      title: "在生活/工作中你做事是怎样一个人？",
      optionA: '我做事时，希望把每一个细节都做对',
      optionB: '我做事时，希望快速搞定，达成结果',
    }, {
      title: "在生活/工作中你更倾向于哪一个？",
      optionA: '希望把每一个细节都做对',
      optionB: '希望快速搞定，达成结果'
      }, {
        title: "在生活/工作中你比较注重的是哪一个",
        optionA: '我注重原则，恪守规则',
        optionB: '我注重原理，探索规律'
      }, {
        title: "在生活/工作中你是否会按照计划行事？",
        optionA: '我喜欢严格遵守既定计划，保持既定轨道',
        optionB: '我喜欢尝试和变化，随时灵机一动，调整计划'
      }, {
        title: "你的性格属于哪一个？",
        optionA: '我外向热情，关注他人的感受',
        optionB: '我内向沉静，关注内心到的感受'
      },{
        title: "在与他人交流时你更愿意选择哪一个",
        optionA: '我喜欢和他人进行情感上的交流',
        optionB: '我喜欢和他人进行思维上的交流'
      },{
        title: "在生活/工作中你更关注哪一个？",
        optionA: '我倾向于关注自己，追求个性',
        optionB: '我倾向于关注他人，随遇而安'
      },{
        title: "在生活/工作中当你遇到问题时你会？",
        optionA: '我只信自己思考出的结论',
        optionB: '我经常求证他人的想法和观点'
      },{
        title: "你认为别人比较钦佩你的是哪一个？",
        optionA: '别人钦佩于我的知识与洞察力',
        optionB: '别人钦佩于我的力量与决断力'
      },{
        title: "你认为自己是怎样一个人？",
        optionA: '我是一个严肃、自律的人',
        optionB: '我是一个和平、随和的人'
      }],
    listAB: ['A', 'B'],
    answer: '', //存放选择答案
    current: Object, //当前题目对象
  },
  setOption: function() {

  },
  selectShow: function (options) {
    console.log(options,'1')
    if (this.data.index+1 >= this.data.list.length ) {
      wx.redirectTo({
        url: '/pages/result/result'
      })
    }
    this.show(this, 'slide_up1', 0)
    setTimeout(function() {
      this.show(this, 'slide_up1', 1)
    this.setData({
      answer: this.data.answer+(options.currentTarget.dataset.curent),
      index:this.data.index+1,
      current: this.data.list[this.data.index+1]
    });
 
    // console.log(this.data.index, this.data.list.length,'123')
  }.bind(this),1000)
  console.log(this.options,'111')
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
  onReady: function (options) {
    const animation = wx.createAnimation({
      duration: 1000,
      timingFunction: 'linear',
    })
    this.animation = animation
    this.setData({
      animationData: animation,
      answer: this.data.answer+(options),
      index:this.data.index,
      current: this.data.list[this.data.index]
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