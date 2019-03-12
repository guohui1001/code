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
      // console.log(app.globalData.token, 'app.globalData.token')
      wx.request({
        url: `${devip.devip}/news/listNews`,
        method: 'post',
        header: {"Content-Type":"application/x-www-form-urlencoded", token:app.globalData.token },
        // data:{id},
        success:function(res){
          // console.log(res,'5')
          if(res.data.code === 0){
            const data = res.data.data.page.list;
            // debugger;
            for (var i = 0; i < data.length; i++) {
                data[i].coverImgPath = `${devip.devip}`+"/news/viewImg?id="+data[i].id+"&t="+Math.random();
                // console.log(data[i].coverImgPath,'7')
                // data[i].title=data[i].title.substring(0,40)+"..."
                // data[i].context=data[i].context.substring(0,20)+"..."
                
            }
           
            this.setData({
              listNews: data
            })
          }

          // console.log(res, 'res')

        }.bind(this)
      })
    },
    toNewsDetail:function(e){
      
      const id = e.currentTarget.id
      wx.navigateTo({
        url: `../particulars/particulars?id=${id}`
      })
    }
  }
})
