// component/resultItem/resultItem.js
const  devip = require('../../utils/ipconfig')
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
    
    id:"",
    jobName:"",
    jobMachStar:"",
    jobDesc:""
    
  },
  ready:function(){
    this.requestData()
  },
  /**
   * 组件的方法列表
   */
  methods: {
    requestData:function(id){
      const app = getApp();
      wx.request({
        url:`${devip.devip}//faceJob_small_wechat//evResults/getEvResult `,
        method: 'POST',
        header: {"Content-Type":"application/x-www-form-urlencoded", token:app.globalData.token },
        success:function(res){
          if(res.data.data.evs.length==1){
            const data = res.data.data.evs;
            console.log(res.data.data)
            this.setData({
              newsResult:data
            })
          }
            // console.log(res.data.data.evs,'121')
        }.bind(this)
  
      })
    },
  }
})
