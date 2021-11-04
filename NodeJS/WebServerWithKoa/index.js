const Koa = require('koa');
const koaRouter = require('koa-router')
const app = new Koa();
const router = new koaRouter();

router.get('/', ctx => {
    ctx.body = '<h1>Welcome to Index page</h1>'
})
router.get('/about', ctx => {
    ctx.body = '<h1>Welcome to About page</h1>'
})
router.get('/contact', ctx => {
    ctx.body = '<h1>Welcome to Contact page</h1>'
})


app.use(router.routes()).use(router.allowedMethods())

app.listen(3000)