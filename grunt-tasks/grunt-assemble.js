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
		csm: {
			options: {
				layout: '<%= project.src %>/template/layouts/csm.hbs'
			},
			files: {
				'<%= project.dist %>': ['<%= project.src %>/template/pages/csm.hbs' ]
			}
		},
		about: {
			options: {
				layout: '<%= project.src %>/template/layouts/csm.hbs'
			},
			files: {
				'<%= project.dist %>': ['<%= project.src %>/template/pages/about.hbs' ]
			}
		},
		study: {
			options: {
				layout: '<%= project.src %>/template/layouts/home.hbs'
			},
			files: {
				'<%= project.dist %>': ['<%= project.src %>/template/pages/study.hbs' ]
			}
		},
		studentfees: {
			options: {
				layout: '<%= project.src %>/template/layouts/home.hbs'
			},
			files: {
				'<%= project.dist %>': ['<%= project.src %>/template/pages/studentfees.hbs' ]
			}
		},
		lcc: {
			options: {
				layout: '<%= project.src %>/template/layouts/blank.hbs'
			},
			files: {
				'<%= project.dist %>': ['<%= project.src %>/template/pages/lcc.hbs' ]
			}
		},
		chelsea: {
			options: {
				layout: '<%= project.src %>/template/layouts/blank.hbs'
			},
			files: {
				'<%= project.dist %>': ['<%= project.src %>/template/pages/chelsea.hbs' ]
			}
		}
	});

	grunt.loadNpmTasks('assemble');
};