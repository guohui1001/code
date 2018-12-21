// component/article/article.js
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
    listNews: []
  },
  ready:function(){
    this.requestData()
  },
  /**
   * 组件的方法列表
   */
  methods: {
    requestData:function(){
      const app = getApp();
      console.log(app.globalData.token, 'app.globalData.token')
      wx.request({
        url: `${devip.devip}/faceJob_small_wechat/news/listNews`,
        method: 'post',
        header: {"Content-Type":"application/x-www-form-urlencoded", token:app.globalData.token },
        success:function(res){
          if(res.data.code === 0){
            const data = res.data.data.newsList;
            this.setData({
              listNews: data
            })
          }
        }.bind(this)
      })
    },
    toNewsDetail:function(e){
      console.log(e, 'e')
      const id = e.currentTarget.id
      wx.navigateTo({
        url: `../particulars/particulars?id=${id}`
      })
    }
  }
})
