import HomePage from '../pages/home-page';
import allureReporter from '@wdio/allure-reporter';

describe('Home', () => {
  beforeEach(async () => {
    console.log('THIS CAN BE USED FOR TEST SETUP');
    // Open URL
    await HomePage.open();
  });

  // after(async () => {
  //   console.log('CAN BE USED FOE TEST CLEANUP'); // for ex. for logging off, or if you creating some sort data for deleting it
  // });

  // afterEach(async () => {
  //   console.log('THIS RUNS AFTER EACH TEST');
  // });

  it('Open URL & assert title ', async () => {
    allureReporter.addFeature('Title Verification');
    await expect(browser).toHaveTitle(
      'Practice E-Commerce Site – Automation Bro'
    );
  });

  it('Open About Page & assert URL address', async () => {
    // Open About Page
    await browser.url('https://practice.automationbro.com/about/');

    // Assert URL
    await expect(browser).toHaveUrl(
      'https://practice.automationbro.com/about/'
    );
    // When the session finishes, the forward slash is added to the url address
  });

  it('Click on "Get Started" btn & assert the URL contains "get-started" text', async () => {
    await (await HomePage.btnGetStarted).click();
    // instead of await $('#get-started').click();

    await expect(browser).toHaveUrlContaining('get-started');
  });

  it('Click on logo & assert the URL does not contain "get-started" text', async () => {
    await HomePage.imageLogo.click();
    await expect(browser).not.toHaveUrlContaining('get-started');
  });

  it('Find heading element & assert the text', async () => {
    //await browser.url('https://practice.automationbro.com/');

    //const headingText = await headingEl.getText();
    // await expect(headingText).toEqual('Think different. Make different.');  // default built-in Jest assertions

    // any time we calling toHaveText() it's actually doing getElementText behind the scenes. The same thing as getText().
    await expect(HomePage.txtHeading).toHaveText(
      'Think different. Make different.'
    );
  });
});
