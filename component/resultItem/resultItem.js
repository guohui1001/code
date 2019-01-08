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
    newsResult:{
    id: "",
    jobName: "",
    jobMachStar: "",
    jobDesc: ""
  }
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
        url: `${devip.devip}//evResults/getEvResult `,
        method: 'POST',
        header: { "Content-Type": "application/x-www-form-urlencoded", token: app.globalData.token },
        success: function (res) {
          var num = Math.floor(Math.random() * 2 + 0);
          if (res.data.data.evs[num]) {
            const data = res.data.data.evs[num]
            console.log(data,'1')
            this.setData({
              newsResult: data
            })
          }
          console.log(num,'2')
          // var rnd="";
          // for(var i=0;i<n;i++)
          // rnd+=Math.floor(Math.random()*10);
          // return rnd;

          // if(res.data.data.evs.length==1){
          // const data = res.data.data.data;
          // console.log(res.data.data.evs)
          // this.setData({
          // newsResult:data
          // })
          // }
          // console.log(res.data.data.evs,'121')
        }.bind(this)


      })
    },
  }
})
