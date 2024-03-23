import { type PlaywrightTestConfig } from '@playwright/test'

const isProd = process.env.RUN_ENV === 'production'
const port = isProd ? 3333 : 5005
const domain = `http://localhost:${port}`

console.log('isProd', isProd)

const config: PlaywrightTestConfig = {
  fullyParallel: false,
  testDir: 'tests/e2e',
  webServer: {
    command: isProd ? `yarn next:start` : `yarn dev`,
    port: port,
    reuseExistingServer: !process.env.CI,
  },
  use: {
    baseURL: domain,
  },
  timeout: 60_000,
}

export default config