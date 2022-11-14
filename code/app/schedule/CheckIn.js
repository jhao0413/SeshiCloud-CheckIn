module.exports = {
    schedule: {
        interval: '30ms',
        type: 'all'
    },

    async task() {
        const result = await ctx.curl('https://sctapi.ftqq.com/SCT182258TRszwFQh1XwoZqmol4Utd9Fia.send?title=messagetitle&desp=messagecontent');
        ctx.status = result.status;
        ctx.set(result.headers);
        ctx.body = result.data;
    }
}