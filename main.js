import { Selector, RequestLogger } from 'testcafe';
import Tesseract from 'tesseract.js';
import { CurrentUser, CurrentLocation } from './config';

// Mock Geolocation by setting your coordinate
const mockGeolocationScript = 'navigator.geolocation.getCurrentPosition = success =>  success({ coords: { latitude: 31.301044, longitude: 121.500455, }, timestamp: Date.now() });';

// UIS Login
const usernameInput = Selector('#username');
const passwordInput = Selector('#password');
const checkLoginButton = Selector('#idcheckloginbtn');
// Popout
const iUnderstandButton = Selector('.wapat-btn-ok');
// Form
const whetherAtSchoolRow = Selector('div').withAttribute('name', 'sfzx');
const atSchoolRadioBox = whetherAtSchoolRow.child(-1).find('div > span');
const notAtSchoolRadioBox = whetherAtSchoolRow.child(-1).child(0).find('span');
// Get Location
const getCurrentLocationRow = Selector('div').withAttribute('name', 'area');
const getLocationInput = getCurrentLocationRow.find('input');
// Submit
const submitButton = Selector('div.footers a');
const submitButtonCheck = Selector('.wapcf-btn.wapcf-btn-ok');
const inputVerifCodeBox = Selector('.pop_yzm_inner input');
const verifCheckButton = Selector('.wapat-btn.wapat-btn-ok');
const successCheckButton = Selector('p.success a');
const activeSubmitButton = Selector('.wapcf-btn');
// Helpers
const logger = RequestLogger({ url: 'https://zlapp.fudan.edu.cn/backend/default/code', method: 'GET' }, {
    logResponseHeaders: true,
    logResponseBody:    true
});

fixture `Daily Fudan with Mock geolocation`
    .page('https://uis.fudan.edu.cn/authserver/login?service=https%3A%2F%2Fzlapp.fudan.edu.cn%2Fa_fudanzlapp%2Fapi%2Fsso%2Findex%3Fredirect%3Dhttps%253A%252F%252Fzlapp.fudan.edu.cn%252Fsite%252Fncov%252FfudanDaily%26from%3Dwap')
    .clientScripts({ content: mockGeolocationScript })
    .requestHooks(logger);
    

test('Daily Fudan with Mock geolocation', async t => {
    await t
        .wait(1000)
        .typeText(usernameInput, CurrentUser.username)
        .typeText(passwordInput, CurrentUser.password)
        .click(checkLoginButton)
        .wait(1000);
    const submittedToday = await iUnderstandButton.exists;
    if (!submittedToday) {
        console.log("You've already reported today.")
    } else {
        await t
            .click(iUnderstandButton)
            .click(atSchoolRadioBox)
            .click(getLocationInput)
            .click(submitButton)
            .click(submitButtonCheck)
            .expect(logger.contains(r => r.response.statusCode === 200)).ok();
            const res = logger.requests; // intercept the response (image as Buffer)
            const { createWorker } = Tesseract;
            const worker = createWorker();
            await worker.load();
            await worker.loadLanguage('eng');
            await worker.initialize('eng');
            const { data: { text } } = await worker.recognize(res[0].response.body); 
            await t
                .typeText(inputVerifCodeBox, text.replace(/[^a-zA-Z]/g,""))
                .click(verifCheckButton)
                .click(successCheckButton);
            console.log("Success.");
    }
});