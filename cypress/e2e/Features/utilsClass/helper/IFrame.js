import 'cypress-iframe';

export class IFrame{

//simple IFrame method
     IFrameMethods(IFrameElement,InsideIFrameElement){
           const iframe= cy.xpath(IFrameElement).its('0.contentDocument.body').find(InsideIFrameElement)
            .should('be.visible').then(cy.wrap);
            iframe.click();
    }

//using IFrame plugin to wrap the element
    IFrameMethods30(IFrameElement,InsideIFrame){
        cy.frameLoaded("iframe[src='default.xhtml']");
        cy.iframe("iframe[src='default.xhtml']").find(InsideIFrame).should('be.visible').click()
    }
     IFrameMethods31(IFrameElement,InsideIFrame){
            cy.frameLoaded("iframe[src='default.xhtml']");
           cy.enter("iframe[src='default.xhtml']").then(getBody => {
             getBody().find(InsideIFrame).should('be.visible').click()
             getBody().find(InsideIFrame).should('be.visible')
           })
        }


}