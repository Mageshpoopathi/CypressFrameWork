export class KeyBoardAction{

//cut,copy and paste
    copy(WebElement){
        WebElement.type('{ctrl+c}')
    }
    paste(WebElement){
         WebElement.type('{ctrl+v}')
    }
    cut(WebElement){
         WebElement.type('{ctrl+x}')
    }
    combineKeys(WebElement,combineKey){
        WebElement.type(combineKey)
    }


//Modifier and click without release button
    ShiftAndClick(WebElement){
        WebElement.type('{shift}',{release:false}).click();
    }
    ControlAndClick(WebElement){
        WebElement.type('{ctrl}',{release:false}).click();
    }
    ModifierAndClick(WebElement,modifier){
         WebElement.type(modifier,{release:false}).click();
    }

 //any individual character
    keyBoardTextKeys(WebElement,textKey){
        WebElement.type(textKey)
    }

//backspace and delete
    backspace(WebElement){
        WebElement.click().type({backspace})
    }
    backspaceAndType(WebElement,Text){
            WebElement.click().type({backspace}Text)
    }
    Delete(WebElement){
            WebElement.click().type({del})
    }
    deleteAndType(WebElement,Text){
                WebElement.click().type({del}Text)
    }

//keyup,keydown,keyLeft and keyRight
    KeyUp(WebElement){
         WebElement.type(upArrow)
    }
    KeyDown(WebElement){
         WebElement.type(downArrow)
    }
    KeyLeft(WebElement){
         WebElement.type(leftArrow)
    }
    KeyRight(WebElement){
         WebElement.type(rightArrow)
    }
}