import cypress from "cypress"

//check the lenghth row and column
export class  WebTable{
    legnthOfTheTable(WebElement,length,rowElement,columnElement,row,column){
        cypress.get(WebElement).should('have.length',length)
        cypress.get(rowElement).should('have.length',row)
        cypress.get(columnElement).should('have.length',column)


    }

 //read all the rows and columnn in the table
     readTable(WebElement){
        cy.get(WebElement)
        .each(($row ,index, $rows)=>{

            cy.wrap($row).within( () =>{
                cy.get("td").each(($col,index,$cols)=>{
                    cy.log($col.text());
                })
            })

        })

    }
//check cell data from specific row and column

cellData(WebElement,text){
    cy.get(WebElement).contains(text)


}

//dynamic table

  readDynamicTable(totalPages,WebElement){
    for(let p=1;p<=totalPages;p++){
        cy.log("Active page is "+p)
        cy.get("ul[class='pagination']>li:nth-child("+p+")").click();
        cy.get(WebElement)
        .each(($row ,index, $rows)=>{

            cy.wrap($row).within( () =>{
                cy.get("td").each(($col,index,$cols)=>{
                    cy.log($col.text());
                })
            })

        })


   }
}

//particular coumn value in a dynamic table

   dynamicTableText(totalPages,WebElement,columnNumber){
    for(let p=1;p<=totalPages;p++){
        cy.log("Active page is "+p)
        cy.get("ul[class='pagination']>li:nth-child("+p+")").click();
        cy.get(WebElement)
        .each(($row ,index, $rows)=>{

            cy.wrap($row).within( () =>{
                cy.get("td:nth-child("+columnNumber+")").then((e)=>{
                    cy.log(e.text());
                })
            })

        })


   }
}



}
