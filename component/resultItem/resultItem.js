// component/resultItem/resultItem.js
const devip = require('../../utils/ipconfig')
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    newsResult: {
      id: "",
      jobName: "",
      jobMachStar: "",
      jobDesc: "",
     
    },
    scene: "",
    ewmUrl:""
  },
  ready: function () {
    this.requestData()

  },
  /**
   * 组件的方法列表
   */
  methods: {
    requestData: function (id) {
      const app = getApp();

      wx.request({
        url: `${devip.devip}/evResults/getEvResult`,
        method: 'POST',
        header: { "Content-Type": "application/x-www-form-urlencoded", "token": app.globalData.token },
        success: function (res) {
          // console.log(res.data.data.evs,'2')
          var num = Math.floor(Math.random() * (res.data.data.evs.length));
          if (res.data.data.evs[num]) {
            const data = res.data.data.evs[num]
            // console.log(data,'2')
            this.setData({
              newsResult: data
            })
          }

        }.bind(this)


      })

      var that=this;
      that.setData({
        ewmUrl:`${devip.devip}/staticResource/1547532403794.jpg`
      })

     
    },
    previewImage: function (e) {
      wx.previewImage({
        urls: this.data.ewmUrl.split(',')
      })
    },


    jump: function () {
      wx.switchTab({
        url: '/pages/home/home'
      })
      // console.log(1)
    }


  },



})
