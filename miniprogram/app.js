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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBUUEsR0FBRyxDQUFDO0lBSUYsUUFBUTtRQUFSLGlCQW1CQztRQVpDLEVBQUUsQ0FBQyxhQUFhLENBQUM7WUFDZixPQUFPLEVBQUUsVUFBQSxDQUFDO2dCQUNSLEtBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxlQUFlLENBQUM7Z0JBQzlDLElBQUksT0FBTyxHQUFHLEVBQUUsQ0FBQywrQkFBK0IsRUFBRSxDQUFDO2dCQUNuRCxJQUFJLE9BQU8sRUFBRTtvQkFDWCxLQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxPQUFPLENBQUM7b0JBQ2pDLEtBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxHQUFHLE9BQU8sQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsZUFBZSxDQUFDO2lCQUM5RTtxQkFBTTtvQkFDTCxLQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsZUFBZSxHQUFHLEVBQUUsQ0FBQztpQkFDcEQ7WUFDSCxDQUFDO1NBQ0YsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUVELFVBQVUsRUFBRTtRQUNWLFlBQVksRUFBQyw0QkFBNEI7UUFDekMsV0FBVyxFQUFFLGlEQUFpRDtRQUM5RCxXQUFXLEVBQUUsaURBQWlEO1FBQzlELFNBQVMsRUFBRSxDQUFDO2dCQUNSLEtBQUssRUFBRSxJQUFJO2dCQUNYLElBQUksRUFBRSxLQUFLO2dCQUNYLEtBQUssRUFBRSxTQUFTO2FBQ2pCO1lBQ0Q7Z0JBQ0UsS0FBSyxFQUFFLElBQUk7Z0JBQ1gsSUFBSSxFQUFFLFFBQVE7Z0JBQ2QsS0FBSyxFQUFFLFNBQVM7YUFDakI7WUFDRDtnQkFDRSxLQUFLLEVBQUUsSUFBSTtnQkFDWCxJQUFJLEVBQUUsUUFBUTtnQkFDZCxLQUFLLEVBQUUsU0FBUzthQUNqQjtZQUNEO2dCQUNFLEtBQUssRUFBRSxJQUFJO2dCQUNYLElBQUksRUFBRSxPQUFPO2dCQUNiLEtBQUssRUFBRSxTQUFTO2FBQ2pCO1lBQ0Q7Z0JBQ0UsS0FBSyxFQUFFLElBQUk7Z0JBQ1gsSUFBSSxFQUFFLE9BQU87Z0JBQ2IsS0FBSyxFQUFFLFNBQVM7YUFDakI7WUFDRDtnQkFDRSxLQUFLLEVBQUUsSUFBSTtnQkFDWCxJQUFJLEVBQUUsTUFBTTtnQkFDWixLQUFLLEVBQUUsU0FBUzthQUNqQjtZQUNEO2dCQUNFLEtBQUssRUFBRSxJQUFJO2dCQUNYLElBQUksRUFBRSxNQUFNO2dCQUNaLEtBQUssRUFBRSxTQUFTO2FBQ2pCO1lBQ0Q7Z0JBQ0UsS0FBSyxFQUFFLElBQUk7Z0JBQ1gsSUFBSSxFQUFFLFFBQVE7Z0JBQ2QsS0FBSyxFQUFFLFNBQVM7YUFDakI7WUFDRDtnQkFDRSxLQUFLLEVBQUUsSUFBSTtnQkFDWCxJQUFJLEVBQUUsT0FBTztnQkFDYixLQUFLLEVBQUUsU0FBUzthQUNqQjtZQUNEO2dCQUNFLEtBQUssRUFBRSxJQUFJO2dCQUNYLElBQUksRUFBRSxNQUFNO2dCQUNaLEtBQUssRUFBRSxTQUFTO2FBQ2pCO1lBQ0Q7Z0JBQ0UsS0FBSyxFQUFFLElBQUk7Z0JBQ1gsSUFBSSxFQUFFLE9BQU87Z0JBQ2IsS0FBSyxFQUFFLFNBQVM7YUFDakI7WUFDRDtnQkFDRSxLQUFLLEVBQUUsSUFBSTtnQkFDWCxJQUFJLEVBQUUsTUFBTTtnQkFDWixLQUFLLEVBQUUsU0FBUzthQUNqQjtZQUNEO2dCQUNFLEtBQUssRUFBRSxJQUFJO2dCQUNYLElBQUksRUFBRSxNQUFNO2dCQUNaLEtBQUssRUFBRSxTQUFTO2FBQ2pCO1lBQ0Q7Z0JBQ0UsS0FBSyxFQUFFLElBQUk7Z0JBQ1gsSUFBSSxFQUFFLE9BQU87Z0JBQ2IsS0FBSyxFQUFFLFNBQVM7YUFDakI7WUFDRDtnQkFDRSxLQUFLLEVBQUUsSUFBSTtnQkFDWCxJQUFJLEVBQUUsT0FBTztnQkFDYixLQUFLLEVBQUUsU0FBUzthQUNqQjtTQUNGO0tBQ0Y7Q0FDRixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvL2FwcC50c1xuZXhwb3J0IGludGVyZmFjZSBJTXlBcHAge1xuICB1c2VySW5mb1JlYWR5Q2FsbGJhY2s/KHJlczogd3guVXNlckluZm8pOiB2b2lkXG4gIGdsb2JhbERhdGE6IHtcbiAgICB1c2VySW5mbz86IHd4LlVzZXJJbmZvXG4gIH1cbn1cblxuQXBwKHtcbiAgLyoqIOeUn+WRveWRqOacn+Wbnuiwg+KAlOebkeWQrOWwj+eoi+W6j+WIneWni+WMllxuICAgKiDlsI/nqIvluo/liJ3lp4vljJblrozmiJDml7bop6blj5HvvIzlhajlsYDlj6rop6blj5HkuIDmrKHjgIJcbiAgICovXG4gIG9uTGF1bmNoKCkge1xuICAgIC8vIOWxleekuuacrOWcsOWtmOWCqOiDveWKm1xuICAgIC8vIGlmICh3eC5jbG91ZCkge1xuICAgIC8vICAgd3guY2xvdWQuaW5pdCh7XG4gICAgLy8gICAgIHRyYWNlVXNlcjogdHJ1ZVxuICAgIC8vICAgfSlcbiAgICAvLyB9XG4gICAgd3guZ2V0U3lzdGVtSW5mbyh7XG4gICAgICBzdWNjZXNzOiBlID0+IHtcbiAgICAgICAgdGhpcy5nbG9iYWxEYXRhLlN0YXR1c0JhciA9IGUuc3RhdHVzQmFySGVpZ2h0O1xuICAgICAgICBsZXQgY2Fwc3VsZSA9IHd4LmdldE1lbnVCdXR0b25Cb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgaWYgKGNhcHN1bGUpIHtcbiAgICAgICAgICB0aGlzLmdsb2JhbERhdGEuQ3VzdG9tID0gY2Fwc3VsZTtcbiAgICAgICAgICB0aGlzLmdsb2JhbERhdGEuQ3VzdG9tQmFyID0gY2Fwc3VsZS5ib3R0b20gKyBjYXBzdWxlLnRvcCAtIGUuc3RhdHVzQmFySGVpZ2h0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuZ2xvYmFsRGF0YS5DdXN0b21CYXIgPSBlLnN0YXR1c0JhckhlaWdodCArIDUwO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgfSxcbiAgLy8gaHR0cHM6Ly9tb3ZpZS5kb3ViYW4uY29tL2ovc2VhcmNoX3N1YmplY3RzP3R5cGU9bW92aWUmdGFnPSZwYWdlX2xpbWl0PTUwJnBhZ2Vfc3RhcnQ9MFxuICBnbG9iYWxEYXRhOiB7XG4gICAgbW92aWVCYXNlVXJsOlwiaHR0cHM6Ly9tb3ZpZS5kb3ViYW4uY29tL2pcIixcbiAgICBob21lQmFzZVVybDogJ2h0dHBzOi8vYXBpLWhtdWdvLXdlYi5pdGhlaW1hLm5ldC9hcGkvcHVibGljL3YxJywgXG4gICAgZm9vZEJhc2VVcmw6ICdodHRwczovL20ubWVpc2hpai5uZXQvYWpheC9pbmRleF9zZWFyY2hfbmV3LnBocCcsXG4gICAgQ29sb3JMaXN0OiBbe1xuICAgICAgICB0aXRsZTogJ+Wro+e6oicsXG4gICAgICAgIG5hbWU6ICdyZWQnLFxuICAgICAgICBjb2xvcjogJyNlNTRkNDInXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0aXRsZTogJ+ahlOapmScsXG4gICAgICAgIG5hbWU6ICdvcmFuZ2UnLFxuICAgICAgICBjb2xvcjogJyNmMzdiMWQnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0aXRsZTogJ+aYjum7hCcsXG4gICAgICAgIG5hbWU6ICd5ZWxsb3cnLFxuICAgICAgICBjb2xvcjogJyNmYmJkMDgnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0aXRsZTogJ+aphOamhCcsXG4gICAgICAgIG5hbWU6ICdvbGl2ZScsXG4gICAgICAgIGNvbG9yOiAnIzhkYzYzZidcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRpdGxlOiAn5qOu57u/JyxcbiAgICAgICAgbmFtZTogJ2dyZWVuJyxcbiAgICAgICAgY29sb3I6ICcjMzliNTRhJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGl0bGU6ICflpKnpnZInLFxuICAgICAgICBuYW1lOiAnY3lhbicsXG4gICAgICAgIGNvbG9yOiAnIzFjYmJiNCdcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRpdGxlOiAn5rW36JOdJyxcbiAgICAgICAgbmFtZTogJ2JsdWUnLFxuICAgICAgICBjb2xvcjogJyMwMDgxZmYnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0aXRsZTogJ+Wnuee0qycsXG4gICAgICAgIG5hbWU6ICdwdXJwbGUnLFxuICAgICAgICBjb2xvcjogJyM2NzM5YjYnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0aXRsZTogJ+acqOanvycsXG4gICAgICAgIG5hbWU6ICdtYXV2ZScsXG4gICAgICAgIGNvbG9yOiAnIzljMjZiMCdcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRpdGxlOiAn5qGD57KJJyxcbiAgICAgICAgbmFtZTogJ3BpbmsnLFxuICAgICAgICBjb2xvcjogJyNlMDM5OTcnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0aXRsZTogJ+ajleikkCcsXG4gICAgICAgIG5hbWU6ICdicm93bicsXG4gICAgICAgIGNvbG9yOiAnI2E1NjczZidcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRpdGxlOiAn546E54GwJyxcbiAgICAgICAgbmFtZTogJ2dyZXknLFxuICAgICAgICBjb2xvcjogJyM4Nzk5YTMnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0aXRsZTogJ+iNieeBsCcsXG4gICAgICAgIG5hbWU6ICdncmF5JyxcbiAgICAgICAgY29sb3I6ICcjYWFhYWFhJ1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGl0bGU6ICfloqjpu5EnLFxuICAgICAgICBuYW1lOiAnYmxhY2snLFxuICAgICAgICBjb2xvcjogJyMzMzMzMzMnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0aXRsZTogJ+mbheeZvScsXG4gICAgICAgIG5hbWU6ICd3aGl0ZScsXG4gICAgICAgIGNvbG9yOiAnI2ZmZmZmZidcbiAgICAgIH0sXG4gICAgXVxuICB9XG59KSJdfQ==