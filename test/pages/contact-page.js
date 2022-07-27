class ContactPage {
  open (){
    return browser.url('/contact');
  }

   get inputName () {
     return $('#evf-277-field_ys0GeZISRs-1');
   }

   get inputEmail () {
    return $('#evf-277-field_LbH5NxasXM-2');
   }
   
   get inputPhone () {
    return $('#evf-277-field_66FR384cge-3');
   }

   get textAreaMessage () {
    return $('#evf-277-field_yhGx3FOwr2-4');
   }
 
  get btnSubmit () {
    return $('#evf-submit-277');
  }

   get alertSuccess () {
    return $('.everest-forms');
  }

  async submitForm (name, email, phone, message) {
    await this.inputName.addValue(name);
    await this.inputEmail.addValue(email);
    await this.inputPhone.addValue(phone);
    await this.textAreaMessage.addValue(message);
    await this.btnSubmit.click();
  }
}


export default new ContactPage();