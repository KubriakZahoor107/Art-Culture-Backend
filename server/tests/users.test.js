import request from 'supertest';
import app from '../app.js';
import prisma from '../prismaClient.js';

jest.mock('../prismaClient.js', () => ({
  user: {
    findMany: jest.fn().mockResolvedValue([]),
  },
}));

describe('GET /api/users/creators', () => {
  it('responds with json', async () => {
    const res = await request(app).get('/api/users/creators');
    expect(res.statusCode).toBe(200);
  });
});
