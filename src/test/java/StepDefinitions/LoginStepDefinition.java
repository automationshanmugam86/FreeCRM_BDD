package StepDefinitions;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.Properties;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.ie.InternetExplorerDriver;

import TestBase.TestBaseClass;
import io.cucumber.java.Before;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import junit.framework.Assert;

public class LoginStepDefinition extends TestBaseClass {
	
	//System.setProperty("webdriver.chrome.driver", "F:\\JarFilesDownload\\chromedriver.exe");
	   //driver = new ChromeDriver();
	
	@Before
	public void setup() throws IOException 
	{
		configFile = new Properties();
		FileInputStream fileWithInput = new FileInputStream("Config.Properties");
		configFile.load(fileWithInput);
		
		String browser = configFile.getProperty("browser");
		String filePath = System.getProperty("user.dir");
		
		if(browser.equals("chrome"))
		{
			System.setProperty("webdriver.chrome.driver", filePath + configFile.getProperty("chromeBrowserPath"));
			driver = new ChromeDriver();
			
		}
		else if(browser.equals("firefox"))
		{
			System.setProperty("webdriver.gecko.driver", filePath + configFile.getProperty("firefoxBrowserPath"));
			driver = new FirefoxDriver();
		}
		else if(browser.equals("InternetExplorer"))
		{
			System.setProperty("webdriver.ie.driver", filePath + configFile.getProperty("ieBrowserPath"));
			driver = new InternetExplorerDriver();
		}
		
	}
	
@Given("user is logged into the application")
public void user_is_logged_into_the_application() {
   
   driver.get(configFile.getProperty("url"));
   driver.manage().window().maximize();   
}

@SuppressWarnings("deprecation")
@When("user is logged in check the Logo of the application")
public void user_is_logged_in_check_the_Logo_of_the_application() {
	
	WebElement crmLogo = driver.findElement(By.xpath("/html/body/div[1]/header/div/nav/div[2]/div/div[1]/div/a"));
	boolean actualbooleanValue = crmLogo.isDisplayed();
	Assert.assertTrue(actualbooleanValue);
   
}

@Then("Close the current browser")
public void close_the_current_browser() {
	
	driver.quit();
   
}

@When("user is logged in check the title of the application")
public void user_is_logged_in_check_the_title_of_the_application() {
	
	    String actualText =  driver.getTitle();
	    Assert.assertEquals("Free CRM #1 cloud software for any business large or small", actualText);
    }

@When("user checks the login button and clicks")
public void user_checks_the_login_button_and_clicks() {
	
	WebElement firstLogin = driver.findElement(By.xpath("//span[contains(text(),'Log In')]"));
    JavascriptExecutor js = (JavascriptExecutor)driver;
    js.executeScript("arguments[0].click();", firstLogin);
    
}

@Then("user enters {string} and {string}")
public void user_enters_and(String username, String password) {
	
	driver.findElement(By.name("email")).sendKeys(username);
	driver.findElement(By.name("password")).sendKeys(password);
	driver.findElement(By.xpath("//div[contains(text(),'Login')]")).click();
	
    
}

@Then("user is on home page")
public void user_is_on_home_page() throws InterruptedException {
	Thread.sleep(5000);
	WebElement homePageText = driver.findElement(By.xpath("//div[contains(text(), 'Contacts activity stream')]"));
	boolean actualBooleanvalue = homePageText.isDisplayed();
	Assert.assertTrue(actualBooleanvalue);
    
}


}
