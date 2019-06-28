const I = actor();

module.exports = {

  // insert your locators and methods here
	url: '/administrator/index.php?option=com_redshop&view=category&layout=edit',
	fields: {
		name: '#jform_name'
	},

	submitButton: '#toolbar-apply',

	create(name) {
		I.amOnPage(this.url);
		I.fillField(this.fields.name, name);
		I.click(this.submitButton);
	}

}
