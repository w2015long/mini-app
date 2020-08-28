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
      url: 'https://mmbiz.qpic.cn/mmbiz_jpg/azXQmS1HA7kpibMXk8PNSU54U3AibKDYrricJazpOYjAibalZ7WVpgQx2OWTfiaytp07G5dPSKo6wT7IYiaiaplyCvl9w/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1'
    }, {
      id: 1,
      type: 'image',
      url: 'https://mmbiz.qpic.cn/mmbiz_jpg/nHfX2pletfWlEBcqrI0icqbwoWb3SPBTU06lwCo1aicNFOPkk5xZwRpy24MhlibO625n5VpddLVBpib8mNxTEeXCDA/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1',
    }, {
      id: 2,
      type: 'image',
      url: 'http://mmbiz.qpic.cn/mmbiz_png/KMotugmMkE6VnZG7C80Z0mkgHCibhEccEfgN0cicFruiaL2llBGibsJoPPwP07sFkkiaMaLJ28tyicEvNBrUvnuWnDAw/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1'
    }, {
      id: 3,
      type: 'image',
      url: 'https://mmbiz.qpic.cn/mmbiz_jpg/azXQmS1HA7kpibMXk8PNSU54U3AibKDYrrlrhNj06Wjl9RdLUEFJ3AKfgsYVk3cEic6pd78tAG2SFKBZiaBjWvBdtw/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1'
    }, {
      id: 4,
      type: 'image',
      url: 'https://mmbiz.qpic.cn/mmbiz_jpg/azXQmS1HA7kpibMXk8PNSU54U3AibKDYrricJazpOYjAibalZ7WVpgQx2OWTfiaytp07G5dPSKo6wT7IYiaiaplyCvl9w/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1'
    }, {
      id: 5,
      type: 'image',
      url: 'https://mmbiz.qpic.cn/mmbiz_jpg/azXQmS1HA7kpibMXk8PNSU54U3AibKDYrr1cXuCMsbmOPmqOZW3By9V65uomYAhKSVsjGk5oSu23ptK3KTeib95Mg/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1'
    }, {
      id: 6,
      type: 'image',
      url: 'https://mmbiz.qpic.cn/mmbiz_jpg/azXQmS1HA7kpibMXk8PNSU54U3AibKDYrrxe86J4ss3aHXdsL2oqooeokHcJrBdicXXcOsCbUKVrLmzS3cI8Adwhw/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1'
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
    gridCol: 4,
    skin: false,
    currentPage: 1,
    totalData: [],
    isEnd: false,
    leftData: [],
    rightData: [],
    isFixedTop: false,
    navbarInitTop: 0, //导航栏初始化距顶部的距离
  },
  //事件处理函数
  onLoad() {
    this.towerSwiper('swiperList');
    this.setData!({
      currentPage: 1,
      totalData: [],
      isEnd: false,
    });
    this.getSeasonFood(this.data.currentPage);
    this.setData!({
      cusHeight: app.globalData.CustomBar
    })
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    var that = this;
    if (that.data.navbarInitTop == 0) {
      //获取节点距离顶部的距离
      wx.createSelectorQuery().select('#navbar').boundingClientRect(function (rect) {
        if (rect && rect.top > 0) {
          var navbarInitTop = parseInt(rect.top);
          that.setData!({
            navbarInitTop: navbarInitTop
          });
        }
      }).exec();

    }
  },
  /**
  * 生命周期函数--监听页面初次渲染完成
  */
  onReady: function () {
  },
  // 获取轮播图数据
  async getSwiperList() {
    // /home/swiperdata
    const base = app.globalData.homeBaseUrl;
    const result = await request({ url: base + '/home/swiperdata' });
    this.setData!({
      swiperList: result,
    })
  },
  // 获取美食推荐
  // 
  async getSeasonFood(pageNum: number) {
    // ?callback=jQuery2140014455875693811349_1598146166046&format=json&type=2&page=3&_=1598146895
    const base = app.globalData.foodBaseUrl;
    const callback = 'jQuery2140014455875693811349_1598146166046';
    const timestamp = +Date.now();
    let result: any = await request({ url: base + `?callback=${callback}&format=json&type=2&page=${pageNum}&_=${timestamp}` });
    result = result.toString().replace(callback, '');
    result = result.slice(1, result.length - 1);
    const res = JSON.parse(result);
    const { items } = res.data;
    if (items.length === 0) {
      wx.showToast({
        title: '我是有底线的',
      })
      this.data.isEnd = true;
      return;
    }
    this.data.currentPage += 1;
    const totalData = this.data.totalData.concat(items);
    this.setData!({
      totalData,
      currentPage: this.data.currentPage
    });
    this.forrmatData(totalData);
  },
  forrmatData(list: any) {
    const row = Math.ceil(list.length / 2);
    const leftArr = [];
    const rightArr = [];
    let index = 0;
    for (let i = 0; i < row; i++) {
      leftArr[i] = list[index];
      index++;
      if (index === list.length) { break; };
      rightArr[i] = list[index];
      index++;
    }
    this.setData!({
      leftData: leftArr,
      rightData: rightArr,
    })
  },
  onReachBottom() {
    this.getSeasonFood(this.data.currentPage);
  },
  /**
 * 监听页面滑动事件
 */
  onPageScroll(e) {
    var that = this;
    var scrollTop = parseInt(e.scrollTop); //滚动条距离顶部高度
    //判断'滚动条'滚动的距离 和 '元素在初始时'距顶部的距离进行判断
    var isSatisfy = scrollTop >= that.data.navbarInitTop ? true : false;
    //为了防止不停的setData, 这儿做了一个等式判断。 只有处于吸顶的临界值才会不相等
    if (that.data.isFixedTop === isSatisfy) {
      return false;
    }
    that.setData!({
      isFixedTop: isSatisfy
    });
  },
  showModal(e: any) {
    this.setData!({
      modalName: e.currentTarget.dataset.target
    })
  },
  hideModal(e: any) {
    this.setData!({
      modalName: null
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
