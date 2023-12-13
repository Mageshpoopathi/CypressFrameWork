require(' @4tw/cypress-drag-drop')

export class MouseEvents{

//move the mouse to the element
        triggerElement(WebElement){
        WebElement.trigger('mouseover');
        }
        triggerAndClick(WebElement){
         WebElement.trigger('mouseover').click();
        }

        rightClick(WebElement){
        WebElement.trigger('contextmenu');
        }

//override
     rightClick(WebElement){
        cy.get(WebElement).rightclick();
     }

//doubleClick
      toDoubleClick(WebElement){
                WebElement.trigger('mouseover').dblclick();
      }
      doubleClick(WebElement){
            WebElement.trigger('dblclick');
      }

//Drag and drop
      DragAndDrop(sourceElement,targetElement){
        sourceElement.drag(targetElement,{force:true});
      }

//scroll in the page
        scrollWithElements(WebElement){
            WebElement.scrollIntoView();
        }
        scrollWithPosition(WebElement,x,y){
            WebElement.scrollTo(x,y);
        }
        scrollWithDuration(WebElement,time){
            WebElement.scrollTo("bottom",{duration:time});
        }
}
