// minimal Playwright config for CI
module.exports = {
  timeout: 30000,
  use: {
    headless: true,
    viewport: { width: 1280, height: 720 },
  },
  testDir: 'tests/e2e'
};
