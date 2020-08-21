//index.js
//获取应用实例
// import { IMyApp } from '../../app';
import { request } from '../../utils/request';
const app = getApp();
Page({
    data: {
        cardCur: 0,
        swiperList: [{
        id: 0,
        type: 'image',
        url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big84000.jpg'
        }, {
        id: 1,
            type: 'image',
            url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big84001.jpg',
        }, {
        id: 2,
        type: 'image',
        url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big39000.jpg'
        }, {
        id: 3,
        type: 'image',
        url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg'
        }, {
        id: 4,
        type: 'image',
        url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big25011.jpg'
        }, {
        id: 5,
        type: 'image',
        url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big21016.jpg'
        }, {
        id: 6,
        type: 'image',
        url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big99008.jpg'
        }],
        iconList: [{
          icon: 'cardboardfill',
          color: 'red',
          badge: 120,
          name: 'VR'
        }, {
          icon: 'recordfill',
          color: 'orange',
          badge: 1,
          name: '录像'
        }, {
          icon: 'picfill',
          color: 'yellow',
          badge: 0,
          name: '图像'
        }, {
          icon: 'noticefill',
          color: 'olive',
          badge: 22,
          name: '通知'
        }, {
          icon: 'upstagefill',
          color: 'cyan',
          badge: 0,
          name: '排行榜'
        }, {
          icon: 'clothesfill',
          color: 'blue',
          badge: 0,
          name: '皮肤'
        }, {
          icon: 'discoverfill',
          color: 'purple',
          badge: 0,
          name: '发现'
        }, {
          icon: 'questionfill',
          color: 'mauve',
          badge: 0,
          name: '帮助'
        }, {
          icon: 'commandfill',
          color: 'purple',
          badge: 0,
          name: '问答'
        }, {
          icon: 'brandfill',
          color: 'mauve',
          badge: 0,
          name: '版权'
        }],
        gridCol:4,
        skin: false
        // 导航 数组
        categories: [],
        floorList: [],
    },
    //事件处理函数
    onLoad() {
        this.towerSwiper('swiperList');
        // this.getSwiperList();
        // this.getNavigatorList();
        this.getFloorList();
    },
    /**
    * 生命周期函数--监听页面初次渲染完成
    */
    onReady: function () {
    },
    // 获取轮播图数据
    async getSwiperList(){
        // /home/swiperdata
        const base = app.globalData.homeBaseUrl;
        const result = await request({ url: base + '/home/swiperdata' });
        this.setData!({
            swiperList: result,
        })
    },
    // 获取分类导航数据
    async getNavigatorList(){
        const result = await request({ url: '/home/catitems' });
        this.setData!({
            categories: result,
        })
    },
    // 获取楼层数据
    async getFloorList(){
      const base = app.globalData.homeBaseUrl;
        const result = await request({ url: base + '/home/floordata' });
        this.setData!({
            floorList: result.message,
        })
    },
    DotStyle(e: any) {
        this.setData!({
          DotStyle: e.detail.value
        })
      },
      // cardSwiper
      cardSwiper(e: any) {
        this.setData!({
          cardCur: e.detail.current
        })
      },
      // towerSwiper
      // 初始化towerSwiper
      towerSwiper(name: string) {
        let list = this.data[name];
        for (let i = 0; i < list.length; i++) {
          list[i].zIndex = parseInt(list.length / 2) + 1 - Math.abs(i - parseInt(list.length / 2))
          list[i].mLeft = i - parseInt(list.length / 2)
        }
        this.setData!({
          swiperList: list
        })
      },
      // towerSwiper触摸开始
      towerStart(e: any) {
        this.setData!({
          towerStart: e.touches[0].pageX
        })
      },
      // towerSwiper计算方向
      towerMove(e: any) {
        this.setData!({
          direction: e.touches[0].pageX - this.data.towerStart > 0 ? 'right' : 'left'
        })
      },
      // towerSwiper计算滚动
      towerEnd(e: any) {
        let direction = this.data.direction;
        let list = this.data.swiperList;
        if (direction == 'right') {
          let mLeft = list[0].mLeft;
          let zIndex = list[0].zIndex;
          for (let i = 1; i < list.length; i++) {
            list[i - 1].mLeft = list[i].mLeft
            list[i - 1].zIndex = list[i].zIndex
          }
          list[list.length - 1].mLeft = mLeft;
          list[list.length - 1].zIndex = zIndex;
          this.setData!({
            swiperList: list
          })
        } else {
          let mLeft = list[list.length - 1].mLeft;
          let zIndex = list[list.length - 1].zIndex;
          for (let i = list.length - 1; i > 0; i--) {
            list[i].mLeft = list[i - 1].mLeft
            list[i].zIndex = list[i - 1].zIndex
          }
          list[0].mLeft = mLeft;
          list[0].zIndex = zIndex;
          this.setData!({
            swiperList: list
          })
        }
      }
})
