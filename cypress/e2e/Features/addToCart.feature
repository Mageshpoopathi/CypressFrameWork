Feature: Add to Cart

  Scenario:Add a Item in the cart ad purchase
    Given Launch the url and login to the appplication
    When  Click the customized option for purchase from dropdown
    Then  Purhase items should be visible
    When  click the add to Cart button
    Then  Your cart icon changes and click the cart icon
    And   Click checkout in your cart page
    And   Fill the first name,lastname and zip code to continue purchase
    When  Sroll down ad click the continue button
    Then  Order successfully placed page visible





