let homepage = function () {
 let first_number = element(by.model("first"));
 let second_nubmer = element(by.model("second"));
 let changeToDivision = element(by.xpath("//body//option[2]"));
 let goButton = element(by.css('[ng-click="doAddition()"]'));

 this.otvoriBrowser = async function () {
  await browser.get("http://juliemr.github.io/protractor-demo/");
 }
 this.unosBrojeva = async function (prvi_broj, drugi_broj) {
  first_number = sendKeys(prvi_broj);
  second_nubmer = sendKeys(drugi_broj);
  changeToDivision.click();
  goButton.click();
 }
 this.provjeraRezultata = async function (rezultat) {
  let result = element(by.cssContainingText('.ng-binding', rezultat));
  expect(result.getText()).toEqual(rezultat);
 }
}
module.exports = new homepage();