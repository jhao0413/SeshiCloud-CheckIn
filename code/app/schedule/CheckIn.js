module.exports = {
  schedule: {
    interval: '30m', 
    type: 'all', // 指定所有的 worker 都需要执行
    immediate:true
  },
  async task(ctx) {
    const result = await ctx.curl('https://sci.ywtz.top/user/checkin', {
      method: 'POST',
      headers: {
        'cookie': 'uid=2588; email=384716045%40qq.com; key=7eb3392b6f6e602bbbc7c9e2d344ac44c9cfaa7fe9aab; ip=290103da8510183f3e378f401a1053b7; expire_in=1668509163',
      },
      dataType: 'json',
    });
    await ctx.curl('https://sctapi.ftqq.com/SCT182258TRszwFQh1XwoZqmol4Utd9Fia.send', {
      method: 'POST',
      contentType: 'json',
      data: {
        title: 'Hello World',
        desp: result,
        short:'消息卡片内容'
      },
      dataType: 'json',
    });
  },
};