Feature('AddCartNavigate');

Scenario('Adding Cart', (I) => {
    I.amOnPage('/')
    I.moveCursorTo({css: 'a.sf-with-ul'});
    I.click('Summer Dresses')
    I.see("Printed Chiffon Dress")
    I.click('//a[@data-id-product="7"]');
    I.see("Product successfully added to your shopping cart")
    I.click('//a[@title="Proceed to checkout"]')
    I.see("SHOPPING-CART SUMMARY")
    I.see("Printed Chiffon Dress");
    I.saveScreenshot("PrintedChiffonDressIsAdded.png")
});