package TestRunner;

import org.junit.runner.RunWith;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = "F:\\AllFrameworks\\FreeCRM_BDD\\Features\\Login.feature",
		glue = {"StepDefinitions"},
		monochrome = true,
		plugin = {"pretty","html:Reports"},
		dryRun = false)



public class TestRunnerClass {

}
