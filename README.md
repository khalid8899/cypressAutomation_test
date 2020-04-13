
# cypressAutomation_test
 prerequisite:Download Node (https://nodejs.org/en/download/) (.msi file 64bit)
 (Make sure nodejs setup is done and VS Code is there)

 1)Set NODE_HOME Environment  variable. Go to Advanced system setting ->Environment variables
  Click on new under system variables and set variable name as "NODE_HOME" and value to "C:\Program Files\nodejs" click on ok 

 2)Download or clone the project from GitHub link(https://github.com/khalid8899/cypressAutomation_test.git) and open in vs code

 3)Run command npm install cypress in the cloned folder(cypressAutomation_test-master)

 4)Run command ./node_modules/.bin/cypress open in the cloned folder(cypressAutomation_test-master)

 5)Cypress will open and click on Test1insider.js file inside TestCase_Insider folder Browser will launch and execution will start.On left hand side all steps details will be displayed(my first test) and on right hand side actual execution will start.

 //For running on mobile/desktop/tablet follow below steps:
 1)Run command node cypress-start.js -m -o in the cloned folder(running on mobile)
 2)Run command node cypress-start.js -t -o in the cloned folder(running on tablet)
 3)Run command node cypress-start.js -d -o in the cloned folder(running on desktop)