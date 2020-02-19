Feature('SearchNavigate');

Scenario('Searching Blouse Item', (I) => {
    I.amOnPage('/')
    I.fillField("#search_query_top","Blouse")
    I.click({css: 'button.button-search'});
    I.seeCurrentUrlEquals("http://automationpractice.com/index.php?controller=search&orderby=position&orderway=desc&search_query=Blouse&submit_search=")
})
