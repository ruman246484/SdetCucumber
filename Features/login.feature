  Feature: Login

    Scenario: Successful login with valid credentials
      Given User lunch Chrome browser
      When User opens url "https://admin-demo.nopcommerce.com/login?ReturnUrl=%2Fadmin%2F"
      And users enters email as "admin@yourstore.com" and password as "admin"
      And Click on login
      Then page title should be "Dashboard / nopCommerce administration"
      When user click on log out link
      Then page title is "Your store. Login"
      Then close browser

    Scenario Outline: Successful login with valid credentials
      Given User lunch Chrome browser
      When User opens url "https://admin-demo.nopcommerce.com/login?ReturnUrl=%2Fadmin%2F"
      And users enters "<email>"  and "<password>"
      And Click on login
      Then page title should be "Dashboard / nopCommerce administration"
      When user click on log out link
      Then page title is "Your store. Login"
      Then close browser
      Examples:
        | email | password|
        | admin@yourstore.com  | admin|
        |admin@yourstore1.com  | adminb123|

