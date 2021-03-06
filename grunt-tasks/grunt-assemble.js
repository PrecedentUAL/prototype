module.exports = function(grunt) {

	grunt.config('assemble', {
		options: {
			flatten: true,
			data: '<%= project.src %>/data/*.json',
			partials: '<%= project.src %>/template/partials/**/*.hbs'
		},
		// subpages: {
		// 	options: {
		// 		layout: '<%= project.src %>/template/layouts/default.hbs'
		// 	},
		// 	files: {
		// 		'<%= project.dist %>/uk/': ['<%= project.src %>/template/pages/design/design.hbs', '<%= project.src %>/templates/pages/craft/craft.hbs','<%= project.src %>/templates_uk/pages/lifestyle/lifestyle.hbs', '<%= project.src %>/templates_uk/pages/buy/buy.hbs', '<%= project.src %>/templates_uk/pages/partners/partners.hbs' ]
		// 	}
		// },
		home: {
			options: {
				layout: '<%= project.src %>/template/layouts/home.hbs',
				partials: '<%= project.src %>/template/partials/**/*.hbs'
			},
			files: {
				'<%= project.dist %>': ['<%= project.src %>/template/pages/index.hbs' ]
			}
		},
		// signup: {
		// 	options: {
		// 		layout: '<%= project.src %>/template/layouts/signup.hbs'
		// 	},
		// 	files: {
		// 		'<%= project.dist %>': ['<%= project.src %>/template/pages/signup.hbs' ]
		// 	}
		// }
	});

	grunt.loadNpmTasks('assemble');
};