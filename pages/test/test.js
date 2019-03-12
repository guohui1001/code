// pages/test/test.js
const app = getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    animationData: {},
    imgSrc: '/image/master01@2x.png',
    index: 0,
    realIndex: 0,
    A: 0,
    B: 0,
    a: 0,
    b: 0,
    optionA: "A",
    optionB: "B",
    list: [{
      title: "带上1000万回到20年前，只能做一件事，你选择？？",
      optionA: '找到马云投资他',
      optionB: '在北京买块地',
    }, {
      title: "为了让中国足球踢进世界杯，你愿意做。。。？",
      optionA: '我不愿意',
      optionB: '摇旗呐喊'
    }, {
      title: "曹云金和郭德纲同时约你，你选?",
      optionA: '曹云金',
      optionB: '郭德纲'
    }, {
      title: "旁边桌的同事吃零食，你特别想吃，怎么办？",
      optionA: '问他要',
      optionB: '忍住'
    }, {
      title: "在手机上.9键和26键你更喜欢用？",
      optionA: '9键',
      optionB: '26键'
    }, {
      title: "猪八戒和孙悟空，你更想和谁做同事?",
      optionA: '猪八戒',
      optionB: '孙悟空'
    }, {
      title: "你觉得“三角形”最能让你联想哪个事物？",
      optionA: '尺子',
      optionB: '衣架'
    }, {
      title: "离职后的空档期，你最想做什么？",
      optionA: '先休息',
      optionB: '找工作'
    }, {
      title: "公司团建唱K，刚入职的实习生和你抢麦，你会？",
      optionA: '大气让位',
      optionB: '脸上笑嘻嘻，心里。。。'
    }, {
      title: "下班打车发现老板在跑滴滴，你会？",
      optionA: '取消订单',
      optionB: '强行上车'
    }, {
      title: "掉进粪池，最快脱险的出口在粪池底部，你会？",
      optionA: '潜泳去底部',
      optionB: '等待救援'
    }, {
      title: "你的老婆/老公婚后变成智障你会？",
      optionA: '带她/他看病',
      optionB: '祝她/他好运'
    }, {
      title: "饭里有一只苍蝇，你会怎么办？",
      optionA: '全部倒掉',
      optionB: '挑出苍蝇'
    }, {
      title: "在漫长的旅程中，你会期望看到什麼样的场景？",
      optionA: '森林',
      optionB: '一望无尽的绿色平原'
    }, {
      title: "你觉得人生是怎样的?？",
      optionA: '活到死',
      optionB: '不如死'
    }, {
      title: "你喜欢喝茶还是喝咖啡",
      optionA: '茶',
      optionB: '咖啡'
    }, {
      title: "你和志同道合的人在一起会想喝点什么吗",
      optionA: '会',
      optionB: '不会'
    }, {
      title: "你平时喜欢吃什么糖",
      optionA: '软糖',
      optionB: '硬糖'
    }, {
      title: "如果送情人你会送",
      optionA: '巧克力',
      optionB: '水果糖果'
    }, {
      title: "你妈给你介绍的相亲对象是你的初恋你会",
      optionA: '喜出望外',
      optionB: '尴尬逃避'
    }, {
      title: "快要饿死了，只有一坨屎，你会吃吗",
      optionA: '宁愿饿死',
      optionB: '吃屎活命'
    }, {
      title: "偶然发现前任是你现任的下属，你会告诉现任吗",
      optionA: '会',
      optionB: '不会'
    }, {
      title: "你妈给你介绍的相亲对象是你的前任你会",
      optionA: '喜出望外',
      optionB: '尴尬逃避'
    }],
    listAB: ['A', 'B'],
    answer: '', //存放选择答案
    current: Object, //当前题目对象
    mathList: [], //存放随机十位题目
    status: true,//手动结束提前点击
  },
  setOption: function() {

  },


  selectShow(options) {
    
    //手动结束提前点击
    if (!this.data.status){
        return false
    }else{
      this.setData({
        status:false
      });
    }
    if (this.data.index + 1 >= 10) {
      wx.redirectTo({
        url: '/pages/result/result'
      })
    }
    this.show(this, 'slide_up1', 0)
    setTimeout(function () {
      //手动结束提前点击
      this.data.status=true;
      this.show(this, 'slide_up1', 1)
      this.setData({
        answer: this.data.answer + (options.currentTarget.dataset.current),
        index: this.data.index + 1,
        current: this.data.mathList[this.data.index + 1],
      });


    }.bind(this), 800)

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    const App = getApp();
    this.setData({
      navH: App.globalData.navHeight
    })
    this.setData({
      imgSrc: `/image/master0${options.id || 1}@2x.png`
    })
  },
  //渐入，渐出实现 
  show(that, param, opacity) {
    var animation = wx.createAnimation({
      //持续时间800ms
      duration: 1000,
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
  onReady: function(options) {

    const animation = wx.createAnimation({
      duration: 1000,
      timingFunction: 'linear',
    })
    this.animation = animation
    this.setData({
      animationData: animation,
      answer: this.data.answer + (options),
      index: this.data.index,
      //初始随机十位数组
      mathList: this.data.list.sort(() => {
        return 0.5 - Math.random()
      }).slice(5, 15),
    })
    this.setData({
      current: this.data.mathList[this.data.index],
    })
    console.log(this.data.mathList, this.data.current)

    var n = 0;
    var m = true;
    //连续动画需要添加定时器,所传参数每次+1就行    
    setInterval(function() {
      n = n + 1;
      if (m) {
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
  onShow: function() {
    this.show(this, 'slide_up1', 1)
  },



  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {},

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },

  navBack() {
    wx.switchTab({
      url: "/pages/home/home"
    })
  }
})