module.exports = {
    schedule: {
        cron: '0 45 15 * * ?',
        type: 'all', 
        // immediate: true
    },
    async task(ctx) {
        const result = await ctx.curl('https://alterssc.online/auth/login', {
            method: 'post',
            data: {
                email: '384716045@qq.com',
                passwd: 'JHSQH3271307'
            },
            dataType: 'json'
        });

        if (result.status == 200) {
            console.log('登录成功');
            const checkin = await ctx.curl('https://alterssc.online/user/checkin', {
                method: 'POST',
                headers: {
                    'cookie': result.headers['set-cookie']
                },
                dataType: 'json'
            });

            await ctx.curl('https://sctapi.ftqq.com/SCT182258TRszwFQh1XwoZqmol4Utd9Fia.send',{
                method:'POST',
                data: {
                    title: checkin.data.msg,
                    desp: checkin.data
                }
            })
        }
    },
};