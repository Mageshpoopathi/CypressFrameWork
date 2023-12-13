///<reference types="cypress-xpath" />
import {action} from "../helper/actions.js";
import {DummyValues} from "../helper/utils.js";

const number=new DummyValues();
 number.setRandomNumberFour();
 let dummyNumber=number.getRandomNumberFour();
const actionButton=new action();

const cart={
   dropdownSelect:".product_sort_container",
   dropdown:"#inventory_filter_container > select > option:nth-child(2)",
   addToCartButton:"#inventory_container > div > div:nth-child(1) > div.pricebar > button",
   addToCartIcon:"[class='fa-layers-counter shopping_cart_badge']",
   menu:"[class='shopping_cart_link fa-layers fa-fw']",
   checkoutButton:".btn_action",
   firstName:"#first-name",
   lastName:"#last-name",
   zipcode:"#postal-code",
   continueButton:"[value='CONTINUE']",
   finishButton:".btn_action"
}

class getter{
   dropDownm(){
      const drpdownButton= cy.get(cart.dropdown)
      return drpdownButton;
   }
   dropDownSelect(){
      const select=cy.get(cart.dropdownSelect)
      return select;
   }
   addToCartButtonm(){
      const atcb=cy.get(cart.addToCartButton)
      return atcb
   }
   menuClick(){
      const iconClick=cy.get(cart.menu)
      return iconClick;
   }
   checkoutButtonm(){
      const checkButton = cy.get(cart.checkoutButton)
      return checkButton;
   }
   fistNamem(){
      const fName =cy.get(cart.firstName)
      return fName;
   }
   lastNamem(){
      const lname = cy.get(cart.lastName)
      return lname;
   }
   zipcodem(){
      const zcode = cy.get(cart.zipcode)
      return zcode;
   }
   continueButtonm(){
      const cbutton=cy.get(cart.continueButton)
      return cbutton;
   }
   finishButtonm(){
      const fnbutton=cy.get(cart.finishButton)
      return fnbutton;
   }

}
const set = new getter();
export function dropdownSelectClick(){
   //actionbutton.toClick(set.dropDownSelect()).select(dummyNumber)
    cy.get(cart.dropdownSelect).select(dummyNumber);
   
}

 export function dropDownClick(){
   actionButton.toClick(set.dropDownm())
  }
 export function addToCartButtonClick(){
//  cy.get(cart.addToCartButton).click();
actionButton.toClick(set.addToCartButtonm())
  }
export function  addtoCartIconVis(){
  cy.get(cart.addToCartIcon).should('exist')

  }
 export function  addTocartMenuClick(){
   actionButton.toClick(set.menuClick())
   
  }
 export function  checkout_button(){
     actionButton.toClick(set.checkoutButtonm())
  }
  export function fistNameEnter(){

      actionButton.sendkeys(set.fistNamem(),"revanth")
  }
export function  lastNameEnter(){
      actionButton.sendkeys(set.lastNamem(),"priyan")
  }
 export function  zipCodeEnter(){
      actionButton.sendkeys(set.zipcodem(),"1234")
  }
export function continueButtonClick(){
     actionButton.toClick(set.continueButtonm())
}
 export function  finishButtonClick(){
   //  act.scrollwithElements(addToCart.finishButton)
     actionButton.toClick(set.finishButtonm())
}





