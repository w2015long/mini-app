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
        swiperList: [],
    },
    onLoad: function () {
        this.getSwiperList();
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
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUdBLCtDQUE4QztBQUM5QyxJQUFNLEdBQUcsR0FBRyxNQUFNLEVBQVUsQ0FBQztBQUU3QixJQUFJLENBQUM7SUFDRCxJQUFJLEVBQUU7UUFFRixVQUFVLEVBQUUsRUFBRTtLQUNqQjtJQUVELE1BQU07UUFDRixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDekIsQ0FBQztJQUlELE9BQU8sRUFBRTtJQUNULENBQUM7SUFFSyxhQUFhLEVBQW5COzs7Ozs0QkFFbUIsV0FBTSxpQkFBTyxDQUFDLEVBQUUsR0FBRyxFQUFFLGtCQUFrQixFQUFFLENBQUMsRUFBQTs7d0JBQW5ELE1BQU0sR0FBRyxTQUEwQzt3QkFDekQsSUFBSSxDQUFDLE9BQVEsQ0FBQzs0QkFDVixVQUFVLEVBQUUsTUFBTTt5QkFDckIsQ0FBQyxDQUFBOzs7OztLQUNMO0NBQ0osQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLy9pbmRleC5qc1xuLy/ojrflj5blupTnlKjlrp7kvotcbmltcG9ydCB7IElNeUFwcCB9IGZyb20gJy4uLy4uL2FwcCc7XG5pbXBvcnQgeyByZXF1ZXN0IH0gZnJvbSAnLi4vLi4vdXRpbHMvcmVxdWVzdCc7XG5jb25zdCBhcHAgPSBnZXRBcHA8SU15QXBwPigpO1xuXG5QYWdlKHtcbiAgICBkYXRhOiB7XG4gICAgICAgIC8vIOi9ruaSreWbvuaVsOe7hFxuICAgICAgICBzd2lwZXJMaXN0OiBbXSxcbiAgICB9LFxuICAgIC8v5LqL5Lu25aSE55CG5Ye95pWwXG4gICAgb25Mb2FkKCkge1xuICAgICAgICB0aGlzLmdldFN3aXBlckxpc3QoKTtcbiAgICB9LFxuICAgIC8qKlxuICAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLliJ3mrKHmuLLmn5PlrozmiJBcbiAgICAqL1xuICAgIG9uUmVhZHk6IGZ1bmN0aW9uICgpIHtcbiAgICB9LFxuICAgIC8vIOiOt+WPlui9ruaSreWbvuaVsOaNrlxuICAgIGFzeW5jIGdldFN3aXBlckxpc3QoKXtcbiAgICAgICAgLy8gL2hvbWUvc3dpcGVyZGF0YVxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCByZXF1ZXN0KHsgdXJsOiAnL2hvbWUvc3dpcGVyZGF0YScgfSk7XG4gICAgICAgIHRoaXMuc2V0RGF0YSEoe1xuICAgICAgICAgICAgc3dpcGVyTGlzdDogcmVzdWx0LFxuICAgICAgICB9KVxuICAgIH0sXG59KVxuIl19