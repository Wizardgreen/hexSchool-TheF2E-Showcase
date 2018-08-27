module.exports = function (plop) {
	// controller generator
	plop.setGenerator('component', {
		description: 'add new component',
		prompts: [{
			type: 'input',
			name: 'name',
			message: 'component name please'
		},
		{
			type: 'input',
			name: 'folder',
			message: 'src/{ folder }/'
		}],
		actions: [{
			type: 'add',
			path: 'src/components/{{ folder }}/{{ name }}.vue',
			templateFile: 'generator/component/component-template.hbs'
		}],
	});
};