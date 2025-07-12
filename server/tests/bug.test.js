// server/tests/bug.test.js
import request from 'supertest';
import mongoose from 'mongoose';
import app from '../index.js';
import Bug from '../models/Bug.js';

beforeAll(async () => {
  const url = 'mongodb://127.0.0.1/bugtracker_test';
  await mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
});

afterAll(async () => {
  await mongoose.connection.dropDatabase();
  await mongoose.connection.close();
});

describe('Bug API', () => {
  it('should create a bug', async () => {
    const res = await request(app)
      .post('/api/bugs')
      .send({ title: 'Test Bug', description: 'Bug for testing' });
    expect(res.statusCode).toBe(201);
    expect(res.body.title).toBe('Test Bug');
  });

  it('should get all bugs', async () => {
    const res = await request(app).get('/api/bugs');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  it('should update a bug', async () => {
    const bug = await Bug.create({ title: 'To Update' });
    const res = await request(app)
      .put(`/api/bugs/${bug._id}`)
      .send({ status: 'resolved' });
    expect(res.statusCode).toBe(200);
    expect(res.body.status).toBe('resolved');
  });

  it('should delete a bug', async () => {
    const bug = await Bug.create({ title: 'To Delete' });
    const res = await request(app).delete(`/api/bugs/${bug._id}`);
    expect(res.statusCode).toBe(200);
    expect(res.body.message).toBe('Bug deleted');
  });
});
