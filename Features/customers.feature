Feature: Customers

  Scenario: Add a new customer
    Given User lunch Chrome browser
    When user opens url "https://admin-demo.nopcommerce.com/login?ReturnUrl=%2Fadmin%2F"
    And user enters email as "admin@yourstore.com" and Password as "admin"
    Then click on login
    When user click on customer menu
    And click on customer menu item
    And click on Add new button
    Then user can view Add new customer page
    When user enter customer info
    And click on save button
    Then user can view confirmation massage "The new customer has been added successfully"
    And close browser