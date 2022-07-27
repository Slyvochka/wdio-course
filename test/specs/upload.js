const path = require('path');

describe('Upload Tests', () => {
  it('Simple upload test', async () => {
    // Open url
    await browser.url('https://the-internet.herokuapp.com/upload');

    // const header = await $("//h3");
    // await header.waitForDisplayed();

    // store test file path
    //C:\Users\sviat\wdio-course\test\specs\upload.js
    // C:\Users\sviat\wdio-course\data
    // console.log(`-------------${__dirname}--------------`);
     const filePath = path.join(__dirname, '../../test/data/flower.jpg');
    

     // a. path.resolve('data/badge.png') -> in this case Node.js will simply append  data/badge.png to the current working directory
     // b. if ypu specify a second parameter folder, resolve() will use the first as a base for the second path.resolve('data', 'badge.png')
     // const filePath = path.resolve('data/badge.png'); 
    
    
    // upload test file
    const remoteFilePath = await browser.uploadFile(filePath);

    // set file path value in the input field;

    await $('#file-upload').setValue(remoteFilePath);
    await $('#file-submit').click(); // click the Submit btn

    // assertion

    await expect($('//h3')).toHaveText('File Uploaded!');

    //await browser.pause(3000);
  });

  it('Upload on a hidden input field', async () => {
   // Open the Url
   await browser.url('/cart/');

   // Store test file path
   const filePath = path.join(__dirname, '../../test/data/flower.jpg');

// Upload test file
  const remoteFilePath = await browser.uploadFile(filePath);

  // remove hidden class
  await browser.execute("document.querySelector('#upfile_1').className = ''");
  
  // set file path value in the input fiels
   await $("#upfile_1").setValue(remoteFilePath);
   await $("#upload_1").click();

   // assertion
   await expect($("#wfu_messageblock_header_1_1")).toHaveTextContaining("uploaded successfully");
  
   //await browser.pause(5000);
  
  
  })
});
