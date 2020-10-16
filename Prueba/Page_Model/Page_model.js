import { Selector, t } from "testcafe";

export default class ExamplePage {
    constructor() {
        this.inputName = Selector('#developer-name');
        this.checkboxRemoteTesting = Selector('#remote-testing');
        this.checkboxReUsingJs = Selector('#reusing-js-code');
        this.checkboxParallelTesting = Selector('#background-parallel-testing');
        this.checkboxCi = Selector('#continuous-integration-embedding');
        this.checkboxAdvanceTraffic = Selector('#traffic-markup-analysis');
        this.checkboxTriedTestCafe = Selector('#tried-test-cafe');
        this.slidervalue= Selector('#slider');
        this.radioWindows = Selector('#windows');
        this.radioMacos = Selector('#macos');
        this.radioLinux = Selector('#linux');
        this.textAreaCommet = Selector('textarea').withAttribute('name');
        this.thankYouMessage = Selector('#article-header');
        this.buttonSubmit = Selector('#submit-button');
    }
}