import ExamplePage from "../Page_Model/Page_model";

const page = new ExamplePage();

const name = 'Pancho';

fixture `Example test page`
    .page `https://devexpress.github.io/testcafe/example/`;

test('input name', async t => {
    await t
        .typeText(page.inputName, 'Pancho')
        .click(page.checkboxReUsingJs)
        .click(page.checkboxParallelTesting)
        .click(page.checkboxAdvanceTraffic)
        .click(page.checkboxTriedTestCafe)
        .click(page.radioMacos)
        .typeText(page.textAreaCommet, 'Aprendiendo')
        .click(page.buttonSubmit)
        .wait(2000);
    
    await t.expect(page.thankYouMessage.innerText).contains(name);
})