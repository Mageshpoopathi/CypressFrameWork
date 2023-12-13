export class ClickAndSendText{

//Click the Element
            toClick(WebElement){
                WebElement.click();
            }

//clear the characters
            clearValue(WebElement){
                WebElement.click().clear();
            }
            clearText(WebElement){
                WebElement.trigger('mouseover').click().clear();
            }
            clearTextBox(WebElement){
                WebElement.type('{enter}').clear();
            }

//type the values
            sendKeys(WebElement,value){
                WebElement.click().type(value);
            }
            sendKeysWithClick(WebElement,value){
                WebElement.type(value+'{enter}');
            }
}