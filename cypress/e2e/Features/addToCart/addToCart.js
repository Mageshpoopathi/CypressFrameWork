import {Given, When, Then,And } from "cypress-cucumber-preprocessor/steps";
import {dropdownSelectClick,dropDownClick,addToCartButtonClick,addtoCartIconVis,addTocartMenuClick,checkout_button,fistNameEnter,lastNameEnter,zipCodeEnter,continueButtonClick,finishButtonClick} from "../utilsClass/pages/addToCartElements.js";
import {loginMethod,logging} from "../utilsClass/pages/loginElements.js";

Given ("Launch the url and login to the appplication",()=>{
cy.visit('/index.html')
new loginMethod();
})
When ("Click the customized option for purchase from dropdown",()=>{
     new dropdownSelectClick();
// new dropDownClick()
})
Then ("Purhase items should be visible",()=>{
new logging("")
})
When  ("click the add to Cart button",()=>{
    new addToCartButtonClick();
})
Then  ("Your cart icon changes and click the cart icon",()=>{
new addtoCartIconVis();
new addTocartMenuClick();
})
And   ("Click checkout in your cart page",()=>{
new checkout_button();
})
And   ("Fill the first name,lastname and zip code to continue purchase",()=>{
    new fistNameEnter()
new lastNameEnter();
new zipCodeEnter();
new continueButtonClick();

})
When  ("Sroll down ad click the continue button",()=>{
    new finishButtonClick();
})
Then  ("Order successfully placed page visible",()=>{
cy.screenshot("order successfully placed");
})

