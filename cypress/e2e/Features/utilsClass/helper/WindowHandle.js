export class WindowHandle{

    childTab(WebElement,url){
        cy.get(WebElement).invoke('removeAttr','target').click()
        cy.url().should('include',url) //childwindow url


        //cy.back()
    }


}