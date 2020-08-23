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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUdBLCtDQUE4QztBQUM5QyxJQUFNLEdBQUcsR0FBRyxNQUFNLEVBQUUsQ0FBQztBQUNyQixJQUFJLENBQUM7SUFDSCxJQUFJLEVBQUU7UUFDSixPQUFPLEVBQUUsQ0FBQztRQUNWLFVBQVUsRUFBRSxDQUFDO2dCQUNYLEVBQUUsRUFBRSxDQUFDO2dCQUNMLElBQUksRUFBRSxPQUFPO2dCQUNiLEdBQUcsRUFBRSxrTEFBa0w7YUFDeEwsRUFBRTtnQkFDRCxFQUFFLEVBQUUsQ0FBQztnQkFDTCxJQUFJLEVBQUUsT0FBTztnQkFDYixHQUFHLEVBQUUsK0tBQStLO2FBQ3JMLEVBQUU7Z0JBQ0QsRUFBRSxFQUFFLENBQUM7Z0JBQ0wsSUFBSSxFQUFFLE9BQU87Z0JBQ2IsR0FBRyxFQUFFLG1MQUFtTDthQUN6TCxFQUFFO2dCQUNELEVBQUUsRUFBRSxDQUFDO2dCQUNMLElBQUksRUFBRSxPQUFPO2dCQUNiLEdBQUcsRUFBRSwrS0FBK0s7YUFDckwsRUFBRTtnQkFDRCxFQUFFLEVBQUUsQ0FBQztnQkFDTCxJQUFJLEVBQUUsT0FBTztnQkFDYixHQUFHLEVBQUUsa0xBQWtMO2FBQ3hMLEVBQUU7Z0JBQ0QsRUFBRSxFQUFFLENBQUM7Z0JBQ0wsSUFBSSxFQUFFLE9BQU87Z0JBQ2IsR0FBRyxFQUFFLDhLQUE4SzthQUNwTCxFQUFFO2dCQUNELEVBQUUsRUFBRSxDQUFDO2dCQUNMLElBQUksRUFBRSxPQUFPO2dCQUNiLEdBQUcsRUFBRSw4S0FBOEs7YUFDcEwsQ0FBQztRQUNGLFFBQVEsRUFBRSxDQUFDO2dCQUNULElBQUksRUFBRSxlQUFlO2dCQUNyQixLQUFLLEVBQUUsS0FBSztnQkFDWixLQUFLLEVBQUUsR0FBRztnQkFDVixJQUFJLEVBQUUsSUFBSTthQUNYLEVBQUU7Z0JB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QUssR0FBRyxLQUFLLENBQUM7WUFDdEIsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7WUFDeEIsSUFBSSxDQUFDLE9BQVEsQ0FBQztnQkFDWixVQUFVLEVBQUUsSUFBSTthQUNqQixDQUFDLENBQUE7U0FDSDtJQUNILENBQUM7Q0FDRixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvL2luZGV4LmpzXG4vL+iOt+WPluW6lOeUqOWunuS+i1xuLy8gaW1wb3J0IHsgSU15QXBwIH0gZnJvbSAnLi4vLi4vYXBwJztcbmltcG9ydCB7IHJlcXVlc3QgfSBmcm9tICcuLi8uLi91dGlscy9yZXF1ZXN0JztcbmNvbnN0IGFwcCA9IGdldEFwcCgpO1xuUGFnZSh7XG4gIGRhdGE6IHtcbiAgICBjYXJkQ3VyOiAwLFxuICAgIHN3aXBlckxpc3Q6IFt7XG4gICAgICBpZDogMCxcbiAgICAgIHR5cGU6ICdpbWFnZScsXG4gICAgICB1cmw6ICdodHRwczovL21tYml6LnFwaWMuY24vbW1iaXpfanBnL2F6WFFtUzFIQTdrcGliTVhrOFBOU1U1NFUzQWliS0RZcnJpY0phenBPWWpBaWJhbFo3V1ZwZ1F4Mk9XVGZpYXl0cDA3RzVkUFNLbzZ3VDdJWWlhaWFwbHlDdmw5dy82NDA/d3hfZm10PWpwZWcmdHA9d2VicCZ3eGZyb209NSZ3eF9sYXp5PTEmd3hfY289MSdcbiAgICB9LCB7XG4gICAgICBpZDogMSxcbiAgICAgIHR5cGU6ICdpbWFnZScsXG4gICAgICB1cmw6ICdodHRwczovL21tYml6LnFwaWMuY24vbW1iaXpfanBnL25IZlgycGxldGZXbEVCY3FySTBpY3Fid29XYjNTUEJUVTA2bHdDbzFhaWNORk9Qa2s1eFp3UnB5MjRNaGxpYk82MjVuNVZwZGRMVkJwaWI4bU54VEVlWENEQS82NDA/d3hfZm10PWpwZWcmdHA9d2VicCZ3eGZyb209NSZ3eF9sYXp5PTEmd3hfY289MScsXG4gICAgfSwge1xuICAgICAgaWQ6IDIsXG4gICAgICB0eXBlOiAnaW1hZ2UnLFxuICAgICAgdXJsOiAnaHR0cHM6Ly9tbWJpei5xcGljLmNuL21tYml6X2pwZy9helhRbVMxSEE3a3BpYk1YazhQTlNVNTRVM0FpYktEWXJyaWJiSXNKbUFGTGZVb1FIMVJpY3VOSWw1OWZadGVpYWlid0JnZkRkeXA3eTBGQ2liYUU5YWxpY05xbzFRLzY0MD93eF9mbXQ9anBlZyZ0cD13ZWJwJnd4ZnJvbT01Jnd4X2xhenk9MSZ3eF9jbz0xJ1xuICAgIH0sIHtcbiAgICAgIGlkOiAzLFxuICAgICAgdHlwZTogJ2ltYWdlJyxcbiAgICAgIHVybDogJ2h0dHBzOi8vbW1iaXoucXBpYy5jbi9tbWJpel9qcGcvYXpYUW1TMUhBN2twaWJNWGs4UE5TVTU0VTNBaWJLRFlycmxyaE5qMDZXamw5UmRMVUVGSjNBS2Znc1lWazNjRWljNnBkNzh0QUcyU0ZLQlppYUJqV3ZCZHR3LzY0MD93eF9mbXQ9anBlZyZ0cD13ZWJwJnd4ZnJvbT01Jnd4X2xhenk9MSZ3eF9jbz0xJ1xuICAgIH0sIHtcbiAgICAgIGlkOiA0LFxuICAgICAgdHlwZTogJ2ltYWdlJyxcbiAgICAgIHVybDogJ2h0dHBzOi8vbW1iaXoucXBpYy5jbi9tbWJpel9qcGcvYXpYUW1TMUhBN2twaWJNWGs4UE5TVTU0VTNBaWJLRFlycmljSmF6cE9ZakFpYmFsWjdXVnBnUXgyT1dUZmlheXRwMDdHNWRQU0tvNndUN0lZaWFpYXBseUN2bDl3LzY0MD93eF9mbXQ9anBlZyZ0cD13ZWJwJnd4ZnJvbT01Jnd4X2xhenk9MSZ3eF9jbz0xJ1xuICAgIH0sIHtcbiAgICAgIGlkOiA1LFxuICAgICAgdHlwZTogJ2ltYWdlJyxcbiAgICAgIHVybDogJ2h0dHBzOi8vbW1iaXoucXBpYy5jbi9tbWJpel9qcGcvYXpYUW1TMUhBN2twaWJNWGs4UE5TVTU0VTNBaWJLRFlycjFjWHVDTXNibU9QbXFPWlczQnk5VjY1dW9tWUFoS1NWc2pHazVvU3UyM3B0SzNLVGVpYjk1TWcvNjQwP3d4X2ZtdD1qcGVnJnRwPXdlYnAmd3hmcm9tPTUmd3hfbGF6eT0xJnd4X2NvPTEnXG4gICAgfSwge1xuICAgICAgaWQ6IDYsXG4gICAgICB0eXBlOiAnaW1hZ2UnLFxuICAgICAgdXJsOiAnaHR0cHM6Ly9tbWJpei5xcGljLmNuL21tYml6X2pwZy9helhRbVMxSEE3a3BpYk1YazhQTlNVNTRVM0FpYktEWXJyeGU4Nko0c3MzYUhYZHNMMm9xb29lb2tIY0pyQmRpY1hYY09zQ2JVS1ZyTG16UzNjSThBZHdody82NDA/d3hfZm10PWpwZWcmdHA9d2VicCZ3eGZyb209NSZ3eF9sYXp5PTEmd3hfY289MSdcbiAgICB9XSxcbiAgICBpY29uTGlzdDogW3tcbiAgICAgIGljb246ICdjYXJkYm9hcmRmaWxsJyxcbiAgICAgIGNvbG9yOiAncmVkJyxcbiAgICAgIGJhZGdlOiAxMjAsXG4gICAgICBuYW1lOiAnVlInXG4gICAgfSwge1xuICAgICAgaWNvbjogJ3JlY29yZGZpbGwnLFxuICAgICAgY29sb3I6ICdvcmFuZ2UnLFxuICAgICAgYmFkZ2U6IDEsXG4gICAgICBuYW1lOiAn5b2V5YOPJ1xuICAgIH0sIHtcbiAgICAgIGljb246ICdwaWNmaWxsJyxcbiAgICAgIGNvbG9yOiAneWVsbG93JyxcbiAgICAgIGJhZGdlOiAwLFxuICAgICAgbmFtZTogJ+WbvuWDjydcbiAgICB9LCB7XG4gICAgICBpY29uOiAnbm90aWNlZmlsbCcsXG4gICAgICBjb2xvcjogJ29saXZlJyxcbiAgICAgIGJhZGdlOiAyMixcbiAgICAgIG5hbWU6ICfpgJrnn6UnXG4gICAgfSwge1xuICAgICAgaWNvbjogJ3Vwc3RhZ2VmaWxsJyxcbiAgICAgIGNvbG9yOiAnY3lhbicsXG4gICAgICBiYWRnZTogMCxcbiAgICAgIG5hbWU6ICfmjpLooYzmppwnXG4gICAgfSwge1xuICAgICAgaWNvbjogJ2Nsb3RoZXNmaWxsJyxcbiAgICAgIGNvbG9yOiAnYmx1ZScsXG4gICAgICBiYWRnZTogMCxcbiAgICAgIG5hbWU6ICfnmq7ogqQnXG4gICAgfSwge1xuICAgICAgaWNvbjogJ2Rpc2NvdmVyZmlsbCcsXG4gICAgICBjb2xvcjogJ3B1cnBsZScsXG4gICAgICBiYWRnZTogMCxcbiAgICAgIG5hbWU6ICflj5HnjrAnXG4gICAgfSwge1xuICAgICAgaWNvbjogJ3F1ZXN0aW9uZmlsbCcsXG4gICAgICBjb2xvcjogJ21hdXZlJyxcbiAgICAgIGJhZGdlOiAwLFxuICAgICAgbmFtZTogJ+W4ruWKqSdcbiAgICB9LCB7XG4gICAgICBpY29uOiAnY29tbWFuZGZpbGwnLFxuICAgICAgY29sb3I6ICdwdXJwbGUnLFxuICAgICAgYmFkZ2U6IDAsXG4gICAgICBuYW1lOiAn6Zeu562UJ1xuICAgIH0sIHtcbiAgICAgIGljb246ICdicmFuZGZpbGwnLFxuICAgICAgY29sb3I6ICdtYXV2ZScsXG4gICAgICBiYWRnZTogMCxcbiAgICAgIG5hbWU6ICfniYjmnYMnXG4gICAgfV0sXG4gICAgZ3JpZENvbDogNCxcbiAgICBza2luOiBmYWxzZSxcbiAgICBjdXJyZW50UGFnZTogMSxcbiAgICB0b3RhbERhdGE6IFtdLFxuICAgIGlzRW5kOiBmYWxzZSxcbiAgICBsZWZ0RGF0YTogW10sXG4gICAgcmlnaHREYXRhOiBbXSxcblxuICB9LFxuICAvL+S6i+S7tuWkhOeQhuWHveaVsFxuICBvbkxvYWQoKSB7XG4gICAgdGhpcy50b3dlclN3aXBlcignc3dpcGVyTGlzdCcpO1xuICAgIHRoaXMuc2V0RGF0YSEoe1xuICAgICAgY3VycmVudFBhZ2U6IDEsXG4gICAgICB0b3RhbERhdGE6IFtdLFxuICAgICAgaXNFbmQ6IGZhbHNlLFxuICAgIH0pO1xuICAgIHRoaXMuZ2V0U2Vhc29uRm9vZCh0aGlzLmRhdGEuY3VycmVudFBhZ2UpO1xuICB9LFxuICAvKipcbiAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouWIneasoea4suafk+WujOaIkFxuICAqL1xuICBvblJlYWR5OiBmdW5jdGlvbiAoKSB7XG4gIH0sXG4gIC8vIOiOt+WPlui9ruaSreWbvuaVsOaNrlxuICBhc3luYyBnZXRTd2lwZXJMaXN0KCkge1xuICAgIC8vIC9ob21lL3N3aXBlcmRhdGFcbiAgICBjb25zdCBiYXNlID0gYXBwLmdsb2JhbERhdGEuaG9tZUJhc2VVcmw7XG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcmVxdWVzdCh7IHVybDogYmFzZSArICcvaG9tZS9zd2lwZXJkYXRhJyB9KTtcbiAgICB0aGlzLnNldERhdGEhKHtcbiAgICAgIHN3aXBlckxpc3Q6IHJlc3VsdCxcbiAgICB9KVxuICB9LFxuICAvLyDojrflj5bnvo7po5/mjqjojZBcbiAgLy8gXG4gIGFzeW5jIGdldFNlYXNvbkZvb2QocGFnZU51bTogbnVtYmVyKSB7XG4gICAgLy8gP2NhbGxiYWNrPWpRdWVyeTIxNDAwMTQ0NTU4NzU2OTM4MTEzNDlfMTU5ODE0NjE2NjA0NiZmb3JtYXQ9anNvbiZ0eXBlPTImcGFnZT0zJl89MTU5ODE0Njg5NVxuICAgIGNvbnN0IGJhc2UgPSBhcHAuZ2xvYmFsRGF0YS5mb29kQmFzZVVybDtcbiAgICBjb25zdCBjYWxsYmFjayA9ICdqUXVlcnkyMTQwMDE0NDU1ODc1NjkzODExMzQ5XzE1OTgxNDYxNjYwNDYnO1xuICAgIGNvbnN0IHRpbWVzdGFtcCA9ICtEYXRlLm5vdygpO1xuICAgIGxldCByZXN1bHQ6IGFueSA9IGF3YWl0IHJlcXVlc3QoeyB1cmw6IGJhc2UgKyBgP2NhbGxiYWNrPSR7Y2FsbGJhY2t9JmZvcm1hdD1qc29uJnR5cGU9MiZwYWdlPSR7cGFnZU51bX0mXz0ke3RpbWVzdGFtcH1gIH0pO1xuICAgIHJlc3VsdCA9IHJlc3VsdC50b1N0cmluZygpLnJlcGxhY2UoY2FsbGJhY2ssICcnKTtcbiAgICByZXN1bHQgPSByZXN1bHQuc2xpY2UoMSwgcmVzdWx0Lmxlbmd0aCAtIDEpO1xuICAgIGNvbnN0IHJlcyA9IEpTT04ucGFyc2UocmVzdWx0KTtcbiAgICBjb25zdCB7IGl0ZW1zIH0gPSByZXMuZGF0YTtcbiAgICBpZiAoaXRlbXMubGVuZ3RoID09PSAwKSB7XG4gICAgICB3eC5zaG93VG9hc3Qoe1xuICAgICAgICB0aXRsZTogJ+aIkeaYr+acieW6lee6v+eahCcsXG4gICAgICB9KVxuICAgICAgdGhpcy5kYXRhLmlzRW5kID0gdHJ1ZTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5kYXRhLmN1cnJlbnRQYWdlICs9IDE7XG4gICAgY29uc3QgdG90YWxEYXRhID0gdGhpcy5kYXRhLnRvdGFsRGF0YS5jb25jYXQoaXRlbXMpO1xuICAgIHRoaXMuc2V0RGF0YSEoe1xuICAgICAgdG90YWxEYXRhLFxuICAgICAgY3VycmVudFBhZ2U6IHRoaXMuZGF0YS5jdXJyZW50UGFnZVxuICAgIH0pO1xuICAgIHRoaXMuZm9ycm1hdERhdGEodG90YWxEYXRhKTtcbiAgfSxcbiAgZm9ycm1hdERhdGEobGlzdDogYW55KSB7XG4gICAgY29uc3Qgcm93ID0gTWF0aC5jZWlsKGxpc3QubGVuZ3RoIC8gMik7XG4gICAgY29uc3QgbGVmdEFyciA9IFtdO1xuICAgIGNvbnN0IHJpZ2h0QXJyID0gW107XG4gICAgbGV0IGluZGV4ID0gMDtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJvdzsgaSsrKSB7XG4gICAgICBsZWZ0QXJyW2ldID0gbGlzdFtpbmRleF07XG4gICAgICBpbmRleCsrO1xuICAgICAgaWYgKGluZGV4ID09PSBsaXN0Lmxlbmd0aCkge2JyZWFrOyB9O1xuICAgICAgcmlnaHRBcnJbaV0gPSBsaXN0W2luZGV4XTtcbiAgICAgIGluZGV4Kys7XG4gICAgfVxuICAgIHRoaXMuc2V0RGF0YSEoe1xuICAgICAgbGVmdERhdGE6IGxlZnRBcnIsXG4gICAgICByaWdodERhdGE6IHJpZ2h0QXJyLFxuICAgIH0pXG4gIH0sXG4gIG9uUmVhY2hCb3R0b20oKSB7XG4gICAgdGhpcy5nZXRTZWFzb25Gb29kKHRoaXMuZGF0YS5jdXJyZW50UGFnZSk7XG4gIH0sXG4gIERvdFN0eWxlKGU6IGFueSkge1xuICAgIHRoaXMuc2V0RGF0YSEoe1xuICAgICAgRG90U3R5bGU6IGUuZGV0YWlsLnZhbHVlXG4gICAgfSlcbiAgfSxcbiAgLy8gY2FyZFN3aXBlclxuICBjYXJkU3dpcGVyKGU6IGFueSkge1xuICAgIHRoaXMuc2V0RGF0YSEoe1xuICAgICAgY2FyZEN1cjogZS5kZXRhaWwuY3VycmVudFxuICAgIH0pXG4gIH0sXG4gIC8vIHRvd2VyU3dpcGVyXG4gIC8vIOWIneWni+WMlnRvd2VyU3dpcGVyXG4gIHRvd2VyU3dpcGVyKG5hbWU6IHN0cmluZykge1xuICAgIGxldCBsaXN0ID0gdGhpcy5kYXRhW25hbWVdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgbGlzdFtpXS56SW5kZXggPSBwYXJzZUludChsaXN0Lmxlbmd0aCAvIDIpICsgMSAtIE1hdGguYWJzKGkgLSBwYXJzZUludChsaXN0Lmxlbmd0aCAvIDIpKVxuICAgICAgbGlzdFtpXS5tTGVmdCA9IGkgLSBwYXJzZUludChsaXN0Lmxlbmd0aCAvIDIpXG4gICAgfVxuICAgIHRoaXMuc2V0RGF0YSEoe1xuICAgICAgc3dpcGVyTGlzdDogbGlzdFxuICAgIH0pXG4gIH0sXG4gIC8vIHRvd2VyU3dpcGVy6Kem5pG45byA5aeLXG4gIHRvd2VyU3RhcnQoZTogYW55KSB7XG4gICAgdGhpcy5zZXREYXRhISh7XG4gICAgICB0b3dlclN0YXJ0OiBlLnRvdWNoZXNbMF0ucGFnZVhcbiAgICB9KVxuICB9LFxuICAvLyB0b3dlclN3aXBlcuiuoeeul+aWueWQkVxuICB0b3dlck1vdmUoZTogYW55KSB7XG4gICAgdGhpcy5zZXREYXRhISh7XG4gICAgICBkaXJlY3Rpb246IGUudG91Y2hlc1swXS5wYWdlWCAtIHRoaXMuZGF0YS50b3dlclN0YXJ0ID4gMCA/ICdyaWdodCcgOiAnbGVmdCdcbiAgICB9KVxuICB9LFxuICAvLyB0b3dlclN3aXBlcuiuoeeul+a7muWKqFxuICB0b3dlckVuZChlOiBhbnkpIHtcbiAgICBsZXQgZGlyZWN0aW9uID0gdGhpcy5kYXRhLmRpcmVjdGlvbjtcbiAgICBsZXQgbGlzdCA9IHRoaXMuZGF0YS5zd2lwZXJMaXN0O1xuICAgIGlmIChkaXJlY3Rpb24gPT0gJ3JpZ2h0Jykge1xuICAgICAgbGV0IG1MZWZ0ID0gbGlzdFswXS5tTGVmdDtcbiAgICAgIGxldCB6SW5kZXggPSBsaXN0WzBdLnpJbmRleDtcbiAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICBsaXN0W2kgLSAxXS5tTGVmdCA9IGxpc3RbaV0ubUxlZnRcbiAgICAgICAgbGlzdFtpIC0gMV0uekluZGV4ID0gbGlzdFtpXS56SW5kZXhcbiAgICAgIH1cbiAgICAgIGxpc3RbbGlzdC5sZW5ndGggLSAxXS5tTGVmdCA9IG1MZWZ0O1xuICAgICAgbGlzdFtsaXN0Lmxlbmd0aCAtIDFdLnpJbmRleCA9IHpJbmRleDtcbiAgICAgIHRoaXMuc2V0RGF0YSEoe1xuICAgICAgICBzd2lwZXJMaXN0OiBsaXN0XG4gICAgICB9KVxuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgbUxlZnQgPSBsaXN0W2xpc3QubGVuZ3RoIC0gMV0ubUxlZnQ7XG4gICAgICBsZXQgekluZGV4ID0gbGlzdFtsaXN0Lmxlbmd0aCAtIDFdLnpJbmRleDtcbiAgICAgIGZvciAobGV0IGkgPSBsaXN0Lmxlbmd0aCAtIDE7IGkgPiAwOyBpLS0pIHtcbiAgICAgICAgbGlzdFtpXS5tTGVmdCA9IGxpc3RbaSAtIDFdLm1MZWZ0XG4gICAgICAgIGxpc3RbaV0uekluZGV4ID0gbGlzdFtpIC0gMV0uekluZGV4XG4gICAgICB9XG4gICAgICBsaXN0WzBdLm1MZWZ0ID0gbUxlZnQ7XG4gICAgICBsaXN0WzBdLnpJbmRleCA9IHpJbmRleDtcbiAgICAgIHRoaXMuc2V0RGF0YSEoe1xuICAgICAgICBzd2lwZXJMaXN0OiBsaXN0XG4gICAgICB9KVxuICAgIH1cbiAgfVxufSlcbiJdfQ==