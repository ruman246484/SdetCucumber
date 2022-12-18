package Runner;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        features = "/Users/iftakerahmed/IdeaProjects/CucumberSDET/Features/login.feature",
        glue = {"StepDefinations"},
        dryRun = false,
        monochrome = true,
        plugin = {"pretty", "html:test-output"}
)


public class TestRunner {


}
