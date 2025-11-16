// Use native global fetch when available (Node 18+), otherwise fall back to node-fetch
const fetch = (...args) => {
  if (typeof globalThis.fetch === 'function') {
    return globalThis.fetch(...args);
  }
  return import('node-fetch').then(({ default: f }) => f(...args));
};
const { start, stop } = require('../index');

beforeAll(async () => {
  await start();
});

afterAll(async () => {
  await stop();
});

test('GET /api/hello returns JSON', async () => {
  const res = await fetch('http://localhost:3000/api/hello');
  const json = await res.json();
  expect(json.ok).toBe(true);
  expect(typeof json.msg).toBe('string');
});
