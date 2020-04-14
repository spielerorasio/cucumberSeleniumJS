// taken from https://cucumber.io/docs/guides/browser-automation/

const { Given, When, Then, AfterAll } = require('cucumber');
const { Builder, By, Capabilities, Key } = require('selenium-webdriver');
const assert = require('assert');

require("chromedriver");

// driver setup
const capabilities = Capabilities.chrome();
capabilities.set('chromeOptions', { "w3c": false });
const driver = new Builder().withCapabilities(capabilities).build();
 
Given('Phoenix application is open', {timeout: 100 * 1000}, async function () {
    await driver.get('http://localhost:3000/');
});

When('I click on new case', async function () {
    const newButton = By.className('uae-btn primary ng-star-inserted');
    const element = await driver.findElement(newButton);
    element.click();
});

When('I add new case name {string}', async function (caseName) {
    let caseNameXPath = '//input[@placeholder=\'Case name*\']';
    const element = await driver.findElement(By.xpath(caseNameXPath));
    element.sendKeys(caseName);
    // element.submit();
});

When('I add new case number {string}', async function (caseNumber) {
    let caseNumberXPath = '//input[@placeholder=\'Case number*\']';
    const element = await driver.findElement(By.xpath(caseNumberXPath));
    element.sendKeys(caseNumber);
});

When('I add new created by {string}', async function (caseCreatedBy) {
    let caseCreatedByXPath = '//input[@placeholder=\'Created by*\']';
    const element = await driver.findElement(By.xpath(caseCreatedByXPath));
    element.sendKeys(caseCreatedBy);
});

When('I click next', async function () {
    let nextButtonByXPath = '//*[@id="cdk-step-content-0-0"]/wizard-buttons/div/div/button[2]';
    const element = await driver.findElement(By.xpath(nextButtonByXPath));
    element.click();
});

When('I add ufdr file {string}', async function (ufdrPath) {
    let selectCasePath = "//input[@placeholder='Select case path']";
    const element = await driver.findElement(By.xpath(selectCasePath));
    element.sendKeys(ufdrPath);
});


When('I click to approve ufdr', async function () {
    let nextButtonXPath = "//*[@class='btn-transparent clickable']";
    const element = await driver.findElement(By.xpath(nextButtonXPath));
    await element.click();
});

When('I click next again', async function () {
    let nextButtonByXPath = '//*[@id="cdk-step-content-0-1"]/wizard-buttons/div/div/button[2]';
    const element = await driver.findElement(By.xpath(nextButtonByXPath));
    element.click();
});
When('I click done', async function () {
    let nextButtonByXPath = '//*[@id="cdk-step-content-0-2"]/wizard-buttons/div/div/button[2]';
    const element = await driver.findElement(By.xpath(nextButtonByXPath));
    element.click();
});

Then('I expect to find a case with title {string}', {timeout: 100 * 1000}, async function (searchTerm) {
    await driver.get('http://localhost:3000/');
    let caseTitle = '//div[text() = \''+searchTerm+'\']';
    const elements = await driver.findElements(By.xpath(caseTitle));
    assert.equal(elements.length!=0, true);
});

AfterAll('end', async function(){
    await driver.quit();
});
 