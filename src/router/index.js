import Router from 'koa-router';

const router = new Router();

router.get('/bye', ctx => {
	ctx.body = 'bye';
});

export default router;
