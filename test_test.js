
Feature('Test');

Before((I, loginPage) => { // or Background
	loginPage.login('admin', 'admin');
});

//
Scenario('Create new category ', async (I, categoryPage) => {
	categoryPage.create('nhung');
});
