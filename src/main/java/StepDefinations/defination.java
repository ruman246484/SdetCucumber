package StepDefinations;

import PageObjects.logInPage;
import cucumber.api.java.en.*;
import org.junit.Assert;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class defination {

    public WebDriver driver;
    public logInPage lp;
    @Given("^User lunch Chrome browser$")
    public void user_lunch_Chrome_browser() {
        System.setProperty("webdriver.chrome.driver","/Users/iftakerahmed/Downloads/chromedriver");
        driver=new ChromeDriver();

        lp = new logInPage(driver);


    }

    @When("^User opens url \"([^\"]*)\"$")
    public void user_opens_url(String url) {
        driver.get(url);

    }

    @When("^users enters email as \"([^\"]*)\" and password as \"([^\"]*)\"$")
    public void users_enters_email_as_and_password_as(String email, String password)  {
        lp.setEmail(email);
        lp.setPassword(password);
    }

    @When("^users enters \"([^\"]*)\"  and \"([^\"]*)\"$")
    public void users_enters_and(String email, String pwd)  {
        lp.setEmail(email);
        lp.setPassword(pwd);
    }


    @And("^Click on login$")
    public void click_on_login()  {
        lp.clickOnLoginButton();

    }

    @Then("^page title should be \"([^\"]*)\"$")
    public void page_title_should_be(String title)  {
        String tr=driver.getTitle();
        Assert.assertEquals(tr, title);
        System.out.println(tr);


    }

    @When("^user click on log out link$")
    public void user_click_on_log_out_link() {
        lp.logOut();

    }

    @Then("^page title is \"([^\"]*)\"$")
    public void page_title_is(String title)  {
       String t= driver.getTitle();
       Assert.assertEquals(t, title);
        System.out.println(t);

    }

    @Then("^close browser$")
    public void close_browser()  {
        driver.close();

    }
}
