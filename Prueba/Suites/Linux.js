import ExamplePage from "../Page_Model/Page_model";

const page = new ExamplePage();

const name = 'Paquito';

fixture `Example test page`
    .page `https://devexpress.github.io/testcafe/example/`;

test('input name', async t => {
    await t
        .typeText(page.inputName, 'Paquito')
        .click(page.checkboxParallelTesting)
        .click(page.checkboxCi)
        .click(page.checkboxAdvanceTraffic)
        .click(page.checkboxTriedTestCafe)
        .click(page.radioLinux)
        .typeText(page.textAreaCommet, 'Testcafe')
        .click(page.buttonSubmit)
        .wait(2000);
    
    await t.expect(page.thankYouMessage.innerText).contains(name);
})