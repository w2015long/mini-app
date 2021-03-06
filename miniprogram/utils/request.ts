interface paramsType {
    header?: any;
    url: string;
}
// 同时发送异步代码的次数
let ajaxTimes=0;
export const request = (params: paramsType)=>{
    // 判断 url中是否带有 /my/ 请求的是私有的路径 带上header token
    let header={...params.header};
    if(params.url.indexOf('/my/') > -1){
        // 拼接header 带上token
        header["Authorization"]=wx.getStorageSync("token");
    }


    ajaxTimes++;
    // 显示加载中 效果
    wx.showLoading({
        title: "加载中",
        mask: true
    });


    // 定义公共的url
    // const baseUrl="https://api-hmugo-web.itheima.net/api/public/v1";
    return new Promise((resolve,reject)=>{
        wx.request({
            ...params,
            header:header,
            url: params.url,
            success:(result: any) => {
                resolve(result.data);
            },
            fail:(err)=>{
                reject(err);
            },
            complete:()=>{
                ajaxTimes--;
                if(ajaxTimes===0){
                    //  关闭正在等待的图标
                    wx.hideLoading();
                }
            }
        });
    })
}