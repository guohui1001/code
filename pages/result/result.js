// pages/result/result.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   
  },





  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    var that = this;
    const ctx = wx.createCanvasContext('shareCanvas');

    ctx.drawImage('/image/bg@2x2.png', 0, 0, 375, 300);    //绘制背景图

    ctx.setTextAlign('center')    // 文字居中

    ctx.setFillStyle('#000000')  // 文字颜色：黑色

    ctx.setFontSize(20)         // 文字字号：22px

    ctx.fillText("文本内容", 20, 70) //开始绘制文本的 x/y 坐标位置（相对于画布） 

    ctx.stroke();//stroke() 方法会实际地绘制出通过 moveTo() 和 lineTo() 方法定义的路径。默认颜色是黑色

    ctx.draw(false, that.drawPicture());//draw()的回调函数 
  },
  drawPicture: function () { //生成图片       
    var that = this;      
    setTimeout(function(){        
      wx.canvasToTempFilePath({ //把当前画布指定区域的内容导出生成指定大小的图片，并返回文件路径  
           x: 0,          
           y: 0,         
            width: 375,          
            height: 300,          
            destWidth: 750,  //输出的图片的宽度（写成width的两倍，生成的图片则更清晰）          
            destHeight: 600,          
            canvasId: 'shareCanvas',          
            success: function (res) {            
              console.log(res);            
            },        
          })      
    },300)    
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