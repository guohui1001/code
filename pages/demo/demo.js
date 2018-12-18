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

        var rpx;

        //获取屏幕宽度，获取自适应单位

        wx.getSystemInfo({

            success: function (res) {
                rpx = res.windowWidth / 375;
            },

        })

        const ctx = wx.createCanvasContext('shareImg')
        /* 绘制图像到画布  图片的位置你自己计算好就行 参数的含义看文档 */
        /* ps: 网络图片的话 就不用加../../路径了 反正我这里路径得加 */
        ctx.drawImage('/image/bg@2x2.png', 0, 0, 375 * rpx, 295 * rpx)
        ctx.drawImage('/image/stara03_@2x.png', 55* rpx, 56* rpx, 54* rpx, 32* rpx)
        ctx.drawImage('/image/staar02_@2x.png', 229* rpx, 68* rpx, 130* rpx, 77* rpx)
        ctx.shadowOffsetX = 2; // 设置水平位移
        ctx.shadowOffsetY = 1; // 设置垂直位移
        ctx.shadowBlur = 1; // 设置模糊度
        ctx.shadowColor = "rgba(0,0,0,0.1)"; // 设置阴影颜色
        ctx.fillStyle = "#ffffff";
        ctx.fillRect(20* rpx, 193* rpx, 335* rpx, 454* rpx);
        ctx.stroke();
        ctx.drawImage('/image/ufo2@2x.png', 82* rpx, 101* rpx, 212* rpx, 124* rpx)
        ctx.drawImage('/image/stara01_@2x.png', 9* rpx, 177* rpx, 100* rpx, 60* rpx)
        ctx.drawImage('/image/stara03_@2x.png', 274* rpx, 221* rpx, 68* rpx, 39* rpx)
        ctx.fillStyle = "#ffffff";
        ctx.fillRect(0* rpx, 295* rpx, 375* rpx, 352* rpx);
        ctx.stroke();
        ctx.beginPath()
        /* 绘制文字 位置自己计算 参数自己看文档 */
        ctx.setFillStyle('black') //  颜色
        ctx.setFontSize(18*rpx) //  字号
        ctx.fillText('最适合您的职业', 125* rpx, 250* rpx) //  内容  不会自己换行 需手动换行

        ctx.setFillStyle('rgba(255,213,15,1)') //  颜色
        ctx.setFontSize(26 *rpx) //  字号
        ctx.fillText('最美主播', 136* rpx, 282* rpx) //  内容  不会自己换行 需手动换行

        ctx.setFillStyle('#F5A623') //  颜色
        ctx.setFontSize(16*rpx) //  字号
        ctx.fillText('职业匹配度', 87* rpx, 319* rpx) //  内容  不会自己换行 需手动换行

        ctx.setFillStyle('#000000') //  颜色
        ctx.setFontSize(14*rpx) //  字号
        this.drawText(ctx, '从 2015 年 4 月起，Ant Design 在蚂蚁金服中后台产品线迅速推广，对接多条业务线，覆盖系统 800 个以上。定位于中台业务的 Ant Design 兼顾专业和非专业的设计人员。', 360, 30*rpx, 305*rpx,rpx)
        ctx.fillRect(148 * rpx, 475 * rpx, 80* rpx, 80* rpx);

        ctx.setFillStyle('#03011E') //  颜色
        ctx.setFontSize(14*rpx) //  字号
        ctx.fillText('扫描二维码参加测试', 125* rpx, 575* rpx) //  内容  不会自己换行 需手动换行
        /* 绘制 */
        ctx.fill()

       
        
        ctx.draw()
        ctx.closePath()
    },
    drawText: function (ctx, str, initHeight, titleHeight, canvasWidth,rpx) {
        var lineWidth = 0;
        var lastSubStrIndex = 0; //每次开始截取的字符串的索引    
        for (let i = 0; i < str.length; i++) {
            lineWidth += ctx.measureText(str[i]).width;
            if (lineWidth* rpx > canvasWidth* rpx) {
                ctx.fillText(str.substring(lastSubStrIndex, i), 30* rpx, initHeight* rpx); //绘制截取部分        
                initHeight += 30 *rpx; //20为字体的高度        
                lineWidth = 0;
                lastSubStrIndex = i;
                titleHeight += 30 *rpx;
            }
            if (i == str.length - 1) { //绘制剩余部分        
                ctx.fillText(str.substring(lastSubStrIndex, i + 1), 30* rpx, initHeight* rpx);
            }
        } // 标题border-bottom 线距顶部距离    
        titleHeight = titleHeight * rpx + 10* rpx;
        return titleHeight
    },



    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    },
    share: function () {
        console.log(123)
        var that = this
        wx.canvasToTempFilePath({
            x: 0,
            y: 0,
            width: 750,
            height: 667,
            destWidth: 750,
            destHeight: 667,
            canvasId: 'shareImg',
            success: function (res) {
                console.log(res.tempFilePath);
                /* 这里 就可以显示之前写的 预览区域了 把生成的图片url给image的src */
                that.setData({
                    prurl: res.tempFilePath,
                    hidden: false
                })
                that.save()
            },
            fail: function (res) {
                console.log(res)
            }
        })
    },
    save: function () {
        var that = this
        wx.saveImageToPhotosAlbum({
            filePath: that.data.prurl,
            success(res) {
                wx.showModal({
                    content: '图片已保存到相册，赶紧晒一下吧~',
                    showCancel: false,
                    confirmText: '好的',
                    confirmColor: '#333',
                    success: function (res) {
                        if (res.confirm) {
                            console.log('用户点击确定');
                            /* 该隐藏的隐藏 */
                            that.setData({
                                hidden: true
                            })
                        }
                    }
                })
            }
        })
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