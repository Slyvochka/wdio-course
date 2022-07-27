import ContactPage from '../pages/contact-page';
import ContactData from '../data/contact-data';
import { faker } from '@faker-js/faker';
import allureReporter from '@wdio/allure-reporter';

describe('Open Contact Page & fill out the form & assert the greeting message', () => {
  it('fill out all input fields, submit form and assert the success message', async () => {
    allureReporter.addSeverity('critical');
    await ContactPage.open();

    // Fill out the input fields & click submit
    // await ContactPage.submitForm(
    //   ContactData.nameInputField,
    //   ContactData.emailInputField,
    //   ContactData.phoneInputField,
    //   ContactData.emailInputField
    // );

    await ContactPage.submitForm(
      faker.name.findName(), faker.internet.email(), faker.phone.number(), faker.lorem.paragraph()
    );
    //await browser.pause(3500);

    // Assert the success message
    const messageText = await ContactPage.alertSuccess;
    await expect(messageText).toHaveText(
      'Thanks for contacting us! We will be in touch with you shortly'
    );
  });
  // debug
  // await browser.debug();
});
