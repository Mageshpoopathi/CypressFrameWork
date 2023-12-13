import {action} from "../helper/assertion.js";
import {ClickAndSendText} from "../helper/ClickAndSendText.js"
import {IFrame} from "../helper/IFrame.js"
import {Alert} from "../helper/Alert.js"
import {Authentication} from "../helper/Authentication.js"

//const act=new assertion();
const act1=new ClickAndSendText();
const frame=new IFrame();
const alert=new Alert();
const auth=new Authentication();

//for storing repos
const login={
    username:"#user-name",
    password:"#password",
    login_button:"#login-button",
    inventoryFilter:"#inventory_filter_container",
    assertErrorButton:".error-button",
    iframeTag:"(//iframe)[1]",
    ButtonInIFrame:"#Click",
    alertBox:"(//button[@class='ui-button ui-widget ui-state-default ui-corner-all ui-button-text-icon-left ui-button-outlined'])[1]",
    alertBox2:"(//button[@class='ui-button ui-widget ui-state-default ui-corner-all ui-button-text-icon-left ui-button-success'])[1]",
    alertBox3:"(//button[@class='ui-button ui-widget ui-state-default ui-corner-all ui-button-text-icon-left ui-button-warning'])[1]"
}

//protect the WebElement with protected variable
class loginUserParent{
    _username;
    _password;
UserName(){
    this._username=cy.get(login.username);
    return this._username;
}
PassWord(){
    this._password=cy.get(login.password);
    return this._password;
}
}

//child class for protected variables
class user1 extends loginUserParent{
    submit(){
        const loginButton=cy.get(login.login_button)
        return loginButton;
    }
    assertHomePage(){
        const filter=cy.get(login.inventoryFilter)
        return filter;
    }
    assertErrorPage(){
        const errorButton=cy.get(login.assertErrorButton)
        return errorButton;
    }

    iframeElements(){
            const iframeElement=cy.get(login.ButtonInIFrame)
            return iframeElement;
        }

    alert1(){
        const alert=cy.xpath(login.alertBox)
        return alert;
    }
    alert2(){
    const alert=cy.xpath(login.alertBox2)
    return alert;
    }
    alert3(){
    const alert=cy.xpath(login.alertBox3)
        return alert;
    }
}
const user=new user1;
export function loginMethod(){
  act1.sendKeys(user.UserName(),"standard_user");
  act1.sendKeys(user.PassWord(),"secret_sauce");
  act1.toClick(user.submit())
}
export function loginUser(){
    cy.typeText(user.UserName(),"standard_user")
}
export function invalidUserName(userValue){
    act1.sendKeys(user.UserName(),userValue);
    act1.sendKeys(user.PassWord(),"secret_sauce");
    act1.toClick(user.submit())
}

export function invalidPassword(userPassword){
    act1.sendKeys(user.UserName(),"standard_user");
    act1.sendKeys(user.PassWord(),userPassword);
    act1.toClick(user.submit())
}
export function invalidData(userValue,userPassword){
    act1.sendKeys(user.UserName(),userValue);
    act1.sendKeys(user.PassWord(),userPassword);
    act1.toClick(user.submit())
}

export function invalid_login(){
    act1.invalidAssertion(user.assertHomePage);
}
export function waitForElement(){
    return cy.wait(5000);
}
export function assertExistElements(){
    const WebElement=user.assertHomePage()
    return WebElement.should('exist')
}
export function invalidAssertion(){
    const WebElement=user.assertErrorPage()
    return WebElement.should('exist')
}
//Iframe Method
export function IFrameMethods(){
      frame.IFrameMethods(login.iframeTag,login.ButtonInIFrame);
}

//IFrame with custom command
export function IFrameMethods2(){
    cy.WorkIFrame(login.iframeTag,login.ButtonInIFrame).click();
}
export function IFrameMethods3(){
    frame.IFrameMethods30(login.iframeTag,login.ButtonInIFrame);
}
export function IFrameMethods4(){
    frame.IFrameMethods31(login.iframeTag,login.ButtonInIFrame);
}

 //log
export function logging(text){
        return cy.log(text);
}
//method for simple alert
export function AlertButton(){
    alert.simpleAlert(user.alert1());
}
//Method for prompt alert box
export function AlertButton1(text){
    alert.promptAlert(user.alert2(),text);
}
//Method for confirm alert box
export function AlertButton2(){
    alert.confirmAlertFalse(user.alert3());
}
export function auth1(){
    auth.authentication("authenticationtest.com","user","pass","/HTTPAuth/");
}



