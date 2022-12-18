package PageObjects;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

public class addcustomersPage {

    public WebDriver driver;

    public addcustomersPage(WebDriver dr){
        driver=dr;
        PageFactory.initElements(driver, this);
    }

    By customers_menu= By.xpath("//ul[@class='nav nav-pills nav-sidebar flex-column nav-legacy']/li[4]");
    By customers_create= By.xpath("//ul[@class='nav nav-pills nav-sidebar flex-column nav-legacy']" +
            "/li[@class='nav-item has-treeview menu-open']//ul/li[1]");
    By addnew_customerButton= By.xpath("//div[@class='float-right']/a");


    By email = By.id("Email");
    By password= By.id("Password");

    By firstName= By.id("FirstName");
    By lastName= By.id("LastName");

    By GenderMale= By.id("Gender_Male");
    By GenderFemale= By.id("Gender_Female");

    By DOB= By.id("DateOfBirth");
    By companyName= By.id("Company");

    By adminContent = By.id("AdminComment");

    By saveButton= By.name("save");


}
