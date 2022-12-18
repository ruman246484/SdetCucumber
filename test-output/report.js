$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("/Users/iftakerahmed/IdeaProjects/CucumberSDET/Features/login.feature");
formatter.feature({
  "line": 1,
  "name": "Login",
  "description": "",
  "id": "login",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Successful login with valid credentials",
  "description": "",
  "id": "login;successful-login-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "User lunch Chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User opens url \"https://admin-demo.nopcommerce.com/login?ReturnUrl\u003d%2Fadmin%2F\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "users enters email as \"admin@yourstore.com\" and password as \"admin\"",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Click on login",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "page title should be \"Dashboard / nopCommerce administration\"",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user click on log out link",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "page title is \"Your store. Login\"",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "close browser",
  "keyword": "Then "
});
formatter.match({
  "location": "defination.user_lunch_Chrome_browser()"
});
formatter.result({
  "duration": 4843104863,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://admin-demo.nopcommerce.com/login?ReturnUrl\u003d%2Fadmin%2F",
      "offset": 16
    }
  ],
  "location": "defination.user_opens_url(String)"
});
formatter.result({
  "duration": 1274606289,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin@yourstore.com",
      "offset": 23
    },
    {
      "val": "admin",
      "offset": 61
    }
  ],
  "location": "defination.users_enters_email_as_and_password_as(String,String)"
});
formatter.result({
  "duration": 623161686,
  "status": "passed"
});
formatter.match({
  "location": "defination.click_on_login()"
});
formatter.result({
  "duration": 2498280407,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Dashboard / nopCommerce administration",
      "offset": 22
    }
  ],
  "location": "defination.page_title_should_be(String)"
});
formatter.result({
  "duration": 9746195,
  "status": "passed"
});
formatter.match({
  "location": "defination.user_click_on_log_out_link()"
});
formatter.result({
  "duration": 684160021,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Your store. Login",
      "offset": 15
    }
  ],
  "location": "defination.page_title_is(String)"
});
formatter.result({
  "duration": 6270289,
  "status": "passed"
});
formatter.match({
  "location": "defination.close_browser()"
});
formatter.result({
  "duration": 211138521,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 13,
  "name": "Successful login with valid credentials",
  "description": "",
  "id": "login;successful-login-with-valid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 14,
  "name": "User lunch Chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "User opens url \"https://admin-demo.nopcommerce.com/login?ReturnUrl\u003d%2Fadmin%2F\"",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "users enters \"\u003cemail\u003e\"  and \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Click on login",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "page title should be \"Dashboard / nopCommerce administration\"",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "user click on log out link",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "page title is \"Your store. Login\"",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "close browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 22,
  "name": "",
  "description": "",
  "id": "login;successful-login-with-valid-credentials;",
  "rows": [
    {
      "cells": [
        "email",
        "password"
      ],
      "line": 23,
      "id": "login;successful-login-with-valid-credentials;;1"
    },
    {
      "cells": [
        "admin@yourstore.com",
        "admin"
      ],
      "line": 24,
      "id": "login;successful-login-with-valid-credentials;;2"
    },
    {
      "cells": [
        "admin@yourstore1.com",
        "adminb123"
      ],
      "line": 25,
      "id": "login;successful-login-with-valid-credentials;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 24,
  "name": "Successful login with valid credentials",
  "description": "",
  "id": "login;successful-login-with-valid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 14,
  "name": "User lunch Chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "User opens url \"https://admin-demo.nopcommerce.com/login?ReturnUrl\u003d%2Fadmin%2F\"",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "users enters \"admin@yourstore.com\"  and \"admin\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Click on login",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "page title should be \"Dashboard / nopCommerce administration\"",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "user click on log out link",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "page title is \"Your store. Login\"",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "close browser",
  "keyword": "Then "
});
formatter.match({
  "location": "defination.user_lunch_Chrome_browser()"
});
formatter.result({
  "duration": 1358524649,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://admin-demo.nopcommerce.com/login?ReturnUrl\u003d%2Fadmin%2F",
      "offset": 16
    }
  ],
  "location": "defination.user_opens_url(String)"
});
formatter.result({
  "duration": 1065071974,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin@yourstore.com",
      "offset": 14
    },
    {
      "val": "admin",
      "offset": 41
    }
  ],
  "location": "defination.users_enters_and(String,String)"
});
formatter.result({
  "duration": 293127278,
  "status": "passed"
});
formatter.match({
  "location": "defination.click_on_login()"
});
formatter.result({
  "duration": 2177612813,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Dashboard / nopCommerce administration",
      "offset": 22
    }
  ],
  "location": "defination.page_title_should_be(String)"
});
formatter.result({
  "duration": 18798200,
  "status": "passed"
});
formatter.match({
  "location": "defination.user_click_on_log_out_link()"
});
formatter.result({
  "duration": 725590793,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Your store. Login",
      "offset": 15
    }
  ],
  "location": "defination.page_title_is(String)"
});
formatter.result({
  "duration": 8402131,
  "status": "passed"
});
formatter.match({
  "location": "defination.close_browser()"
});
formatter.result({
  "duration": 183637078,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "Successful login with valid credentials",
  "description": "",
  "id": "login;successful-login-with-valid-credentials;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 14,
  "name": "User lunch Chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "User opens url \"https://admin-demo.nopcommerce.com/login?ReturnUrl\u003d%2Fadmin%2F\"",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "users enters \"admin@yourstore1.com\"  and \"adminb123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Click on login",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "page title should be \"Dashboard / nopCommerce administration\"",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "user click on log out link",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "page title is \"Your store. Login\"",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "close browser",
  "keyword": "Then "
});
formatter.match({
  "location": "defination.user_lunch_Chrome_browser()"
});
formatter.result({
  "duration": 1672786690,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://admin-demo.nopcommerce.com/login?ReturnUrl\u003d%2Fadmin%2F",
      "offset": 16
    }
  ],
  "location": "defination.user_opens_url(String)"
});
formatter.result({
  "duration": 2263640130,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin@yourstore1.com",
      "offset": 14
    },
    {
      "val": "adminb123",
      "offset": 42
    }
  ],
  "location": "defination.users_enters_and(String,String)"
});
formatter.result({
  "duration": 336067693,
  "status": "passed"
});
formatter.match({
  "location": "defination.click_on_login()"
});
formatter.result({
  "duration": 492954294,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Dashboard / nopCommerce administration",
      "offset": 22
    }
  ],
  "location": "defination.page_title_should_be(String)"
});
formatter.result({
  "duration": 9068224,
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[Your store. Logi]n\u003e but was:\u003c[Dashboard / nopCommerce administratio]n\u003e\n\tat org.junit.Assert.assertEquals(Assert.java:117)\n\tat org.junit.Assert.assertEquals(Assert.java:146)\n\tat StepDefinations.defination.page_title_should_be(defination.java:51)\n\tat ✽.Then page title should be \"Dashboard / nopCommerce administration\"(/Users/iftakerahmed/IdeaProjects/CucumberSDET/Features/login.feature:18)\n",
  "status": "failed"
});
formatter.match({
  "location": "defination.user_click_on_log_out_link()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Your store. Login",
      "offset": 15
    }
  ],
  "location": "defination.page_title_is(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "defination.close_browser()"
});
formatter.result({
  "status": "skipped"
});
});