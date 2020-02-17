describe("Log in window", function(){

    const logIn = $(".log-box a");
    const email = $(".email .form-control");
    const password = $(".password .form-control");
    const btnLogin = $(".btn .primary");

    beforeAll(function(){
        
        browser.get('https://www.ssls.com/');

    });

    it("Open log-in form", function(){
        logIn.click();
        //Don't work, need fix
        expect($(".authorization-content .ng-scope").isPresent()).toBeTruthy();
        expect($(".page-title").getText()).toBe("Authorization");
        expect($('.email-box .text').getText()).toBe("Welcome back!");
        expect(email.isPresent()).toBeTruthy();
        expect(email.getAttribute('placeholder')).toBe('Email');
        expect(password.isPresent()).toBeTruthy();
        expect(password.getAttribute('placeholder')).toBe('Enter password');
        expect(btnLogin.isPresent()).toBeTruthy();
        expect(btnLogin.getText()).toBe("Login");
    });

});