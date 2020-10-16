import ExamplePage from "../Page_Model/Page_model";

const page = new ExamplePage();

const name = 'Panfilo';

fixture `Example test page`
    .page `https://devexpress.github.io/testcafe/example/`;

test('input name', async t => {
    await t
        .typeText(page.inputName, 'Panfilo')
        .typeText(page.textAreaCommet, 'En este no se selecciono nada')
        .click(page.buttonSubmit)
        .wait(2000);
    
    await t.expect(page.thankYouMessage.innerText).contains(name);
})