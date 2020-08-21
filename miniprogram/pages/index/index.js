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
        gridCol: 4,
        skin: false,
        categories: [],
        floorList: [],
    },
    onLoad: function () {
        this.towerSwiper('swiperList');
        this.getFloorList();
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
    getNavigatorList: function () {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, request_1.request({ url: '/home/catitems' })];
                    case 1:
                        result = _a.sent();
                        this.setData({
                            categories: result,
                        });
                        return [2];
                }
            });
        });
    },
    getFloorList: function () {
        return __awaiter(this, void 0, void 0, function () {
            var base, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        base = app.globalData.homeBaseUrl;
                        return [4, request_1.request({ url: base + '/home/floordata' })];
                    case 1:
                        result = _a.sent();
                        this.setData({
                            floorList: result.message,
                        });
                        return [2];
                }
            });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUdBLCtDQUE4QztBQUM5QyxJQUFNLEdBQUcsR0FBRyxNQUFNLEVBQUUsQ0FBQztBQUNyQixJQUFJLENBQUM7SUFDRCxJQUFJLEVBQUU7UUFDRixPQUFPLEVBQUUsQ0FBQztRQUNWLFVBQVUsRUFBRSxDQUFDO2dCQUNiLEVBQUUsRUFBRSxDQUFDO2dCQUNMLElBQUksRUFBRSxPQUFPO2dCQUNiLEdBQUcsRUFBRSxrRUFBa0U7YUFDdEUsRUFBRTtnQkFDSCxFQUFFLEVBQUUsQ0FBQztnQkFDRCxJQUFJLEVBQUUsT0FBTztnQkFDYixHQUFHLEVBQUUsa0VBQWtFO2FBQzFFLEVBQUU7Z0JBQ0gsRUFBRSxFQUFFLENBQUM7Z0JBQ0wsSUFBSSxFQUFFLE9BQU87Z0JBQ2IsR0FBRyxFQUFFLGtFQUFrRTthQUN0RSxFQUFFO2dCQUNILEVBQUUsRUFBRSxDQUFDO2dCQUNMLElBQUksRUFBRSxPQUFPO2dCQUNiLEdBQUcsRUFBRSxrRUFBa0U7YUFDdEUsRUFBRTtnQkFDSCxFQUFFLEVBQUUsQ0FBQztnQkFDTCxJQUFJLEVBQUUsT0FBTztnQkFDYixHQUFHLEVBQUUsa0VBQWtFO2FBQ3RFLEVBQUU7Z0JBQ0gsRUFBRSxFQUFFLENBQUM7Z0JBQ0wsSUFBSSxFQUFFLE9BQU87Z0JBQ2IsR0FBRyxFQUFFLGtFQUFrRTthQUN0RSxFQUFFO2dCQUNILEVBQUUsRUFBRSxDQUFDO2dCQUNMLElBQUksRUFBRSxPQUFPO2dCQUNiLEdBQUcsRUFBRSxrRUFBa0U7YUFDdEUsQ0FBQztRQUNGLFFBQVEsRUFBRSxDQUFDO2dCQUNULElBQUksRUFBRSxlQUFlO2dCQUNyQixLQUFLLEVBQUUsS0FBSztnQkFDWixLQUFLLEVBQUUsR0FBRztnQkFDVixJQUFJLEVBQUUsSUFBSTthQUNYLEVBQUU7Z0JB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QUMsQ0FBQyxLQUFLLENBQUM7WUFDeEMsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDO1lBQzFDLEtBQUssSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFDeEMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQTtnQkFDakMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQTthQUNwQztZQUNELElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1lBQ3RCLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1lBQ3hCLElBQUksQ0FBQyxPQUFRLENBQUM7Z0JBQ1osVUFBVSxFQUFFLElBQUk7YUFDakIsQ0FBQyxDQUFBO1NBQ0g7SUFDSCxDQUFDO0NBQ04sQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLy9pbmRleC5qc1xuLy/ojrflj5blupTnlKjlrp7kvotcbi8vIGltcG9ydCB7IElNeUFwcCB9IGZyb20gJy4uLy4uL2FwcCc7XG5pbXBvcnQgeyByZXF1ZXN0IH0gZnJvbSAnLi4vLi4vdXRpbHMvcmVxdWVzdCc7XG5jb25zdCBhcHAgPSBnZXRBcHAoKTtcblBhZ2Uoe1xuICAgIGRhdGE6IHtcbiAgICAgICAgY2FyZEN1cjogMCxcbiAgICAgICAgc3dpcGVyTGlzdDogW3tcbiAgICAgICAgaWQ6IDAsXG4gICAgICAgIHR5cGU6ICdpbWFnZScsXG4gICAgICAgIHVybDogJ2h0dHBzOi8vb3Nzd2ViLWltZy5xcS5jb20vaW1hZ2VzL2xvbC93ZWIyMDEzMTAvc2tpbi9iaWc4NDAwMC5qcGcnXG4gICAgICAgIH0sIHtcbiAgICAgICAgaWQ6IDEsXG4gICAgICAgICAgICB0eXBlOiAnaW1hZ2UnLFxuICAgICAgICAgICAgdXJsOiAnaHR0cHM6Ly9vc3N3ZWItaW1nLnFxLmNvbS9pbWFnZXMvbG9sL3dlYjIwMTMxMC9za2luL2JpZzg0MDAxLmpwZycsXG4gICAgICAgIH0sIHtcbiAgICAgICAgaWQ6IDIsXG4gICAgICAgIHR5cGU6ICdpbWFnZScsXG4gICAgICAgIHVybDogJ2h0dHBzOi8vb3Nzd2ViLWltZy5xcS5jb20vaW1hZ2VzL2xvbC93ZWIyMDEzMTAvc2tpbi9iaWczOTAwMC5qcGcnXG4gICAgICAgIH0sIHtcbiAgICAgICAgaWQ6IDMsXG4gICAgICAgIHR5cGU6ICdpbWFnZScsXG4gICAgICAgIHVybDogJ2h0dHBzOi8vb3Nzd2ViLWltZy5xcS5jb20vaW1hZ2VzL2xvbC93ZWIyMDEzMTAvc2tpbi9iaWcxMDAwMS5qcGcnXG4gICAgICAgIH0sIHtcbiAgICAgICAgaWQ6IDQsXG4gICAgICAgIHR5cGU6ICdpbWFnZScsXG4gICAgICAgIHVybDogJ2h0dHBzOi8vb3Nzd2ViLWltZy5xcS5jb20vaW1hZ2VzL2xvbC93ZWIyMDEzMTAvc2tpbi9iaWcyNTAxMS5qcGcnXG4gICAgICAgIH0sIHtcbiAgICAgICAgaWQ6IDUsXG4gICAgICAgIHR5cGU6ICdpbWFnZScsXG4gICAgICAgIHVybDogJ2h0dHBzOi8vb3Nzd2ViLWltZy5xcS5jb20vaW1hZ2VzL2xvbC93ZWIyMDEzMTAvc2tpbi9iaWcyMTAxNi5qcGcnXG4gICAgICAgIH0sIHtcbiAgICAgICAgaWQ6IDYsXG4gICAgICAgIHR5cGU6ICdpbWFnZScsXG4gICAgICAgIHVybDogJ2h0dHBzOi8vb3Nzd2ViLWltZy5xcS5jb20vaW1hZ2VzL2xvbC93ZWIyMDEzMTAvc2tpbi9iaWc5OTAwOC5qcGcnXG4gICAgICAgIH1dLFxuICAgICAgICBpY29uTGlzdDogW3tcbiAgICAgICAgICBpY29uOiAnY2FyZGJvYXJkZmlsbCcsXG4gICAgICAgICAgY29sb3I6ICdyZWQnLFxuICAgICAgICAgIGJhZGdlOiAxMjAsXG4gICAgICAgICAgbmFtZTogJ1ZSJ1xuICAgICAgICB9LCB7XG4gICAgICAgICAgaWNvbjogJ3JlY29yZGZpbGwnLFxuICAgICAgICAgIGNvbG9yOiAnb3JhbmdlJyxcbiAgICAgICAgICBiYWRnZTogMSxcbiAgICAgICAgICBuYW1lOiAn5b2V5YOPJ1xuICAgICAgICB9LCB7XG4gICAgICAgICAgaWNvbjogJ3BpY2ZpbGwnLFxuICAgICAgICAgIGNvbG9yOiAneWVsbG93JyxcbiAgICAgICAgICBiYWRnZTogMCxcbiAgICAgICAgICBuYW1lOiAn5Zu+5YOPJ1xuICAgICAgICB9LCB7XG4gICAgICAgICAgaWNvbjogJ25vdGljZWZpbGwnLFxuICAgICAgICAgIGNvbG9yOiAnb2xpdmUnLFxuICAgICAgICAgIGJhZGdlOiAyMixcbiAgICAgICAgICBuYW1lOiAn6YCa55+lJ1xuICAgICAgICB9LCB7XG4gICAgICAgICAgaWNvbjogJ3Vwc3RhZ2VmaWxsJyxcbiAgICAgICAgICBjb2xvcjogJ2N5YW4nLFxuICAgICAgICAgIGJhZGdlOiAwLFxuICAgICAgICAgIG5hbWU6ICfmjpLooYzmppwnXG4gICAgICAgIH0sIHtcbiAgICAgICAgICBpY29uOiAnY2xvdGhlc2ZpbGwnLFxuICAgICAgICAgIGNvbG9yOiAnYmx1ZScsXG4gICAgICAgICAgYmFkZ2U6IDAsXG4gICAgICAgICAgbmFtZTogJ+earuiCpCdcbiAgICAgICAgfSwge1xuICAgICAgICAgIGljb246ICdkaXNjb3ZlcmZpbGwnLFxuICAgICAgICAgIGNvbG9yOiAncHVycGxlJyxcbiAgICAgICAgICBiYWRnZTogMCxcbiAgICAgICAgICBuYW1lOiAn5Y+R546wJ1xuICAgICAgICB9LCB7XG4gICAgICAgICAgaWNvbjogJ3F1ZXN0aW9uZmlsbCcsXG4gICAgICAgICAgY29sb3I6ICdtYXV2ZScsXG4gICAgICAgICAgYmFkZ2U6IDAsXG4gICAgICAgICAgbmFtZTogJ+W4ruWKqSdcbiAgICAgICAgfSwge1xuICAgICAgICAgIGljb246ICdjb21tYW5kZmlsbCcsXG4gICAgICAgICAgY29sb3I6ICdwdXJwbGUnLFxuICAgICAgICAgIGJhZGdlOiAwLFxuICAgICAgICAgIG5hbWU6ICfpl67nrZQnXG4gICAgICAgIH0sIHtcbiAgICAgICAgICBpY29uOiAnYnJhbmRmaWxsJyxcbiAgICAgICAgICBjb2xvcjogJ21hdXZlJyxcbiAgICAgICAgICBiYWRnZTogMCxcbiAgICAgICAgICBuYW1lOiAn54mI5p2DJ1xuICAgICAgICB9XSxcbiAgICAgICAgZ3JpZENvbDo0LFxuICAgICAgICBza2luOiBmYWxzZVxuICAgICAgICAvLyDlr7zoiKog5pWw57uEXG4gICAgICAgIGNhdGVnb3JpZXM6IFtdLFxuICAgICAgICBmbG9vckxpc3Q6IFtdLFxuICAgIH0sXG4gICAgLy/kuovku7blpITnkIblh73mlbBcbiAgICBvbkxvYWQoKSB7XG4gICAgICAgIHRoaXMudG93ZXJTd2lwZXIoJ3N3aXBlckxpc3QnKTtcbiAgICAgICAgLy8gdGhpcy5nZXRTd2lwZXJMaXN0KCk7XG4gICAgICAgIC8vIHRoaXMuZ2V0TmF2aWdhdG9yTGlzdCgpO1xuICAgICAgICB0aGlzLmdldEZsb29yTGlzdCgpO1xuICAgIH0sXG4gICAgLyoqXG4gICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouWIneasoea4suafk+WujOaIkFxuICAgICovXG4gICAgb25SZWFkeTogZnVuY3Rpb24gKCkge1xuICAgIH0sXG4gICAgLy8g6I635Y+W6L2u5pKt5Zu+5pWw5o2uXG4gICAgYXN5bmMgZ2V0U3dpcGVyTGlzdCgpe1xuICAgICAgICAvLyAvaG9tZS9zd2lwZXJkYXRhXG4gICAgICAgIGNvbnN0IGJhc2UgPSBhcHAuZ2xvYmFsRGF0YS5ob21lQmFzZVVybDtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcmVxdWVzdCh7IHVybDogYmFzZSArICcvaG9tZS9zd2lwZXJkYXRhJyB9KTtcbiAgICAgICAgdGhpcy5zZXREYXRhISh7XG4gICAgICAgICAgICBzd2lwZXJMaXN0OiByZXN1bHQsXG4gICAgICAgIH0pXG4gICAgfSxcbiAgICAvLyDojrflj5bliIbnsbvlr7zoiKrmlbDmja5cbiAgICBhc3luYyBnZXROYXZpZ2F0b3JMaXN0KCl7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHJlcXVlc3QoeyB1cmw6ICcvaG9tZS9jYXRpdGVtcycgfSk7XG4gICAgICAgIHRoaXMuc2V0RGF0YSEoe1xuICAgICAgICAgICAgY2F0ZWdvcmllczogcmVzdWx0LFxuICAgICAgICB9KVxuICAgIH0sXG4gICAgLy8g6I635Y+W5qW85bGC5pWw5o2uXG4gICAgYXN5bmMgZ2V0Rmxvb3JMaXN0KCl7XG4gICAgICBjb25zdCBiYXNlID0gYXBwLmdsb2JhbERhdGEuaG9tZUJhc2VVcmw7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHJlcXVlc3QoeyB1cmw6IGJhc2UgKyAnL2hvbWUvZmxvb3JkYXRhJyB9KTtcbiAgICAgICAgdGhpcy5zZXREYXRhISh7XG4gICAgICAgICAgICBmbG9vckxpc3Q6IHJlc3VsdC5tZXNzYWdlLFxuICAgICAgICB9KVxuICAgIH0sXG4gICAgRG90U3R5bGUoZTogYW55KSB7XG4gICAgICAgIHRoaXMuc2V0RGF0YSEoe1xuICAgICAgICAgIERvdFN0eWxlOiBlLmRldGFpbC52YWx1ZVxuICAgICAgICB9KVxuICAgICAgfSxcbiAgICAgIC8vIGNhcmRTd2lwZXJcbiAgICAgIGNhcmRTd2lwZXIoZTogYW55KSB7XG4gICAgICAgIHRoaXMuc2V0RGF0YSEoe1xuICAgICAgICAgIGNhcmRDdXI6IGUuZGV0YWlsLmN1cnJlbnRcbiAgICAgICAgfSlcbiAgICAgIH0sXG4gICAgICAvLyB0b3dlclN3aXBlclxuICAgICAgLy8g5Yid5aeL5YyWdG93ZXJTd2lwZXJcbiAgICAgIHRvd2VyU3dpcGVyKG5hbWU6IHN0cmluZykge1xuICAgICAgICBsZXQgbGlzdCA9IHRoaXMuZGF0YVtuYW1lXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgbGlzdFtpXS56SW5kZXggPSBwYXJzZUludChsaXN0Lmxlbmd0aCAvIDIpICsgMSAtIE1hdGguYWJzKGkgLSBwYXJzZUludChsaXN0Lmxlbmd0aCAvIDIpKVxuICAgICAgICAgIGxpc3RbaV0ubUxlZnQgPSBpIC0gcGFyc2VJbnQobGlzdC5sZW5ndGggLyAyKVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2V0RGF0YSEoe1xuICAgICAgICAgIHN3aXBlckxpc3Q6IGxpc3RcbiAgICAgICAgfSlcbiAgICAgIH0sXG4gICAgICAvLyB0b3dlclN3aXBlcuinpuaRuOW8gOWni1xuICAgICAgdG93ZXJTdGFydChlOiBhbnkpIHtcbiAgICAgICAgdGhpcy5zZXREYXRhISh7XG4gICAgICAgICAgdG93ZXJTdGFydDogZS50b3VjaGVzWzBdLnBhZ2VYXG4gICAgICAgIH0pXG4gICAgICB9LFxuICAgICAgLy8gdG93ZXJTd2lwZXLorqHnrpfmlrnlkJFcbiAgICAgIHRvd2VyTW92ZShlOiBhbnkpIHtcbiAgICAgICAgdGhpcy5zZXREYXRhISh7XG4gICAgICAgICAgZGlyZWN0aW9uOiBlLnRvdWNoZXNbMF0ucGFnZVggLSB0aGlzLmRhdGEudG93ZXJTdGFydCA+IDAgPyAncmlnaHQnIDogJ2xlZnQnXG4gICAgICAgIH0pXG4gICAgICB9LFxuICAgICAgLy8gdG93ZXJTd2lwZXLorqHnrpfmu5rliqhcbiAgICAgIHRvd2VyRW5kKGU6IGFueSkge1xuICAgICAgICBsZXQgZGlyZWN0aW9uID0gdGhpcy5kYXRhLmRpcmVjdGlvbjtcbiAgICAgICAgbGV0IGxpc3QgPSB0aGlzLmRhdGEuc3dpcGVyTGlzdDtcbiAgICAgICAgaWYgKGRpcmVjdGlvbiA9PSAncmlnaHQnKSB7XG4gICAgICAgICAgbGV0IG1MZWZ0ID0gbGlzdFswXS5tTGVmdDtcbiAgICAgICAgICBsZXQgekluZGV4ID0gbGlzdFswXS56SW5kZXg7XG4gICAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsaXN0W2kgLSAxXS5tTGVmdCA9IGxpc3RbaV0ubUxlZnRcbiAgICAgICAgICAgIGxpc3RbaSAtIDFdLnpJbmRleCA9IGxpc3RbaV0uekluZGV4XG4gICAgICAgICAgfVxuICAgICAgICAgIGxpc3RbbGlzdC5sZW5ndGggLSAxXS5tTGVmdCA9IG1MZWZ0O1xuICAgICAgICAgIGxpc3RbbGlzdC5sZW5ndGggLSAxXS56SW5kZXggPSB6SW5kZXg7XG4gICAgICAgICAgdGhpcy5zZXREYXRhISh7XG4gICAgICAgICAgICBzd2lwZXJMaXN0OiBsaXN0XG4gICAgICAgICAgfSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBsZXQgbUxlZnQgPSBsaXN0W2xpc3QubGVuZ3RoIC0gMV0ubUxlZnQ7XG4gICAgICAgICAgbGV0IHpJbmRleCA9IGxpc3RbbGlzdC5sZW5ndGggLSAxXS56SW5kZXg7XG4gICAgICAgICAgZm9yIChsZXQgaSA9IGxpc3QubGVuZ3RoIC0gMTsgaSA+IDA7IGktLSkge1xuICAgICAgICAgICAgbGlzdFtpXS5tTGVmdCA9IGxpc3RbaSAtIDFdLm1MZWZ0XG4gICAgICAgICAgICBsaXN0W2ldLnpJbmRleCA9IGxpc3RbaSAtIDFdLnpJbmRleFxuICAgICAgICAgIH1cbiAgICAgICAgICBsaXN0WzBdLm1MZWZ0ID0gbUxlZnQ7XG4gICAgICAgICAgbGlzdFswXS56SW5kZXggPSB6SW5kZXg7XG4gICAgICAgICAgdGhpcy5zZXREYXRhISh7XG4gICAgICAgICAgICBzd2lwZXJMaXN0OiBsaXN0XG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfVxufSlcbiJdfQ==