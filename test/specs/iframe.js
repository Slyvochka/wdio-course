describe('IFAME', () => {
  it('Working with iframe / verify ', async () => {
    // Open the Url address
    await browser.url('/iframe-sample/');

    // Access the iframe
   const iframe = await $('#advanced_iframe');
    await browser.switchToFrame(iframe);

    // verify the logo exist
    await expect($('#site-logo.clr')).toBeDisplayed(); // or toExist();
  });
  
  it('verify page title is "IFrame Sample"', async () => {
    // switch to parent frame
    await browser.switchToParentFrame();
    const header = await $('//h1[@class="tg-page-header__title"]');
    await expect (header).toHaveText( "IFrame Sample");
  });
 // await  browser.pause(3500);
});

