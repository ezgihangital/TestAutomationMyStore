Feature('LoginNavigate');

Scenario('Login to site', (I) => {
    I.amOnPage('/')
    I.click({css: 'a.login'})
    I.seeInCurrentUrl('http://automationpractice.com/index.php?controller=authentication&back=my-account')
    I.fillField("#email","ezgihangital@gmail.com")
    I.fillField("#passwd", "12345")
    I.click({css: 'button#SubmitLogin'})
    I.see('MY ACCOUNT')
    I.saveScreenshot('LoggedIn.png')
})