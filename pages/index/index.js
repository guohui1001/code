const app = getApp();
const devip = require('../../utils/ipconfig')
Page({
    data: {
        // nickName: "微信账号登录",
        // avatarUrl:"./user-unlogin.png",
        //判断小程序的API，回调，参数，组件等是否在当前版本可用。
        canIUse: wx.canIUse('button.open-type.getUserInfo')
    },
    onLoad: function (options) {
        // var that = this;
        // var db="no";
       

        // 查看是否授权
        wx.getSetting({
            success: function (res) {
                if (res.authSetting['scope.userInfo']) {
                    wx.getUserInfo({
                        success: function (res) {
                            //从数据库获取用户信息
                            // that.queryUsreInfo();
                            //用户已经授权过
                            wx.switchTab({
                                url: '/pages/home/home'
                            })
                          
                        }
                    });
                }
            }
        })
    },
    
    bindGetUserInfo: function (e) {
        
        if (e.detail.userInfo) {
            // 用户按了允许授权按钮
            var that = this;
            // 插入登录的用户的相关信息到数据库
            // debugger
            wx.login({
                success: res => {
                  if(res.code){
                    // console.log(res,'3')
                    wx.getUserInfo({
                      success:function(res_user){
                      
                        wx.request({
                          url:`${devip.devip}/user/saveUser`,
                          method:'POST',
                          data:{
                            "js_code":res.code,
                            "avatarUrl":res_user.userInfo.avatarUrl,
                            "nickName":res_user.userInfo.nickName,
                            "gender":res_user.userInfo.gender,
                            "province":res_user.userInfo.province,
                            "city":res_user.userInfo.city
                          },
                          header: {"Content-Type":"application/x-www-form-urlencoded", token:app.globalData.token },
                          success:function(res){
                            //   if(res.statusCode==200){
                                wx.setStorageSync("openid", res.data)
                            //   }else{
                            //       console.log(res.errMsg)
                            //   }
                            // console.log(res,'1')
                           
          
                          },
                          fail:function(o){
                            // console.log(o)
                          }
                        })
                      }
                    })
                  }
                  // 发送 res.code 到后台换取 openId, sessionKey, unionId
                }
              })
            wx.request({
                url: `${devip.devip}/user/saveUser`,
                method: 'POST',
                data: {
                    "js_code":1,
                    "openid": getApp().globalData.openid,
                    "nickName": e.detail.userInfo.nickName,
                    "avatarUrl": e.detail.userInfo.avatarUrl,
                    "province":e.detail.userInfo.province,
                    "city": e.detail.userInfo.city,
                    "gender":e.detail.userInfo.gender
                },
                header: {"Content-Type":"application/x-www-form-urlencoded", token:app.globalData.token },
                success: function (res) {
                    // 从数据库获取用户信息
                    that.queryUsreInfo();
                    console.log("插入小程序登录用户信息成功！");
                }
            });
            // 授权成功后，跳转进入小程序首页
            wx.switchTab({
                url: '/pages/home/home'  
            })
        } else {
            // 用户按了拒绝按钮
            wx.showModal({
                title:'警告',
                content:'您点击了拒绝授权，将无法进入小程序，请授权之后再进入!!!',
                showCancel:false,
                confirmText:'返回授权',
                success:function(res){
                    if (res.confirm) {
                        console.log('用户点击了“返回授权”')
                    } 
                }
            })
        }
    },
    //获取用户信息接口
    // queryUsreInfo: function () {
    //     // console.log(app.globalData.urlPath,'3')
    //     wx.request({
    //         url: `${devip.devip}/user/userInfo`,
    //         data: {
    //             openid: app.globalData.openid
    //         },
    //         header: {
    //             'content-type': 'application/json'
    //         },
    //         success: function (res) {
    //             // console.log(res.data);
    //             getApp().globalData.userInfo = res.data;
    //         }
    //     })
    // },

})

