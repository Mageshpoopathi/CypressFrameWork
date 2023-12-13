import {Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import {DummyValues} from "../utilsClass/helper/utils.js"
import {loginMethod,loginUser,invalidUserName,invalidPassword,invalidData,assertExistElements,invalidAssertion, logging, waitForElement,IFrameMethods4,IFrameMethods3,IFrameMethods2,IFrameMethods,AlertButton,AlertButton2,AlertButton1,auth1} from "../utilsClass/pages/loginElements.js"

  const obj=new DummyValues();
  obj.setrandomString(10)
  let Dummy_userValue=obj.getRandomString();
  obj.setRandomNum();
  let Dummy_password=obj.getRandomNumber();

    
  Given("Launch the SwagLabs URL",()=>{
    cy.visit('/index.html')
  })

  When("Enter valid Username and Password",()=> {
    new loginMethod();
    new logging("user enters with valid username and password")
  })
   Then("Assert the logo of the Website with valid credentials",()=> {
    new assertExistElements();
   })


   When("Enter Invalid Username and valid Password",()=> {
  new invalidUserName(Dummy_userValue);
    new logging("user enters with invalid username and valid password")
  })
    Then("Assert the logo of the Website with invalid credentials",()=> {
     new invalidAssertion();
    })


   When("Enter valid Username and Invalid Password",()=> {
    new invalidPassword(Dummy_password);
    new logging("user enters with valid username and invalid password")
  })
    Then("Assert the logo of the Website with invalid credentials",()=> {
     new invalidAssertion();
    })


   When("Enter Invalid Username and Password",()=> {
    new invalidData(Dummy_userValue,Dummy_password);
    new logging("user enters with both invalid username and password")
  })
    Then("Assert the logo of the Website with invalid credentials",()=> {
     new invalidAssertion();
    })

  Given ("Launch the leafground website with frame tag",()=>{
      cy.visit('https://leafground.com/frame.xhtml;jsessionid=node0bl5p20mozzwhdittpzprpi2g674728.node0');
  })
  When('working with iframe tag',()=>{
    new IFrameMethods4();
  })
  Then("Launch the leafground website with alert box",()=>{
    cy.visit('https://leafground.com/alert.xhtml')
  })
  And("working with alert boxes",()=>{
    new AlertButton();
    new AlertButton1("Hello user");
    new AlertButton2();
  })
  Then("launch the Authentication website",()=>{
    new auth1();
  })