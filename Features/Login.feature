Feature: CRM Login Features validation

 Scenario: CRM Login Logo Image Validation
 
       Given user is logged into the application
       When  user is logged in check the Logo of the application
       Then  Close the current browser
 
 Scenario: CRM Login Page Title validation
 
        Given user is logged into the application
        When  user is logged in check the title of the application
        Then  Close the current browser
        
 Scenario Outline: CRM Login Validation with Different users
 
        Given user is logged into the application
        When  user checks the login button and clicks
        Then  user enters "<username>" and "<password>"
        Then  user is on home page
        Then  Close the current browser
        
  Examples:
  
  |username| password|
  |shanmugamuser123@gmail.com|Te$t1234|
  