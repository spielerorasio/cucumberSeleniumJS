

based on https://github.com/crossbrowsertesting/selenium-cucumberjs
and based on https://cucumber.io/docs/guides/browser-automation/


to start do the following
npm init --yes
npm install -g chromedriver
npm install settings.json
npm install --save chromedriver
npm install cucumber --save-dev
npm install selenium-webdriver --save-dev
npm install request --save-dev
npm install parallel-cucumber --save-dev
npm install cucumber-html-reporter --save-dev
npm install parallel-cucumber --save-dev
npm install cbt_tunnels --save-dev
npm audit fix

 

.\node_modules\\.bin\cucumber-js .\features -r .\step_definitions
 