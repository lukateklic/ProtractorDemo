describe('Sign in to SSLs.com', function(){

    const sign = $('[ng-click="$ctrl.toggleSearch()"]');
    const search = $('.ssls-input');
    const productCardHeader = $$('.ssls-product-card__header h3');

    /* bed style
    
    function findProducts(productCardHeader){
        
        for(let numberProduct = 0; numberProduct <= productCardHeader.length; numberProduct++){

            let textProduct = productCardHeader.get(numberProduct).getText()

            if (textProduct == 0) {
                expect(textProduct).toEqual('PositiveSSL');
            }
            if (textProduct == 1) {
                expect(textProduct).toEqual('PositiveSSL Wildcard');
            }
            if (textProduct == 2) {
                expect(textProduct).toEqual('PositiveSSL Multi-Domain');
            }

        };

    };
    */

    beforeAll(function(){
        
        browser.get('https://www.ssls.com/');

    });

    it('Click on the \'search\' button', function(){
        sign.click();
        expect(search.isPresent());
    });

    it('Page has correct title', function(){
        expect(browser.getTitle()).toContain('Cheap SSL Certificates—Buy SSL Certs $3.77 & Save 52%');
    });

    it('Search \'PositiveSSL\' products', function(){
        search.click();
        search.sendKeys('PositiveSSL');
        expect(search.getAttribute('value')).toBe('PositiveSSL');
        
        /*---need function---*/
        expect(productCardHeader.get(0).getText()).toEqual('PositiveSSL');
        expect(productCardHeader.get(1).getText()).toEqual('PositiveSSL Wildcard');
        expect(productCardHeader.get(2).getText()).toEqual('PositiveSSL Multi-Domain');
        /*---need function---*/ 
        search.clear();
    });

    it('Search \'EssentialSSL\' products', function(){
        search.click();
        search.sendKeys('EssentialSSL');
        expect(search.getAttribute('value')).toBe('EssentialSSL');
        
        /*---need function---*/
        expect(productCardHeader.get(0).getText()).toEqual('EssentialSSL');
        expect(productCardHeader.get(1).getText()).toEqual('EssentialSSL Wildcard');
        /*---need function---*/ 
        search.clear();
    });

});