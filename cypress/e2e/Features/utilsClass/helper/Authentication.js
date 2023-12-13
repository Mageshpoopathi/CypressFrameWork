export class Authentication{
    authentication(URL,Username,Password,domain){
         cy.visit("https://"+Username+":"+Password+"@"+URL+domain);
    }
    authWithoutDomain(URL,Username,Password){
             cy.visit("https://"+Username+":"+Password+"@"+URL);
        }
}