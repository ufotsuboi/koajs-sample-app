const Router = require('koa-router');
const health = require('./health_check_controller');
const client = require('./client_controller');

const router = new Router();

router.get('/', client.index);
router.get('/health_check', health.index);

module.exports = router;
