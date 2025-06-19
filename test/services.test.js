const { getAllServices } = require('../src/controllers/servicesController');

describe('Services Controller', () => {
  test('should return all services', () => {
    const req = {};
    const res = {
      json: jest.fn(),
      status: jest.fn().mockReturnThis()
    };

    getAllServices(req, res);
    expect(res.json).toHaveBeenCalled();
  });
});