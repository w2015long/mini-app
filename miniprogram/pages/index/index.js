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
        swiperList: [],
        categories: [],
        floorList: [],
    },
    onLoad: function () {
        this.getSwiperList();
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
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUdBLCtDQUE4QztBQUU5QyxJQUFJLENBQUM7SUFDRCxJQUFJLEVBQUU7UUFFRixVQUFVLEVBQUUsRUFBRTtRQUVkLFVBQVUsRUFBRSxFQUFFO1FBQ2QsU0FBUyxFQUFFLEVBQUU7S0FDaEI7SUFFRCxNQUFNO1FBQ0YsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBSUQsT0FBTyxFQUFFO0lBQ1QsQ0FBQztJQUVLLGFBQWEsRUFBbkI7Ozs7OzRCQUVtQixXQUFNLGlCQUFPLENBQUMsRUFBRSxHQUFHLEVBQUUsa0JBQWtCLEVBQUUsQ0FBQyxFQUFBOzt3QkFBbkQsTUFBTSxHQUFHLFNBQTBDO3dCQUN6RCxJQUFJLENBQUMsT0FBUSxDQUFDOzRCQUNWLFVBQVUsRUFBRSxNQUFNO3lCQUNyQixDQUFDLENBQUE7Ozs7O0tBQ0w7SUFFSyxnQkFBZ0IsRUFBdEI7Ozs7OzRCQUNtQixXQUFNLGlCQUFPLENBQUMsRUFBRSxHQUFHLEVBQUUsZ0JBQWdCLEVBQUUsQ0FBQyxFQUFBOzt3QkFBakQsTUFBTSxHQUFHLFNBQXdDO3dCQUN2RCxJQUFJLENBQUMsT0FBUSxDQUFDOzRCQUNWLFVBQVUsRUFBRSxNQUFNO3lCQUNyQixDQUFDLENBQUE7Ozs7O0tBQ0w7SUFFSyxZQUFZLEVBQWxCOzs7Ozs0QkFDbUIsV0FBTSxpQkFBTyxDQUFDLEVBQUUsR0FBRyxFQUFFLGlCQUFpQixFQUFFLENBQUMsRUFBQTs7d0JBQWxELE1BQU0sR0FBRyxTQUF5Qzt3QkFDeEQsSUFBSSxDQUFDLE9BQVEsQ0FBQzs0QkFDVixTQUFTLEVBQUUsTUFBTTt5QkFDcEIsQ0FBQyxDQUFBOzs7OztLQUNMO0NBQ0osQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLy9pbmRleC5qc1xuLy/ojrflj5blupTnlKjlrp7kvotcbi8vIGltcG9ydCB7IElNeUFwcCB9IGZyb20gJy4uLy4uL2FwcCc7XG5pbXBvcnQgeyByZXF1ZXN0IH0gZnJvbSAnLi4vLi4vdXRpbHMvcmVxdWVzdCc7XG4vLyBjb25zdCBhcHAgPSBnZXRBcHA8SU15QXBwPigpO1xuUGFnZSh7XG4gICAgZGF0YToge1xuICAgICAgICAvLyDova7mkq3lm77mlbDnu4RcbiAgICAgICAgc3dpcGVyTGlzdDogW10sXG4gICAgICAgIC8vIOWvvOiIqiDmlbDnu4RcbiAgICAgICAgY2F0ZWdvcmllczogW10sXG4gICAgICAgIGZsb29yTGlzdDogW10sXG4gICAgfSxcbiAgICAvL+S6i+S7tuWkhOeQhuWHveaVsFxuICAgIG9uTG9hZCgpIHtcbiAgICAgICAgdGhpcy5nZXRTd2lwZXJMaXN0KCk7XG4gICAgICAgIHRoaXMuZ2V0TmF2aWdhdG9yTGlzdCgpO1xuICAgICAgICB0aGlzLmdldEZsb29yTGlzdCgpO1xuICAgIH0sXG4gICAgLyoqXG4gICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouWIneasoea4suafk+WujOaIkFxuICAgICovXG4gICAgb25SZWFkeTogZnVuY3Rpb24gKCkge1xuICAgIH0sXG4gICAgLy8g6I635Y+W6L2u5pKt5Zu+5pWw5o2uXG4gICAgYXN5bmMgZ2V0U3dpcGVyTGlzdCgpe1xuICAgICAgICAvLyAvaG9tZS9zd2lwZXJkYXRhXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHJlcXVlc3QoeyB1cmw6ICcvaG9tZS9zd2lwZXJkYXRhJyB9KTtcbiAgICAgICAgdGhpcy5zZXREYXRhISh7XG4gICAgICAgICAgICBzd2lwZXJMaXN0OiByZXN1bHQsXG4gICAgICAgIH0pXG4gICAgfSxcbiAgICAvLyDojrflj5bliIbnsbvlr7zoiKrmlbDmja5cbiAgICBhc3luYyBnZXROYXZpZ2F0b3JMaXN0KCl7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHJlcXVlc3QoeyB1cmw6ICcvaG9tZS9jYXRpdGVtcycgfSk7XG4gICAgICAgIHRoaXMuc2V0RGF0YSEoe1xuICAgICAgICAgICAgY2F0ZWdvcmllczogcmVzdWx0LFxuICAgICAgICB9KVxuICAgIH0sXG4gICAgLy8g6I635Y+W5qW85bGC5pWw5o2uXG4gICAgYXN5bmMgZ2V0Rmxvb3JMaXN0KCl7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHJlcXVlc3QoeyB1cmw6ICcvaG9tZS9mbG9vcmRhdGEnIH0pO1xuICAgICAgICB0aGlzLnNldERhdGEhKHtcbiAgICAgICAgICAgIGZsb29yTGlzdDogcmVzdWx0LFxuICAgICAgICB9KVxuICAgIH0sXG59KVxuIl19