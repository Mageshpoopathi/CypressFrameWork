import { assert } from "chai";

export class assertion{

    //Assertions
    assertVisibleElements(WebElement){
        WebElement.should('be.visible')
    }
    assertHaveLength(WebElement,length){
        WebElement.should('have.length',length)
    }
    assertContains(WebElement,value){
        WebElement.should('contains',value)
    }
    MochaAssertTrue(actual,expected){
        assert.equal(actual,expected)
    }
    MochaAssertFalse(actual,expected){
        assert.notEqual(actual,expected)
    }
}