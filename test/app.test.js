const request = require('supertest');
const app = require('../src/app');
const server = app.listen(3001);

describe('API Endpoints', () => {
  test('GET /api/services should return services', async () => {
    const response = await request(app).get('/api/services');
    expect(response.statusCode).toBe(200);
    expect(response.body).toBeInstanceOf(Array);
    expect(response.body.length).toBeGreaterThan(0);
  });

  test('GET /api/status should return status', async () => {
    const response = await request(app).get('/api/status');
    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty('status', 'OK');
    expect(response.body).toHaveProperty('timestamp');
    expect(response.body).toHaveProperty('uptime');
  });
});