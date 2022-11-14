module.exports = {
    schedule: {
        interval: '30s',
        type: 'all'
    },

    async task() {
        const result = await ctx.curl('https://httpbin.org/post', {
            // 必须指定 method
            method: 'POST',
            // 通过 contentType 告诉 HttpClient 以 JSON 格式发送
            contentType: 'json',
            data: {
                hello: 'world',
                now: Date.now(),
            },
            // 明确告诉 HttpClient 以 JSON 格式处理返回的响应 body
            dataType: 'json',
        });
        ctx.body = result.data;
    }
}