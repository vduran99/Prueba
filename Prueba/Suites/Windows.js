import ExamplePage from "../Page_Model/Page_model";

const page = new ExamplePage();

const name = 'Victor';

fixture `Example test page`
    .page `https://devexpress.github.io/testcafe/example/`;

test('input name', async t => {
    await t
        .typeText(page.inputName, 'Victor')
        .click(page.checkboxRemoteTesting)
        .click(page.checkboxAdvanceTraffic)
        .click(page.checkboxTriedTestCafe)
        .click(page.radioWindows)
        .typeText(page.textAreaCommet, 'Hola')
        .click(page.buttonSubmit)
        .wait(2000);
    
    await t.expect(page.thankYouMessage.innerText).contains(name);
})