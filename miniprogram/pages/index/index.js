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
                url: 'https://mmbiz.qpic.cn/mmbiz_jpg/azXQmS1HA7kpibMXk8PNSU54U3AibKDYrribbIsJmAFLfUoQH1RicuNIl59fZteiaibwBgfDdyp7y0FCibaE9alicNqo1Q/640?wx_fmt=jpeg&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1'
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUdBLCtDQUE4QztBQUM5QyxJQUFNLEdBQUcsR0FBRyxNQUFNLEVBQUUsQ0FBQztBQUNyQixJQUFJLENBQUM7SUFDSCxJQUFJLEVBQUU7UUFDSixPQUFPLEVBQUUsQ0FBQztRQUNWLFVBQVUsRUFBRSxDQUFDO2dCQUNYLEVBQUUsRUFBRSxDQUFDO2dCQUNMLElBQUksRUFBRSxPQUFPO2dCQUNiLEdBQUcsRUFBRSxrTEFBa0w7YUFDeEwsRUFBRTtnQkFDRCxFQUFFLEVBQUUsQ0FBQztnQkFDTCxJQUFJLEVBQUUsT0FBTztnQkFDYixHQUFHLEVBQUUsK0tBQStLO2FBQ3JMLEVBQUU7Z0JBQ0QsRUFBRSxFQUFFLENBQUM7Z0JBQ0wsSUFBSSxFQUFFLE9BQU87Z0JBQ2IsR0FBRyxFQUFFLG1MQUFtTDthQUN6TCxFQUFFO2dCQUNELEVBQUUsRUFBRSxDQUFDO2dCQUNMLElBQUksRUFBRSxPQUFPO2dCQUNiLEdBQUcsRUFBRSwrS0FBK0s7YUFDckwsRUFBRTtnQkFDRCxFQUFFLEVBQUUsQ0FBQztnQkFDTCxJQUFJLEVBQUUsT0FBTztnQkFDYixHQUFHLEVBQUUsa0xBQWtMO2FBQ3hMLEVBQUU7Z0JBQ0QsRUFBRSxFQUFFLENBQUM7Z0JBQ0wsSUFBSSxFQUFFLE9BQU87Z0JBQ2IsR0FBRyxFQUFFLDhLQUE4SzthQUNwTCxFQUFFO2dCQUNELEVBQUUsRUFBRSxDQUFDO2dCQUNMLElBQUksRUFBRSxPQUFPO2dCQUNiLEdBQUcsRUFBRSw4S0FBOEs7YUFDcEwsQ0FBQztRQUNGLFFBQVEsRUFBRSxDQUFDO2dCQUNULElBQUksRUFBRSxlQUFlO2dCQUNyQixLQUFLLEVBQUUsS0FBSztnQkFDWixLQUFLLEVBQUUsR0FBRztnQkFDVixJQUFJLEVBQUUsSUFBSTthQUNYLEVBQUU7Z0JB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Q0FBQTtnQkFDakMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQTthQUNwQztZQUNELElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1lBQ3RCLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1lBQ3hCLElBQUksQ0FBQyxPQUFRLENBQUM7Z0JBQ1osVUFBVSxFQUFFLElBQUk7YUFDakIsQ0FBQyxDQUFBO1NBQ0g7SUFDSCxDQUFDO0NBQ0YsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLy9pbmRleC5qc1xuLy/ojrflj5blupTnlKjlrp7kvotcbi8vIGltcG9ydCB7IElNeUFwcCB9IGZyb20gJy4uLy4uL2FwcCc7XG5pbXBvcnQgeyByZXF1ZXN0IH0gZnJvbSAnLi4vLi4vdXRpbHMvcmVxdWVzdCc7XG5jb25zdCBhcHAgPSBnZXRBcHAoKTtcblBhZ2Uoe1xuICBkYXRhOiB7XG4gICAgY2FyZEN1cjogMCxcbiAgICBzd2lwZXJMaXN0OiBbe1xuICAgICAgaWQ6IDAsXG4gICAgICB0eXBlOiAnaW1hZ2UnLFxuICAgICAgdXJsOiAnaHR0cHM6Ly9tbWJpei5xcGljLmNuL21tYml6X2pwZy9helhRbVMxSEE3a3BpYk1YazhQTlNVNTRVM0FpYktEWXJyaWNKYXpwT1lqQWliYWxaN1dWcGdReDJPV1RmaWF5dHAwN0c1ZFBTS282d1Q3SVlpYWlhcGx5Q3ZsOXcvNjQwP3d4X2ZtdD1qcGVnJnRwPXdlYnAmd3hmcm9tPTUmd3hfbGF6eT0xJnd4X2NvPTEnXG4gICAgfSwge1xuICAgICAgaWQ6IDEsXG4gICAgICB0eXBlOiAnaW1hZ2UnLFxuICAgICAgdXJsOiAnaHR0cHM6Ly9tbWJpei5xcGljLmNuL21tYml6X2pwZy9uSGZYMnBsZXRmV2xFQmNxckkwaWNxYndvV2IzU1BCVFUwNmx3Q28xYWljTkZPUGtrNXhad1JweTI0TWhsaWJPNjI1bjVWcGRkTFZCcGliOG1OeFRFZVhDREEvNjQwP3d4X2ZtdD1qcGVnJnRwPXdlYnAmd3hmcm9tPTUmd3hfbGF6eT0xJnd4X2NvPTEnLFxuICAgIH0sIHtcbiAgICAgIGlkOiAyLFxuICAgICAgdHlwZTogJ2ltYWdlJyxcbiAgICAgIHVybDogJ2h0dHBzOi8vbW1iaXoucXBpYy5jbi9tbWJpel9qcGcvYXpYUW1TMUhBN2twaWJNWGs4UE5TVTU0VTNBaWJLRFlycmliYklzSm1BRkxmVW9RSDFSaWN1TklsNTlmWnRlaWFpYndCZ2ZEZHlwN3kwRkNpYmFFOWFsaWNOcW8xUS82NDA/d3hfZm10PWpwZWcmdHA9d2VicCZ3eGZyb209NSZ3eF9sYXp5PTEmd3hfY289MSdcbiAgICB9LCB7XG4gICAgICBpZDogMyxcbiAgICAgIHR5cGU6ICdpbWFnZScsXG4gICAgICB1cmw6ICdodHRwczovL21tYml6LnFwaWMuY24vbW1iaXpfanBnL2F6WFFtUzFIQTdrcGliTVhrOFBOU1U1NFUzQWliS0RZcnJscmhOajA2V2psOVJkTFVFRkozQUtmZ3NZVmszY0VpYzZwZDc4dEFHMlNGS0JaaWFCald2QmR0dy82NDA/d3hfZm10PWpwZWcmdHA9d2VicCZ3eGZyb209NSZ3eF9sYXp5PTEmd3hfY289MSdcbiAgICB9LCB7XG4gICAgICBpZDogNCxcbiAgICAgIHR5cGU6ICdpbWFnZScsXG4gICAgICB1cmw6ICdodHRwczovL21tYml6LnFwaWMuY24vbW1iaXpfanBnL2F6WFFtUzFIQTdrcGliTVhrOFBOU1U1NFUzQWliS0RZcnJpY0phenBPWWpBaWJhbFo3V1ZwZ1F4Mk9XVGZpYXl0cDA3RzVkUFNLbzZ3VDdJWWlhaWFwbHlDdmw5dy82NDA/d3hfZm10PWpwZWcmdHA9d2VicCZ3eGZyb209NSZ3eF9sYXp5PTEmd3hfY289MSdcbiAgICB9LCB7XG4gICAgICBpZDogNSxcbiAgICAgIHR5cGU6ICdpbWFnZScsXG4gICAgICB1cmw6ICdodHRwczovL21tYml6LnFwaWMuY24vbW1iaXpfanBnL2F6WFFtUzFIQTdrcGliTVhrOFBOU1U1NFUzQWliS0RZcnIxY1h1Q01zYm1PUG1xT1pXM0J5OVY2NXVvbVlBaEtTVnNqR2s1b1N1MjNwdEszS1RlaWI5NU1nLzY0MD93eF9mbXQ9anBlZyZ0cD13ZWJwJnd4ZnJvbT01Jnd4X2xhenk9MSZ3eF9jbz0xJ1xuICAgIH0sIHtcbiAgICAgIGlkOiA2LFxuICAgICAgdHlwZTogJ2ltYWdlJyxcbiAgICAgIHVybDogJ2h0dHBzOi8vbW1iaXoucXBpYy5jbi9tbWJpel9qcGcvYXpYUW1TMUhBN2twaWJNWGs4UE5TVTU0VTNBaWJLRFlycnhlODZKNHNzM2FIWGRzTDJvcW9vZW9rSGNKckJkaWNYWGNPc0NiVUtWckxtelMzY0k4QWR3aHcvNjQwP3d4X2ZtdD1qcGVnJnRwPXdlYnAmd3hmcm9tPTUmd3hfbGF6eT0xJnd4X2NvPTEnXG4gICAgfV0sXG4gICAgaWNvbkxpc3Q6IFt7XG4gICAgICBpY29uOiAnY2FyZGJvYXJkZmlsbCcsXG4gICAgICBjb2xvcjogJ3JlZCcsXG4gICAgICBiYWRnZTogMTIwLFxuICAgICAgbmFtZTogJ1ZSJ1xuICAgIH0sIHtcbiAgICAgIGljb246ICdyZWNvcmRmaWxsJyxcbiAgICAgIGNvbG9yOiAnb3JhbmdlJyxcbiAgICAgIGJhZGdlOiAxLFxuICAgICAgbmFtZTogJ+W9leWDjydcbiAgICB9LCB7XG4gICAgICBpY29uOiAncGljZmlsbCcsXG4gICAgICBjb2xvcjogJ3llbGxvdycsXG4gICAgICBiYWRnZTogMCxcbiAgICAgIG5hbWU6ICflm77lg48nXG4gICAgfSwge1xuICAgICAgaWNvbjogJ25vdGljZWZpbGwnLFxuICAgICAgY29sb3I6ICdvbGl2ZScsXG4gICAgICBiYWRnZTogMjIsXG4gICAgICBuYW1lOiAn6YCa55+lJ1xuICAgIH0sIHtcbiAgICAgIGljb246ICd1cHN0YWdlZmlsbCcsXG4gICAgICBjb2xvcjogJ2N5YW4nLFxuICAgICAgYmFkZ2U6IDAsXG4gICAgICBuYW1lOiAn5o6S6KGM5qacJ1xuICAgIH0sIHtcbiAgICAgIGljb246ICdjbG90aGVzZmlsbCcsXG4gICAgICBjb2xvcjogJ2JsdWUnLFxuICAgICAgYmFkZ2U6IDAsXG4gICAgICBuYW1lOiAn55qu6IKkJ1xuICAgIH0sIHtcbiAgICAgIGljb246ICdkaXNjb3ZlcmZpbGwnLFxuICAgICAgY29sb3I6ICdwdXJwbGUnLFxuICAgICAgYmFkZ2U6IDAsXG4gICAgICBuYW1lOiAn5Y+R546wJ1xuICAgIH0sIHtcbiAgICAgIGljb246ICdxdWVzdGlvbmZpbGwnLFxuICAgICAgY29sb3I6ICdtYXV2ZScsXG4gICAgICBiYWRnZTogMCxcbiAgICAgIG5hbWU6ICfluK7liqknXG4gICAgfSwge1xuICAgICAgaWNvbjogJ2NvbW1hbmRmaWxsJyxcbiAgICAgIGNvbG9yOiAncHVycGxlJyxcbiAgICAgIGJhZGdlOiAwLFxuICAgICAgbmFtZTogJ+mXruetlCdcbiAgICB9LCB7XG4gICAgICBpY29uOiAnYnJhbmRmaWxsJyxcbiAgICAgIGNvbG9yOiAnbWF1dmUnLFxuICAgICAgYmFkZ2U6IDAsXG4gICAgICBuYW1lOiAn54mI5p2DJ1xuICAgIH1dLFxuICAgIGdyaWRDb2w6IDQsXG4gICAgc2tpbjogZmFsc2UsXG4gICAgY3VycmVudFBhZ2U6IDEsXG4gICAgdG90YWxEYXRhOiBbXSxcbiAgICBpc0VuZDogZmFsc2UsXG4gICAgbGVmdERhdGE6IFtdLFxuICAgIHJpZ2h0RGF0YTogW10sXG4gICAgaXNGaXhlZFRvcDogZmFsc2UsXG4gICAgbmF2YmFySW5pdFRvcDogMCwgLy/lr7zoiKrmoI/liJ3lp4vljJbot53pobbpg6jnmoTot53nprtcbiAgfSxcbiAgLy/kuovku7blpITnkIblh73mlbBcbiAgb25Mb2FkKCkge1xuICAgIHRoaXMudG93ZXJTd2lwZXIoJ3N3aXBlckxpc3QnKTtcbiAgICB0aGlzLnNldERhdGEhKHtcbiAgICAgIGN1cnJlbnRQYWdlOiAxLFxuICAgICAgdG90YWxEYXRhOiBbXSxcbiAgICAgIGlzRW5kOiBmYWxzZSxcbiAgICB9KTtcbiAgICB0aGlzLmdldFNlYXNvbkZvb2QodGhpcy5kYXRhLmN1cnJlbnRQYWdlKTtcbiAgfSxcbiAgLyoqXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5pi+56S6XG4gICAqL1xuICBvblNob3c6IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgdGhhdCA9IHRoaXM7XG4gICAgaWYgKHRoYXQuZGF0YS5uYXZiYXJJbml0VG9wID09IDApIHtcbiAgICAgIC8v6I635Y+W6IqC54K56Led56a76aG26YOo55qE6Led56a7XG4gICAgICB3eC5jcmVhdGVTZWxlY3RvclF1ZXJ5KCkuc2VsZWN0KCcjbmF2YmFyJykuYm91bmRpbmdDbGllbnRSZWN0KGZ1bmN0aW9uIChyZWN0KSB7XG4gICAgICAgIGlmIChyZWN0ICYmIHJlY3QudG9wID4gMCkge1xuICAgICAgICAgIHZhciBuYXZiYXJJbml0VG9wID0gcGFyc2VJbnQocmVjdC50b3ApO1xuICAgICAgICAgIHRoYXQuc2V0RGF0YSEoe1xuICAgICAgICAgICAgbmF2YmFySW5pdFRvcDogbmF2YmFySW5pdFRvcFxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9KS5leGVjKCk7XG5cbiAgICB9XG4gIH0sXG4gIC8qKlxuICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5Yid5qyh5riy5p+T5a6M5oiQXG4gICovXG4gIG9uUmVhZHk6IGZ1bmN0aW9uICgpIHtcbiAgfSxcbiAgLy8g6I635Y+W6L2u5pKt5Zu+5pWw5o2uXG4gIGFzeW5jIGdldFN3aXBlckxpc3QoKSB7XG4gICAgLy8gL2hvbWUvc3dpcGVyZGF0YVxuICAgIGNvbnN0IGJhc2UgPSBhcHAuZ2xvYmFsRGF0YS5ob21lQmFzZVVybDtcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCByZXF1ZXN0KHsgdXJsOiBiYXNlICsgJy9ob21lL3N3aXBlcmRhdGEnIH0pO1xuICAgIHRoaXMuc2V0RGF0YSEoe1xuICAgICAgc3dpcGVyTGlzdDogcmVzdWx0LFxuICAgIH0pXG4gIH0sXG4gIC8vIOiOt+WPlue+jumjn+aOqOiNkFxuICAvLyBcbiAgYXN5bmMgZ2V0U2Vhc29uRm9vZChwYWdlTnVtOiBudW1iZXIpIHtcbiAgICAvLyA/Y2FsbGJhY2s9alF1ZXJ5MjE0MDAxNDQ1NTg3NTY5MzgxMTM0OV8xNTk4MTQ2MTY2MDQ2JmZvcm1hdD1qc29uJnR5cGU9MiZwYWdlPTMmXz0xNTk4MTQ2ODk1XG4gICAgY29uc3QgYmFzZSA9IGFwcC5nbG9iYWxEYXRhLmZvb2RCYXNlVXJsO1xuICAgIGNvbnN0IGNhbGxiYWNrID0gJ2pRdWVyeTIxNDAwMTQ0NTU4NzU2OTM4MTEzNDlfMTU5ODE0NjE2NjA0Nic7XG4gICAgY29uc3QgdGltZXN0YW1wID0gK0RhdGUubm93KCk7XG4gICAgbGV0IHJlc3VsdDogYW55ID0gYXdhaXQgcmVxdWVzdCh7IHVybDogYmFzZSArIGA/Y2FsbGJhY2s9JHtjYWxsYmFja30mZm9ybWF0PWpzb24mdHlwZT0yJnBhZ2U9JHtwYWdlTnVtfSZfPSR7dGltZXN0YW1wfWAgfSk7XG4gICAgcmVzdWx0ID0gcmVzdWx0LnRvU3RyaW5nKCkucmVwbGFjZShjYWxsYmFjaywgJycpO1xuICAgIHJlc3VsdCA9IHJlc3VsdC5zbGljZSgxLCByZXN1bHQubGVuZ3RoIC0gMSk7XG4gICAgY29uc3QgcmVzID0gSlNPTi5wYXJzZShyZXN1bHQpO1xuICAgIGNvbnN0IHsgaXRlbXMgfSA9IHJlcy5kYXRhO1xuICAgIGlmIChpdGVtcy5sZW5ndGggPT09IDApIHtcbiAgICAgIHd4LnNob3dUb2FzdCh7XG4gICAgICAgIHRpdGxlOiAn5oiR5piv5pyJ5bqV57q/55qEJyxcbiAgICAgIH0pXG4gICAgICB0aGlzLmRhdGEuaXNFbmQgPSB0cnVlO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLmRhdGEuY3VycmVudFBhZ2UgKz0gMTtcbiAgICBjb25zdCB0b3RhbERhdGEgPSB0aGlzLmRhdGEudG90YWxEYXRhLmNvbmNhdChpdGVtcyk7XG4gICAgdGhpcy5zZXREYXRhISh7XG4gICAgICB0b3RhbERhdGEsXG4gICAgICBjdXJyZW50UGFnZTogdGhpcy5kYXRhLmN1cnJlbnRQYWdlXG4gICAgfSk7XG4gICAgdGhpcy5mb3JybWF0RGF0YSh0b3RhbERhdGEpO1xuICB9LFxuICBmb3JybWF0RGF0YShsaXN0OiBhbnkpIHtcbiAgICBjb25zdCByb3cgPSBNYXRoLmNlaWwobGlzdC5sZW5ndGggLyAyKTtcbiAgICBjb25zdCBsZWZ0QXJyID0gW107XG4gICAgY29uc3QgcmlnaHRBcnIgPSBbXTtcbiAgICBsZXQgaW5kZXggPSAwO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcm93OyBpKyspIHtcbiAgICAgIGxlZnRBcnJbaV0gPSBsaXN0W2luZGV4XTtcbiAgICAgIGluZGV4Kys7XG4gICAgICBpZiAoaW5kZXggPT09IGxpc3QubGVuZ3RoKSB7IGJyZWFrOyB9O1xuICAgICAgcmlnaHRBcnJbaV0gPSBsaXN0W2luZGV4XTtcbiAgICAgIGluZGV4Kys7XG4gICAgfVxuICAgIHRoaXMuc2V0RGF0YSEoe1xuICAgICAgbGVmdERhdGE6IGxlZnRBcnIsXG4gICAgICByaWdodERhdGE6IHJpZ2h0QXJyLFxuICAgIH0pXG4gIH0sXG4gIG9uUmVhY2hCb3R0b20oKSB7XG4gICAgdGhpcy5nZXRTZWFzb25Gb29kKHRoaXMuZGF0YS5jdXJyZW50UGFnZSk7XG4gIH0sXG4gIC8qKlxuICog55uR5ZCs6aG16Z2i5ruR5Yqo5LqL5Lu2XG4gKi9cbiAgb25QYWdlU2Nyb2xsKGUpIHtcbiAgICB2YXIgdGhhdCA9IHRoaXM7XG4gICAgdmFyIHNjcm9sbFRvcCA9IHBhcnNlSW50KGUuc2Nyb2xsVG9wKTsgLy/mu5rliqjmnaHot53nprvpobbpg6jpq5jluqZcbiAgICAvL+WIpOaWrSfmu5rliqjmnaEn5rua5Yqo55qE6Led56a7IOWSjCAn5YWD57Sg5Zyo5Yid5aeL5pe2J+i3nemhtumDqOeahOi3neemu+i/m+ihjOWIpOaWrVxuICAgIHZhciBpc1NhdGlzZnkgPSBzY3JvbGxUb3AgPj0gdGhhdC5kYXRhLm5hdmJhckluaXRUb3AgPyB0cnVlIDogZmFsc2U7XG4gICAgLy/kuLrkuobpmLLmraLkuI3lgZznmoRzZXREYXRhLCDov5nlhL/lgZrkuobkuIDkuKrnrYnlvI/liKTmlq3jgIIg5Y+q5pyJ5aSE5LqO5ZC46aG255qE5Li055WM5YC85omN5Lya5LiN55u4562JXG4gICAgaWYgKHRoYXQuZGF0YS5pc0ZpeGVkVG9wID09PSBpc1NhdGlzZnkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgdGhhdC5zZXREYXRhISh7XG4gICAgICBpc0ZpeGVkVG9wOiBpc1NhdGlzZnlcbiAgICB9KTtcbiAgfSxcbiAgc2hvd01vZGFsKGU6IGFueSkge1xuICAgIHRoaXMuc2V0RGF0YSEoe1xuICAgICAgbW9kYWxOYW1lOiBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC50YXJnZXRcbiAgICB9KVxuICB9LFxuICBoaWRlTW9kYWwoZTogYW55KSB7XG4gICAgdGhpcy5zZXREYXRhISh7XG4gICAgICBtb2RhbE5hbWU6IG51bGxcbiAgICB9KVxuICB9LFxuICBEb3RTdHlsZShlOiBhbnkpIHtcbiAgICB0aGlzLnNldERhdGEhKHtcbiAgICAgIERvdFN0eWxlOiBlLmRldGFpbC52YWx1ZVxuICAgIH0pXG4gIH0sXG4gIC8vIGNhcmRTd2lwZXJcbiAgY2FyZFN3aXBlcihlOiBhbnkpIHtcbiAgICB0aGlzLnNldERhdGEhKHtcbiAgICAgIGNhcmRDdXI6IGUuZGV0YWlsLmN1cnJlbnRcbiAgICB9KVxuICB9LFxuICAvLyB0b3dlclN3aXBlclxuICAvLyDliJ3lp4vljJZ0b3dlclN3aXBlclxuICB0b3dlclN3aXBlcihuYW1lOiBzdHJpbmcpIHtcbiAgICBsZXQgbGlzdCA9IHRoaXMuZGF0YVtuYW1lXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxpc3RbaV0uekluZGV4ID0gcGFyc2VJbnQobGlzdC5sZW5ndGggLyAyKSArIDEgLSBNYXRoLmFicyhpIC0gcGFyc2VJbnQobGlzdC5sZW5ndGggLyAyKSlcbiAgICAgIGxpc3RbaV0ubUxlZnQgPSBpIC0gcGFyc2VJbnQobGlzdC5sZW5ndGggLyAyKVxuICAgIH1cbiAgICB0aGlzLnNldERhdGEhKHtcbiAgICAgIHN3aXBlckxpc3Q6IGxpc3RcbiAgICB9KVxuICB9LFxuICAvLyB0b3dlclN3aXBlcuinpuaRuOW8gOWni1xuICB0b3dlclN0YXJ0KGU6IGFueSkge1xuICAgIHRoaXMuc2V0RGF0YSEoe1xuICAgICAgdG93ZXJTdGFydDogZS50b3VjaGVzWzBdLnBhZ2VYXG4gICAgfSlcbiAgfSxcbiAgLy8gdG93ZXJTd2lwZXLorqHnrpfmlrnlkJFcbiAgdG93ZXJNb3ZlKGU6IGFueSkge1xuICAgIHRoaXMuc2V0RGF0YSEoe1xuICAgICAgZGlyZWN0aW9uOiBlLnRvdWNoZXNbMF0ucGFnZVggLSB0aGlzLmRhdGEudG93ZXJTdGFydCA+IDAgPyAncmlnaHQnIDogJ2xlZnQnXG4gICAgfSlcbiAgfSxcbiAgLy8gdG93ZXJTd2lwZXLorqHnrpfmu5rliqhcbiAgdG93ZXJFbmQoZTogYW55KSB7XG4gICAgbGV0IGRpcmVjdGlvbiA9IHRoaXMuZGF0YS5kaXJlY3Rpb247XG4gICAgbGV0IGxpc3QgPSB0aGlzLmRhdGEuc3dpcGVyTGlzdDtcbiAgICBpZiAoZGlyZWN0aW9uID09ICdyaWdodCcpIHtcbiAgICAgIGxldCBtTGVmdCA9IGxpc3RbMF0ubUxlZnQ7XG4gICAgICBsZXQgekluZGV4ID0gbGlzdFswXS56SW5kZXg7XG4gICAgICBmb3IgKGxldCBpID0gMTsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGlzdFtpIC0gMV0ubUxlZnQgPSBsaXN0W2ldLm1MZWZ0XG4gICAgICAgIGxpc3RbaSAtIDFdLnpJbmRleCA9IGxpc3RbaV0uekluZGV4XG4gICAgICB9XG4gICAgICBsaXN0W2xpc3QubGVuZ3RoIC0gMV0ubUxlZnQgPSBtTGVmdDtcbiAgICAgIGxpc3RbbGlzdC5sZW5ndGggLSAxXS56SW5kZXggPSB6SW5kZXg7XG4gICAgICB0aGlzLnNldERhdGEhKHtcbiAgICAgICAgc3dpcGVyTGlzdDogbGlzdFxuICAgICAgfSlcbiAgICB9IGVsc2Uge1xuICAgICAgbGV0IG1MZWZ0ID0gbGlzdFtsaXN0Lmxlbmd0aCAtIDFdLm1MZWZ0O1xuICAgICAgbGV0IHpJbmRleCA9IGxpc3RbbGlzdC5sZW5ndGggLSAxXS56SW5kZXg7XG4gICAgICBmb3IgKGxldCBpID0gbGlzdC5sZW5ndGggLSAxOyBpID4gMDsgaS0tKSB7XG4gICAgICAgIGxpc3RbaV0ubUxlZnQgPSBsaXN0W2kgLSAxXS5tTGVmdFxuICAgICAgICBsaXN0W2ldLnpJbmRleCA9IGxpc3RbaSAtIDFdLnpJbmRleFxuICAgICAgfVxuICAgICAgbGlzdFswXS5tTGVmdCA9IG1MZWZ0O1xuICAgICAgbGlzdFswXS56SW5kZXggPSB6SW5kZXg7XG4gICAgICB0aGlzLnNldERhdGEhKHtcbiAgICAgICAgc3dpcGVyTGlzdDogbGlzdFxuICAgICAgfSlcbiAgICB9XG4gIH1cbn0pXG4iXX0=