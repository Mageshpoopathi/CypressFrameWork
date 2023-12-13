import {ClickAndSendText} from "../helper/ClickAndSendText.js"
const action1=new ClickAndSendText();
export class Alert{


//Simple AlertBox
    simpleAlert(WebElement,text){
         action1.toClick(WebElement)
            cy.on('window:alert',(t)=>{
                expect(t).to.contains(text);
            })
    }
 //prompt Alert

 promptAlert(WebElement,text){
        cy.window().then((w)=>{
                cy.stub(w,'prompt').returns(text);
            })
            action1.toClick(WebElement);
 }

 //confirm alert for click ok
 confirmAlertTrue(WebElement,text){
     action1.toClick(WebElement)
         cy.on('window:confirm',(t)=>{
                expect(t).to.contains(text);
            })
 }
 confirmAlertFalse(WebElement){
    action1.toClick(WebElement)
    cy.on('window:confirm',()=>false);
 }

}