const url = require('../helpers/url')

describe('Paywall', () => {
  let page
  beforeEach(async (done) => {
    jest.setTimeout(100000)
    const createLockButtonXpath = '//button[text() = "Create Lock"]'
    const submitButtonXpath = '//button[text() = "Submit"]'
    page = await browser.newPage()
    await page.goto(url('/dashboard'))
    await page.waitForXPath(createLockButtonXpath)
    const createLockButton = (await page.$x(createLockButtonXpath))[0]
    await Promise.all([
      page.waitForXPath(submitButtonXpath),
      createLockButton.click(),
    ])
    const submitButton = (await page.$x(submitButtonXpath))[0]
    await submitButton.click()
    await page.waitForSelector('button[title="Show embed code"]')
    const previewButton = await page.$('button[title="Show embed code"]')
    await previewButton.click()
    await page.waitForSelector('a[title="Preview lock"]')
    await Promise.all([
      page.waitForNavigation(),
      page.$('a[title="Preview lock"]').click(),
    ])
    done()
  })
  it('should load the paywall if a lock is present', async () => {

  })
})
