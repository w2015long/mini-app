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
        this.getNavigatorList();
        this.getFloorList();
    },
    onReady: function () {
    },
    getSwiperList: function () {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, request_1.request({ url: '/home/swiperdata' })];
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
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, request_1.request({ url: '/home/floordata' })];
                    case 1:
                        result = _a.sent();
                        this.setData({
                            floorList: result,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUdBLCtDQUE4QztBQUU5QyxJQUFJLENBQUM7SUFDRCxJQUFJLEVBQUU7UUFDRixPQUFPLEVBQUUsQ0FBQztRQUNWLFVBQVUsRUFBRSxDQUFDO2dCQUNiLEVBQUUsRUFBRSxDQUFDO2dCQUNMLElBQUksRUFBRSxPQUFPO2dCQUNiLEdBQUcsRUFBRSxrRUFBa0U7YUFDdEUsRUFBRTtnQkFDSCxFQUFFLEVBQUUsQ0FBQztnQkFDRCxJQUFJLEVBQUUsT0FBTztnQkFDYixHQUFHLEVBQUUsa0VBQWtFO2FBQzFFLEVBQUU7Z0JBQ0gsRUFBRSxFQUFFLENBQUM7Z0JBQ0wsSUFBSSxFQUFFLE9BQU87Z0JBQ2IsR0FBRyxFQUFFLGtFQUFrRTthQUN0RSxFQUFFO2dCQUNILEVBQUUsRUFBRSxDQUFDO2dCQUNMLElBQUksRUFBRSxPQUFPO2dCQUNiLEdBQUcsRUFBRSxrRUFBa0U7YUFDdEUsRUFBRTtnQkFDSCxFQUFFLEVBQUUsQ0FBQztnQkFDTCxJQUFJLEVBQUUsT0FBTztnQkFDYixHQUFHLEVBQUUsa0VBQWtFO2FBQ3RFLEVBQUU7Z0JBQ0gsRUFBRSxFQUFFLENBQUM7Z0JBQ0wsSUFBSSxFQUFFLE9BQU87Z0JBQ2IsR0FBRyxFQUFFLGtFQUFrRTthQUN0RSxFQUFFO2dCQUNILEVBQUUsRUFBRSxDQUFDO2dCQUNMLElBQUksRUFBRSxPQUFPO2dCQUNiLEdBQUcsRUFBRSxrRUFBa0U7YUFDdEUsQ0FBQztRQUNGLFFBQVEsRUFBRSxDQUFDO2dCQUNULElBQUksRUFBRSxlQUFlO2dCQUNyQixLQUFLLEVBQUUsS0FBSztnQkFDWixLQUFLLEVBQUUsR0FBRztnQkFDVixJQUFJLEVBQUUsSUFBSTthQUNYLEVBQUU7Z0JBQ0QsSUFBSSxFQUFFLFlBQVk7Z0JBQ2xCLEtBQUssRUFBRSxR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QUMsTUFBTSxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO2dCQUN4QyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFBO2dCQUNqQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFBO2FBQ3BDO1lBQ0QsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7WUFDdEIsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7WUFDeEIsSUFBSSxDQUFDLE9BQVEsQ0FBQztnQkFDWixVQUFVLEVBQUUsSUFBSTthQUNqQixDQUFDLENBQUE7U0FDSDtJQUNILENBQUM7Q0FDTixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvL2luZGV4LmpzXG4vL+iOt+WPluW6lOeUqOWunuS+i1xuLy8gaW1wb3J0IHsgSU15QXBwIH0gZnJvbSAnLi4vLi4vYXBwJztcbmltcG9ydCB7IHJlcXVlc3QgfSBmcm9tICcuLi8uLi91dGlscy9yZXF1ZXN0Jztcbi8vIGNvbnN0IGFwcCA9IGdldEFwcDxJTXlBcHA+KCk7XG5QYWdlKHtcbiAgICBkYXRhOiB7XG4gICAgICAgIGNhcmRDdXI6IDAsXG4gICAgICAgIHN3aXBlckxpc3Q6IFt7XG4gICAgICAgIGlkOiAwLFxuICAgICAgICB0eXBlOiAnaW1hZ2UnLFxuICAgICAgICB1cmw6ICdodHRwczovL29zc3dlYi1pbWcucXEuY29tL2ltYWdlcy9sb2wvd2ViMjAxMzEwL3NraW4vYmlnODQwMDAuanBnJ1xuICAgICAgICB9LCB7XG4gICAgICAgIGlkOiAxLFxuICAgICAgICAgICAgdHlwZTogJ2ltYWdlJyxcbiAgICAgICAgICAgIHVybDogJ2h0dHBzOi8vb3Nzd2ViLWltZy5xcS5jb20vaW1hZ2VzL2xvbC93ZWIyMDEzMTAvc2tpbi9iaWc4NDAwMS5qcGcnLFxuICAgICAgICB9LCB7XG4gICAgICAgIGlkOiAyLFxuICAgICAgICB0eXBlOiAnaW1hZ2UnLFxuICAgICAgICB1cmw6ICdodHRwczovL29zc3dlYi1pbWcucXEuY29tL2ltYWdlcy9sb2wvd2ViMjAxMzEwL3NraW4vYmlnMzkwMDAuanBnJ1xuICAgICAgICB9LCB7XG4gICAgICAgIGlkOiAzLFxuICAgICAgICB0eXBlOiAnaW1hZ2UnLFxuICAgICAgICB1cmw6ICdodHRwczovL29zc3dlYi1pbWcucXEuY29tL2ltYWdlcy9sb2wvd2ViMjAxMzEwL3NraW4vYmlnMTAwMDEuanBnJ1xuICAgICAgICB9LCB7XG4gICAgICAgIGlkOiA0LFxuICAgICAgICB0eXBlOiAnaW1hZ2UnLFxuICAgICAgICB1cmw6ICdodHRwczovL29zc3dlYi1pbWcucXEuY29tL2ltYWdlcy9sb2wvd2ViMjAxMzEwL3NraW4vYmlnMjUwMTEuanBnJ1xuICAgICAgICB9LCB7XG4gICAgICAgIGlkOiA1LFxuICAgICAgICB0eXBlOiAnaW1hZ2UnLFxuICAgICAgICB1cmw6ICdodHRwczovL29zc3dlYi1pbWcucXEuY29tL2ltYWdlcy9sb2wvd2ViMjAxMzEwL3NraW4vYmlnMjEwMTYuanBnJ1xuICAgICAgICB9LCB7XG4gICAgICAgIGlkOiA2LFxuICAgICAgICB0eXBlOiAnaW1hZ2UnLFxuICAgICAgICB1cmw6ICdodHRwczovL29zc3dlYi1pbWcucXEuY29tL2ltYWdlcy9sb2wvd2ViMjAxMzEwL3NraW4vYmlnOTkwMDguanBnJ1xuICAgICAgICB9XSxcbiAgICAgICAgaWNvbkxpc3Q6IFt7XG4gICAgICAgICAgaWNvbjogJ2NhcmRib2FyZGZpbGwnLFxuICAgICAgICAgIGNvbG9yOiAncmVkJyxcbiAgICAgICAgICBiYWRnZTogMTIwLFxuICAgICAgICAgIG5hbWU6ICdWUidcbiAgICAgICAgfSwge1xuICAgICAgICAgIGljb246ICdyZWNvcmRmaWxsJyxcbiAgICAgICAgICBjb2xvcjogJ29yYW5nZScsXG4gICAgICAgICAgYmFkZ2U6IDEsXG4gICAgICAgICAgbmFtZTogJ+W9leWDjydcbiAgICAgICAgfSwge1xuICAgICAgICAgIGljb246ICdwaWNmaWxsJyxcbiAgICAgICAgICBjb2xvcjogJ3llbGxvdycsXG4gICAgICAgICAgYmFkZ2U6IDAsXG4gICAgICAgICAgbmFtZTogJ+WbvuWDjydcbiAgICAgICAgfSwge1xuICAgICAgICAgIGljb246ICdub3RpY2VmaWxsJyxcbiAgICAgICAgICBjb2xvcjogJ29saXZlJyxcbiAgICAgICAgICBiYWRnZTogMjIsXG4gICAgICAgICAgbmFtZTogJ+mAmuefpSdcbiAgICAgICAgfSwge1xuICAgICAgICAgIGljb246ICd1cHN0YWdlZmlsbCcsXG4gICAgICAgICAgY29sb3I6ICdjeWFuJyxcbiAgICAgICAgICBiYWRnZTogMCxcbiAgICAgICAgICBuYW1lOiAn5o6S6KGM5qacJ1xuICAgICAgICB9LCB7XG4gICAgICAgICAgaWNvbjogJ2Nsb3RoZXNmaWxsJyxcbiAgICAgICAgICBjb2xvcjogJ2JsdWUnLFxuICAgICAgICAgIGJhZGdlOiAwLFxuICAgICAgICAgIG5hbWU6ICfnmq7ogqQnXG4gICAgICAgIH0sIHtcbiAgICAgICAgICBpY29uOiAnZGlzY292ZXJmaWxsJyxcbiAgICAgICAgICBjb2xvcjogJ3B1cnBsZScsXG4gICAgICAgICAgYmFkZ2U6IDAsXG4gICAgICAgICAgbmFtZTogJ+WPkeeOsCdcbiAgICAgICAgfSwge1xuICAgICAgICAgIGljb246ICdxdWVzdGlvbmZpbGwnLFxuICAgICAgICAgIGNvbG9yOiAnbWF1dmUnLFxuICAgICAgICAgIGJhZGdlOiAwLFxuICAgICAgICAgIG5hbWU6ICfluK7liqknXG4gICAgICAgIH0sIHtcbiAgICAgICAgICBpY29uOiAnY29tbWFuZGZpbGwnLFxuICAgICAgICAgIGNvbG9yOiAncHVycGxlJyxcbiAgICAgICAgICBiYWRnZTogMCxcbiAgICAgICAgICBuYW1lOiAn6Zeu562UJ1xuICAgICAgICB9LCB7XG4gICAgICAgICAgaWNvbjogJ2JyYW5kZmlsbCcsXG4gICAgICAgICAgY29sb3I6ICdtYXV2ZScsXG4gICAgICAgICAgYmFkZ2U6IDAsXG4gICAgICAgICAgbmFtZTogJ+eJiOadgydcbiAgICAgICAgfV0sXG4gICAgICAgIGdyaWRDb2w6NCxcbiAgICAgICAgc2tpbjogZmFsc2VcbiAgICAgICAgLy8g5a+86IiqIOaVsOe7hFxuICAgICAgICBjYXRlZ29yaWVzOiBbXSxcbiAgICAgICAgZmxvb3JMaXN0OiBbXSxcbiAgICB9LFxuICAgIC8v5LqL5Lu25aSE55CG5Ye95pWwXG4gICAgb25Mb2FkKCkge1xuICAgICAgICB0aGlzLnRvd2VyU3dpcGVyKCdzd2lwZXJMaXN0Jyk7XG4gICAgICAgIC8vIHRoaXMuZ2V0U3dpcGVyTGlzdCgpO1xuICAgICAgICB0aGlzLmdldE5hdmlnYXRvckxpc3QoKTtcbiAgICAgICAgdGhpcy5nZXRGbG9vckxpc3QoKTtcbiAgICB9LFxuICAgIC8qKlxuICAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLliJ3mrKHmuLLmn5PlrozmiJBcbiAgICAqL1xuICAgIG9uUmVhZHk6IGZ1bmN0aW9uICgpIHtcbiAgICB9LFxuICAgIC8vIOiOt+WPlui9ruaSreWbvuaVsOaNrlxuICAgIGFzeW5jIGdldFN3aXBlckxpc3QoKXtcbiAgICAgICAgLy8gL2hvbWUvc3dpcGVyZGF0YVxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCByZXF1ZXN0KHsgdXJsOiAnL2hvbWUvc3dpcGVyZGF0YScgfSk7XG4gICAgICAgIHRoaXMuc2V0RGF0YSEoe1xuICAgICAgICAgICAgc3dpcGVyTGlzdDogcmVzdWx0LFxuICAgICAgICB9KVxuICAgIH0sXG4gICAgLy8g6I635Y+W5YiG57G75a+86Iiq5pWw5o2uXG4gICAgYXN5bmMgZ2V0TmF2aWdhdG9yTGlzdCgpe1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCByZXF1ZXN0KHsgdXJsOiAnL2hvbWUvY2F0aXRlbXMnIH0pO1xuICAgICAgICB0aGlzLnNldERhdGEhKHtcbiAgICAgICAgICAgIGNhdGVnb3JpZXM6IHJlc3VsdCxcbiAgICAgICAgfSlcbiAgICB9LFxuICAgIC8vIOiOt+WPlualvOWxguaVsOaNrlxuICAgIGFzeW5jIGdldEZsb29yTGlzdCgpe1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCByZXF1ZXN0KHsgdXJsOiAnL2hvbWUvZmxvb3JkYXRhJyB9KTtcbiAgICAgICAgdGhpcy5zZXREYXRhISh7XG4gICAgICAgICAgICBmbG9vckxpc3Q6IHJlc3VsdCxcbiAgICAgICAgfSlcbiAgICB9LFxuICAgIERvdFN0eWxlKGU6IGFueSkge1xuICAgICAgICB0aGlzLnNldERhdGEhKHtcbiAgICAgICAgICBEb3RTdHlsZTogZS5kZXRhaWwudmFsdWVcbiAgICAgICAgfSlcbiAgICAgIH0sXG4gICAgICAvLyBjYXJkU3dpcGVyXG4gICAgICBjYXJkU3dpcGVyKGU6IGFueSkge1xuICAgICAgICB0aGlzLnNldERhdGEhKHtcbiAgICAgICAgICBjYXJkQ3VyOiBlLmRldGFpbC5jdXJyZW50XG4gICAgICAgIH0pXG4gICAgICB9LFxuICAgICAgLy8gdG93ZXJTd2lwZXJcbiAgICAgIC8vIOWIneWni+WMlnRvd2VyU3dpcGVyXG4gICAgICB0b3dlclN3aXBlcihuYW1lOiBzdHJpbmcpIHtcbiAgICAgICAgbGV0IGxpc3QgPSB0aGlzLmRhdGFbbmFtZV07XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGxpc3RbaV0uekluZGV4ID0gcGFyc2VJbnQobGlzdC5sZW5ndGggLyAyKSArIDEgLSBNYXRoLmFicyhpIC0gcGFyc2VJbnQobGlzdC5sZW5ndGggLyAyKSlcbiAgICAgICAgICBsaXN0W2ldLm1MZWZ0ID0gaSAtIHBhcnNlSW50KGxpc3QubGVuZ3RoIC8gMilcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNldERhdGEhKHtcbiAgICAgICAgICBzd2lwZXJMaXN0OiBsaXN0XG4gICAgICAgIH0pXG4gICAgICB9LFxuICAgICAgLy8gdG93ZXJTd2lwZXLop6bmkbjlvIDlp4tcbiAgICAgIHRvd2VyU3RhcnQoZTogYW55KSB7XG4gICAgICAgIHRoaXMuc2V0RGF0YSEoe1xuICAgICAgICAgIHRvd2VyU3RhcnQ6IGUudG91Y2hlc1swXS5wYWdlWFxuICAgICAgICB9KVxuICAgICAgfSxcbiAgICAgIC8vIHRvd2VyU3dpcGVy6K6h566X5pa55ZCRXG4gICAgICB0b3dlck1vdmUoZTogYW55KSB7XG4gICAgICAgIHRoaXMuc2V0RGF0YSEoe1xuICAgICAgICAgIGRpcmVjdGlvbjogZS50b3VjaGVzWzBdLnBhZ2VYIC0gdGhpcy5kYXRhLnRvd2VyU3RhcnQgPiAwID8gJ3JpZ2h0JyA6ICdsZWZ0J1xuICAgICAgICB9KVxuICAgICAgfSxcbiAgICAgIC8vIHRvd2VyU3dpcGVy6K6h566X5rua5YqoXG4gICAgICB0b3dlckVuZChlOiBhbnkpIHtcbiAgICAgICAgbGV0IGRpcmVjdGlvbiA9IHRoaXMuZGF0YS5kaXJlY3Rpb247XG4gICAgICAgIGxldCBsaXN0ID0gdGhpcy5kYXRhLnN3aXBlckxpc3Q7XG4gICAgICAgIGlmIChkaXJlY3Rpb24gPT0gJ3JpZ2h0Jykge1xuICAgICAgICAgIGxldCBtTGVmdCA9IGxpc3RbMF0ubUxlZnQ7XG4gICAgICAgICAgbGV0IHpJbmRleCA9IGxpc3RbMF0uekluZGV4O1xuICAgICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGlzdFtpIC0gMV0ubUxlZnQgPSBsaXN0W2ldLm1MZWZ0XG4gICAgICAgICAgICBsaXN0W2kgLSAxXS56SW5kZXggPSBsaXN0W2ldLnpJbmRleFxuICAgICAgICAgIH1cbiAgICAgICAgICBsaXN0W2xpc3QubGVuZ3RoIC0gMV0ubUxlZnQgPSBtTGVmdDtcbiAgICAgICAgICBsaXN0W2xpc3QubGVuZ3RoIC0gMV0uekluZGV4ID0gekluZGV4O1xuICAgICAgICAgIHRoaXMuc2V0RGF0YSEoe1xuICAgICAgICAgICAgc3dpcGVyTGlzdDogbGlzdFxuICAgICAgICAgIH0pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbGV0IG1MZWZ0ID0gbGlzdFtsaXN0Lmxlbmd0aCAtIDFdLm1MZWZ0O1xuICAgICAgICAgIGxldCB6SW5kZXggPSBsaXN0W2xpc3QubGVuZ3RoIC0gMV0uekluZGV4O1xuICAgICAgICAgIGZvciAobGV0IGkgPSBsaXN0Lmxlbmd0aCAtIDE7IGkgPiAwOyBpLS0pIHtcbiAgICAgICAgICAgIGxpc3RbaV0ubUxlZnQgPSBsaXN0W2kgLSAxXS5tTGVmdFxuICAgICAgICAgICAgbGlzdFtpXS56SW5kZXggPSBsaXN0W2kgLSAxXS56SW5kZXhcbiAgICAgICAgICB9XG4gICAgICAgICAgbGlzdFswXS5tTGVmdCA9IG1MZWZ0O1xuICAgICAgICAgIGxpc3RbMF0uekluZGV4ID0gekluZGV4O1xuICAgICAgICAgIHRoaXMuc2V0RGF0YSEoe1xuICAgICAgICAgICAgc3dpcGVyTGlzdDogbGlzdFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH1cbn0pXG4iXX0=