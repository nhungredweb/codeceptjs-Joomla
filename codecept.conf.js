exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
	Puppeteer: {
	  url: 'http://localhost/redshop',
	  "fullPageScreenshots": true,
	  "waitForNavigation": "networkidle0",
	  "show": true,
	  "chrome" : {
		"args": ["--no-sandbox",  "window-size=1920x1080"]
	  },
	  "plugins": {
		  "screenshotOnFail": {
			  "enabled": false
			}
		}
	}
  },
  include: {
	I: './steps_file.js',
	"loginPage": "./pages/login.js",
	"categoryPage": "./pages/category.js"
  },

  bootstrap: null,
  mocha: {},
  name: 'automation'
}