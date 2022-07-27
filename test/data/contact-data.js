class ContactData {
  get nameInputField (){
    return 'Test Name';
  }

  get emailInputField (){
    return 'test@gmail.com';
  }

  get phoneInputField () {
    return '123456789';
  }

  get msgInputField () {
    return 'This is a test message!';
  }

}

export default new ContactData();