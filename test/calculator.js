let homepage = require('../pages/homepage');
describe("kalk", function () {
  it("racunar", async function () {
    await homepage.otvoriBrowser();
    await homepage.unosBrojeva('6', '3');
    await homepage.provjeraRezultata('2');
    /* browser.get("http://juliemr.github.io/protractor-demo/");
    element(by.model("first")).sendKeys('2');
    element(by.model("second")).sendKeys('3');
    element(by.css('[ng-click="doAddition()"]')).click();
    let result = element(by.cssContainingText('.ng-binding', '5'));
    expect(result.getText()).toEqual('5');
    browser.sleep(2500); */
    /* ____ */
    /*   
      await browser.get("http://juliemr.github.io/protractor-demo/");
      await element(by.model("first")).sendKeys('6');
      await element(by.model("second")).sendKeys('3');
      browser.sleep(1000);
      await element(by.xpath("//body//option[2]")).click();
      //await element(by.model("operator")).element(by.css("option['value=DIVISION']")).click();
      await element(by.css('[ng-click="doAddition()"]')).click();
      let result = element(by.cssContainingText('.ng-binding', '2'));
      expect(result.getText()).toEqual('2');
      browser.sleep(2500); */

  })
})
