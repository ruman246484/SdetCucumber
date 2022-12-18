package PageObjects;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class logInPage{



    public WebDriver driver;


    public  logInPage(WebDriver dr){
        driver = dr;
        PageFactory.initElements(dr, this);
    }


    @FindBy(id ="Email")
    WebElement Email;

    @FindBy(id ="Password")
    WebElement Password;

    @FindBy(xpath = "//button[@class='button-1 login-button']")
    WebElement loginButton;

    @FindBy (xpath = "//div[@class='page-title']")
    WebElement pageTitle;

    @FindBy (xpath = "//div[@class='topic-block-title']")
    WebElement pageText;

    @FindBy (xpath = "//ul[@class='navbar-nav ml-auto pl-2']/li[3]")
    WebElement logOut;



    public void setEmail( String usr){
        Email.clear();
        Email.sendKeys(usr);

    }
    public void setPassword( String pwd){
        Password.clear();
        Password.sendKeys(pwd);

    }


    public void logOut(){
        logOut.click();
    }

    public void clickOnLoginButton(){
        loginButton.click();


    }
    public void closebrowser(){
        driver.close();
    }



}
