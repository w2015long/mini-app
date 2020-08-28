"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var request_1 = require("../../utils/request");
var app = getApp();
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
        navbarInitTop: 0,
    },
    onLoad: function () {
        this.towerSwiper('swiperList');
        this.setData({
            currentPage: 1,
            totalData: [],
            isEnd: false,
        });
        this.getSeasonFood(this.data.currentPage);
        this.setData({
            cusHeight: app.globalData.CustomBar
        });
    },
    onShow: function () {
        var that = this;
        if (that.data.navbarInitTop == 0) {
            wx.createSelectorQuery().select('#navbar').boundingClientRect(function (rect) {
                if (rect && rect.top > 0) {
                    var navbarInitTop = parseInt(rect.top);
                    that.setData({
                        navbarInitTop: navbarInitTop
                    });
                }
            }).exec();
        }
    },
    onReady: function () {
    },
    getSwiperList: function () {
        return __awaiter(this, void 0, void 0, function () {
            var base, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        base = app.globalData.homeBaseUrl;
                        return [4, request_1.request({ url: base + '/home/swiperdata' })];
                    case 1:
                        result = _a.sent();
                        this.setData({
                            swiperList: result,
                        });
                        return [2];
                }
            });
        });
    },
    getSeasonFood: function (pageNum) {
        return __awaiter(this, void 0, void 0, function () {
            var base, callback, timestamp, result, res, items, totalData;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        base = app.globalData.foodBaseUrl;
                        callback = 'jQuery2140014455875693811349_1598146166046';
                        timestamp = +Date.now();
                        return [4, request_1.request({ url: base + ("?callback=" + callback + "&format=json&type=2&page=" + pageNum + "&_=" + timestamp) })];
                    case 1:
                        result = _a.sent();
                        result = result.toString().replace(callback, '');
                        result = result.slice(1, result.length - 1);
                        res = JSON.parse(result);
                        items = res.data.items;
                        if (items.length === 0) {
                            wx.showToast({
                                title: '我是有底线的',
                            });
                            this.data.isEnd = true;
                            return [2];
                        }
                        this.data.currentPage += 1;
                        totalData = this.data.totalData.concat(items);
                        this.setData({
                            totalData: totalData,
                            currentPage: this.data.currentPage
                        });
                        this.forrmatData(totalData);
                        return [2];
                }
            });
        });
    },
    forrmatData: function (list) {
        var row = Math.ceil(list.length / 2);
        var leftArr = [];
        var rightArr = [];
        var index = 0;
        for (var i = 0; i < row; i++) {
            leftArr[i] = list[index];
            index++;
            if (index === list.length) {
                break;
            }
            ;
            rightArr[i] = list[index];
            index++;
        }
        this.setData({
            leftData: leftArr,
            rightData: rightArr,
        });
    },
    onReachBottom: function () {
        this.getSeasonFood(this.data.currentPage);
    },
    onPageScroll: function (e) {
        var that = this;
        var scrollTop = parseInt(e.scrollTop);
        var isSatisfy = scrollTop >= that.data.navbarInitTop ? true : false;
        if (that.data.isFixedTop === isSatisfy) {
            return false;
        }
        that.setData({
            isFixedTop: isSatisfy
        });
    },
    showModal: function (e) {
        this.setData({
            modalName: e.currentTarget.dataset.target
        });
    },
    hideModal: function (e) {
        this.setData({
            modalName: null
        });
    },
    DotStyle: function (e) {
        this.setData({
            DotStyle: e.detail.value
        });
    },
    cardSwiper: function (e) {
        this.setData({
            cardCur: e.detail.current
        });
    },
    towerSwiper: function (name) {
        var list = this.data[name];
        for (var i = 0; i < list.length; i++) {
            list[i].zIndex = parseInt(list.length / 2) + 1 - Math.abs(i - parseInt(list.length / 2));
            list[i].mLeft = i - parseInt(list.length / 2);
        }
        this.setData({
            swiperList: list
        });
    },
    towerStart: function (e) {
        this.setData({
            towerStart: e.touches[0].pageX
        });
    },
    towerMove: function (e) {
        this.setData({
            direction: e.touches[0].pageX - this.data.towerStart > 0 ? 'right' : 'left'
        });
    },
    towerEnd: function (e) {
        var direction = this.data.direction;
        var list = this.data.swiperList;
        if (direction == 'right') {
            var mLeft = list[0].mLeft;
            var zIndex = list[0].zIndex;
            for (var i = 1; i < list.length; i++) {
                list[i - 1].mLeft = list[i].mLeft;
                list[i - 1].zIndex = list[i].zIndex;
            }
            list[list.length - 1].mLeft = mLeft;
            list[list.length - 1].zIndex = zIndex;
            this.setData({
                swiperList: list
            });
        }
        else {
            var mLeft = list[list.length - 1].mLeft;
            var zIndex = list[list.length - 1].zIndex;
            for (var i = list.length - 1; i > 0; i--) {
                list[i].mLeft = list[i - 1].mLeft;
                list[i].zIndex = list[i - 1].zIndex;
            }
            list[0].mLeft = mLeft;
            list[0].zIndex = zIndex;
            this.setData({
                swiperList: list
            });
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUdBLCtDQUE4QztBQUM5QyxJQUFNLEdBQUcsR0FBRyxNQUFNLEVBQUUsQ0FBQztBQUNyQixJQUFJLENBQUM7SUFDSCxJQUFJLEVBQUU7UUFDSixPQUFPLEVBQUUsQ0FBQztRQUNWLFVBQVUsRUFBRSxDQUFDO2dCQUNYLEVBQUUsRUFBRSxDQUFDO2dCQUNMLElBQUksRUFBRSxPQUFPO2dCQUNiLEdBQUcsRUFBRSxrTEFBa0w7YUFDeEwsRUFBRTtnQkFDRCxFQUFFLEVBQUUsQ0FBQztnQkFDTCxJQUFJLEVBQUUsT0FBTztnQkFDYixHQUFHLEVBQUUsK0tBQStLO2FBQ3JMLEVBQUU7Z0JBQ0QsRUFBRSxFQUFFLENBQUM7Z0JBQ0wsSUFBSSxFQUFFLE9BQU87Z0JBQ2IsR0FBRyxFQUFFLCtLQUErSzthQUNyTCxFQUFFO2dCQUNELEVBQUUsRUFBRSxDQUFDO2dCQUNMLElBQUksRUFBRSxPQUFPO2dCQUNiLEdBQUcsRUFBRSwrS0FBK0s7YUFDckwsRUFBRTtnQkFDRCxFQUFFLEVBQUUsQ0FBQztnQkFDTCxJQUFJLEVBQUUsT0FBTztnQkFDYixHQUFHLEVBQUUsa0xBQWtMO2FBQ3hMLEVBQUU7Z0JBQ0QsRUFBRSxFQUFFLENBQUM7Z0JBQ0wsSUFBSSxFQUFFLE9BQU87Z0JBQ2IsR0FBRyxFQUFFLDhLQUE4SzthQUNwTCxFQUFFO2dCQUNELEVBQUUsRUFBRSxDQUFDO2dCQUNMLElBQUksRUFBRSxPQUFPO2dCQUNiLEdBQUcsRUFBRSw4S0FBOEs7YUFDcEwsQ0FBQztRQUNGLFFBQVEsRUFBRSxDQUFDO2dCQUNULElBQUksRUFBRSxlQUFlO2dCQUNyQixLQUFLLEVBQUUsS0FBSztnQkFDWixLQUFLLEVBQUUsR0FBRztnQkFDVixJQUFJLEVBQUUsSUFBSTthQUNYLEVBQUU7Z0JB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QkFDeEMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQTtnQkFDakMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQTthQUNwQztZQUNELElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1lBQ3RCLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1lBQ3hCLElBQUksQ0FBQyxPQUFRLENBQUM7Z0JBQ1osVUFBVSxFQUFFLElBQUk7YUFDakIsQ0FBQyxDQUFBO1NBQ0g7SUFDSCxDQUFDO0NBQ0YsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLy9pbmRleC5qc1xuLy/ojrflj5blupTnlKjlrp7kvotcbi8vIGltcG9ydCB7IElNeUFwcCB9IGZyb20gJy4uLy4uL2FwcCc7XG5pbXBvcnQgeyByZXF1ZXN0IH0gZnJvbSAnLi4vLi4vdXRpbHMvcmVxdWVzdCc7XG5jb25zdCBhcHAgPSBnZXRBcHAoKTtcblBhZ2Uoe1xuICBkYXRhOiB7XG4gICAgY2FyZEN1cjogMCxcbiAgICBzd2lwZXJMaXN0OiBbe1xuICAgICAgaWQ6IDAsXG4gICAgICB0eXBlOiAnaW1hZ2UnLFxuICAgICAgdXJsOiAnaHR0cHM6Ly9tbWJpei5xcGljLmNuL21tYml6X2pwZy9helhRbVMxSEE3a3BpYk1YazhQTlNVNTRVM0FpYktEWXJyaWNKYXpwT1lqQWliYWxaN1dWcGdReDJPV1RmaWF5dHAwN0c1ZFBTS282d1Q3SVlpYWlhcGx5Q3ZsOXcvNjQwP3d4X2ZtdD1qcGVnJnRwPXdlYnAmd3hmcm9tPTUmd3hfbGF6eT0xJnd4X2NvPTEnXG4gICAgfSwge1xuICAgICAgaWQ6IDEsXG4gICAgICB0eXBlOiAnaW1hZ2UnLFxuICAgICAgdXJsOiAnaHR0cHM6Ly9tbWJpei5xcGljLmNuL21tYml6X2pwZy9uSGZYMnBsZXRmV2xFQmNxckkwaWNxYndvV2IzU1BCVFUwNmx3Q28xYWljTkZPUGtrNXhad1JweTI0TWhsaWJPNjI1bjVWcGRkTFZCcGliOG1OeFRFZVhDREEvNjQwP3d4X2ZtdD1qcGVnJnRwPXdlYnAmd3hmcm9tPTUmd3hfbGF6eT0xJnd4X2NvPTEnLFxuICAgIH0sIHtcbiAgICAgIGlkOiAyLFxuICAgICAgdHlwZTogJ2ltYWdlJyxcbiAgICAgIHVybDogJ2h0dHA6Ly9tbWJpei5xcGljLmNuL21tYml6X3BuZy9LTW90dWdtTWtFNlZuWkc3QzgwWjBta2dIQ2liaEVjY0VmZ04wY2ljRnJ1aWFMMmxsQkdpYnNKb1BQd1AwN3NGa2tpYU1hTEoyOHR5aWNFdk5CclV2bnVXbkRBdy82NDA/d3hfZm10PXBuZyZ0cD13ZWJwJnd4ZnJvbT01Jnd4X2xhenk9MSZ3eF9jbz0xJ1xuICAgIH0sIHtcbiAgICAgIGlkOiAzLFxuICAgICAgdHlwZTogJ2ltYWdlJyxcbiAgICAgIHVybDogJ2h0dHBzOi8vbW1iaXoucXBpYy5jbi9tbWJpel9qcGcvYXpYUW1TMUhBN2twaWJNWGs4UE5TVTU0VTNBaWJLRFlycmxyaE5qMDZXamw5UmRMVUVGSjNBS2Znc1lWazNjRWljNnBkNzh0QUcyU0ZLQlppYUJqV3ZCZHR3LzY0MD93eF9mbXQ9anBlZyZ0cD13ZWJwJnd4ZnJvbT01Jnd4X2xhenk9MSZ3eF9jbz0xJ1xuICAgIH0sIHtcbiAgICAgIGlkOiA0LFxuICAgICAgdHlwZTogJ2ltYWdlJyxcbiAgICAgIHVybDogJ2h0dHBzOi8vbW1iaXoucXBpYy5jbi9tbWJpel9qcGcvYXpYUW1TMUhBN2twaWJNWGs4UE5TVTU0VTNBaWJLRFlycmljSmF6cE9ZakFpYmFsWjdXVnBnUXgyT1dUZmlheXRwMDdHNWRQU0tvNndUN0lZaWFpYXBseUN2bDl3LzY0MD93eF9mbXQ9anBlZyZ0cD13ZWJwJnd4ZnJvbT01Jnd4X2xhenk9MSZ3eF9jbz0xJ1xuICAgIH0sIHtcbiAgICAgIGlkOiA1LFxuICAgICAgdHlwZTogJ2ltYWdlJyxcbiAgICAgIHVybDogJ2h0dHBzOi8vbW1iaXoucXBpYy5jbi9tbWJpel9qcGcvYXpYUW1TMUhBN2twaWJNWGs4UE5TVTU0VTNBaWJLRFlycjFjWHVDTXNibU9QbXFPWlczQnk5VjY1dW9tWUFoS1NWc2pHazVvU3UyM3B0SzNLVGVpYjk1TWcvNjQwP3d4X2ZtdD1qcGVnJnRwPXdlYnAmd3hmcm9tPTUmd3hfbGF6eT0xJnd4X2NvPTEnXG4gICAgfSwge1xuICAgICAgaWQ6IDYsXG4gICAgICB0eXBlOiAnaW1hZ2UnLFxuICAgICAgdXJsOiAnaHR0cHM6Ly9tbWJpei5xcGljLmNuL21tYml6X2pwZy9helhRbVMxSEE3a3BpYk1YazhQTlNVNTRVM0FpYktEWXJyeGU4Nko0c3MzYUhYZHNMMm9xb29lb2tIY0pyQmRpY1hYY09zQ2JVS1ZyTG16UzNjSThBZHdody82NDA/d3hfZm10PWpwZWcmdHA9d2VicCZ3eGZyb209NSZ3eF9sYXp5PTEmd3hfY289MSdcbiAgICB9XSxcbiAgICBpY29uTGlzdDogW3tcbiAgICAgIGljb246ICdjYXJkYm9hcmRmaWxsJyxcbiAgICAgIGNvbG9yOiAncmVkJyxcbiAgICAgIGJhZGdlOiAxMjAsXG4gICAgICBuYW1lOiAnVlInXG4gICAgfSwge1xuICAgICAgaWNvbjogJ3JlY29yZGZpbGwnLFxuICAgICAgY29sb3I6ICdvcmFuZ2UnLFxuICAgICAgYmFkZ2U6IDEsXG4gICAgICBuYW1lOiAn5b2V5YOPJ1xuICAgIH0sIHtcbiAgICAgIGljb246ICdwaWNmaWxsJyxcbiAgICAgIGNvbG9yOiAneWVsbG93JyxcbiAgICAgIGJhZGdlOiAwLFxuICAgICAgbmFtZTogJ+WbvuWDjydcbiAgICB9LCB7XG4gICAgICBpY29uOiAnbm90aWNlZmlsbCcsXG4gICAgICBjb2xvcjogJ29saXZlJyxcbiAgICAgIGJhZGdlOiAyMixcbiAgICAgIG5hbWU6ICfpgJrnn6UnXG4gICAgfSwge1xuICAgICAgaWNvbjogJ3Vwc3RhZ2VmaWxsJyxcbiAgICAgIGNvbG9yOiAnY3lhbicsXG4gICAgICBiYWRnZTogMCxcbiAgICAgIG5hbWU6ICfmjpLooYzmppwnXG4gICAgfSwge1xuICAgICAgaWNvbjogJ2Nsb3RoZXNmaWxsJyxcbiAgICAgIGNvbG9yOiAnYmx1ZScsXG4gICAgICBiYWRnZTogMCxcbiAgICAgIG5hbWU6ICfnmq7ogqQnXG4gICAgfSwge1xuICAgICAgaWNvbjogJ2Rpc2NvdmVyZmlsbCcsXG4gICAgICBjb2xvcjogJ3B1cnBsZScsXG4gICAgICBiYWRnZTogMCxcbiAgICAgIG5hbWU6ICflj5HnjrAnXG4gICAgfSwge1xuICAgICAgaWNvbjogJ3F1ZXN0aW9uZmlsbCcsXG4gICAgICBjb2xvcjogJ21hdXZlJyxcbiAgICAgIGJhZGdlOiAwLFxuICAgICAgbmFtZTogJ+W4ruWKqSdcbiAgICB9LCB7XG4gICAgICBpY29uOiAnY29tbWFuZGZpbGwnLFxuICAgICAgY29sb3I6ICdwdXJwbGUnLFxuICAgICAgYmFkZ2U6IDAsXG4gICAgICBuYW1lOiAn6Zeu562UJ1xuICAgIH0sIHtcbiAgICAgIGljb246ICdicmFuZGZpbGwnLFxuICAgICAgY29sb3I6ICdtYXV2ZScsXG4gICAgICBiYWRnZTogMCxcbiAgICAgIG5hbWU6ICfniYjmnYMnXG4gICAgfV0sXG4gICAgZ3JpZENvbDogNCxcbiAgICBza2luOiBmYWxzZSxcbiAgICBjdXJyZW50UGFnZTogMSxcbiAgICB0b3RhbERhdGE6IFtdLFxuICAgIGlzRW5kOiBmYWxzZSxcbiAgICBsZWZ0RGF0YTogW10sXG4gICAgcmlnaHREYXRhOiBbXSxcbiAgICBpc0ZpeGVkVG9wOiBmYWxzZSxcbiAgICBuYXZiYXJJbml0VG9wOiAwLCAvL+WvvOiIquagj+WIneWni+WMlui3nemhtumDqOeahOi3neemu1xuICB9LFxuICAvL+S6i+S7tuWkhOeQhuWHveaVsFxuICBvbkxvYWQoKSB7XG4gICAgdGhpcy50b3dlclN3aXBlcignc3dpcGVyTGlzdCcpO1xuICAgIHRoaXMuc2V0RGF0YSEoe1xuICAgICAgY3VycmVudFBhZ2U6IDEsXG4gICAgICB0b3RhbERhdGE6IFtdLFxuICAgICAgaXNFbmQ6IGZhbHNlLFxuICAgIH0pO1xuICAgIHRoaXMuZ2V0U2Vhc29uRm9vZCh0aGlzLmRhdGEuY3VycmVudFBhZ2UpO1xuICAgIHRoaXMuc2V0RGF0YSEoe1xuICAgICAgY3VzSGVpZ2h0OiBhcHAuZ2xvYmFsRGF0YS5DdXN0b21CYXJcbiAgICB9KVxuICB9LFxuICAvKipcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLmmL7npLpcbiAgICovXG4gIG9uU2hvdzogZnVuY3Rpb24gKCkge1xuICAgIHZhciB0aGF0ID0gdGhpcztcbiAgICBpZiAodGhhdC5kYXRhLm5hdmJhckluaXRUb3AgPT0gMCkge1xuICAgICAgLy/ojrflj5boioLngrnot53nprvpobbpg6jnmoTot53nprtcbiAgICAgIHd4LmNyZWF0ZVNlbGVjdG9yUXVlcnkoKS5zZWxlY3QoJyNuYXZiYXInKS5ib3VuZGluZ0NsaWVudFJlY3QoZnVuY3Rpb24gKHJlY3QpIHtcbiAgICAgICAgaWYgKHJlY3QgJiYgcmVjdC50b3AgPiAwKSB7XG4gICAgICAgICAgdmFyIG5hdmJhckluaXRUb3AgPSBwYXJzZUludChyZWN0LnRvcCk7XG4gICAgICAgICAgdGhhdC5zZXREYXRhISh7XG4gICAgICAgICAgICBuYXZiYXJJbml0VG9wOiBuYXZiYXJJbml0VG9wXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pLmV4ZWMoKTtcblxuICAgIH1cbiAgfSxcbiAgLyoqXG4gICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLliJ3mrKHmuLLmn5PlrozmiJBcbiAgKi9cbiAgb25SZWFkeTogZnVuY3Rpb24gKCkge1xuICB9LFxuICAvLyDojrflj5bova7mkq3lm77mlbDmja5cbiAgYXN5bmMgZ2V0U3dpcGVyTGlzdCgpIHtcbiAgICAvLyAvaG9tZS9zd2lwZXJkYXRhXG4gICAgY29uc3QgYmFzZSA9IGFwcC5nbG9iYWxEYXRhLmhvbWVCYXNlVXJsO1xuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHJlcXVlc3QoeyB1cmw6IGJhc2UgKyAnL2hvbWUvc3dpcGVyZGF0YScgfSk7XG4gICAgdGhpcy5zZXREYXRhISh7XG4gICAgICBzd2lwZXJMaXN0OiByZXN1bHQsXG4gICAgfSlcbiAgfSxcbiAgLy8g6I635Y+W576O6aOf5o6o6I2QXG4gIC8vIFxuICBhc3luYyBnZXRTZWFzb25Gb29kKHBhZ2VOdW06IG51bWJlcikge1xuICAgIC8vID9jYWxsYmFjaz1qUXVlcnkyMTQwMDE0NDU1ODc1NjkzODExMzQ5XzE1OTgxNDYxNjYwNDYmZm9ybWF0PWpzb24mdHlwZT0yJnBhZ2U9MyZfPTE1OTgxNDY4OTVcbiAgICBjb25zdCBiYXNlID0gYXBwLmdsb2JhbERhdGEuZm9vZEJhc2VVcmw7XG4gICAgY29uc3QgY2FsbGJhY2sgPSAnalF1ZXJ5MjE0MDAxNDQ1NTg3NTY5MzgxMTM0OV8xNTk4MTQ2MTY2MDQ2JztcbiAgICBjb25zdCB0aW1lc3RhbXAgPSArRGF0ZS5ub3coKTtcbiAgICBsZXQgcmVzdWx0OiBhbnkgPSBhd2FpdCByZXF1ZXN0KHsgdXJsOiBiYXNlICsgYD9jYWxsYmFjaz0ke2NhbGxiYWNrfSZmb3JtYXQ9anNvbiZ0eXBlPTImcGFnZT0ke3BhZ2VOdW19Jl89JHt0aW1lc3RhbXB9YCB9KTtcbiAgICByZXN1bHQgPSByZXN1bHQudG9TdHJpbmcoKS5yZXBsYWNlKGNhbGxiYWNrLCAnJyk7XG4gICAgcmVzdWx0ID0gcmVzdWx0LnNsaWNlKDEsIHJlc3VsdC5sZW5ndGggLSAxKTtcbiAgICBjb25zdCByZXMgPSBKU09OLnBhcnNlKHJlc3VsdCk7XG4gICAgY29uc3QgeyBpdGVtcyB9ID0gcmVzLmRhdGE7XG4gICAgaWYgKGl0ZW1zLmxlbmd0aCA9PT0gMCkge1xuICAgICAgd3guc2hvd1RvYXN0KHtcbiAgICAgICAgdGl0bGU6ICfmiJHmmK/mnInlupXnur/nmoQnLFxuICAgICAgfSlcbiAgICAgIHRoaXMuZGF0YS5pc0VuZCA9IHRydWU7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuZGF0YS5jdXJyZW50UGFnZSArPSAxO1xuICAgIGNvbnN0IHRvdGFsRGF0YSA9IHRoaXMuZGF0YS50b3RhbERhdGEuY29uY2F0KGl0ZW1zKTtcbiAgICB0aGlzLnNldERhdGEhKHtcbiAgICAgIHRvdGFsRGF0YSxcbiAgICAgIGN1cnJlbnRQYWdlOiB0aGlzLmRhdGEuY3VycmVudFBhZ2VcbiAgICB9KTtcbiAgICB0aGlzLmZvcnJtYXREYXRhKHRvdGFsRGF0YSk7XG4gIH0sXG4gIGZvcnJtYXREYXRhKGxpc3Q6IGFueSkge1xuICAgIGNvbnN0IHJvdyA9IE1hdGguY2VpbChsaXN0Lmxlbmd0aCAvIDIpO1xuICAgIGNvbnN0IGxlZnRBcnIgPSBbXTtcbiAgICBjb25zdCByaWdodEFyciA9IFtdO1xuICAgIGxldCBpbmRleCA9IDA7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCByb3c7IGkrKykge1xuICAgICAgbGVmdEFycltpXSA9IGxpc3RbaW5kZXhdO1xuICAgICAgaW5kZXgrKztcbiAgICAgIGlmIChpbmRleCA9PT0gbGlzdC5sZW5ndGgpIHsgYnJlYWs7IH07XG4gICAgICByaWdodEFycltpXSA9IGxpc3RbaW5kZXhdO1xuICAgICAgaW5kZXgrKztcbiAgICB9XG4gICAgdGhpcy5zZXREYXRhISh7XG4gICAgICBsZWZ0RGF0YTogbGVmdEFycixcbiAgICAgIHJpZ2h0RGF0YTogcmlnaHRBcnIsXG4gICAgfSlcbiAgfSxcbiAgb25SZWFjaEJvdHRvbSgpIHtcbiAgICB0aGlzLmdldFNlYXNvbkZvb2QodGhpcy5kYXRhLmN1cnJlbnRQYWdlKTtcbiAgfSxcbiAgLyoqXG4gKiDnm5HlkKzpobXpnaLmu5Hliqjkuovku7ZcbiAqL1xuICBvblBhZ2VTY3JvbGwoZSkge1xuICAgIHZhciB0aGF0ID0gdGhpcztcbiAgICB2YXIgc2Nyb2xsVG9wID0gcGFyc2VJbnQoZS5zY3JvbGxUb3ApOyAvL+a7muWKqOadoei3neemu+mhtumDqOmrmOW6plxuICAgIC8v5Yik5patJ+a7muWKqOadoSfmu5rliqjnmoTot53nprsg5ZKMICflhYPntKDlnKjliJ3lp4vml7Yn6Led6aG26YOo55qE6Led56a76L+b6KGM5Yik5patXG4gICAgdmFyIGlzU2F0aXNmeSA9IHNjcm9sbFRvcCA+PSB0aGF0LmRhdGEubmF2YmFySW5pdFRvcCA/IHRydWUgOiBmYWxzZTtcbiAgICAvL+S4uuS6humYsuatouS4jeWBnOeahHNldERhdGEsIOi/meWEv+WBmuS6huS4gOS4quetieW8j+WIpOaWreOAgiDlj6rmnInlpITkuo7lkLjpobbnmoTkuLTnlYzlgLzmiY3kvJrkuI3nm7jnrYlcbiAgICBpZiAodGhhdC5kYXRhLmlzRml4ZWRUb3AgPT09IGlzU2F0aXNmeSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICB0aGF0LnNldERhdGEhKHtcbiAgICAgIGlzRml4ZWRUb3A6IGlzU2F0aXNmeVxuICAgIH0pO1xuICB9LFxuICBzaG93TW9kYWwoZTogYW55KSB7XG4gICAgdGhpcy5zZXREYXRhISh7XG4gICAgICBtb2RhbE5hbWU6IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LnRhcmdldFxuICAgIH0pXG4gIH0sXG4gIGhpZGVNb2RhbChlOiBhbnkpIHtcbiAgICB0aGlzLnNldERhdGEhKHtcbiAgICAgIG1vZGFsTmFtZTogbnVsbFxuICAgIH0pXG4gIH0sXG4gIERvdFN0eWxlKGU6IGFueSkge1xuICAgIHRoaXMuc2V0RGF0YSEoe1xuICAgICAgRG90U3R5bGU6IGUuZGV0YWlsLnZhbHVlXG4gICAgfSlcbiAgfSxcbiAgLy8gY2FyZFN3aXBlclxuICBjYXJkU3dpcGVyKGU6IGFueSkge1xuICAgIHRoaXMuc2V0RGF0YSEoe1xuICAgICAgY2FyZEN1cjogZS5kZXRhaWwuY3VycmVudFxuICAgIH0pXG4gIH0sXG4gIC8vIHRvd2VyU3dpcGVyXG4gIC8vIOWIneWni+WMlnRvd2VyU3dpcGVyXG4gIHRvd2VyU3dpcGVyKG5hbWU6IHN0cmluZykge1xuICAgIGxldCBsaXN0ID0gdGhpcy5kYXRhW25hbWVdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgbGlzdFtpXS56SW5kZXggPSBwYXJzZUludChsaXN0Lmxlbmd0aCAvIDIpICsgMSAtIE1hdGguYWJzKGkgLSBwYXJzZUludChsaXN0Lmxlbmd0aCAvIDIpKVxuICAgICAgbGlzdFtpXS5tTGVmdCA9IGkgLSBwYXJzZUludChsaXN0Lmxlbmd0aCAvIDIpXG4gICAgfVxuICAgIHRoaXMuc2V0RGF0YSEoe1xuICAgICAgc3dpcGVyTGlzdDogbGlzdFxuICAgIH0pXG4gIH0sXG4gIC8vIHRvd2VyU3dpcGVy6Kem5pG45byA5aeLXG4gIHRvd2VyU3RhcnQoZTogYW55KSB7XG4gICAgdGhpcy5zZXREYXRhISh7XG4gICAgICB0b3dlclN0YXJ0OiBlLnRvdWNoZXNbMF0ucGFnZVhcbiAgICB9KVxuICB9LFxuICAvLyB0b3dlclN3aXBlcuiuoeeul+aWueWQkVxuICB0b3dlck1vdmUoZTogYW55KSB7XG4gICAgdGhpcy5zZXREYXRhISh7XG4gICAgICBkaXJlY3Rpb246IGUudG91Y2hlc1swXS5wYWdlWCAtIHRoaXMuZGF0YS50b3dlclN0YXJ0ID4gMCA/ICdyaWdodCcgOiAnbGVmdCdcbiAgICB9KVxuICB9LFxuICAvLyB0b3dlclN3aXBlcuiuoeeul+a7muWKqFxuICB0b3dlckVuZChlOiBhbnkpIHtcbiAgICBsZXQgZGlyZWN0aW9uID0gdGhpcy5kYXRhLmRpcmVjdGlvbjtcbiAgICBsZXQgbGlzdCA9IHRoaXMuZGF0YS5zd2lwZXJMaXN0O1xuICAgIGlmIChkaXJlY3Rpb24gPT0gJ3JpZ2h0Jykge1xuICAgICAgbGV0IG1MZWZ0ID0gbGlzdFswXS5tTGVmdDtcbiAgICAgIGxldCB6SW5kZXggPSBsaXN0WzBdLnpJbmRleDtcbiAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICBsaXN0W2kgLSAxXS5tTGVmdCA9IGxpc3RbaV0ubUxlZnRcbiAgICAgICAgbGlzdFtpIC0gMV0uekluZGV4ID0gbGlzdFtpXS56SW5kZXhcbiAgICAgIH1cbiAgICAgIGxpc3RbbGlzdC5sZW5ndGggLSAxXS5tTGVmdCA9IG1MZWZ0O1xuICAgICAgbGlzdFtsaXN0Lmxlbmd0aCAtIDFdLnpJbmRleCA9IHpJbmRleDtcbiAgICAgIHRoaXMuc2V0RGF0YSEoe1xuICAgICAgICBzd2lwZXJMaXN0OiBsaXN0XG4gICAgICB9KVxuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgbUxlZnQgPSBsaXN0W2xpc3QubGVuZ3RoIC0gMV0ubUxlZnQ7XG4gICAgICBsZXQgekluZGV4ID0gbGlzdFtsaXN0Lmxlbmd0aCAtIDFdLnpJbmRleDtcbiAgICAgIGZvciAobGV0IGkgPSBsaXN0Lmxlbmd0aCAtIDE7IGkgPiAwOyBpLS0pIHtcbiAgICAgICAgbGlzdFtpXS5tTGVmdCA9IGxpc3RbaSAtIDFdLm1MZWZ0XG4gICAgICAgIGxpc3RbaV0uekluZGV4ID0gbGlzdFtpIC0gMV0uekluZGV4XG4gICAgICB9XG4gICAgICBsaXN0WzBdLm1MZWZ0ID0gbUxlZnQ7XG4gICAgICBsaXN0WzBdLnpJbmRleCA9IHpJbmRleDtcbiAgICAgIHRoaXMuc2V0RGF0YSEoe1xuICAgICAgICBzd2lwZXJMaXN0OiBsaXN0XG4gICAgICB9KVxuICAgIH1cbiAgfVxufSlcbiJdfQ==