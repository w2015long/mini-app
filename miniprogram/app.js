"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
App({
    onLaunch: function () {
        var _this = this;
        wx.getSystemInfo({
            success: function (e) {
                _this.globalData.StatusBar = e.statusBarHeight;
                var capsule = wx.getMenuButtonBoundingClientRect();
                if (capsule) {
                    _this.globalData.Custom = capsule;
                    _this.globalData.CustomBar = capsule.bottom + capsule.top - e.statusBarHeight;
                }
                else {
                    _this.globalData.CustomBar = e.statusBarHeight + 50;
                }
            }
        });
    },
    globalData: {
        movieBaseUrl: "https://movie.douban.com/j",
        homeBaseUrl: 'https://api-hmugo-web.itheima.net/api/public/v1',
        foodBaseUrl: 'https://m.meishij.net/ajax/index_search_new.php',
        ColorList: [{
                title: '嫣红',
                name: 'red',
                color: '#e54d42'
            },
            {
                title: '桔橙',
                name: 'orange',
                color: '#f37b1d'
            },
            {
                title: '明黄',
                name: 'yellow',
                color: '#fbbd08'
            },
            {
                title: '橄榄',
                name: 'olive',
                color: '#8dc63f'
            },
            {
                title: '森绿',
                name: 'green',
                color: '#39b54a'
            },
            {
                title: '天青',
                name: 'cyan',
                color: '#1cbbb4'
            },
            {
                title: '海蓝',
                name: 'blue',
                color: '#0081ff'
            },
            {
                title: '姹紫',
                name: 'purple',
                color: '#6739b6'
            },
            {
                title: '木槿',
                name: 'mauve',
                color: '#9c26b0'
            },
            {
                title: '桃粉',
                name: 'pink',
                color: '#e03997'
            },
            {
                title: '棕褐',
                name: 'brown',
                color: '#a5673f'
            },
            {
                title: '玄灰',
                name: 'grey',
                color: '#8799a3'
            },
            {
                title: '草灰',
                name: 'gray',
                color: '#aaaaaa'
            },
            {
                title: '墨黑',
                name: 'black',
                color: '#333333'
            },
            {
                title: '雅白',
                name: 'white',
                color: '#ffffff'
            },
        ]
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBUUEsR0FBRyxDQUFDO0lBSUYsUUFBUTtRQUFSLGlCQW1CQztRQVpDLEVBQUUsQ0FBQyxhQUFhLENBQUM7WUFDZixPQUFPLEVBQUUsVUFBQSxDQUFDO2dCQUNSLEtBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxlQUFlLENBQUM7Z0JBQzlDLElBQUksT0FBTyxHQUFHLEVBQUUsQ0FBQywrQkFBK0IsRUFBRSxDQUFDO2dCQUN6RCxJQUFJLE9BQU8sRUFBRTtvQkFDWCxLQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxPQUFPLENBQUM7b0JBQ2xDLEtBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxHQUFHLE9BQU8sQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsZUFBZSxDQUFDO2lCQUM3RTtxQkFBTTtvQkFDTixLQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsZUFBZSxHQUFHLEVBQUUsQ0FBQztpQkFDbkQ7WUFDRyxDQUFDO1NBQ0YsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUVELFVBQVUsRUFBRTtRQUNWLFlBQVksRUFBQyw0QkFBNEI7UUFDekMsV0FBVyxFQUFFLGlEQUFpRDtRQUM5RCxXQUFXLEVBQUUsaURBQWlEO1FBQzlELFNBQVMsRUFBRSxDQUFDO2dCQUNSLEtBQUssRUFBRSxJQUFJO2dCQUNYLElBQUksRUFBRSxLQUFLO2dCQUNYLEtBQUssRUFBRSxTQUFTO2FBQ2pCO1lBQ0Q7Z0JBQ0UsS0FBSyxFQUFFLElBQUk7Z0JBQ1gsSUFBSSxFQUFFLFFBQVE7Z0JBQ2QsS0FBSyxFQUFFLFNBQVM7YUFDakI7WUFDRDtnQkFDRSxLQUFLLEVBQUUsSUFBSTtnQkFDWCxJQUFJLEVBQUUsUUFBUTtnQkFDZCxLQUFLLEVBQUUsU0FBUzthQUNqQjtZQUNEO2dCQUNFLEtBQUssRUFBRSxJQUFJO2dCQUNYLElBQUksRUFBRSxPQUFPO2dCQUNiLEtBQUssRUFBRSxTQUFTO2FBQ2pCO1lBQ0Q7Z0JBQ0UsS0FBSyxFQUFFLElBQUk7Z0JBQ1gsSUFBSSxFQUFFLE9BQU87Z0JBQ2IsS0FBSyxFQUFFLFNBQVM7YUFDakI7WUFDRDtnQkFDRSxLQUFLLEVBQUUsSUFBSTtnQkFDWCxJQUFJLEVBQUUsTUFBTTtnQkFDWixLQUFLLEVBQUUsU0FBUzthQUNqQjtZQUNEO2dCQUNFLEtBQUssRUFBRSxJQUFJO2dCQUNYLElBQUksRUFBRSxNQUFNO2dCQUNaLEtBQUssRUFBRSxTQUFTO2FBQ2pCO1lBQ0Q7Z0JBQ0UsS0FBSyxFQUFFLElBQUk7Z0JBQ1gsSUFBSSxFQUFFLFFBQVE7Z0JBQ2QsS0FBSyxFQUFFLFNBQVM7YUFDakI7WUFDRDtnQkFDRSxLQUFLLEVBQUUsSUFBSTtnQkFDWCxJQUFJLEVBQUUsT0FBTztnQkFDYixLQUFLLEVBQUUsU0FBUzthQUNqQjtZQUNEO2dCQUNFLEtBQUssRUFBRSxJQUFJO2dCQUNYLElBQUksRUFBRSxNQUFNO2dCQUNaLEtBQUssRUFBRSxTQUFTO2FBQ2pCO1lBQ0Q7Z0JBQ0UsS0FBSyxFQUFFLElBQUk7Z0JBQ1gsSUFBSSxFQUFFLE9BQU87Z0JBQ2IsS0FBSyxFQUFFLFNBQVM7YUFDakI7WUFDRDtnQkFDRSxLQUFLLEVBQUUsSUFBSTtnQkFDWCxJQUFJLEVBQUUsTUFBTTtnQkFDWixLQUFLLEVBQUUsU0FBUzthQUNqQjtZQUNEO2dCQUNFLEtBQUssRUFBRSxJQUFJO2dCQUNYLElBQUksRUFBRSxNQUFNO2dCQUNaLEtBQUssRUFBRSxTQUFTO2FBQ2pCO1lBQ0Q7Z0JBQ0UsS0FBSyxFQUFFLElBQUk7Z0JBQ1gsSUFBSSxFQUFFLE9BQU87Z0JBQ2IsS0FBSyxFQUFFLFNBQVM7YUFDakI7WUFDRDtnQkFDRSxLQUFLLEVBQUUsSUFBSTtnQkFDWCxJQUFJLEVBQUUsT0FBTztnQkFDYixLQUFLLEVBQUUsU0FBUzthQUNqQjtTQUNGO0tBQ0Y7Q0FDRixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvL2FwcC50c1xuZXhwb3J0IGludGVyZmFjZSBJTXlBcHAge1xuICB1c2VySW5mb1JlYWR5Q2FsbGJhY2s/KHJlczogd3guVXNlckluZm8pOiB2b2lkXG4gIGdsb2JhbERhdGE6IHtcbiAgICB1c2VySW5mbz86IHd4LlVzZXJJbmZvXG4gIH1cbn1cblxuQXBwKHtcbiAgLyoqIOeUn+WRveWRqOacn+Wbnuiwg+KAlOebkeWQrOWwj+eoi+W6j+WIneWni+WMllxuICAgKiDlsI/nqIvluo/liJ3lp4vljJblrozmiJDml7bop6blj5HvvIzlhajlsYDlj6rop6blj5HkuIDmrKHjgIJcbiAgICovXG4gIG9uTGF1bmNoKCkge1xuICAgIC8vIOWxleekuuacrOWcsOWtmOWCqOiDveWKm1xuICAgIC8vIGlmICh3eC5jbG91ZCkge1xuICAgIC8vICAgd3guY2xvdWQuaW5pdCh7XG4gICAgLy8gICAgIHRyYWNlVXNlcjogdHJ1ZVxuICAgIC8vICAgfSlcbiAgICAvLyB9XG4gICAgd3guZ2V0U3lzdGVtSW5mbyh7XG4gICAgICBzdWNjZXNzOiBlID0+IHtcbiAgICAgICAgdGhpcy5nbG9iYWxEYXRhLlN0YXR1c0JhciA9IGUuc3RhdHVzQmFySGVpZ2h0O1xuICAgICAgICBsZXQgY2Fwc3VsZSA9IHd4LmdldE1lbnVCdXR0b25Cb3VuZGluZ0NsaWVudFJlY3QoKTtcblx0XHRpZiAoY2Fwc3VsZSkge1xuXHRcdCBcdHRoaXMuZ2xvYmFsRGF0YS5DdXN0b20gPSBjYXBzdWxlO1xuXHRcdFx0dGhpcy5nbG9iYWxEYXRhLkN1c3RvbUJhciA9IGNhcHN1bGUuYm90dG9tICsgY2Fwc3VsZS50b3AgLSBlLnN0YXR1c0JhckhlaWdodDtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5nbG9iYWxEYXRhLkN1c3RvbUJhciA9IGUuc3RhdHVzQmFySGVpZ2h0ICsgNTA7XG5cdFx0fVxuICAgICAgfVxuICAgIH0pXG4gIH0sXG4gIC8vIGh0dHBzOi8vbW92aWUuZG91YmFuLmNvbS9qL3NlYXJjaF9zdWJqZWN0cz90eXBlPW1vdmllJnRhZz0mcGFnZV9saW1pdD01MCZwYWdlX3N0YXJ0PTBcbiAgZ2xvYmFsRGF0YToge1xuICAgIG1vdmllQmFzZVVybDpcImh0dHBzOi8vbW92aWUuZG91YmFuLmNvbS9qXCIsXG4gICAgaG9tZUJhc2VVcmw6ICdodHRwczovL2FwaS1obXVnby13ZWIuaXRoZWltYS5uZXQvYXBpL3B1YmxpYy92MScsIFxuICAgIGZvb2RCYXNlVXJsOiAnaHR0cHM6Ly9tLm1laXNoaWoubmV0L2FqYXgvaW5kZXhfc2VhcmNoX25ldy5waHAnLFxuICAgIENvbG9yTGlzdDogW3tcbiAgICAgICAgdGl0bGU6ICflq6PnuqInLFxuICAgICAgICBuYW1lOiAncmVkJyxcbiAgICAgICAgY29sb3I6ICcjZTU0ZDQyJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGl0bGU6ICfmoZTmqZknLFxuICAgICAgICBuYW1lOiAnb3JhbmdlJyxcbiAgICAgICAgY29sb3I6ICcjZjM3YjFkJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGl0bGU6ICfmmI7pu4QnLFxuICAgICAgICBuYW1lOiAneWVsbG93JyxcbiAgICAgICAgY29sb3I6ICcjZmJiZDA4J1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGl0bGU6ICfmqYTmpoQnLFxuICAgICAgICBuYW1lOiAnb2xpdmUnLFxuICAgICAgICBjb2xvcjogJyM4ZGM2M2YnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0aXRsZTogJ+ajrue7vycsXG4gICAgICAgIG5hbWU6ICdncmVlbicsXG4gICAgICAgIGNvbG9yOiAnIzM5YjU0YSdcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRpdGxlOiAn5aSp6Z2SJyxcbiAgICAgICAgbmFtZTogJ2N5YW4nLFxuICAgICAgICBjb2xvcjogJyMxY2JiYjQnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0aXRsZTogJ+a1t+iTnScsXG4gICAgICAgIG5hbWU6ICdibHVlJyxcbiAgICAgICAgY29sb3I6ICcjMDA4MWZmJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGl0bGU6ICflp7nntKsnLFxuICAgICAgICBuYW1lOiAncHVycGxlJyxcbiAgICAgICAgY29sb3I6ICcjNjczOWI2J1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGl0bGU6ICfmnKjmp78nLFxuICAgICAgICBuYW1lOiAnbWF1dmUnLFxuICAgICAgICBjb2xvcjogJyM5YzI2YjAnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0aXRsZTogJ+ahg+eyiScsXG4gICAgICAgIG5hbWU6ICdwaW5rJyxcbiAgICAgICAgY29sb3I6ICcjZTAzOTk3J1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGl0bGU6ICfmo5XopJAnLFxuICAgICAgICBuYW1lOiAnYnJvd24nLFxuICAgICAgICBjb2xvcjogJyNhNTY3M2YnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0aXRsZTogJ+eOhOeBsCcsXG4gICAgICAgIG5hbWU6ICdncmV5JyxcbiAgICAgICAgY29sb3I6ICcjODc5OWEzJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGl0bGU6ICfojYnngbAnLFxuICAgICAgICBuYW1lOiAnZ3JheScsXG4gICAgICAgIGNvbG9yOiAnI2FhYWFhYSdcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRpdGxlOiAn5aKo6buRJyxcbiAgICAgICAgbmFtZTogJ2JsYWNrJyxcbiAgICAgICAgY29sb3I6ICcjMzMzMzMzJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGl0bGU6ICfpm4Xnmb0nLFxuICAgICAgICBuYW1lOiAnd2hpdGUnLFxuICAgICAgICBjb2xvcjogJyNmZmZmZmYnXG4gICAgICB9LFxuICAgIF1cbiAgfVxufSkiXX0=