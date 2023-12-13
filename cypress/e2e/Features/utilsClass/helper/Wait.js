export class Wait{

 waitByTime(time){
    cy.wait(time);
}


 waitUntilElementFound(WebElement,time){
    cy.get(WebElement,{timeout:time}.should('be.visible'))
}
}