import HomePage from "../pages/home-page";

describe('Navigation Menu', () => {
  it ('Get the text of all menu items & assert them', async () => {
    await HomePage.open();

    const expectedLinks = [
      'Home',
      'About',
      'Shop',
      'Blog',
      'Contact',
      'My account',
    ];

    const actualLinks = [];

    // chaining the $ combined with $$

   // await $('#primary-menu li').waitForDisplayed();  // single $ sign on list will return the first element back
  
   // wait until the Home text is displayed on the navigation menu
     await browser.waitUntil(async function(){
       const homeText = await HomePage.NavComponent.firstNavMenuList.getText();  // Home
       return 'Home' === homeText;   // true or false
     }, {
       timeout: 5000,
       timeoutMsg:  `Could not verify the Home text from #primary-menu li`,
     });




    // await browser.waitUntil(async function(){
    //   const navBar = await HomePage.NavComponent.linksNavMenu;
    //   if(navBar.length === 1){
    //     return false;
    //   }
    //     return  await (navBar)[8].toHaveAttr('title', 'View your shopping cart');

    // }, {
    //    timeoutMsg: "Never found $$('#primary-menu li') elements "
    // })





    const navLinks = await HomePage.NavComponent.linksNavMenu;

    for (const link of navLinks) {

      const a = await link.getText();
      actualLinks.push(a);
    }

    await expect(expectedLinks).toEqual(actualLinks);
  });

});
