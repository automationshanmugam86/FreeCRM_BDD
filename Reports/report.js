$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:Features/Login.feature");
formatter.feature({
  "name": "CRM Login Features validation",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "CRM Login Logo Image Validation",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is logged into the application",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.LoginStepDefinition.user_is_logged_into_the_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is logged in check the Logo of the application",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.LoginStepDefinition.user_is_logged_in_check_the_Logo_of_the_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Close the current browser",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.LoginStepDefinition.close_the_current_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "CRM Login Page Title validation",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is logged into the application",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.LoginStepDefinition.user_is_logged_into_the_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is logged in check the title of the application",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.LoginStepDefinition.user_is_logged_in_check_the_title_of_the_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Close the current browser",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.LoginStepDefinition.close_the_current_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "CRM Login Validation with Different users",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user is logged into the application",
  "keyword": "Given "
});
formatter.step({
  "name": "user checks the login button and clicks",
  "keyword": "When "
});
formatter.step({
  "name": "user enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "user is on home page",
  "keyword": "Then "
});
formatter.step({
  "name": "Close the current browser",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ]
    },
    {
      "cells": [
        "shanmugamuser123@gmail.com",
        "Te$t1234"
      ]
    }
  ]
});
formatter.scenario({
  "name": "CRM Login Validation with Different users",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is logged into the application",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.LoginStepDefinition.user_is_logged_into_the_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user checks the login button and clicks",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.LoginStepDefinition.user_checks_the_login_button_and_clicks()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters \"shanmugamuser123@gmail.com\" and \"Te$t1234\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.LoginStepDefinition.user_enters_and(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is on home page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.LoginStepDefinition.user_is_on_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Close the current browser",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.LoginStepDefinition.close_the_current_browser()"
});
formatter.result({
  "status": "passed"
});
});