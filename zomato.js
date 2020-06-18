require("chromedriver");
let swd = require("selenium-webdriver");
let fs = require("fs");
let login, email, pwd;
let credentialsFile = process.argv[2];
let bldr = new swd.Builder();
let driver = bldr.forBrowser("chrome").build();
( async function () {
  try{
    let data = await fs.promises.readFile(credentialsFile, "utf-8");
    let credentials = JSON.parse(data);
    login = credentials.login;
    pwd = credentials.pwd;
    email = credentials.email;
    let pageWillBeOpenedP = await driver.get(login);
    await pageWillBeOpenedP;
    await driver.manage().window().maximize();
    await driver.manage().setTimeouts({
      implicit: 10000,
      pageLoad: 10000
  })
    let orderField=await driver.findElement(swd.By.css("input[class='sc-dliRfk dWdVAf']"));
    await orderField.sendKeys("kfc");
    let searchBtn=await driver.findElement(swd.By.css(".sc-ipXKqB.lkhBpc"));
    await searchBtn.click();
    let clickLogin=await driver.findElement(swd.By.css('a[data-result-type="ResCard_Name"]'));
    await clickLogin.click();
    await driver.executeScript("window.scrollBy(0,1000)");
    let clickOnOrder=await driver.findElement(swd.By.css("span[id='TabLink__1']"));
    await clickOnOrder.click();
    let searchWithIn=await driver.findElement(swd.By.css("input[class='sc-1yzxt5f-9 gtgBvK']"));
    await searchWithIn.sendKeys("Big 12");
    await driver.manage().setTimeouts({
      implicit: 10000,
      pageLoad: 10000
  })
    let addItemsBtn=await driver.findElement(swd.By.css(".sc-1usozeh-8.dOttoH"));
    await addItemsBtn.click();
    let confirm=await driver.findElement(swd.By.css(".sc-1kx5g6g-2.bQXEsK"));
    await confirm.click();
    let continueBtn=await driver.findElement(swd.By.css("div.sc-4tpsxe-5.jUmUpU > div > div:nth-child(2) > button"));
    await continueBtn.click();
    let loginBtn=await driver.findElement(swd.By.css(".sc-1kx5g6g-2.lunZa"));
    await loginBtn.click();
    let continueWithGoogle=await driver.findElement(swd.By.css(".sc-bxivhb.glCqXO"));
    await continueWithGoogle.click();
    let windowHandles=await driver.getAllWindowHandles();
    await driver.switchTo().window(windowHandles[1]);
    let loginField= await driver.findElement(swd.By.css("#identifierId"));
    await loginField.sendKeys(email);
    let clickOnNextBtn=await driver.findElement(swd.By.css("#identifierNext"));
    await clickOnNextBtn.click();
    let passField=await driver.findElement(swd.By.css("input[name='password']"));
    await passField.sendKeys(pwd);
    let clickOn=await driver.findElement(swd.By.css("#passwordNext"));
    await clickOn.click();
    let windowHandler=await driver.getAllWindowHandles();
    await driver.switchTo().window(windowHandler[0]);
    let address=await driver.findElement(swd.By.css(".sc-eePzDA.deJbBj"));
    await address.click();
    let addressDetails=await driver.findElement(swd.By.css(".qgdune-5.eBEUPb"));
    await addressDetails.click();
    let addressInput= await driver.findElement(swd.By.css(".gw20v4-5.bQNhWy"));
    await addressInput.sendKeys("Saket");
    let selectOption=await driver.findElement(swd.By.css(".gw20v4-2.cXyzCf"));
    await selectOption.click();
    let insertAdress=await driver.findElements(swd.By.css("input[type='text']"));
    //await insertAdress.click();
    await insertAdress[1].sendKeys("41/Block D");
    let selectCancel=await driver.findElements(swd.By.css("input[type='text']"));
    await selectCancel[2].sendKeys("Home");
    let selectHome=await driver.findElement(swd.By.css(".djusq7-2.dRqlcW"));
    await selectHome.click();
    let proceed=await driver.findElement(swd.By.css(".bke1zw-1.qgdune-10.fPmuJ"));
    await proceed.click();
    let card=await driver.findElements(swd.By.css("section.ixe81d-8"));
    await card[1].click();
    let applyPromo=await driver.findElement(swd.By.css(".hrAeQh"));
    await applyPromo.click();
}catch (err) {
    console.log(err);
}
})();