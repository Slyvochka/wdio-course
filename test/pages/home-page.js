import NavComponent from "./components/nav-comp";


class HomePage {
  open() {
    return browser.url('/');
  }

  get btnGetStarted() {
    return $('#get-started');
  }

  get imageLogo() {
    return $('//img[@class="custom-logo"]');
  }

  get txtHeading() {
    return $('//h1');
  }

  get NavComponent (){
    return NavComponent;
  }
}

export default new HomePage();
