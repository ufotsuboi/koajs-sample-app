const request = require('supertest');
const config = require('../config');

describe('GET: /health_check', () => {
  it('200を返すこと', function* () {
    yield request(`http://localhost:${config.port}`)
      .get(`/health_check`)
      .expect(200);
  });
});
