const I = actor();

module.exports = {

  // insert your locators and methods here
	url: "/administrator",

	fields: {
		email: '#mod-login-username',
		password: '#mod-login-password'
	},
	submitButton: {class: 'btn-group'},


	login(email, password)
	{
		I.amOnPage(this.url);
		I.fillField(this.fields.email, email);
		I.fillField(this.fields.password, password);
		I.pressKey('Enter');
		I.wait(2);
	}
}
